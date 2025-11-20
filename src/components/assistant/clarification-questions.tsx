'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, X } from "lucide-react";
import type { ClarifyingQuestion } from "@/lib/types";
import { useState } from "react";

interface ClarificationQuestionsProps {
  questions: ClarifyingQuestion[];
  onSubmit: (answers: Record<string, any>) => Promise<void>;
  isSubmitting: boolean;
}

export function ClarificationQuestions({ 
  questions, 
  onSubmit, 
  isSubmitting 
}: ClarificationQuestionsProps) {
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [followUpQuestions, setFollowUpQuestions] = useState<Record<string, ClarifyingQuestion[]>>({});

  const handleAnswer = (questionId: string, value: any, parentId?: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    
    // Gérer les questions de suivi
    const question = questions.find(q => q.id === questionId) || 
                   Object.values(followUpQuestions).flat().find(q => q.id === questionId);
    
    if (question?.followUpQuestions?.[value]) {
      setFollowUpQuestions(prev => ({
        ...prev,
        [questionId]: question.followUpQuestions[value]
      }));
    } else if (parentId) {
      // Nettoyer les questions de suivi si la réponse change
      const updatedFollowUps = { ...followUpQuestions };
      delete updatedFollowUps[parentId];
      setFollowUpQuestions(updatedFollowUps);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(answers);
  };

  const renderQuestion = (question: ClarifyingQuestion, parentId?: string) => {
    const isAnswered = answers[question.id] !== undefined;
    const hasFollowUps = followUpQuestions[question.id]?.length > 0;

    return (
      <div 
        key={question.id} 
        className={`mb-6 p-4 rounded-lg border ${isAnswered ? 'border-green-100 bg-green-50' : 'border-gray-200 bg-white'}`}
      >
        <div className="flex justify-between items-start">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {question.question}
            {question.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          
          {isAnswered && (
            <span className="inline-flex items-center text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Répondu
            </span>
          )}
        </div>

        {question.type === 'multiple_choice' && question.options ? (
          <RadioGroup 
            value={answers[question.id] || ''}
            onValueChange={(value) => handleAnswer(question.id, value, parentId)}
            className="mt-2 space-y-2"
          >
            {question.options.map(option => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} />
                <Label htmlFor={`${question.id}-${option.id}`} className="text-sm">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <Input
            type="text"
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value, parentId)}
            placeholder="Votre réponse..."
            className="mt-1"
            required={question.required}
          />
        )}

        {/* Afficher les questions de suivi si nécessaire */}
        {hasFollowUps && (
          <div className="mt-4 pl-4 border-l-2 border-gray-200">
            {followUpQuestions[question.id]?.map(followUp => 
              renderQuestion(followUp, question.id)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        {questions.map(question => renderQuestion(question))}
      </div>
      
      <div className="flex justify-end space-x-3 pt-4 border-t">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-green-600 hover:bg-green-700"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer mes réponses'}
        </Button>
      </div>
    </form>
  );
}
