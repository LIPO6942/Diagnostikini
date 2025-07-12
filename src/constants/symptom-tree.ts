/**
 * @fileoverview Defines the interactive symptom tree structure.
 */
import type { SymptomNode } from "@/lib/types";
import { PersonStanding, Wind, Thermometer, Waves, Ear, BrainCircuit, Bone, Eye, Sheet, Activity } from "lucide-react";

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
                { id: "tete-pulsatile-nausee", label: "Avec nausées/vomissements", description: "Douleur à la tête pulsatile, avec nausées ou vomissements" },
                { id: "tete-pulsatile-lumiere-son", label: "Sensibilité lumière/son", description: "Douleur à la tête pulsatile, avec sensibilité à la lumière ou au son" },
            ]
          },
          { 
            id: "sensation-pression", 
            label: "Sensation de pression/serrement", 
            children: [
                { id: "tete-pression-stress", label: "Apparaît avec le stress", description: "Sensation de pression à la tête, liée au stress" },
                { id: "tete-pression-continue", label: "Continue tout le long de la journée", description: "Sensation de pression à la tête, continue" },
            ]
          },
          { 
            id: "un-cote", 
            label: "D'un seul côté", 
            children: [
                { id: "tete-un-cote-oeil", label: "Derrière l'œil", description: "Douleur d'un seul côté de la tête, derrière l'œil" },
                { id: "tete-un-cote-sinus", label: "Au niveau des sinus", description: "Douleur d'un seul côté de la tête, au niveau des sinus" },
            ]
          },
        ],
      },
      {
        id: "poitrine",
        label: "Poitrine",
        children: [
            { id: "oppression-poitrine", label: "Oppression / serrement", description: "Douleur à la poitrine, sensation d'oppression ou de serrement"},
            { id: "brulure-poitrine", label: "Brûlure (remontant vers la gorge)", description: "Douleur à la poitrine, sensation de brûlure qui remonte"},
            { id: "elancement-poitrine", label: "Élancement (comme un coup de poignard)", description: "Douleur aiguë et brève à la poitrine"},
            { id: "poitrine-effort", label: "Douleur à l'effort", description: "Douleur à la poitrine qui apparaît pendant un effort physique"},
        ]
      },
      {
        id: "ventre",
        label: "Ventre",
        children: [
            {id: "crampes-ventre", label: "Crampes", description: "Douleur au ventre, de type crampes"},
            {id: "brulures-estomac-ventre", label: "Brûlures d'estomac", description: "Douleur au ventre, de type brûlures d'estomac"},
            {id: "ventre-localise", label: "Douleur localisée", description: "Douleur dans une zone précise du ventre"},
            {id: "ventre-generalise", label: "Douleur généralisée", description: "Douleur diffuse dans tout le ventre"},
        ]
      },
      {
        id: "dos",
        label: "Dos",
        children: [
            {id: "haut-dos", label: "Haut du dos / nuque", description: "Douleur dans le haut du dos ou la nuque"},
            {id: "bas-dos", label: "Bas du dos (lombaire)", description: "Douleur dans le bas du dos"},
            {id: "dos-irradie", label: "Irradie dans la jambe", description: "Douleur au dos qui descend dans la jambe"},
        ]
      },
      {
        id: "articulations",
        label: "Articulations",
        icon: Bone,
        children: [
            { id: "articulation-gonflee", label: "Articulation gonflée et rouge", description: "Douleur avec gonflement et rougeur d'une articulation"},
            { id: "articulation-raide", label: "Raideur matinale", description: "Douleur et raideur dans les articulations le matin"},
            { id: "douleur-mouvement", label: "Douleur au mouvement", description: "Douleur articulaire qui s'aggrave avec le mouvement"},
        ]
      }
    ],
  },
  {
    id: "respiration",
    label: "Gêne respiratoire",
    icon: Wind,
    children: [
      { id: "essoufflement-effort", label: "Essoufflement à l'effort", description: "Essoufflement lors d'une activité physique" },
      { id: "essoufflement-repos", label: "Essoufflement au repos", description: "Essoufflement sans faire d'effort" },
      { 
        id: "toux", 
        label: "Toux",
        children: [
            { id: "toux-seche", label: "Toux sèche et irritante", description: "Toux sèche qui irrite la gorge" },
            { id: "toux-grasse", label: "Toux grasse (avec glaires)", description: "Toux grasse avec expectorations" },
            { id: "toux-nocturne", label: "Toux principalement la nuit", description: "Toux qui s'intensifie la nuit" },
        ]
      },
      { id: "respiration-sifflante", label: "Respiration sifflante", description: "Sifflement audible lors de la respiration" },
      { id: "douleur-respiration", label: "Douleur en respirant profondément", description: "Douleur thoracique à l'inspiration profonde"},
    ],
  },
  {
    id: "fievre",
    label: "Fièvre / Température",
    icon: Thermometer,
    children: [
      { 
        id: "fievre-legere", 
        label: "Légère (37.5-38.4°C)", 
        children: [
            { id: "fievre-legere-courte", label: "Depuis 1-2 jours", description: "Fièvre légère depuis 1 à 2 jours" },
            { id: "fievre-legere-longue", label: "Depuis plus de 3 jours", description: "Fièvre légère depuis plus de 3 jours" },
        ]
       },
      { id: "fievre-moderee", label: "Modérée (38.5-39.4°C)", description: "Fièvre modérée (38.5-39.4°C)" },
      { id: "fievre-elevee", label: "Élevée (>39.5°C)", description: "Fièvre élevée (plus de 39.5°C)" },
      { id: "fievre-frissons", label: "Avec frissons et sueurs", description: "Fièvre accompagnée de frissons et/ou de sueurs" },
    ],
  },
   {
    id: "troubles-digestifs",
    label: "Troubles digestifs",
    icon: Waves,
    children: [
      { id: "nausees-vomissements", label: "Nausées ou vomissements", description: "Envie de vomir ou vomissements" },
      { id: "diarrhee", label: "Diarrhée", description: "Selles liquides et fréquentes" },
      { id: "constipation", label: "Constipation", description: "Difficulté à évacuer les selles" },
      { id: "ballonnements", label: "Ballonnements et gaz", description: "Sensation de ventre gonflé et gaz excessifs" },
      { id: "perte-appetit", label: "Perte d'appétit", description: "Absence de faim"},
    ],
  },
  {
    id: "troubles-orl",
    label: "Gorge, Nez, Oreilles",
    icon: Ear,
    children: [
      { id: "mal-gorge", label: "Mal de gorge", description: "Douleur ou irritation de la gorge" },
      { id: "nez-bouche", label: "Nez bouché", description: "Congestion nasale" },
      { id: "ecoulement-nasal", label: "Écoulement nasal", description: "Nez qui coule (clair ou coloré)" },
      { id: "douleur-oreille", label: "Douleur d'oreille", description: "Douleur dans une ou les deux oreilles" },
      { id: "sinus-douloureux", label: "Sinus douloureux", description: "Douleur au niveau du front ou des joues"},
    ],
  },
  {
    id: "peau",
    label: "Problèmes de peau",
    icon: Sheet,
    children: [
      { id: "eruption-cutanee", label: "Éruption (boutons, plaques rouges)", description: "Apparition de boutons ou de plaques sur la peau" },
      { id: "demangeaisons", label: "Démangeaisons", description: "Sensation qui pousse à se gratter" },
      { id: "secheresse-peau", label: "Peau sèche ou qui pèle", description: "Peau sèche ou desquamation" },
      { id: "lesion-inhabituelle", label: "Lésion ou grain de beauté inhabituel", description: "Apparition ou modification d'une lésion cutanée" },
    ]
  },
   {
    id: "etat-general",
    label: "État général / Neurologique",
    icon: BrainCircuit,
    children: [
      { id: "fatigue-inhabituelle", label: "Fatigue intense et inhabituelle", description: "Grande fatigue qui ne passe pas avec le repos" },
      { id: "vertiges-etourdissements", label: "Vertiges ou étourdissements", description: "Sensation que la tête tourne" },
      { id: "somnolence", label: "Somnolence excessive", description: "Envie de dormir constante durant la journée" },
      { id: "trouble-concentration", label: "Difficulté de concentration", description: "Difficulté à se concentrer ou confusion"},
    ],
  },
  {
    id: "troubles-yeux",
    label: "Troubles oculaires",
    icon: Eye,
    children: [
        { id: "yeux-rouges", label: "Yeux rouges ou irrités", description: "Rougeur ou irritation des yeux" },
        { id: "vision-floue", label: "Vision floue", description: "Vue qui devient trouble" },
        { id: "secheresse-oculaire", label: "Sensation de sécheresse / sable", description: "Sensation de corps étranger ou de sécheresse dans les yeux" },
        { id: "ecoulement-oeil", label: "Écoulement oculaire", description: "Larmoiement excessif ou écoulement purulent" },
        { id: "sensibilite-lumiere", label: "Sensibilité à la lumière", description: "La lumière vive est douloureuse ou gênante"},
    ]
  }
];
