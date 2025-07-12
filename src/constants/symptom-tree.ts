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
          { 
            id: "pulsatile", 
            label: "Pulsatile",
            children: [
                { id: "tete-pulsatile-nausee", label: "Avec nausées", description: "Douleur à la tête pulsatile, avec nausées" },
                { id: "tete-pulsatile-sans-nausee", label: "Sans nausées", description: "Douleur à la tête pulsatile, sans nausées" },
            ]
          },
          { 
            id: "sensation-pression", 
            label: "Sensation de pression", 
            children: [
                { id: "tete-pression-stress", label: "Liée au stress", description: "Sensation de pression à la tête, liée au stress" },
                { id: "tete-pression-continue", label: "Continue", description: "Sensation de pression à la tête, continue" },
            ]
          },
          { 
            id: "un-cote", 
            label: "D'un seul côté", 
            children: [
                { id: "tete-un-cote-oeil", label: "Derrière l'œil", description: "Douleur d'un seul côté de la tête, derrière l'œil" },
                { id: "tete-un-cote-tempe", label: "Au niveau de la tempe", description: "Douleur d'un seul côté de la tête, au niveau de la tempe" },
            ]
          },
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
      { 
        id: "toux-seche", 
        label: "Toux sèche",
        children: [
            { id: "toux-seche-jour", label: "Surtout le jour", description: "Toux sèche, surtout le jour" },
            { id: "toux-seche-nuit", label: "Surtout la nuit", description: "Toux sèche, surtout la nuit" },
        ]
      },
      { 
        id: "toux-grasse", 
        label: "Toux grasse",
        children: [
            { id: "toux-grasse-jaune", label: "Expectoration jaune/verte", description: "Toux grasse avec expectoration jaune ou verte" },
            { id: "toux-grasse-claire", label: "Expectoration claire", description: "Toux grasse avec expectoration claire" },
        ]
      },
      { id: "respiration-sifflante", label: "Respiration sifflante", description: "Gêne respiratoire, respiration sifflante" },
    ],
  },
  {
    id: "fievre",
    label: "Fièvre",
    icon: Thermometer,
    children: [
      { 
        id: "legere", 
        label: "Légère (37.5-38.4°C)", 
        children: [
            { id: "fievre-legere-courte", label: "Depuis 1-2 jours", description: "Fièvre légère depuis 1 à 2 jours" },
            { id: "fievre-legere-longue", label: "Depuis plus de 3 jours", description: "Fièvre légère depuis plus de 3 jours" },
        ]
       },
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
