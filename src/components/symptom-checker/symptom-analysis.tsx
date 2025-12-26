/**
 * @fileoverview Displays the AI-powered analysis of the selected symptom path.
 */
"use client";

import { useEffect, useState } from "react";
import { analyzeSymptoms, type AnalyzeSymptomsOutput } from "@/ai/flows/analyze-symptoms";
import { useToast } from "@/hooks/use-toast";
import { useProfile } from "@/contexts/profile-context";
import { BrainCircuit, ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AssistantResponse } from "@/components/assistant/assistant-response";

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

    return () => {
      isMounted = false;
    };
  }, [symptomDescription, profile, isProfileComplete, toast]);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">

      {/* Header de l'analyse */}
      <div className="text-center space-y-4 pt-4">
        <div className="mx-auto flex items-center justify-center size-16 rounded-2xl bg-primary/10 text-primary shadow-inner">
          <BrainCircuit className={`size-10 ${isLoading ? 'animate-pulse' : ''}`} />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Analyse en cours
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto italic px-4">
            "{symptomDescription}"
          </p>
        </div>
      </div>

      <div className="relative">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-16 gap-6 text-center animate-in fade-in">
            <div className="relative size-20">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
              <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              <BrainCircuit className="absolute inset-0 m-auto size-8 text-primary animate-pulse" />
            </div>
            <div className="space-y-2">
              <span className="block font-semibold text-xl text-foreground">Diagnostic IA en préparation</span>
              <p className="text-sm text-muted-foreground animate-pulse">Nous croisons vos symptômes avec notre base médicale...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="p-8 bg-destructive/5 border border-destructive/20 rounded-2xl text-center space-y-4">
            <p className="text-destructive font-medium">{error}</p>
            <Button variant="outline" size="sm" onClick={() => window.location.reload()}>Réessayer</Button>
          </div>
        )}

        {analysisResult && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-700">
            <AssistantResponse
              symptoms={symptomDescription}
              diagnosisSuggestions={analysisResult.diagnosisSuggestions}
              clarifyingQuestions={analysisResult.clarifyingQuestions}
              medicationSuggestions={analysisResult.medicationSuggestions}
              traditionalRemedies={analysisResult.traditionalRemedies}
              fullAnalysis={analysisResult}
              userProfile={isProfileComplete ? profile ?? undefined : undefined}
            />
          </div>
        )}
      </div>

      {/* Footer sticky-like ou discret */}
      {!isLoading && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-8 border-t">
          <Button variant="outline" onClick={onBack} className="w-full sm:w-auto px-8 rounded-xl">
            <ArrowLeft className="mr-2 size-4" />
            Modifier mes réponses
          </Button>
          <Button variant="ghost" onClick={onReset} className="w-full sm:w-auto px-8 rounded-xl text-muted-foreground">
            <RotateCcw className="mr-2 size-4" />
            Nouveau diagnostic
          </Button>
        </div>
      )}
    </div>
  );
}
