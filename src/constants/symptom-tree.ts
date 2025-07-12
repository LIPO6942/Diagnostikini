/**
 * @fileoverview Defines the interactive symptom tree structure.
 */
import type { SymptomNode } from "@/lib/types";
import { PersonStanding, Wind, Thermometer, Waves, Ear, BrainCircuit, Bone, Eye, Sheet } from "lucide-react";

export const symptomTree: SymptomNode[] = [
  {
    id: "douleur",
    label: "Douleur",
    icon: PersonStanding,
    children: [
      {
        id: "tete",
        label: "Tête",
        children: [
          { id: "pulsatile", label: "Pulsatile", description: "Douleur à la tête, de type pulsatile" },
          { id: "sensation-pression", label: "Sensation de pression", description: "Douleur à la tête, comme une sensation de pression" },
          { id: "un-cote", label: "D'un seul côté", description: "Douleur d'un seul côté de la tête" },
        ],
      },
      {
        id: "poitrine",
        label: "Poitrine",
        children: [
            { id: "oppression", label: "Oppression", description: "Douleur à la poitrine, sensation d'oppression"},
            { id: "brulure", label: "Brûlure", description: "Douleur à la poitrine, sensation de brûlure"},
            { id: "elancement", label: "Élancement", description: "Douleur à la poitrine, de type élancement"},
        ]
      },
      {
        id: "ventre",
        label: "Ventre",
        children: [
            {id: "crampes", label: "Crampes", description: "Douleur au ventre, de type crampes"},
            {id: "brulures-estomac", label: "Brûlures d'estomac", description: "Douleur au ventre, de type brûlures d'estomac"},
            {id: "generalisee", label: "Généralisée", description: "Douleur au ventre, généralisée"},
        ]
      },
      {
        id: "dos",
        label: "Dos",
        children: [
            {id: "haut-du-dos", label: "Haut du dos", description: "Douleur dans le haut du dos"},
            {id: "bas-du-dos", label: "Bas du dos", description: "Douleur dans le bas du dos"},
            {id: "constante", label: "Constante", description: "Douleur de dos, constante"},
        ]
      },
    ],
  },
  {
    id: "respiration",
    label: "Gêne respiratoire",
    icon: Wind,
    children: [
      { id: "essoufflement", label: "Essoufflement", description: "Gêne respiratoire, essoufflement" },
      { id: "toux-seche", label: "Toux sèche", description: "Gêne respiratoire, toux sèche" },
      { id: "toux-grasse", label: "Toux grasse", description: "Gêne respiratoire, toux grasse" },
      { id: "respiration-sifflante", label: "Respiration sifflante", description: "Gêne respiratoire, respiration sifflante" },
    ],
  },
  {
    id: "fievre",
    label: "Fièvre",
    icon: Thermometer,
    children: [
      { id: "legere", label: "Légère (37.5-38.4°C)", description: "Fièvre légère (37.5-38.4°C)" },
      { id: "moderee", label: "Modérée (38.5-39.4°C)", description: "Fièvre modérée (38.5-39.4°C)" },
      { id: "elevee", label: "Élevée (>39.5°C)", description: "Fièvre élevée (plus de 39.5°C)" },
      { id: "avec-frissons", label: "Avec frissons", description: "Fièvre accompagnée de frissons" },
    ],
  },
   {
    id: "troubles-digestifs",
    label: "Troubles digestifs",
    icon: Waves,
    children: [
      { id: "nausees", label: "Nausées", description: "Troubles digestifs : nausées" },
      { id: "vomissements", label: "Vomissements", description: "Troubles digestifs : vomissements" },
      { id: "diarrhee", label: "Diarrhée", description: "Troubles digestifs : diarrhée" },
      { id: "constipation", label: "Constipation", description: "Troubles digestifs : constipation" },
    ],
  },
  {
    id: "troubles-orl",
    label: "Troubles ORL",
    icon: Ear,
    children: [
      { id: "mal-de-gorge", label: "Mal de gorge", description: "Troubles ORL : mal de gorge" },
      { id: "nez-bouche", label: "Nez bouché", description: "Troubles ORL : nez bouché" },
      { id: "ecoulement-nasal", label: "Écoulement nasal", description: "Troubles ORL : écoulement nasal" },
      { id: "douleur-oreille", label: "Douleur d'oreille", description: "Troubles ORL : douleur d'oreille" },
    ],
  },
  {
    id: "peau",
    label: "Problèmes de peau",
    icon: Sheet,
    children: [
      { id: "eruption-cutanee", label: "Éruption cutanée", description: "Problèmes de peau : éruption cutanée" },
      { id: "demangeaisons", label: "Démangeaisons", description: "Problèmes de peau : démangeaisons" },
      { id: "secheresse", label: "Sécheresse", description: "Problèmes de peau : sécheresse ou desquamation" },
      { id: "acne", label: "Acné", description: "Problèmes de peau : acné ou boutons" },
    ]
  },
   {
    id: "etat-general",
    label: "État général",
    icon: BrainCircuit,
    children: [
      { id: "fatigue-intense", label: "Fatigue intense", description: "État général : fatigue intense" },
      { id: "vertiges", label: "Vertiges", description: "État général : vertiges" },
      { id: "faiblesse", label: "Faiblesse musculaire", description: "État général : faiblesse musculaire" },
      { id: "somnolence", label: "Somnolence excessive", description: "État général : somnolence excessive" },
    ],
  },
  {
    id: "troubles-yeux",
    label: "Troubles oculaires",
    icon: Eye,
    children: [
        { id: "yeux-rouges", label: "Yeux rouges", description: "Troubles oculaires : yeux rouges ou irrités" },
        { id: "vision-floue", label: "Vision floue", description: "Troubles oculaires : vision floue" },
        { id: "secheresse-oculaire", label: "Sécheresse oculaire", description: "Troubles oculaires : sensation de sécheresse ou de sable" },
        { id: "larmoiement", label: "Larmoiement excessif", description: "Troubles oculaires : larmoiement excessif" },
    ]
  }
];
