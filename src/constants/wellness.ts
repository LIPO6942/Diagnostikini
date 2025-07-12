/**
 * @fileoverview This file contains wellness tips data in French.
 */
import { Apple, Bed, Dumbbell, Wind } from "lucide-react";

export const wellnessTips = [
  {
    category: "Nutrition",
    icon: Apple,
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "nourriture saine"
    },
    tips: [
      "Mangez une variété de fruits et de légumes chaque jour.",
      "Choisissez des grains entiers plutôt que des grains raffinés.",
      "Limitez les aliments transformés, le sucre et les graisses malsaines.",
      "Restez hydraté en buvant beaucoup d'eau.",
    ],
  },
  {
    category: "Activité",
    icon: Dumbbell,
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "course parc"
    },
    tips: [
      "Visez 30 minutes d'exercice modéré la plupart des jours.",
      "Trouvez une activité que vous aimez pour rester motivé.",
      "Intégrez un entraînement de force 2 à 3 fois par semaine.",
      "N'oubliez pas de vous étirer avant et après les entraînements.",
    ],
  },
  {
    category: "Sommeil",
    icon: Bed,
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "dormir paisible"
    },
    tips: [
      "Dormez de 7 à 9 heures de sommeil de qualité par nuit.",
      "Respectez un horaire de sommeil régulier.",
      "Créez une routine relaxante au coucher.",
      "Évitez les écrans une heure avant de vous coucher.",
    ],
  },
  {
    category: "Gestion du stress",
    icon: Wind,
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "yoga méditation"
    },
    tips: [
      "Pratiquez la pleine conscience ou la méditation.",
      "Adonnez-vous à des passe-temps pour vous détendre.",
      "Communiquez avec vos amis et votre famille pour obtenir du soutien.",
      "Prenez des pauses régulières tout au long de la journée.",
    ],
  },
];
