/**
 * @fileoverview This file contains the wellness video resources data.
 */

export type WellnessVideo = {
  category: "Méditation" | "Exercices Physiques" | "Nutrition" | "Santé Mentale";
  title: string;
  description: string;
  url: string;
};

export const wellnessVideos: WellnessVideo[] = [
  {
    category: "Méditation",
    title: "Méditation Guidée pour Débutants (10 min)",
    description: "Une séance parfaite pour découvrir les bases de la méditation et apaiser votre esprit.",
    url: "https://www.youtube.com/watch?v=kZ1k9K6g1sU"
  },
  {
    category: "Méditation",
    title: "Méditation pour un Sommeil Profond",
    description: "Laissez-vous guider vers un sommeil réparateur avec cette méditation relaxante.",
    url: "https://www.youtube.com/watch?v=7g49-s4h5A8"
  },
  {
    category: "Exercices Physiques",
    title: "Routine d'Étirements du Matin (10 min)",
    description: "Réveillez votre corps en douceur et préparez-vous pour la journée avec ces étirements simples.",
    url: "https://www.youtube.com/watch?v=fUTFm_i5D-0"
  },
  {
    category: "Exercices Physiques",
    title: "Séance de Cardio sans Sauts (15 min)",
    description: "Un excellent exercice pour le cœur, adapté à tous les niveaux et sans impact sur les articulations.",
    url: "https://www.youtube.com/watch?v=8C_S2yI6i-I"
  },
  {
    category: "Nutrition",
    title: "Les Bases d'une Alimentation Saine",
    description: "Comprenez les grands principes d'une assiette équilibrée pour plus d'énergie au quotidien.",
    url: "https://www.youtube.com/watch?v=FjIqJ4wJb-w"
  },
  {
    category: "Nutrition",
    title: "Recettes de Petits-Déjeuners Équilibrés",
    description: "Des idées simples et rapides pour un petit-déjeuner qui vous tiendra toute la matinée.",
    url: "https://www.youtube.com/watch?v=P22sB1ycyv0"
  },
  {
    category: "Santé Mentale",
    title: "Gérer le Stress et l'Anxiété",
    description: "Des techniques de respiration et des conseils pratiques pour retrouver son calme intérieur.",
    url: "https://www.youtube.com/watch?v=JGwRqS_yB8E"
  },
  {
    category: "Santé Mentale",
    title: "Comprendre et Cultiver la Confiance en Soi",
    description: "Explorez des stratégies pour bâtir une meilleure estime de vous-même au quotidien.",
    url: "https://www.youtube.com/watch?v=4AmXgqIh_2M"
  }
];
