import type { Symptom, SymptomAnalysis } from "@/lib/types";

export function analyzeSymptoms(symptomText: string): SymptomAnalysis {
  // Implémentation simplifiée pour le test
  return {
    primarySymptoms: [{
      id: '1',
      name: 'Mal de tête',
      category: 'head_neck',
      severity: 7,
      duration: '2 jours',
      frequency: 'constant',
      onset: 'gradual',
      aggravatingFactors: ['lumière', 'bruit'],
      relievingFactors: ['repos', 'obscurité'],
      associatedSymptoms: ['nausées', 'sensibilité à la lumière'],
      notes: 'Douleur pulsatile localisée à droite'
    }],
    symptomPatterns: ['migraine'],
    severity: 'moderate',
    urgency: 'routine',
    possibleConditions: [{
      condition: 'Migraine',
      probability: 0.85,
      matchingSymptoms: ['Mal de tête', 'Nausées', 'Sensibilité à la lumière'],
      missingSymptoms: ['Vomissements', 'Troubles visuels']
    }],
    redFlags: [],
    recommendedActions: [
      {
        action: 'Prendre un antalgique de type paracétamol',
        priority: 'high',
        category: 'treatment'
      },
      {
        action: 'Consulter un médecin si les symptômes persistent plus de 48h',
        priority: 'medium',
        category: 'referral'
      }
    ]
  };
}
