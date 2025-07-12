/**
 * @fileoverview Displays the AI-powered analysis of the selected symptom path.
 */
"use client";

import { useEffect, useState } from "react";
import { analyzeSymptoms, type AnalyzeSymptomsOutput } from "@/ai/flows/analyze-symptoms";
import { recordConsultation } from "@/ai/flows/record-consultation";
import { useToast } from "@/hooks/use-toast";
import type { HealthRecord } from "@/lib/types";
import { saveHealthRecord } from "@/services/health-record-service";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AssistantResponse } from "@/components/assistant/assistant-response";
import { LoaderCircle, ArrowLeft, RotateCcw, BrainCircuit } from "lucide-react";
import { useProfile } from "@/contexts/profile-context";

interface SymptomAnalysisProps {
  symptomDescription: string;
  onBack: () => void;
  onReset: () => void;
}

export function SymptomAnalysis({ symptomDescription, onBack, onReset }: SymptomAnalysisProps) {
  const [analysisResult, setAnalysisResult] = useState<AnalyzeSymptomsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const { profile, isProfileComplete } = useProfile();

  useEffect(() => {
    const getAnalysis = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const analysisOutput = await analyzeSymptoms({ 
            symptomsDescription: symptomDescription,
            userProfile: isProfileComplete && profile ? profile : undefined
        });
        setAnalysisResult(analysisOutput);
      } catch (e) {
        console.error("Erreur lors de l'analyse des symptômes :", e);
        setError("Désolé, une erreur s'est produite lors de l'analyse. Veuillez réessayer.");
      } finally {
        setIsLoading(false);
      }
    };
    getAnalysis();
  }, [symptomDescription, profile, isProfileComplete]);

  const handleSaveRecord = async (symptoms: string, diagnosis: string) => {
    try {
      const { recordId, summary } = await recordConsultation({
        symptoms: symptoms,
        differentialDiagnosis: diagnosis,
        remedyRecommendations: "L'utilisateur a vu des remèdes standards et des suggestions de médicaments pour la condition potentielle.",
      });

      if (recordId && summary) {
        const newRecord: HealthRecord = {
          id: recordId || new Date().toISOString(),
          date: new Date().toLocaleDateString(),
          symptoms: symptoms,
          diagnosis: diagnosis,
          summary: summary,
        };
        saveHealthRecord(newRecord);
        toast({
          title: "Dossier sauvegardé",
          description: "Votre consultation a été sauvegardée avec succès.",
        });
      }
    } catch (error) {
      console.error("Échec de la sauvegarde du dossier :", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de sauvegarder le dossier de santé.",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="text-primary"/>
            Résultat de l'analyse
        </CardTitle>
        <CardDescription>Basé sur votre sélection : "{symptomDescription}"</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex items-center justify-center p-8 gap-2 text-muted-foreground">
            <LoaderCircle className="animate-spin" />
            <span>Analyse en cours...</span>
          </div>
        )}
        {error && <p className="text-destructive p-8 text-center">{error}</p>}
        {analysisResult && (
          <AssistantResponse
            symptoms={symptomDescription}
            diagnosisSuggestions={analysisResult.diagnosisSuggestions}
            clarifyingQuestions={analysisResult.clarifyingQuestions}
            medicationSuggestions={analysisResult.medicationSuggestions}
            traditionalRemedies={analysisResult.traditionalRemedies}
            onSaveRecord={handleSaveRecord}
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-6">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
         <Button variant="ghost" onClick={onReset}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Recommencer
        </Button>
      </CardFooter>
    </Card>
  );
}
