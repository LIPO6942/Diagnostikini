/**
 * @fileoverview This file contains the daily wellness challenges data.
 */

import { Coffee, Droplets, Moon, Pilcrow, Waves, Wind, Apple, StretchVertical, BrainCircuit, Eye, Footprints, BookOpen, MessageSquare, Sun, Music } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Challenge = {
    id: string;
    title: string;
    description: string;
    guide: {
      icon: LucideIcon;
      text: string;
    }
}

export const weekdayChallenges: Challenge[] = [
  {
    id: "hydrate",
    title: "Objectif Hydratation",
    description: "Buvez un grand verre d'eau pour bien démarrer votre hydratation de la journée.",
    guide: {
        icon: Droplets,
        text: "Versez-vous un verre d'eau (environ 250ml) et buvez-le entièrement. L'eau est essentielle pour votre énergie et votre concentration."
    }
  },
  {
    id: "stretch",
    title: "Pause Étirements",
    description: "Prenez 5 minutes pour étirer votre corps, surtout si vous êtes resté assis longtemps.",
    guide: {
        icon: StretchVertical,
        text: "Levez-vous, étirez vos bras vers le ciel, puis touchez vos orteils. Maintenez chaque étirement 15-20 secondes sans forcer."
    }
  },
  {
    id: "mindful-break",
    title: "Respiration Consciente",
    description: "Prenez une minute pour vous concentrer sur 5 respirations lentes et profondes.",
    guide: {
        icon: BrainCircuit,
        text: "Asseyez-vous droit. Inspirez lentement par le nez pendant 4 secondes, retenez 4 secondes, puis expirez doucement par la bouche pendant 6 secondes. Répétez 5 fois."
    }
  },
  {
    id: "screen-break",
    title: "Repos des Yeux",
    description: "Détournez le regard de votre écran et fixez un objet au loin pendant 20 secondes.",
    guide: {
        icon: Eye,
        text: "Appliquez la règle 20-20-20 : toutes les 20 minutes, regardez quelque chose à 20 pieds (environ 6 mètres) pendant 20 secondes pour réduire la fatigue oculaire."
    }
  },
];

export const saturdayChallenges: Challenge[] = [
    {
        id: "walk",
        title: "Balade du Samedi",
        description: "Faites une petite promenade de 15 minutes à l'extérieur pour vous aérer l'esprit.",
        guide: {
            icon: Footprints,
            text: "Sortez et marchez à un rythme confortable. Concentrez-vous sur votre environnement, les sons, les odeurs. Pas besoin de performance, juste le plaisir de bouger."
        }
    },
    {
        id: "read",
        title: "Lecture Plaisir",
        description: "Lisez quelques pages d'un livre ou d'un article qui vous intéresse, sans lien avec le travail.",
        guide: {
            icon: BookOpen,
            text: "Installez-vous confortablement avec un livre, un magazine ou une liseuse. Immergez-vous dans une histoire ou un sujet qui vous passionne pendant 10 minutes."
        }
    },
    {
        id: "connect",
        title: "Connexion Sociale",
        description: "Envoyez un message bienveillant à un ami ou un membre de votre famille.",
        guide: {
            icon: MessageSquare,
            text: "Pensez à quelqu'un qui vous est cher et envoyez-lui un simple message : \"Je pense à toi, j'espère que tu passes un bon weekend !\". Maintenir le lien est bon pour le moral."
        }
    }
];

export const sundayChallenges: Challenge[] = [
    {
        id: "sunrise",
        title: "Moment de Calme",
        description: "Prenez 5 minutes pour simplement vous asseoir près d'une fenêtre et regarder dehors, sans rien faire.",
        guide: {
            icon: Sun,
            text: "Trouvez un endroit confortable. Mettez votre téléphone de côté. Observez le ciel, les arbres, les gens qui passent. Laissez vos pensées aller et venir sans jugement."
        }
    },
    {
        id: "music",
        title: "Écoute Musicale",
        description: "Écoutez une chanson que vous aimez, en vous concentrant vraiment sur la musique.",
        guide: {
            icon: Music,
            text: "Mettez des écouteurs si possible. Fermez les yeux et écoutez attentivement les instruments, la voix, les paroles. Laissez la musique vous transporter."
        }
    },
    {
        id: "gratitude",
        title: "Note de Gratitude",
        description: "Pensez à une chose positive de votre semaine et notez-la quelque part.",
        guide: {
            icon: Apple,
            text: "Prenez un carnet ou votre téléphone. Réfléchissez à un petit moment, une personne, ou une chose pour laquelle vous êtes reconnaissant cette semaine. Le noter renforce le sentiment positif."
        }
    }
];
