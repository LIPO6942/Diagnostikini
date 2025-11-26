/**
 * @fileoverview Types pour les questions de clarification intelligentes et adaptatives
 */

export type QuestionType =
    | 'yes-no'           // Oui / Non / Je ne sais pas
    | 'single-choice'    // Sélection unique parmi plusieurs options
    | 'multiple-choice'  // Sélection multiple
    | 'scale'            // Échelle (ex: 1-10, léger-modéré-sévère)
    | 'duration'         // Durée (heures, jours, semaines, mois)
    | 'frequency'        // Fréquence (rarement, parfois, souvent, toujours)
    | 'numeric';         // Valeur numérique (ex: température, nombre de fois)

export interface QuestionOption {
    id: string;
    label: string;
    labelTunisian?: string;
    diagnosticWeight?: number; // Poids pour le diagnostic (0-1)
    followUpQuestions?: string[]; // Questions de suivi si cette option est sélectionnée
}

export interface AdaptiveClarificationQuestion {
    id: string;
    text: string;
    textTunisian?: string;
    type: QuestionType;
    options?: QuestionOption[]; // Pour single-choice et multiple-choice
    min?: number; // Pour scale et numeric
    max?: number; // Pour scale et numeric
    unit?: string; // Pour numeric (ex: "°C", "fois/jour")
    required?: boolean;
    category?: string; // Catégorie de la question (symptômes, chronologie, facteurs aggravants, etc.)
    clinicalRelevance?: string; // Explication de la pertinence clinique
}

export interface ClarificationAnswer {
    questionId: string;
    question: string;
    answer: string | string[] | number; // Peut être une chaîne, un tableau ou un nombre
    answerType: QuestionType;
}

export interface QuestionSet {
    diagnosis: string;
    questions: AdaptiveClarificationQuestion[];
    minQuestionsForConfidence?: number; // Nombre minimum de questions pour atteindre une bonne confiance
}
