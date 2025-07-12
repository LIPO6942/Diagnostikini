/**
 * @fileoverview This file contains wellness tips data in French.
 */
import { Apple, Bed, Dumbbell, Wind } from "lucide-react";

export const wellnessTips = [
  {
    category: "Nutrition",
    icon: Apple,
    image: {
      src: "https://images.unsplash.com/photo-1533803779054-839aa3e212d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxXZWxsbmVzcyUyMGZydWl0fGVufDB8fHx8MTc1MjMyMjk0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
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
      src: "https://images.unsplash.com/photo-1715333148720-78ac998f06e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8U3BvcnRzJTIwbWVuJTIwd29tYW58ZW58MHx8fHwxNzUyMzIzMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
      src: "https://images.unsplash.com/photo-1619001904482-b0628b82b3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8U2xlZXBpbmd8ZW58MHx8fHwxNzUyMzIzMTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
      src: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxNZWRpdGF0aW9ufGVufDB8fHx8MTc1MjMyMzE2MXww&ixlib=rb-4.1.0&q=80&w=1080",
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
