'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { refineDiagnosis, ClarificationAnswer } from "@/services/diagnosis-refinement";

interface ClarificationQuestion {
  id: string;
  text: string;
  options: { id: string; label: string }[];
}

interface ClarificationSectionProps {
  initialDiagnosis: string;
  symptoms: string[];
  onDiagnosisUpdate: (diagnosis: string, confidence: number) => void;
  onComplete: () => void;
}

export function ClarificationSection({ 
  initialDiagnosis, 
  symptoms, 
  onDiagnosisUpdate,
  onComplete
}: ClarificationSectionProps) {
  const [questions, setQuestions] = useState<ClarificationQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentDiagnosis, setCurrentDiagnosis] = useState(initialDiagnosis);
  const [confidence, setConfidence] = useState(0.5);
  const [answeredQuestions, setAnsweredQuestions] = useState<ClarificationAnswer[]>([]);
  const { toast } = useToast();

  // Charger les questions initiales
  useEffect(() => {
    const loadInitialQuestions = async () => {
      const { questions } = await refineDiagnosis({ 
        diagnosis: initialDiagnosis, 
        symptoms 
      });
      setQuestions(createQuestionObjects(questions));
    };
    loadInitialQuestions();
  }, [initialDiagnosis, symptoms]);

  const createQuestionObjects = (questionTexts: string[]): ClarificationQuestion[] => {
    return questionTexts.map((text, index) => ({
      id: `q${index}`,
      text,
      options: [
        { id: 'yes', label: 'Oui' },
        { id: 'no', label: 'Non' },
        { id: 'unsure', label: 'Je ne sais pas' }
      ]
    }));
  };

  const handleAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    // Si toutes les questions ont été répondues, soumettre automatiquement
    if (Object.keys(newAnswers).length === questions.length) {
      submitAnswers(newAnswers);
    }
  };

  const submitAnswers = async (userAnswers: Record<string, string>) => {
    setIsLoading(true);
    
    try {
      // Créer les objets de réponses pour le service
      const answerObjects = Object.entries(userAnswers).map(([id, answer]) => {
        const question = questions.find(q => q.id === id);
        return {
          question: question?.text || '',
          answer
        };
      });

      // Mettre à jour la liste complète des réponses
      const allAnswers = [...answeredQuestions, ...answerObjects];
      
      // Appeler le service de raffinement
      const { refinedDiagnosis, confidence: newConfidence, questions: newQuestions } = 
        await refineDiagnosis({ 
          diagnosis: currentDiagnosis, 
          symptoms,
          previousAnswers: allAnswers
        });

      // Mettre à jour l'état local
      setCurrentDiagnosis(refinedDiagnosis);
      setConfidence(newConfidence);
      setAnsweredQuestions(allAnswers);
      
      // Mettre à jour le composant parent
      onDiagnosisUpdate(refinedDiagnosis, newConfidence);

      // Si plus de questions ou confiance suffisante, terminer
      if (newQuestions.length === 0 || newConfidence >= 0.8 || allAnswers.length >= 3) {
        onComplete();
        toast({
          title: "Diagnostic finalisé",
          description: `Confiance: ${Math.round(newConfidence * 100)}%`,
        });
      } else {
        // Sinon, afficher les nouvelles questions
        setQuestions(createQuestionObjects(newQuestions));
        setAnswers({});
      }

    } catch (error) {
      console.error("Erreur lors de la mise à jour du diagnostic :", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la mise à jour du diagnostic.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-bold mb-2 flex items-center gap-2">
        Questions pour affiner le diagnostic
      </h3>
      
      <div className="space-y-4">
        {questions.map(question => (
          <div key={question.id} className="p-4 bg-muted/50 rounded-lg">
            <p className="mb-3">{question.text}</p>
            <RadioGroup
              value={answers[question.id] || ''}
              onValueChange={(value) => handleAnswer(question.id, value)}
              className="space-y-2"
            >
              {question.options.map(option => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={option.id} 
                    id={`${question.id}-${option.id}`}
                    disabled={isLoading}
                  />
                  <Label htmlFor={`${question.id}-${option.id}`} className="text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-2">
        <div className="text-sm text-muted-foreground">
          Confiance: {Math.round(confidence * 100)}%
        </div>
        <Button 
          onClick={() => submitAnswers(answers)}
          disabled={isLoading || Object.keys(answers).length === 0}
        >
          {isLoading ? 'Traitement...' : 'Valider les réponses'}
        </Button>
      </div>
    </div>
  );
}
