/**
 * @fileoverview Données structurées sur les sports et leurs impacts biomécaniques
 * pour affiner le diagnostic en fonction de la pratique sportive
 */

export type BiomechanicalTag =
    | 'charge-lombaire'
    | 'torsion-tronc'
    | 'surcharge-tendineuse'
    | 'compression-disques'
    | 'impulsions-repetees'
    | 'charge-axiale'
    | 'rotation-epaule'
    | 'hyperextension-lombaire'
    | 'impact-articulations'
    | 'charge-excentrique'
    | 'mouvements-explosifs'
    | 'endurance-cardiovasculaire'
    | 'contrainte-menisque'
    | 'surcharge-achilleen'
    | 'stress-cervical'
    | 'flexion-repetee'
    | 'charge-unilaterale';

export type SportCategory =
    | 'impact'
    | 'charge-axiale'
    | 'endurance'
    | 'rotation-flexion'
    | 'combat'
    | 'raquette'
    | 'aquatique';

export interface Sport {
    id: string;
    name: string;
    nameTunisian: string;
    category: SportCategory;
    biomechanicalTags: BiomechanicalTag[];
    commonInjuries: string[];
    adaptiveQuestions: AdaptiveQuestion[];
}

export interface AdaptiveQuestion {
    id: string;
    question: string;
    questionTunisian: string;
    options: {
        id: string;
        label: string;
        labelTunisian: string;
        diagnosticWeight: number; // Poids pour le diagnostic (0-1)
    }[];
}

export const sportsDatabase: Sport[] = [
    // ==================== SPORTS D'IMPACT ====================
    {
        id: 'football',
        name: 'Football',
        nameTunisian: 'كرة القدم',
        category: 'impact',
        biomechanicalTags: [
            'impulsions-repetees',
            'torsion-tronc',
            'impact-articulations',
            'contrainte-menisque',
            'mouvements-explosifs'
        ],
        commonInjuries: [
            'Entorse de cheville',
            'Lésion ligamentaire genou',
            'Pubalgie',
            'Tendinite rotulienne',
            'Déchirure musculaire'
        ],
        adaptiveQuestions: [
            {
                id: 'football-frequency',
                question: 'Fréquence d\'entraînement par semaine ?',
                questionTunisian: 'شحال مرة تتمرن في الأسبوع؟',
                options: [
                    { id: '1-2', label: '1-2 fois', labelTunisian: 'مرة ولا زوز', diagnosticWeight: 0.3 },
                    { id: '3-4', label: '3-4 fois', labelTunisian: '3-4 مرات', diagnosticWeight: 0.6 },
                    { id: '5+', label: '5+ fois (intensif)', labelTunisian: '5+ مرات', diagnosticWeight: 0.9 }
                ]
            },
            {
                id: 'football-surface',
                question: 'Type de terrain principal ?',
                questionTunisian: 'نوع الملعب؟',
                options: [
                    { id: 'synthetique', label: 'Synthétique', labelTunisian: 'صناعي', diagnosticWeight: 0.7 },
                    { id: 'gazon', label: 'Gazon naturel', labelTunisian: 'عشب طبيعي', diagnosticWeight: 0.4 },
                    { id: 'dur', label: 'Terrain dur/béton', labelTunisian: 'أرض صلبة', diagnosticWeight: 0.9 }
                ]
            },
            {
                id: 'football-position',
                question: 'Votre position ?',
                questionTunisian: 'مركزك؟',
                options: [
                    { id: 'attaquant', label: 'Attaquant (sprints)', labelTunisian: 'مهاجم', diagnosticWeight: 0.8 },
                    { id: 'milieu', label: 'Milieu (endurance)', labelTunisian: 'وسط', diagnosticWeight: 0.6 },
                    { id: 'defenseur', label: 'Défenseur (contacts)', labelTunisian: 'مدافع', diagnosticWeight: 0.7 }
                ]
            }
        ]
    },
    {
        id: 'basketball',
        name: 'Basketball',
        nameTunisian: 'كرة السلة',
        category: 'impact',
        biomechanicalTags: [
            'impulsions-repetees',
            'impact-articulations',
            'contrainte-menisque',
            'surcharge-achilleen',
            'mouvements-explosifs'
        ],
        commonInjuries: [
            'Entorse de cheville',
            'Tendinite rotulienne',
            'Tendinite d\'Achille',
            'Lombalgie',
            'Entorse doigts'
        ],
        adaptiveQuestions: [
            {
                id: 'basketball-jumps',
                question: 'Nombre de sauts par séance ?',
                questionTunisian: 'شحال نطة في التمرين؟',
                options: [
                    { id: 'low', label: 'Peu (\u003c50)', labelTunisian: 'قليل', diagnosticWeight: 0.3 },
                    { id: 'medium', label: 'Modéré (50-100)', labelTunisian: 'متوسط', diagnosticWeight: 0.6 },
                    { id: 'high', label: 'Beaucoup (\u003e100)', labelTunisian: 'برشا', diagnosticWeight: 0.9 }
                ]
            }
        ]
    },
    {
        id: 'handball',
        name: 'Handball',
        nameTunisian: 'كرة اليد',
        category: 'impact',
        biomechanicalTags: [
            'rotation-epaule',
            'torsion-tronc',
            'impulsions-repetees',
            'impact-articulations',
            'mouvements-explosifs'
        ],
        commonInjuries: [
            'Tendinite épaule',
            'Entorse cheville',
            'Lésion ligamentaire genou',
            'Lombalgie',
            'Capsulite épaule'
        ],
        adaptiveQuestions: []
    },

    // ==================== ARTS MARTIAUX & COMBAT ====================
    {
        id: 'boxe',
        name: 'Boxe / Kickboxing',
        nameTunisian: 'الملاكمة',
        category: 'combat',
        biomechanicalTags: [
            'torsion-tronc',
            'rotation-epaule',
            'impact-articulations',
            'mouvements-explosifs',
            'stress-cervical'
        ],
        commonInjuries: [
            'Tendinite épaule',
            'Lombalgie',
            'Entorse poignet',
            'Cervicalgie',
            'Traumatisme crânien'
        ],
        adaptiveQuestions: [
            {
                id: 'boxe-type',
                question: 'Type de pratique ?',
                questionTunisian: 'نوع التمرين؟',
                options: [
                    { id: 'technique', label: 'Technique/Shadow', labelTunisian: 'تقنية', diagnosticWeight: 0.3 },
                    { id: 'sac', label: 'Sac de frappe', labelTunisian: 'كيس اللكم', diagnosticWeight: 0.6 },
                    { id: 'sparring', label: 'Sparring/Combat', labelTunisian: 'قتال', diagnosticWeight: 0.9 }
                ]
            }
        ]
    },
    {
        id: 'judo',
        name: 'Judo / Jiu-Jitsu',
        nameTunisian: 'الجيدو',
        category: 'combat',
        biomechanicalTags: [
            'torsion-tronc',
            'impact-articulations',
            'charge-excentrique',
            'stress-cervical',
            'flexion-repetee'
        ],
        commonInjuries: [
            'Entorse genou',
            'Cervicalgie',
            'Lombalgie',
            'Entorse épaule',
            'Lésion ligamentaire'
        ],
        adaptiveQuestions: []
    },

    // ==================== SPORTS DE CHARGE AXIALE ====================
    {
        id: 'musculation',
        name: 'Musculation / Fitness',
        nameTunisian: 'كمال الأجسام',
        category: 'charge-axiale',
        biomechanicalTags: [
            'charge-lombaire',
            'charge-axiale',
            'compression-disques',
            'surcharge-tendineuse',
            'charge-excentrique'
        ],
        commonInjuries: [
            'Lombalgie',
            'Hernie discale',
            'Tendinite épaule',
            'Tendinite coude',
            'Déchirure musculaire'
        ],
        adaptiveQuestions: [
            {
                id: 'muscu-charges',
                question: 'Type de charges utilisées ?',
                questionTunisian: 'نوع الأوزان؟',
                options: [
                    { id: 'legeres', label: 'Légères (endurance)', labelTunisian: 'خفيفة', diagnosticWeight: 0.3 },
                    { id: 'moderees', label: 'Modérées', labelTunisian: 'متوسطة', diagnosticWeight: 0.5 },
                    { id: 'lourdes', label: 'Lourdes (force)', labelTunisian: 'ثقيلة', diagnosticWeight: 0.9 }
                ]
            },
            {
                id: 'muscu-overhead',
                question: 'Exercices au-dessus de la tête fréquents ?',
                questionTunisian: 'تمارين فوق الراس برشا؟',
                options: [
                    { id: 'non', label: 'Rarement', labelTunisian: 'نادرا', diagnosticWeight: 0.2 },
                    { id: 'parfois', label: 'Parfois', labelTunisian: 'أحيانا', diagnosticWeight: 0.5 },
                    { id: 'souvent', label: 'Souvent', labelTunisian: 'برشا', diagnosticWeight: 0.9 }
                ]
            },
            {
                id: 'muscu-squat',
                question: 'Squats / Deadlifts réguliers ?',
                questionTunisian: 'سكوات / ديدليفت بانتظام؟',
                options: [
                    { id: 'non', label: 'Non', labelTunisian: 'لا', diagnosticWeight: 0.1 },
                    { id: 'oui-leger', label: 'Oui, charges modérées', labelTunisian: 'إي، أوزان متوسطة', diagnosticWeight: 0.5 },
                    { id: 'oui-lourd', label: 'Oui, charges lourdes', labelTunisian: 'إي، أوزان ثقيلة', diagnosticWeight: 0.95 }
                ]
            }
        ]
    },
    {
        id: 'crossfit',
        name: 'CrossFit',
        nameTunisian: 'كروسفيت',
        category: 'charge-axiale',
        biomechanicalTags: [
            'charge-lombaire',
            'charge-axiale',
            'mouvements-explosifs',
            'surcharge-tendineuse',
            'impulsions-repetees',
            'compression-disques'
        ],
        commonInjuries: [
            'Lombalgie',
            'Tendinite épaule',
            'Rhabdomyolyse',
            'Hernie discale',
            'Tendinite rotulienne'
        ],
        adaptiveQuestions: [
            {
                id: 'crossfit-wod',
                question: 'Intensité des WODs ?',
                questionTunisian: 'شدة التمارين؟',
                options: [
                    { id: 'scaled', label: 'Scaled (adapté)', labelTunisian: 'مكيف', diagnosticWeight: 0.4 },
                    { id: 'rx', label: 'RX (standard)', labelTunisian: 'عادي', diagnosticWeight: 0.7 },
                    { id: 'rx+', label: 'RX+ (avancé)', labelTunisian: 'متقدم', diagnosticWeight: 0.95 }
                ]
            }
        ]
    },
    {
        id: 'gymnastique',
        name: 'Gymnastique',
        nameTunisian: 'الجمباز',
        category: 'charge-axiale',
        biomechanicalTags: [
            'hyperextension-lombaire',
            'charge-axiale',
            'surcharge-tendineuse',
            'impact-articulations',
            'rotation-epaule'
        ],
        commonInjuries: [
            'Lombalgie',
            'Spondylolyse',
            'Tendinite poignet',
            'Entorse cheville',
            'Lésion ligamentaire'
        ],
        adaptiveQuestions: []
    },

    // ==================== SPORTS D'ENDURANCE ====================
    {
        id: 'course',
        name: 'Course à pied',
        nameTunisian: 'الجري',
        category: 'endurance',
        biomechanicalTags: [
            'impulsions-repetees',
            'surcharge-achilleen',
            'contrainte-menisque',
            'impact-articulations',
            'endurance-cardiovasculaire'
        ],
        commonInjuries: [
            'Périostite tibiale',
            'Tendinite d\'Achille',
            'Syndrome rotulien',
            'Fasciite plantaire',
            'Fracture de fatigue'
        ],
        adaptiveQuestions: [
            {
                id: 'course-surface',
                question: 'Type de terrain ?',
                questionTunisian: 'نوع الأرض؟',
                options: [
                    { id: 'piste', label: 'Piste/Tapis', labelTunisian: 'مضمار/تابي', diagnosticWeight: 0.3 },
                    { id: 'bitume', label: 'Bitume/Asphalte', labelTunisian: 'أسفلت', diagnosticWeight: 0.8 },
                    { id: 'trail', label: 'Trail/Irrégulier', labelTunisian: 'جبال/غير مستوي', diagnosticWeight: 0.7 }
                ]
            },
            {
                id: 'course-volume',
                question: 'Augmentation récente du volume ?',
                questionTunisian: 'زدت في المسافة مؤخرا؟',
                options: [
                    { id: 'non', label: 'Non, stable', labelTunisian: 'لا، ثابت', diagnosticWeight: 0.2 },
                    { id: 'progressive', label: 'Oui, progressive', labelTunisian: 'إي، تدريجيا', diagnosticWeight: 0.5 },
                    { id: 'brutale', label: 'Oui, brutale (\u003e20%)', labelTunisian: 'إي، فجأة', diagnosticWeight: 0.95 }
                ]
            },
            {
                id: 'course-chaussures',
                question: 'Âge des chaussures ?',
                questionTunisian: 'عمر الصباط؟',
                options: [
                    { id: 'recent', label: 'Récentes (\u003c3 mois)', labelTunisian: 'جديد', diagnosticWeight: 0.2 },
                    { id: 'moyen', label: '3-6 mois', labelTunisian: '3-6 شهور', diagnosticWeight: 0.4 },
                    { id: 'vieux', label: '\u003e6 mois/usées', labelTunisian: 'قديم/مستهلك', diagnosticWeight: 0.8 }
                ]
            }
        ]
    },
    {
        id: 'cyclisme',
        name: 'Cyclisme / Vélo',
        nameTunisian: 'الدراجة',
        category: 'endurance',
        biomechanicalTags: [
            'flexion-repetee',
            'surcharge-tendineuse',
            'charge-lombaire',
            'endurance-cardiovasculaire'
        ],
        commonInjuries: [
            'Lombalgie',
            'Tendinite rotulienne',
            'Syndrome rotulien',
            'Cervicalgie',
            'Tendinite d\'Achille'
        ],
        adaptiveQuestions: [
            {
                id: 'velo-position',
                question: 'Position sur le vélo ?',
                questionTunisian: 'وضعية على الدراجة؟',
                options: [
                    { id: 'confort', label: 'Confort (droite)', labelTunisian: 'مريحة', diagnosticWeight: 0.3 },
                    { id: 'sport', label: 'Sportive (penchée)', labelTunisian: 'رياضية', diagnosticWeight: 0.6 },
                    { id: 'course', label: 'Course (très penchée)', labelTunisian: 'سباق', diagnosticWeight: 0.9 }
                ]
            },
            {
                id: 'velo-reglage',
                question: 'Réglage vélo récent ?',
                questionTunisian: 'ضبط الدراجة مؤخرا؟',
                options: [
                    { id: 'oui', label: 'Oui, professionnel', labelTunisian: 'إي، محترف', diagnosticWeight: 0.2 },
                    { id: 'perso', label: 'Oui, moi-même', labelTunisian: 'إي، بروحي', diagnosticWeight: 0.5 },
                    { id: 'non', label: 'Non, jamais ajusté', labelTunisian: 'لا، أبدا', diagnosticWeight: 0.9 }
                ]
            }
        ]
    },
    {
        id: 'natation',
        name: 'Natation',
        nameTunisian: 'السباحة',
        category: 'aquatique',
        biomechanicalTags: [
            'rotation-epaule',
            'surcharge-tendineuse',
            'endurance-cardiovasculaire',
            'flexion-repetee'
        ],
        commonInjuries: [
            'Tendinite épaule',
            'Capsulite épaule',
            'Lombalgie',
            'Cervicalgie',
            'Tendinite genou'
        ],
        adaptiveQuestions: [
            {
                id: 'natation-nage',
                question: 'Nage principale ?',
                questionTunisian: 'نوع السباحة؟',
                options: [
                    { id: 'crawl', label: 'Crawl', labelTunisian: 'كرول', diagnosticWeight: 0.7 },
                    { id: 'brasse', label: 'Brasse', labelTunisian: 'براس', diagnosticWeight: 0.6 },
                    { id: 'papillon', label: 'Papillon', labelTunisian: 'فراشة', diagnosticWeight: 0.95 },
                    { id: 'dos', label: 'Dos crawlé', labelTunisian: 'على الظهر', diagnosticWeight: 0.5 }
                ]
            }
        ]
    },

    // ==================== SPORTS DE ROTATION/FLEXION ====================
    {
        id: 'tennis',
        name: 'Tennis',
        nameTunisian: 'التنس',
        category: 'raquette',
        biomechanicalTags: [
            'torsion-tronc',
            'rotation-epaule',
            'surcharge-tendineuse',
            'impulsions-repetees',
            'charge-unilaterale'
        ],
        commonInjuries: [
            'Tennis elbow',
            'Tendinite épaule',
            'Lombalgie',
            'Entorse cheville',
            'Tendinite poignet'
        ],
        adaptiveQuestions: [
            {
                id: 'tennis-rotation',
                question: 'La rotation du tronc déclenche la douleur ?',
                questionTunisian: 'لف الجسم يسبب الوجيعة؟',
                options: [
                    { id: 'non', label: 'Non', labelTunisian: 'لا', diagnosticWeight: 0.1 },
                    { id: 'parfois', label: 'Parfois', labelTunisian: 'أحيانا', diagnosticWeight: 0.5 },
                    { id: 'toujours', label: 'Systématiquement', labelTunisian: 'ديما', diagnosticWeight: 0.95 }
                ]
            },
            {
                id: 'tennis-service',
                question: 'Service puissant/fréquent ?',
                questionTunisian: 'إرسال قوي/متكرر؟',
                options: [
                    { id: 'non', label: 'Rarement', labelTunisian: 'نادرا', diagnosticWeight: 0.2 },
                    { id: 'moyen', label: 'Modéré', labelTunisian: 'متوسط', diagnosticWeight: 0.5 },
                    { id: 'intense', label: 'Très intense', labelTunisian: 'قوي برشا', diagnosticWeight: 0.9 }
                ]
            }
        ]
    },
    {
        id: 'padel',
        name: 'Padel',
        nameTunisian: 'بادل',
        category: 'raquette',
        biomechanicalTags: [
            'torsion-tronc',
            'rotation-epaule',
            'surcharge-tendineuse',
            'impulsions-repetees',
            'mouvements-explosifs'
        ],
        commonInjuries: [
            'Tennis elbow',
            'Tendinite épaule',
            'Lombalgie',
            'Entorse cheville',
            'Capsulite épaule'
        ],
        adaptiveQuestions: [
            {
                id: 'padel-smash',
                question: 'Fréquence des smashes ?',
                questionTunisian: 'شحال مرة تضرب سماش؟',
                options: [
                    { id: 'peu', label: 'Peu', labelTunisian: 'قليل', diagnosticWeight: 0.3 },
                    { id: 'moyen', label: 'Moyen', labelTunisian: 'متوسط', diagnosticWeight: 0.6 },
                    { id: 'beaucoup', label: 'Beaucoup', labelTunisian: 'برشا', diagnosticWeight: 0.9 }
                ]
            }
        ]
    },
    {
        id: 'golf',
        name: 'Golf',
        nameTunisian: 'الغولف',
        category: 'rotation-flexion',
        biomechanicalTags: [
            'torsion-tronc',
            'hyperextension-lombaire',
            'rotation-epaule',
            'charge-unilaterale'
        ],
        commonInjuries: [
            'Lombalgie',
            'Tendinite coude',
            'Hernie discale',
            'Tendinite épaule',
            'Cervicalgie'
        ],
        adaptiveQuestions: [
            {
                id: 'golf-swings',
                question: 'Nombre de swings par session ?',
                questionTunisian: 'شحال سوينغ في الحصة؟',
                options: [
                    { id: 'peu', label: '\u003c50', labelTunisian: 'أقل من 50', diagnosticWeight: 0.3 },
                    { id: 'moyen', label: '50-100', labelTunisian: '50-100', diagnosticWeight: 0.6 },
                    { id: 'beaucoup', label: '\u003e100', labelTunisian: 'أكثر من 100', diagnosticWeight: 0.9 }
                ]
            }
        ]
    },
    {
        id: 'danse',
        name: 'Danse (Hip-hop, Contemporaine)',
        nameTunisian: 'الرقص',
        category: 'rotation-flexion',
        biomechanicalTags: [
            'torsion-tronc',
            'hyperextension-lombaire',
            'impulsions-repetees',
            'flexion-repetee',
            'mouvements-explosifs'
        ],
        commonInjuries: [
            'Lombalgie',
            'Entorse cheville',
            'Tendinite d\'Achille',
            'Déchirure musculaire',
            'Entorse genou'
        ],
        adaptiveQuestions: []
    }
];

/**
 * Symptômes concernés par les questions sportives
 */
export const sportRelatedSymptomIds = [
    // Douleurs dos
    'dos-cervicales',
    'dos-dorsales',
    'dos-lombaires',
    'dos-sciatique',

    // Douleurs membres
    'membre-epaule',
    'membre-coude',
    'membre-poignet',
    'membre-hanche',
    'membre-genou',
    'membre-cheville',
    'membre-muscle',

    // Essoufflement
    'souffle-court-effort',

    // Traumatismes
    'trauma-membre',
    'trauma-chute',

    // Douleurs poitrine (effort)
    'poitrine-gauche',
    'poitrine-centre',
];

/**
 * Retourne les sports pertinents pour un symptôme donné
 */
export function getSportsForSymptom(symptomId: string): Sport[] {
    if (!sportRelatedSymptomIds.includes(symptomId)) {
        return [];
    }

    // Logique de filtrage basée sur le symptôme
    if (symptomId.includes('dos-lombaires') || symptomId.includes('dos-sciatique')) {
        return sportsDatabase.filter(sport =>
            sport.biomechanicalTags.includes('charge-lombaire') ||
            sport.biomechanicalTags.includes('torsion-tronc') ||
            sport.biomechanicalTags.includes('compression-disques')
        );
    }

    if (symptomId.includes('epaule')) {
        return sportsDatabase.filter(sport =>
            sport.biomechanicalTags.includes('rotation-epaule') ||
            sport.biomechanicalTags.includes('surcharge-tendineuse')
        );
    }

    if (symptomId.includes('genou') || symptomId.includes('cheville')) {
        return sportsDatabase.filter(sport =>
            sport.biomechanicalTags.includes('impulsions-repetees') ||
            sport.biomechanicalTags.includes('impact-articulations') ||
            sport.biomechanicalTags.includes('contrainte-menisque')
        );
    }

    // Par défaut, retourner tous les sports
    return sportsDatabase;
}
