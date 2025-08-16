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
    const getAnalysis = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const analysisOutput = await analyzeSymptoms({ 
            symptomsDescription: symptomDescription,
            userProfile: isProfileComplete ? profile ?? undefined : undefined
        });
        setAnalysisResult(analysisOutput);
      } catch (e) {
        console.error("Erreur lors de l'analyse des symptômes :", e);
        setError("Désolé, une erreur s'est produite lors de l'analyse. Veuillez réessayer.");
      } finally {
        setIsLoading(false);
      }
    };
    if (isProfileComplete !== undefined) {
      getAnalysis();
    }
  }, [symptomDescription, profile, isProfileComplete]);

  return (
    <Card className="animate-fade-in-up">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="text-primary"/>
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
