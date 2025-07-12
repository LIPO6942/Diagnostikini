import type { DiagnosisRemedies } from "@/lib/types";
import { Coffee, Droplets, Moon, Pilcrow, Waves, Wind } from "lucide-react";

export const commonRemedies: DiagnosisRemedies[] = [
  {
    keywords: ["grippe", "influenza", "rhume"],
    remedies: [
      {
        title: "Repos",
        description: "Dormez beaucoup pour aider votre corps à combattre l'infection.",
        icon: Moon,
      },
      {
        title: "Hydratation",
        description: "Buvez de l'eau, du jus ou de l'eau tiède citronnée pour éviter la déshydratation.",
        icon: Droplets,
      },
      {
        title: "Médicaments sans ordonnance",
        description: "Envisagez des analgésiques comme l'ibuprofène ou l'acétaminophène.",
        icon: Pilcrow,
      }
    ],
  },
  {
    keywords: ["migraine", "céphalée", "mal de tête"],
    remedies: [
      {
        title: "Reposez-vous dans une pièce sombre et calme",
        description: "La sensibilité à la lumière et au son est courante. Trouvez un endroit calme.",
        icon: Moon,
      },
      {
        title: "Limitez la caféine",
        description: "Évitez l'excès de café ou de thé, qui peuvent déclencher des migraines.",
        icon: Coffee,
      },
      {
        title: "Analgésiques",
        description: "Prenez des analgésiques en vente libre dès que vous sentez une migraine arriver.",
        icon: Pilcrow,
      },
    ],
  },
  {
    keywords: ["hypotension", "pression artérielle basse"],
    remedies: [
      {
        title: "Augmentez l'apport en sel",
        description: "Les aliments salés peuvent aider à augmenter la tension artérielle, mais consultez un médecin.",
        icon: Waves,
      },
      {
        title: "Buvez plus d'eau",
        description: "Les liquides augmentent le volume sanguin et aident à prévenir la déshydratation.",
        icon: Droplets,
      },
      {
        title: "Bas de contention",
        description: "Ils peuvent aider à améliorer le flux sanguin de vos jambes vers votre cœur.",
        icon: Wind,
      },
    ],
  },
];
