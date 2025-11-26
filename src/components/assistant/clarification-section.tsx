'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { refineDiagnosisWithAI } from "@/ai/flows/refine-diagnosis";
import { AdaptiveQuestion } from "./adaptive-question";
import { getAdaptiveQuestionsForDiagnosis } from "@/constants/adaptive-questions";
import type { DiagnosisSuggestion, MedicationSuggestion, TraditionalRemedy, UserProfile } from "@/lib/types";
import type { AdaptiveClarificationQuestion, ClarificationAnswer } from "@/types/clarification-types";
import { Loader2, CheckCircle2 } from "lucide-react";

interface ClarificationSectionProps {
  initialDiagnosis: string;
  symptoms: string;
  symptomsArray: string[];
  userProfile?: UserProfile;
  onDiagnosisUpdate: (
    diagnosisSuggestions: DiagnosisSuggestion[],
    medicationSuggestions: MedicationSuggestion[],
    traditionalRemedies: TraditionalRemedy[],
    confidence: number
  ) => void;
  onComplete: () => void;
}

export function ClarificationSection({
  initialDiagnosis,
  symptoms,
  symptomsArray,
  userProfile,
  onDiagnosisUpdate,
  onComplete
}: ClarificationSectionProps) {
  const [questions, setQuestions] = useState<AdaptiveClarificationQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string | string[] | number>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentDiagnosis, setCurrentDiagnosis] = useState(initialDiagnosis);
  const [confidence, setConfidence] = useState(0.5);
  const { toast } = useToast();

  // Charger les questions adaptatives
  useEffect(() => {
    const adaptiveQuestions = getAdaptiveQuestionsForDiagnosis(initialDiagnosis);
    setQuestions(adaptiveQuestions);
  }, [initialDiagnosis]);

  const handleAnswer = (questionId: string, answer: string | string[] | number) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);
  };

  const formatAnswerForAI = (
    question: AdaptiveClarificationQuestion,
    answer: string | string[] | number
  ): string => {
    if (question.type === 'yes-no') {
      if (answer === 'yes') return 'Oui';
      if (answer === 'no') return 'Non';
      return 'Je ne sais pas';
    }

    if (question.type === 'single-choice') {
      const option = question.options?.find(opt => opt.id === answer);
      return option?.label || String(answer);
    }

    if (question.type === 'multiple-choice') {
      if (Array.isArray(answer)) {
        const labels = answer
          .map(id => question.options?.find(opt => opt.id === id)?.label)
          .filter(Boolean);
        return labels.join(', ');
      }
      return String(answer);
    }

    if (question.type === 'scale') {
      return `${answer}/${question.max || 10}`;
    }

    if (question.type === 'numeric') {
      return `${answer} ${question.unit || ''}`.trim();
    }

    if (question.type === 'duration' || question.type === 'frequency') {
      const option = question.options?.find(opt => opt.id === answer);
      return option?.label || String(answer);
    }

    return String(answer);
  };

  const submitAnswers = async (answersToSubmit: Record<string, string | string[] | number>) => {
    setIsLoading(true);

    try {
      // Construire les réponses formatées pour l'IA
      const clarificationAnswers: ClarificationAnswer[] = questions
        .filter((q: AdaptiveClarificationQuestion) => answersToSubmit[q.id] !== undefined)
        .map((q: AdaptiveClarificationQuestion) => ({
          questionId: q.id,
          question: q.text,
          answer: answersToSubmit[q.id],
          answerType: q.type
        }));

      // Formater pour l'API existante
      const formattedAnswers = clarificationAnswers.map(ca => {
        const question = questions.find((q: AdaptiveClarificationQuestion) => q.id === ca.questionId);
        return {
          question: ca.question,
          answer: question ? formatAnswerForAI(question, ca.answer) : String(ca.answer)
        };
      });

      // Appeler le service IA pour raffiner le diagnostic
      const refinedResult = await refineDiagnosisWithAI({
        initialSymptoms: symptoms,
        initialDiagnosis: currentDiagnosis,
        clarificationAnswers: formattedAnswers,
        userProfile: userProfile
      });

      // Mettre à jour le diagnostic et la confiance
      if (refinedResult) {
        setCurrentDiagnosis(refinedResult.refinedDiagnosis);
        setConfidence(refinedResult.confidence);

        // Notifier le parent
        onDiagnosisUpdate(
          refinedResult.diagnosisSuggestions,
          refinedResult.medicationSuggestions,
          refinedResult.traditionalRemedies,
          refinedResult.confidence
        );

        // Marquer comme terminé
        onComplete();

        toast({
          title: "Diagnostic affiné",
          description: `Confiance du diagnostic : ${Math.round(refinedResult.confidence * 100)}%`,
          action: <CheckCircle2 className="text-green-500" />,
        });
      }
    } catch (error) {
      console.error("Erreur lors du raffinement du diagnostic :", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible d'affiner le diagnostic. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    // Vérifier que les questions requises ont une réponse
    const requiredQuestions = questions.filter((q: AdaptiveClarificationQuestion) => q.required);
    const missingAnswers = requiredQuestions.filter((q: AdaptiveClarificationQuestion) => answers[q.id] === undefined);

    if (missingAnswers.length > 0) {
      toast({
        variant: "destructive",
        title: "Questions requises",
        description: "Veuillez répondre à toutes les questions marquées comme requises.",
      });
      return;
    }

    submitAnswers(answers);
  };

  const isComplete = () => {
    const requiredQuestions = questions.filter((q: AdaptiveClarificationQuestion) => q.required);
    return requiredQuestions.every((q: AdaptiveClarificationQuestion) => answers[q.id] !== undefined);
  };

  const answeredCount = Object.keys(answers).length;
  const totalCount = questions.length;
  const requiredCount = questions.filter((q: AdaptiveClarificationQuestion) => q.required).length;

  if (questions.length === 0) {
    return null;
  }

  return (
    <Card className="mt-6 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Questions de clarification</span>
          <span className="text-sm font-normal text-muted-foreground">
            {answeredCount}/{totalCount} réponses
          </span>
        </CardTitle>
        <CardDescription>
          Répondez à ces questions pour affiner le diagnostic
          {requiredCount > 0 && (
            <span className="block mt-1 text-xs">
              * {requiredCount} question(s) requise(s)
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {questions.map((question, index) => (
          <div key={question.id} className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                {index + 1}
              </span>
              <div className="flex-1">
                <AdaptiveQuestion
                  question={question}
                  value={answers[question.id]}
                  onChange={(value) => handleAnswer(question.id, value)}
                  disabled={isLoading}
                />
                {question.category && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    📋 Catégorie : {question.category}
                  </div>
                )}
              </div>
            </div>
            {index < questions.length - 1 && <div className="border-t mt-4" />}
          </div>
        ))}

        <div className="pt-4 border-t">
          <Button
            onClick={handleSubmit}
            disabled={!isComplete() || isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyse en cours...
              </>
            ) : (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Affiner le diagnostic
              </>
            )}
          </Button>
          {!isComplete() && (
            <p className="text-xs text-center text-muted-foreground mt-2">
              Veuillez répondre aux questions requises pour continuer
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
