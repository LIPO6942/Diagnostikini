export interface PreciseMedication {
  id: string;
  name: string;
  genericName: string;
  dosage: string;
  frequency: string;
  duration: string;
  description: string;
  type: 'prescription' | 'otc' | 'natural';
  category: 'analgesic' | 'anti_inflammatory' | 'antibiotic' | 'antihistamine' | 'antipyretic' | 'other';
  sideEffects: string[];
  contraindications: string[];
  interactions: string[];
  notes: string;
}

export function getPreciseMedications(
  diagnosis: string,
  severity: 'mild' | 'moderate' | 'severe',
  symptoms: string[],
  medicalHistory: string[] = []
): PreciseMedication[] {
  // Base de données de médicaments (simplifiée pour l'exemple)
  const medications: Record<string, PreciseMedication> = {
    // Analgésiques
    'paracetamol': {
      id: 'med-001',
      name: 'Doliprane',
      genericName: 'Paracétamol',
      dosage: '1000mg',
      frequency: 'Toutes les 6-8 heures',
      duration: '3-5 jours maximum',
      description: 'Antalgique et antipyrétique. Soulage la douleur et fait baisser la fièvre.',
      type: 'otc',
      category: 'analgesic',
      sideEffects: ['Rare: réactions cutanées', 'Très rare: atteinte hépatique en cas de surdosage'],
      contraindications: ['Insuffisance hépatique sévère', 'Allergie au paracétamol'],
      interactions: ['Prudence avec l\'alcool', 'Renforce l\'effet des anticoagulants oraux'],
      notes: 'Ne pas dépasser 3g par jour chez l\'adulte.'
    },
    'ibuprofene': {
      id: 'med-002',
      name: 'Advil',
      genericName: 'Ibuprofène',
      dosage: '200-400mg',
      frequency: 'Toutes les 6-8 heures',
      duration: '3-5 jours maximum',
      description: 'Anti-inflammatoire non stéroïdien (AINS). Soulage la douleur, la fièvre et l\'inflammation.',
      type: 'otc',
      category: 'anti_inflammatory',
      sideEffects: ['Brûlures d\'estomac', 'Ulcères', 'Troubles rénaux à fortes doses'],
      contraindications: ['Ulcère gastro-duodénal', 'Insuffisance rénale', '3ème trimestre de grossesse'],
      interactions: ['Anticoagulants', 'Diurétiques', 'Lithium'],
      notes: 'À prendre au cours des repas avec un grand verre d\'eau.'
    },
    
    // Antibiotiques (sur ordonnance uniquement)
    'amoxicilline': {
      id: 'med-101',
      name: 'Clamoxyl',
      genericName: 'Amoxicilline',
      dosage: '500mg-1g',
      frequency: 'Toutes les 8 heures',
      duration: '5-10 jours selon indication',
      description: 'Antibiotique de la famille des pénicillines, utilisé pour traiter les infections bactériennes.',
      type: 'prescription',
      category: 'antibiotic',
      sideEffects: ['Diarrhée', 'Éruptions cutanées', 'Candidose'],
      contraindications: ['Allergie aux pénicillines', 'Mononucléose infectieuse'],
      interactions: ['Contraceptifs oraux (peut diminuer leur efficacité)'],
      notes: 'À prendre à distance des repas pour une meilleure absorption.'
    },
    
    // Antihistaminiques
    'cetirizine': {
      id: 'med-201',
      name: 'Zyrtec',
      genericName: 'Cétirizine',
      dosage: '10mg',
      frequency: '1 fois par jour',
      duration: 'Selon besoin',
      description: 'Antihistaminique H1 de deuxième génération. Traite les symptômes des allergies.',
      type: 'otc',
      category: 'antihistamine',
      sideEffects: ['Somnolence (rare)', 'Sécheresse buccale', 'Maux de tête'],
      contraindications: ['Insuffisance rénale sévère', 'Allergie à la cétirizine'],
      interactions: ['Dépresseurs du SNC (alcool, sédatifs)'],
      notes: 'Préférer la prise le soir en cas de somnolence.'
    },
    
    // Remèdes naturels
    'miel': {
      id: 'med-301',
      name: 'Miel de thym',
      genericName: 'Miel',
      dosage: '1-2 cuillères à café',
      frequency: '3-4 fois par jour',
      duration: 'Selon besoin',
      description: 'Adoucit la gorge et possède des propriétés antibactériennes légères.',
      type: 'natural',
      category: 'other',
      sideEffects: ['Très rares, sauf en cas d\'allergie'],
      contraindications: ['Allergie aux produits de la ruche', 'Diabète (à utiliser avec prudence)'],
      interactions: ['Aucune connue'],
      notes: 'Ne pas donner aux nourrissons de moins de 1 an (risque de botulisme).'
    }
  };

  // Logique de sélection des médicaments en fonction du diagnostic
  const selectedMedications: PreciseMedication[] = [];
  const diagnosisLower = diagnosis.toLowerCase();

  // Ajout de médicaments en fonction du diagnostic
  if (diagnosisLower.includes('migraine') || diagnosisLower.includes('mal de tête')) {
    selectedMedications.push(medications['paracetamol']);
    
    if (severity === 'moderate' || severity === 'severe') {
      selectedMedications.push(medications['ibuprofene']);
    }
  }

  if (diagnosisLower.includes('infection') || diagnosisLower.includes('angine') || diagnosisLower.includes('otite')) {
    selectedMedications.push(medications['amoxicilline']);
  }

  if (diagnosisLower.includes('allergie') || symptoms.some(s => s.toLowerCase().includes('rhinite') || s.toLowerCase().includes('urticaire'))) {
    selectedMedications.push(medications['cetirizine']);
  }

  // Ajout de remèdes naturels complémentaires
  if (symptoms.some(s => s.toLowerCase().includes('toux') || s.toLowerCase().includes('gorge'))) {
    selectedMedications.push(medications['miel']);
  }

  // Filtrage en fonction des antécédents médicaux
  return selectedMedications.filter(med => {
    // Exclure les médicaments contre-indiqués
    const hasContraindication = med.contraindications.some(contra => 
      medicalHistory.some(history => 
        history.toLowerCase().includes(contra.toLowerCase())
      )
    );
    
    return !hasContraindication;
  });
}
