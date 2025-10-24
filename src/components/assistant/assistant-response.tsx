/**
 * @fileoverview Component for displaying the assistant's response in the chat.
 */
"use client";

import { useState } from "react";
import type { Remedy, TraditionalRemedy, DiagnosisSuggestion, MedicationSuggestion } from "@/lib/types";
import { commonRemedies, baseRemedies } from "@/lib/remedies";
import { Button } from "@/components/ui/button";
import { FilePlus2, HeartPulse, Pill, Languages, LoaderCircle, Leaf, MessageCircleQuestion, Lightbulb, Info } from "lucide-react";
import { RemedyCard } from "./remedy-card";
import { translateText } from "@/ai/flows/translate-text";
import { TraditionalRemedyCard } from "./traditional-remedy-card";
import { saveHealthRecord } from "@/services/health-record-service";
import type { HealthRecord } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { recordConsultation } from "@/ai/flows/record-consultation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Separator } from "../ui/separator";

interface AssistantResponseProps {
  symptoms: string;
  diagnosisSuggestions: DiagnosisSuggestion[];
  clarifyingQuestions: string[];
  medicationSuggestions: MedicationSuggestion[];
  traditionalRemedies: TraditionalRemedy[];
  fullAnalysis: any;
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
  const { toast } = useToast();

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
        const medsList = medicationSuggestions.map(m => m.name).join(', ');
        const top = diagnosisSuggestions[0];
        const summaryFromAnalysis = top
          ? `Pour des symptômes rapportés, l'IA suggère en priorité **${top.name}**. ${top.description ? `(${top.description}) ` : ''}Médicaments possibles: ${medsList || 'aucun'}. Remèdes: ${remedyRecs || 'aucun'}.`
          : `Consultation IA enregistrée. Médicaments possibles: ${medsList || 'aucun'}.`;

        const result = await recordConsultation({
            symptoms: symptoms,
            differentialDiagnosis: diagnosisSuggestions.map(d => d.name).join(', '),
            remedyRecommendations: `Médicaments suggérés : ${medsList}. Remèdes traditionnels : ${remedyRecs}`
        });
        const summaryToSave = (result.summary && result.summary.trim().length > 0) ? result.summary : summaryFromAnalysis;

        const newRecord: HealthRecord = {
            id: result.recordId,
            date: new Date().toISOString(),
            category: 'Consultation IA',
            title: potentialDiagnosis,
            symptoms: symptoms,
            diagnosis: potentialDiagnosis,
            summary: summaryToSave,
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


  return (
    <div className="space-y-4">
      {translatedContent ? (
         <div>
            <h3 className="font-bold mb-2">Traduction (Arabe Tunisien)</h3>
            <p className="whitespace-pre-line text-sm">{translatedContent}</p>
            <Button variant="link" size="sm" className="p-0 h-auto" onClick={() => setTranslatedContent(null)}>Afficher l'original</Button>
        </div>
      ) : (
        <>
            <div>
                <h3 className="font-bold mb-2">Diagnostics Potentiels</h3>
                {diagnosisSuggestions[0] && (
                  <div className="mb-3 p-3 rounded-md bg-primary/10 border border-primary/20">
                    <p className="text-sm">
                      <span className="font-semibold">Diagnostic le plus probable: </span>
                      {diagnosisSuggestions[0].name}
                    </p>
                  </div>
                )}
                <Accordion type="single" collapsible defaultValue={diagnosisSuggestions[0]?.name}>
                    {diagnosisSuggestions.map((d, i) => (
                       <AccordionItem value={d.name} key={i}>
                           <AccordionTrigger className="text-base font-semibold">{d.name}</AccordionTrigger>
                           <AccordionContent className="space-y-3 pt-2">
                               <div className="flex items-start gap-2">
                                  <Info className="size-4 mt-1 shrink-0 text-primary" />
                                  <p className="text-sm text-muted-foreground">{d.description}</p>
                               </div>
                               <div className="flex items-start gap-2">
                                  <Lightbulb className="size-4 mt-1 shrink-0 text-amber-500" />
                                  <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Justification :</span> {d.justification}</p>
                               </div>
                           </AccordionContent>
                       </AccordionItem>
                    ))}
                </Accordion>
            </div>
            
            {false && clarifyingQuestions && clarifyingQuestions.length > 0 && (
                 <div>
                    <h3 className="font-bold mb-2 flex items-center gap-2"><MessageCircleQuestion className="h-4 w-4" />Questions de clarification</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {clarifyingQuestions.map((q, i) => (
                        <li key={i}>{q}</li>
                    ))}
                    </ul>
                </div>
            )}


            {medicationSuggestions && medicationSuggestions.length > 0 && (
                <div>
                    <h3 className="font-bold mb-2 flex items-center gap-2"><Pill className="h-4 w-4" /> Suggestions de médicaments</h3>
                    <div className="space-y-2">
                        {medicationSuggestions.map((med, i) => (
                            <div key={i} className="text-sm p-3 bg-muted/50 rounded-lg">
                                <p className="font-semibold">{med.name}</p>
                                <p className="text-muted-foreground">{med.justification}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
       </>
      )}

      {traditionalRemedies && traditionalRemedies.length > 0 && !translatedContent && (
        <div>
            <h3 className="font-bold mb-2 flex items-center gap-2"><Leaf className="h-4 w-4" /> Remèdes traditionnels</h3>
             <div className="grid sm:grid-cols-1 gap-2">
                {traditionalRemedies.map((remedy) => (
                    <TraditionalRemedyCard key={remedy.remedyName} {...remedy} />
                ))}
            </div>
        </div>
      )}

      {remedies && (
         <div>
            <h3 className="font-bold mb-2">Recommandations de remèdes</h3>
            <div className="grid sm:grid-cols-2 gap-2">
                {remedies.length > 0 ? remedies.map((remedy) => (
                    <RemedyCard key={remedy.title} {...remedy} />
                )) : <p>Aucun remède spécifique à suggérer. Veuillez consulter un médecin.</p>}
            </div>
        </div>
      )}

      <Separator className="pt-2"/>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={handleShowRemedies} disabled={!!remedies}>
          <HeartPulse className="mr-2 h-4 w-4" />
          Afficher les remèdes
        </Button>
        <Button variant="outline" size="sm" onClick={onSaveRecord}>
          <FilePlus2 className="mr-2 h-4 w-4" />
          Sauvegarder
        </Button>
        <Button variant="outline" size="sm" onClick={handleTranslate} disabled={isTranslating || !!translatedContent}>
            {isTranslating ? <LoaderCircle className="animate-spin mr-2 h-4 w-4"/> : <Languages className="mr-2 h-4 w-4" />}
            {isTranslating ? 'Traduction...' : 'Traduire en Tunisien'}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground pt-2">
        Avis de non-responsabilité : Ceci n'est pas un avis médical. Consultez un professionnel de la santé pour tout problème de santé.
      </p>
    </div>
  );
};
