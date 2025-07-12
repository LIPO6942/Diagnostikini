import type { DiagnosisRemedies } from "@/lib/types";
import { Coffee, Droplets, Moon, Pilcrow, Waves, Wind } from "lucide-react";

export const commonRemedies: DiagnosisRemedies[] = [
  {
    keywords: ["flu", "influenza", "cold"],
    remedies: [
      {
        title: "Rest",
        description: "Get plenty of sleep to help your body fight the infection.",
        icon: Moon,
      },
      {
        title: "Hydration",
        description: "Drink water, juice, or warm lemon water to prevent dehydration.",
        icon: Droplets,
      },
      {
        title: "OTC Medication",
        description: "Consider pain relievers like ibuprofen or acetaminophen.",
        icon: Pilcrow,
      }
    ],
  },
  {
    keywords: ["migraine", "headache"],
    remedies: [
      {
        title: "Rest in a Dark, Quiet Room",
        description: "Sensitivity to light and sound is common. Find a calm space.",
        icon: Moon,
      },
      {
        title: "Limit Caffeine",
        description: "Avoid excessive coffee or tea, which can trigger migraines.",
        icon: Coffee,
      },
      {
        title: "Pain Relievers",
        description: "Take over-the-counter pain medicine as soon as you feel a migraine.",
        icon: Pilcrow,
      },
    ],
  },
  {
    keywords: ["low blood pressure", "hypotension"],
    remedies: [
      {
        title: "Increase Salt Intake",
        description: "Salty foods can help raise blood pressure, but consult a doctor.",
        icon: Waves,
      },
      {
        title: "Drink More Water",
        description: "Fluids increase blood volume and help prevent dehydration.",
        icon: Droplets,
      },
      {
        title: "Compression Stockings",
        description: "These can help improve blood flow from your legs to your heart.",
        icon: Wind,
      },
    ],
  },
];
