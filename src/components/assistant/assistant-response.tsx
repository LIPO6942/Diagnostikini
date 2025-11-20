/**
 * @fileoverview Component for displaying the assistant's response in the chat.
 */
"use client";

import { useState, useEffect } from "react";
import type { Remedy, TraditionalRemedy, DiagnosisSuggestion, MedicationSuggestion } from "@/lib/types";
import { analyzeSymptoms } from "@/services/symptom-analyzer";
import type { SymptomAnalysis } from "@/lib/types";
import { SymptomDetails } from "@/components/symptom-details";
import { commonRemedies, baseRemedies } from "@/lib/remedies";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle2, Leaf, HeartPulse, FilePlus2, LoaderCircle, Languages } from "lucide-react";
import { RemedyCard } from "./remedy-card";
import { translateText } from "@/ai/flows/translate-text";
import { TraditionalRemedyCard } from "./traditional-remedy-card";
import { saveHealthRecord } from "@/services/health-record-service";
import type { HealthRecord } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { recordConsultation } from "@/ai/flows/record-consultation";

interface AssistantResponseProps {
  symptoms: string;
  diagnosisSuggestions: DiagnosisSuggestion[];
  clarifyingQuestions: string[];
  medicationSuggestions: MedicationSuggestion[];
  traditionalRemedies: TraditionalRemedy[];
  fullAnalysis: any;
  onSaveRecord: (record: any) => void;
}

export const AssistantResponse = ({
  symptoms,
  diagnosisSuggestions,
  clarifyingQuestions,
  medicationSuggestions,
  traditionalRemedies,
  fullAnalysis,
}: AssistantResponseProps) => {
  const [remedies, setRemedies] = useState<Remedy[] | null>(null);
  const [translatedContent, setTranslatedContent] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [analysis, setAnalysis] = useState<SymptomAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const { toast } = useToast();

  // Analyser les symptômes au chargement
  useEffect(() => {
    const analyze = async () => {
      try {
        setIsAnalyzing(true);
        const result = analyzeSymptoms(symptoms);
        setAnalysis(result);
      } catch (error) {
        console.error('Error analyzing symptoms:', error);
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Une erreur est survenue lors de l'analyse des symptômes.",
        });
      } finally {
        setIsAnalyzing(false);
      }
    };

    if (symptoms) {
      analyze();
    }
  }, [symptoms, toast]);

  const potentialDiagnosis = diagnosisSuggestions[0]?.name || "Inconnu";

  const handleShowRemedies = () => {
    const diagnosisText = potentialDiagnosis.toLowerCase();
    const found = commonRemedies.find(item => item.keywords.some(kw => diagnosisText.includes(kw)));
    setRemedies(found ? found.remedies : baseRemedies);
  };

  const handleTranslate = async () => {
      setIsTranslating(true);
      setTranslatedContent(null);
      
      let contentToTranslate = `
Diagnostic Potentiel:
${diagnosisSuggestions.map(d => `- ${d.name}: ${d.description}\nJustification: ${d.justification}`).join('\n')}

Questions de clarification:
- ${clarifyingQuestions.join('\n- ')}

Suggestions de médicaments:
${medicationSuggestions.map(m => `- ${m.name}: ${m.justification}`).join('\n')}
      `;

      if (traditionalRemedies.length > 0) {
          contentToTranslate += `\nRemèdes traditionnels:\n`
          traditionalRemedies.forEach(remedy => {
              contentToTranslate += `- ${remedy.remedyName}: ${remedy.justification}\n`;
          })
      }

      try {
        const result = await translateText({
            textToTranslate: contentToTranslate,
            targetLanguage: "Tunisian Arabic"
        });
        setTranslatedContent(result.translatedText);
      } catch (error) {
        console.error("Translation failed", error);
        setTranslatedContent("La traduction a échoué. Veuillez réessayer.");
      } finally {
        setIsTranslating(false);
      }
  };

  const onSaveRecord = async () => {
    try {
        const remedyRecs = traditionalRemedies.map(r => r.remedyName).join(', ') || 'Aucune recommandation spécifique.';
        const result = await recordConsultation({
            symptoms: symptoms,
            differentialDiagnosis: diagnosisSuggestions.map(d => d.name).join(', '),
            remedyRecommendations: `Médicaments suggérés : ${medicationSuggestions.map(m => m.name).join(', ')}. Remèdes traditionnels : ${remedyRecs}`
        });

        const newRecord: HealthRecord = {
            id: result.recordId,
            date: new Date().toISOString(),
            category: 'Consultation IA',
            title: potentialDiagnosis,
            symptoms: symptoms,
            summary: result.summary,
        };

        await saveHealthRecord(newRecord);
        toast({
            title: "Dossier sauvegardé",
            description: "Votre consultation a été sauvegardée avec succès.",
        });
    } catch (e) {
        console.error("Erreur lors de la sauvegarde", e);
        toast({
            variant: "destructive",
            title: "Erreur de sauvegarde",
            description: "La sauvegarde de la consultation a échoué."
        });
    }
  };


  if (isAnalyzing) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
        <p className="text-muted-foreground">Analyse des symptômes en cours...</p>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Impossible d'analyser les symptômes. Veuillez réessayer.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Section des symptômes */}
      <div>
        <h3 className="font-bold text-lg mb-3">Analyse des symptômes</h3>
        <div className="space-y-4">
{analysis.primarySymptoms.map((symptom: any, i: number) => (
            <SymptomDetails key={i} symptom={symptom} />
          ))}
        </div>
      </div>

      {/* Drapeaux rouges */}
      {analysis.redFlags.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Signes d'alerte
          </h4>
          <ul className="space-y-2">
{analysis.redFlags.map((flag: any, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5">•</span>
                <div>
                  <span className="font-medium">{flag.symptom}</span>
                  <p className="text-sm text-red-700">{flag.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Diagnostics possibles */}
      <div>
        <h3 className="font-bold text-lg mb-3">Diagnostics possibles</h3>
        <div className="space-y-4">
          {analysis.possibleConditions
.sort((a: any, b: any) => b.probability - a.probability)
.map((condition: any, i: number) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{condition.condition}</h4>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${condition.probability * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium">
                    {Math.round(condition.probability * 100)}%
                  </span>
                </div>

                {condition.matchingSymptoms.length > 0 && (
                  <div className="mt-3">
                    <div className="text-sm text-muted-foreground mb-1">
                      Symptômes correspondants:
                    </div>
                    <div className="flex flex-wrap gap-1">
{condition.matchingSymptoms.map((symptom: string, j: number) => (
                        <span key={j} className="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Recommandations */}
      <div>
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          Recommandations
        </h3>
        <div className="space-y-3">
          {analysis.recommendedActions
.sort((a: any, b: any) => 
              a.priority === b.priority ? 0 : 
              a.priority === 'high' ? -1 : 1
            )
.map((action: any, i: number) => (
              <div 
                key={i} 
                className={`p-4 rounded-lg border ${
                  action.priority === 'high' ? 'border-red-200 bg-red-50' :
                  action.priority === 'medium' ? 'border-amber-100 bg-amber-50' :
                  'border-blue-100 bg-blue-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 ${
                    action.priority === 'high' ? 'text-red-600' :
                      action.priority === 'medium' ? 'text-amber-600' :
                      'text-blue-600'
                  }`}>
                    {action.priority === 'high' ? '⚠️' : 'ℹ️'}
                  </div>
                  <div>
                    <p className="font-medium">{action.action}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {action.category === 'diagnostic' ? 'Examen complémentaire' :
                        action.category === 'treatment' ? 'Traitement recommandé' :
                        action.category === 'referral' ? 'Orientation spécialisée' : 'Surveillance'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {traditionalRemedies && traditionalRemedies.length > 0 && !translatedContent && (
        <div>
          <h3 className="font-bold mb-2 flex items-center gap-2">
            <Leaf className="h-4 w-4" /> Remèdes traditionnels
          </h3>
          <div className="grid sm:grid-cols-1 gap-2">
            {traditionalRemedies.map((remedy) => (
              <TraditionalRemedyCard key={remedy.remedyName} {...remedy} />
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-6">
        <Button variant="outline" size="sm" onClick={handleShowRemedies}>
          <HeartPulse className="mr-2 h-4 w-4" />
          Afficher les remèdes
        </Button>
        <Button variant="outline" size="sm" onClick={onSaveRecord}>
          <FilePlus2 className="mr-2 h-4 w-4" />
          Sauvegarder
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleTranslate} 
          disabled={isTranslating || !!translatedContent}
        >
          {isTranslating ? (
            <LoaderCircle className="animate-spin mr-2 h-4 w-4"/>
          ) : (
            <Languages className="mr-2 h-4 w-4" />
          )}
          {isTranslating ? 'Traduction...' : 'Traduire en Tunisien'}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground pt-2">
        Avis de non-responsabilité : Ceci n'est pas un avis médical. Consultez un professionnel de la santé pour tout problème de santé.
      </p>
    </div>
  );
};
