/**
 * @fileoverview Displays the AI-powered analysis of the selected symptom path.
 */
"use client";

import { useEffect, useState } from "react";
import { analyzeSymptoms, type AnalyzeSymptomsOutput } from "@/ai/flows/analyze-symptoms";
import { useToast } from "@/hooks/use-toast";
import type { HealthRecord } from "@/lib/types";
import { saveHealthRecord } from "@/services/health-record-service";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AssistantResponse } from "@/components/assistant/assistant-response";
import { ArrowLeft, RotateCcw, BrainCircuit } from "lucide-react";
import { useProfile } from "@/contexts/profile-context";
import { recordConsultation } from "@/ai/flows/record-consultation";

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
    let isMounted = true;

    const getAnalysis = async () => {
      if (!isMounted) return;

      setIsLoading(true);
      setError(null);

      try {
        const analysisOutput = await analyzeSymptoms({
          symptomsDescription: symptomDescription,
          userProfile: isProfileComplete ? profile ?? undefined : undefined
        });

        if (!isMounted) return;

        // Vérifier si la réponse contient des erreurs
        if (analysisOutput.clarifyingQuestions &&
          analysisOutput.clarifyingQuestions.length > 0 &&
          analysisOutput.clarifyingQuestions[0].includes('erreur')) {
          throw new Error(analysisOutput.clarifyingQuestions[0]);
        }

        setAnalysisResult(analysisOutput);
      } catch (e) {
        if (!isMounted) return;

        console.error("Erreur lors de l'analyse des symptômes :", e);
        const errorMessage = e instanceof Error ? e.message : "Une erreur inattendue s'est produite";
        setError(`Désolé, une erreur s'est produite : ${errorMessage}`);

        // Afficher une notification d'erreur
        toast({
          variant: "destructive",
          title: "Erreur d'analyse",
          description: "Impossible d'analyser les symptômes. Veuillez réessayer plus tard.",
        });
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (isProfileComplete !== undefined) {
      getAnalysis();
    }

    // Nettoyage en cas de démontage du composant
    return () => {
      isMounted = false;
    };
  }, [symptomDescription, profile, isProfileComplete, toast]);

  return (
    <Card className="animate-fade-in-up">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BrainCircuit className="text-primary" />
          Résultat de l'analyse
        </CardTitle>
        <CardDescription>Basé sur votre sélection : "{symptomDescription}"</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex flex-col items-center justify-center p-8 gap-4 text-muted-foreground">
            <BrainCircuit className="animate-pulse text-primary w-12 h-12" />
            <span className="font-semibold text-lg">On analyse tes symptômes...</span>
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
            fullAnalysis={analysisResult}
            userProfile={isProfileComplete ? profile ?? undefined : undefined}
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
