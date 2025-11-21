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
    const diagnosisLower = diagnosis.toLowerCase();

    // Maux de tête / Neurologiques
    if (diagnosisLower.includes('migraine') || diagnosisLower.includes('céphalée')) {
      questions.push('Avez-vous des nausées ?');
      questions.push('Êtes-vous sensible à la lumière ?');
      questions.push('La douleur est-elle pulsatile (battements) ?');
    }
    // Respiratoire
    else if (diagnosisLower.includes('grippe') || diagnosisLower.includes('rhume')) {
      questions.push('Avez-vous de la fièvre ?');
      questions.push('Avez-vous des courbatures ?');
      questions.push('Avez-vous une toux ?');
    }
    else if (diagnosisLower.includes('angine') || diagnosisLower.includes('pharyngite')) {
      questions.push('Avez-vous des difficultés à avaler ?');
      questions.push('Y a-t-il des points blançs sur vos amygdales ?');
      questions.push('Avez-vous de la fièvre ?');
    }
    else if (diagnosisLower.includes('bronchite') || diagnosisLower.includes('toux')) {
      questions.push('La toux est-elle grasse (avec expectorations) ?');
      questions.push('Avez-vous des sifflements respiratoires ?');
      questions.push('La toux vous empêche-t-elle de dormir ?');
    }
    else if (diagnosisLower.includes('sinusite')) {
      questions.push('Avez-vous une douleur au front ou aux joues ?');
      questions.push('Les sécrétions nasales sont-elles jaunes/vertes ?');
      questions.push('La douleur augmente-t-elle en se penchant ?');
    }
    // Allergies
    else if (diagnosisLower.includes('allergie')) {
      questions.push('Avez-vous des démangeaisons ?');
      questions.push('Avez-vous des éruptions cutanées ?');
      questions.push('Avez-vous des éternuements fréquents ?');
    }
    // Digestif
    else if (diagnosisLower.includes('gastro') || diagnosisLower.includes('diarrhée')) {
      questions.push('Avez-vous des crampes abdominales ?');
      questions.push('Y a-t-il du sang dans les selles ?');
      questions.push('Avez-vous de la fièvre ?');
    }
    else if (diagnosisLower.includes('reflux') || diagnosisLower.includes('brûlures d\'estomac')) {
      questions.push('Les symptômes empirent-ils après les repas ?');
      questions.push('Avez-vous un goût acide dans la bouche ?');
      questions.push('Les symptômes sont-ils pires en position couchée ?');
    }
    else if (diagnosisLower.includes('appendicite')) {
      questions.push('La douleur est-elle localisée en bas à droite ?');
      questions.push('Avez-vous de la fièvre ?');
      questions.push('La douleur augmente-t-elle en marchant ?');
    }
    // Cardiovasculaire
    else if (diagnosisLower.includes('angine de poitrine') || diagnosisLower.includes('cardiaque')) {
      questions.push('La douleur survient-elle à l\'effort ?');
      questions.push('Irradie-t-elle vers le bras gauche ou la mâchoire ?');
      questions.push('Avez-vous des essoufflements ?');
    }
    // Urinaire
    else if (diagnosisLower.includes('infection urinaire') || diagnosisLower.includes('cystite')) {
      questions.push('Avez-vous des brûlures en urinant ?');
      questions.push('Urinez-vous fréquemment ?');
      questions.push('Y a-t-il du sang dans les urines ?');
    }
    // Musculo-squelettique
    else if (diagnosisLower.includes('entorse') || diagnosisLower.includes('foulure')) {
      questions.push('Y a-t-il un gonflement ?');
      questions.push('Pouvez-vous bouger l\'articulation ?');
      questions.push('Avez-vous entendu un craquement au moment du traumatisme ?');
    }
    else if (diagnosisLower.includes('lombalgie') || diagnosisLower.includes('dos')) {
      questions.push('La douleur descend-elle dans la jambe ?');
      questions.push('Est-elle pire le matin au réveil ?');
      questions.push('Avez-vous des fourmillements ?');
    }
    // Peau
    else if (diagnosisLower.includes('eczéma') || diagnosisLower.includes('dermatite')) {
      questions.push('Avez-vous des démangeaisons intenses ?');
      questions.push('La peau est-elle sèche et qui pèle ?');
      questions.push('Avez-vous des antécédents d\'allergies ?');
    }
    // Autres
    else if (diagnosisLower.includes('conjonctivite')) {
      questions.push('Avez-vous un écoulement de l\'œil ?');
      questions.push('L\'œil est-il rouge ?');
      questions.push('Avez-vous une sensation de sable dans l\'œil ?');
    }
    else if (diagnosisLower.includes('otite')) {
      questions.push('Avez-vous une douleur d\'oreille ?');
      questions.push('Y a-t-il un écoulement ?');
      questions.push('Avez-vous une baisse de l\'audition ?');
    }
    // Questions génériques si aucun cas spécifique n'est détecté
    else {
      questions.push('Les symptômes se sont-ils aggravés récemment ?');
      questions.push('Avez-vous pris des médicaments ?');
      questions.push('Avez-vous consulté un médecin ?');
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
