export interface ClarificationAnswer {
  question: string;
  answer: string;
}

interface RefineDiagnosisParams {
  diagnosis: string;
  symptoms: string[];
  previousAnswers?: ClarificationAnswer[];
}

export async function refineDiagnosis({ 
  diagnosis, 
  symptoms, 
  previousAnswers = [] 
}: RefineDiagnosisParams): Promise<{
  refinedDiagnosis: string;
  confidence: number;
  questions: string[];
}> {
  // Logique de base pour déterminer les questions en fonction du diagnostic
  const getQuestionsForDiagnosis = (diagnosis: string): string[] => {
    const questions: string[] = [];
    
    if (diagnosis.toLowerCase().includes('migraine')) {
      questions.push('Avez-vous des nausées ?');
      questions.push('Êtes-vous sensible à la lumière ?');
    } 
    else if (diagnosis.toLowerCase().includes('grippe')) {
      questions.push('Avez-vous de la fièvre ?');
      questions.push('Avez-vous des courbatures ?');
    }
    else if (diagnosis.toLowerCase().includes('allergie')) {
      questions.push('Avez-vous des démangeaisons ?');
      questions.push('Avez-vous des éruptions cutanées ?');
    }
    
    // Limiter à 3 questions max
    return questions.slice(0, 3);
  };

  // Calculer la confiance basée sur les réponses précédentes
  const calculateConfidence = (answers: ClarificationAnswer[]): number => {
    if (answers.length === 0) return 0.5; // Confiance moyenne sans réponses
    
    // Augmenter la confiance avec chaque réponse cohérente
    const baseConfidence = 0.5;
    const confidenceIncrement = 0.15;
    
    return Math.min(
      0.95, // Ne pas dépasser 95% de confiance
      baseConfidence + (answers.length * confidenceIncrement)
    );
  };

  // Générer de nouvelles questions si nécessaire
  const shouldAskMoreQuestions = previousAnswers.length < 3 && 
                               calculateConfidence(previousAnswers) < 0.8;
  
  const questions = shouldAskMoreQuestions 
    ? getQuestionsForDiagnosis(diagnosis).slice(0, 3 - previousAnswers.length)
    : [];

  return {
    refinedDiagnosis: diagnosis,
    confidence: calculateConfidence(previousAnswers),
    questions
  };
}
