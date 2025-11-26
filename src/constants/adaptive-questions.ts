/**
 * @fileoverview Base de données de questions de clarification intelligentes et adaptatives
 * Chaque diagnostic a des questions spécifiques avec le type de réponse le plus pertinent
 */

import type { QuestionSet, AdaptiveClarificationQuestion } from '@/types/clarification-types';

export const adaptiveQuestionSets: Record<string, QuestionSet> = {
    // ==================== NEUROLOGIQUES ====================
    'migraine': {
        diagnosis: 'Migraine',
        minQuestionsForConfidence: 4,
        questions: [
            {
                id: 'migraine-intensity',
                text: 'Sur une échelle de 1 à 10, quelle est l\'intensité de votre douleur ?',
                textTunisian: 'من 1 لـ 10، قداش قوة الوجيعة؟',
                type: 'scale',
                min: 1,
                max: 10,
                required: true,
                category: 'Intensité',
                clinicalRelevance: 'Les migraines sont généralement d\'intensité modérée à sévère (6-10)'
            },
            {
                id: 'migraine-symptoms',
                text: 'Quels symptômes accompagnent votre mal de tête ?',
                textTunisian: 'شنوة الأعراض اللي معاك؟',
                type: 'multiple-choice',
                options: [
                    { id: 'nausea', label: 'Nausées ou vomissements', labelTunisian: 'غثيان ولا ردان', diagnosticWeight: 0.8 },
                    { id: 'photophobia', label: 'Sensibilité à la lumière', labelTunisian: 'حساسية للضو', diagnosticWeight: 0.9 },
                    { id: 'phonophobia', label: 'Sensibilité au bruit', labelTunisian: 'حساسية للصوت', diagnosticWeight: 0.8 },
                    { id: 'aura', label: 'Troubles visuels (points lumineux, zigzags)', labelTunisian: 'مشاكل في النظر', diagnosticWeight: 0.95 },
                    { id: 'none', label: 'Aucun de ces symptômes', labelTunisian: 'ما عنديش', diagnosticWeight: 0.2 }
                ],
                required: true,
                category: 'Symptômes associés'
            },
            {
                id: 'migraine-location',
                text: 'Où se situe principalement la douleur ?',
                textTunisian: 'وين الوجيعة بالضبط؟',
                type: 'single-choice',
                options: [
                    { id: 'unilateral', label: 'D\'un seul côté de la tête', labelTunisian: 'في جهة وحدة', diagnosticWeight: 0.9 },
                    { id: 'bilateral', label: 'Des deux côtés', labelTunisian: 'في الزوز جهات', diagnosticWeight: 0.5 },
                    { id: 'frontal', label: 'Front/Yeux', labelTunisian: 'الجبهة/العينين', diagnosticWeight: 0.6 },
                    { id: 'occipital', label: 'Arrière de la tête', labelTunisian: 'من تالي', diagnosticWeight: 0.4 }
                ],
                required: true,
                category: 'Localisation'
            },
            {
                id: 'migraine-duration',
                text: 'Depuis combien de temps dure cette crise ?',
                textTunisian: 'قداش وقت و الوجيعة موجودة؟',
                type: 'duration',
                options: [
                    { id: 'hours-4', label: 'Moins de 4 heures', labelTunisian: 'أقل من 4 ساعات', diagnosticWeight: 0.5 },
                    { id: 'hours-4-24', label: '4 à 24 heures', labelTunisian: '4 لـ 24 ساعة', diagnosticWeight: 0.8 },
                    { id: 'days-1-3', label: '1 à 3 jours', labelTunisian: '1 لـ 3 أيام', diagnosticWeight: 0.9 },
                    { id: 'days-3+', label: 'Plus de 3 jours', labelTunisian: 'أكثر من 3 أيام', diagnosticWeight: 0.6 }
                ],
                required: true,
                category: 'Chronologie'
            },
            {
                id: 'migraine-triggers',
                text: 'Qu\'est-ce qui a pu déclencher cette crise ?',
                textTunisian: 'شنوة سبب الوجيعة؟',
                type: 'multiple-choice',
                options: [
                    { id: 'stress', label: 'Stress ou anxiété', labelTunisian: 'ستريس', diagnosticWeight: 0.7 },
                    { id: 'sleep', label: 'Manque de sommeil', labelTunisian: 'قلة نوم', diagnosticWeight: 0.7 },
                    { id: 'food', label: 'Certains aliments (chocolat, fromage, alcool)', labelTunisian: 'ماكلة معينة', diagnosticWeight: 0.6 },
                    { id: 'hormones', label: 'Période menstruelle (femmes)', labelTunisian: 'العادة الشهرية', diagnosticWeight: 0.8 },
                    { id: 'weather', label: 'Changement de temps', labelTunisian: 'تبدل الجو', diagnosticWeight: 0.5 },
                    { id: 'unknown', label: 'Je ne sais pas', labelTunisian: 'ما نعرفش', diagnosticWeight: 0.3 }
                ],
                category: 'Facteurs déclenchants'
            }
        ]
    },

    // ==================== RESPIRATOIRES ====================
    'grippe': {
        diagnosis: 'Grippe',
        minQuestionsForConfidence: 4,
        questions: [
            {
                id: 'flu-temperature',
                text: 'Quelle est votre température actuelle ?',
                textTunisian: 'قداش درجة حرارتك؟',
                type: 'numeric',
                min: 35,
                max: 42,
                unit: '°C',
                required: true,
                category: 'Signes vitaux',
                clinicalRelevance: 'Fièvre >38.5°C typique de la grippe'
            },
            {
                id: 'flu-symptoms',
                text: 'Quels symptômes présentez-vous ?',
                textTunisian: 'شنوة الأعراض اللي عندك؟',
                type: 'multiple-choice',
                options: [
                    { id: 'fever', label: 'Fièvre et frissons', labelTunisian: 'سخانة و رعشة', diagnosticWeight: 0.9 },
                    { id: 'aches', label: 'Courbatures intenses', labelTunisian: 'وجع في الجسم الكل', diagnosticWeight: 0.9 },
                    { id: 'fatigue', label: 'Fatigue extrême', labelTunisian: 'فشلة قوية', diagnosticWeight: 0.8 },
                    { id: 'cough', label: 'Toux sèche', labelTunisian: 'كحة شايحة', diagnosticWeight: 0.7 },
                    { id: 'throat', label: 'Mal de gorge', labelTunisian: 'وجع قراجم', diagnosticWeight: 0.6 },
                    { id: 'nose', label: 'Nez bouché ou qui coule', labelTunisian: 'خشم مسكر', diagnosticWeight: 0.6 },
                    { id: 'headache', label: 'Maux de tête', labelTunisian: 'صداع', diagnosticWeight: 0.7 }
                ],
                required: true,
                category: 'Symptômes'
            },
            {
                id: 'flu-onset',
                text: 'Comment les symptômes sont-ils apparus ?',
                textTunisian: 'كيفاش بدات الأعراض؟',
                type: 'single-choice',
                options: [
                    { id: 'sudden', label: 'Brutalement (en quelques heures)', labelTunisian: 'فجأة', diagnosticWeight: 0.9 },
                    { id: 'gradual', label: 'Progressivement (sur plusieurs jours)', labelTunisian: 'شوية بشوية', diagnosticWeight: 0.4 }
                ],
                required: true,
                category: 'Chronologie',
                clinicalRelevance: 'Début brutal typique de la grippe vs progressif pour le rhume'
            },
            {
                id: 'flu-duration',
                text: 'Depuis combien de temps avez-vous ces symptômes ?',
                textTunisian: 'قداش وقت و عندك هاذي الأعراض؟',
                type: 'duration',
                options: [
                    { id: 'hours', label: 'Moins de 24 heures', labelTunisian: 'أقل من يوم', diagnosticWeight: 0.7 },
                    { id: 'days-1-3', label: '1 à 3 jours', labelTunisian: '1-3 أيام', diagnosticWeight: 0.9 },
                    { id: 'days-4-7', label: '4 à 7 jours', labelTunisian: '4-7 أيام', diagnosticWeight: 0.7 },
                    { id: 'week+', label: 'Plus d\'une semaine', labelTunisian: 'أكثر من أسبوع', diagnosticWeight: 0.4 }
                ],
                required: true,
                category: 'Chronologie'
            },
            {
                id: 'flu-exposure',
                text: 'Avez-vous été en contact avec des personnes malades ?',
                textTunisian: 'كنت قريب من ناس مرضى؟',
                type: 'yes-no',
                category: 'Contexte épidémiologique'
            }
        ]
    },

    // ==================== DIGESTIFS ====================
    'gastro-enterite': {
        diagnosis: 'Gastro-entérite',
        minQuestionsForConfidence: 4,
        questions: [
            {
                id: 'gastro-symptoms',
                text: 'Quels symptômes digestifs présentez-vous ?',
                textTunisian: 'شنوة الأعراض اللي عندك؟',
                type: 'multiple-choice',
                options: [
                    { id: 'diarrhea', label: 'Diarrhée', labelTunisian: 'جريان جوف', diagnosticWeight: 0.95 },
                    { id: 'vomiting', label: 'Vomissements', labelTunisian: 'ردان', diagnosticWeight: 0.8 },
                    { id: 'nausea', label: 'Nausées', labelTunisian: 'غثيان', diagnosticWeight: 0.7 },
                    { id: 'cramps', label: 'Crampes abdominales', labelTunisian: 'مغص', diagnosticWeight: 0.8 },
                    { id: 'fever', label: 'Fièvre', labelTunisian: 'سخانة', diagnosticWeight: 0.6 }
                ],
                required: true,
                category: 'Symptômes'
            },
            {
                id: 'gastro-frequency',
                text: 'Combien de fois par jour avez-vous des selles liquides ?',
                textTunisian: 'شحال مرة في اليوم عندك إسهال؟',
                type: 'numeric',
                min: 0,
                max: 30,
                unit: 'fois/jour',
                required: true,
                category: 'Fréquence',
                clinicalRelevance: '>6 fois/jour = déshydratation possible'
            },
            {
                id: 'gastro-stool',
                text: 'Aspect des selles :',
                textTunisian: 'شكل البراز:',
                type: 'single-choice',
                options: [
                    { id: 'watery', label: 'Liquides/Eau', labelTunisian: 'ماء', diagnosticWeight: 0.9 },
                    { id: 'soft', label: 'Molles', labelTunisian: 'رخو', diagnosticWeight: 0.7 },
                    { id: 'blood', label: 'Avec du sang', labelTunisian: 'بالدم', diagnosticWeight: 0.5 },
                    { id: 'mucus', label: 'Avec du mucus/glaires', labelTunisian: 'بالرغوة', diagnosticWeight: 0.6 }
                ],
                required: true,
                category: 'Caractéristiques',
                clinicalRelevance: 'Sang = possible infection bactérienne ou complication'
            },
            {
                id: 'gastro-dehydration',
                text: 'Présentez-vous des signes de déshydratation ?',
                textTunisian: 'عندك علامات الجفاف؟',
                type: 'multiple-choice',
                options: [
                    { id: 'thirst', label: 'Soif intense', labelTunisian: 'عطش قوي', diagnosticWeight: 0.7 },
                    { id: 'dry-mouth', label: 'Bouche sèche', labelTunisian: 'فم شايح', diagnosticWeight: 0.7 },
                    { id: 'dark-urine', label: 'Urines foncées', labelTunisian: 'بول غامق', diagnosticWeight: 0.8 },
                    { id: 'dizziness', label: 'Vertiges', labelTunisian: 'دوخة', diagnosticWeight: 0.7 },
                    { id: 'none', label: 'Aucun', labelTunisian: 'ما عنديش', diagnosticWeight: 0.2 }
                ],
                category: 'Complications',
                clinicalRelevance: 'Déshydratation = urgence si sévère'
            },
            {
                id: 'gastro-exposure',
                text: 'D\'autres personnes de votre entourage ont-elles les mêmes symptômes ?',
                textTunisian: 'في ناس أخرين عندهم نفس الأعراض؟',
                type: 'yes-no',
                category: 'Contexte épidémiologique',
                clinicalRelevance: 'Cas groupés = probable origine virale ou alimentaire commune'
            }
        ]
    },

    // ==================== MUSCULO-SQUELETTIQUES ====================
    'lombalgie': {
        diagnosis: 'Lombalgie',
        minQuestionsForConfidence: 5,
        questions: [
            {
                id: 'back-intensity',
                text: 'Intensité de la douleur (1-10) :',
                textTunisian: 'قوة الوجيعة (1-10):',
                type: 'scale',
                min: 1,
                max: 10,
                required: true,
                category: 'Intensité'
            },
            {
                id: 'back-radiation',
                text: 'La douleur irradie-t-elle ?',
                textTunisian: 'الوجيعة تمشي لبلايص أخرى؟',
                type: 'single-choice',
                options: [
                    { id: 'no', label: 'Non, localisée au dos uniquement', labelTunisian: 'لا، في الظهر برك', diagnosticWeight: 0.6 },
                    { id: 'buttock', label: 'Vers la fesse', labelTunisian: 'للفخذ', diagnosticWeight: 0.7 },
                    { id: 'leg', label: 'Descend dans la jambe (sciatique)', labelTunisian: 'تنزل للساق', diagnosticWeight: 0.9 },
                    { id: 'both-legs', label: 'Dans les deux jambes', labelTunisian: 'في الزوز سيقان', diagnosticWeight: 0.95 }
                ],
                required: true,
                category: 'Localisation',
                clinicalRelevance: 'Irradiation bilatérale = urgence possible (syndrome de la queue de cheval)'
            },
            {
                id: 'back-neurological',
                text: 'Présentez-vous des symptômes neurologiques ?',
                textTunisian: 'عندك أعراض عصبية؟',
                type: 'multiple-choice',
                options: [
                    { id: 'tingling', label: 'Fourmillements/Engourdissements', labelTunisian: 'تنميل', diagnosticWeight: 0.8 },
                    { id: 'weakness', label: 'Faiblesse musculaire', labelTunisian: 'ضعف عضلي', diagnosticWeight: 0.9 },
                    { id: 'bladder', label: 'Problèmes urinaires/fécaux', labelTunisian: 'مشاكل بول/براز', diagnosticWeight: 0.95 },
                    { id: 'none', label: 'Aucun', labelTunisian: 'ما عنديش', diagnosticWeight: 0.3 }
                ],
                category: 'Signes neurologiques',
                clinicalRelevance: 'Signes neurologiques = possible compression nerveuse'
            },
            {
                id: 'back-timing',
                text: 'Quand la douleur est-elle pire ?',
                textTunisian: 'وقتاش الوجيعة تكون أقوى؟',
                type: 'single-choice',
                options: [
                    { id: 'morning', label: 'Le matin au réveil', labelTunisian: 'الصباح', diagnosticWeight: 0.6 },
                    { id: 'evening', label: 'Le soir après activité', labelTunisian: 'الليل', diagnosticWeight: 0.7 },
                    { id: 'sitting', label: 'En position assise', labelTunisian: 'كي نقعد', diagnosticWeight: 0.7 },
                    { id: 'standing', label: 'En position debout', labelTunisian: 'كي نوقف', diagnosticWeight: 0.6 },
                    { id: 'movement', label: 'Lors des mouvements', labelTunisian: 'كي نتحرك', diagnosticWeight: 0.8 }
                ],
                required: true,
                category: 'Facteurs aggravants'
            },
            {
                id: 'back-duration',
                text: 'Depuis combien de temps avez-vous mal au dos ?',
                textTunisian: 'قداش وقت و ظهرك يوجعك؟',
                type: 'duration',
                options: [
                    { id: 'acute', label: 'Moins de 6 semaines', labelTunisian: 'أقل من شهر ونص', diagnosticWeight: 0.7 },
                    { id: 'subacute', label: '6 semaines à 3 mois', labelTunisian: '1.5-3 أشهر', diagnosticWeight: 0.6 },
                    { id: 'chronic', label: 'Plus de 3 mois', labelTunisian: 'أكثر من 3 أشهر', diagnosticWeight: 0.8 }
                ],
                required: true,
                category: 'Chronologie',
                clinicalRelevance: '>3 mois = lombalgie chronique'
            },
            {
                id: 'back-trigger',
                text: 'Qu\'est-ce qui a déclenché la douleur ?',
                textTunisian: 'شنوة سبب الوجيعة؟',
                type: 'single-choice',
                options: [
                    { id: 'lifting', label: 'Soulèvement d\'une charge lourde', labelTunisian: 'رفعت حاجة ثقيلة', diagnosticWeight: 0.8 },
                    { id: 'movement', label: 'Mouvement brusque', labelTunisian: 'حركة فجائية', diagnosticWeight: 0.7 },
                    { id: 'gradual', label: 'Apparition progressive', labelTunisian: 'جات شوية بشوية', diagnosticWeight: 0.6 },
                    { id: 'unknown', label: 'Aucune cause identifiée', labelTunisian: 'ما نعرفش', diagnosticWeight: 0.5 }
                ],
                category: 'Facteurs déclenchants'
            }
        ]
    },

    // ==================== CARDIOVASCULAIRES ====================
    'hypertension': {
        diagnosis: 'Hypertension',
        minQuestionsForConfidence: 4,
        questions: [
            {
                id: 'bp-systolic',
                text: 'Quelle est votre tension systolique (le chiffre du haut) ?',
                textTunisian: 'قداش التونسيو (الرقم الفوقاني)؟',
                type: 'numeric',
                min: 80,
                max: 250,
                unit: 'mmHg',
                required: true,
                category: 'Mesures',
                clinicalRelevance: '>140 mmHg = hypertension'
            },
            {
                id: 'bp-symptoms',
                text: 'Quels symptômes ressentez-vous ?',
                textTunisian: 'شنوة الأعراض اللي تحس بيها؟',
                type: 'multiple-choice',
                options: [
                    { id: 'headache', label: 'Maux de tête (surtout le matin)', labelTunisian: 'صداع', diagnosticWeight: 0.7 },
                    { id: 'dizziness', label: 'Vertiges', labelTunisian: 'دوخة', diagnosticWeight: 0.7 },
                    { id: 'tinnitus', label: 'Bourdonnements d\'oreilles', labelTunisian: 'طنين', diagnosticWeight: 0.6 },
                    { id: 'vision', label: 'Vision trouble', labelTunisian: 'ضباب في النظر', diagnosticWeight: 0.7 },
                    { id: 'palpitations', label: 'Palpitations', labelTunisian: 'خفقان', diagnosticWeight: 0.6 },
                    { id: 'none', label: 'Aucun symptôme', labelTunisian: 'ما عنديش', diagnosticWeight: 0.3 }
                ],
                category: 'Symptômes'
            },
            {
                id: 'bp-frequency',
                text: 'À quelle fréquence mesurez-vous votre tension ?',
                textTunisian: 'شحال مرة تقيس التونسيو؟',
                type: 'frequency',
                options: [
                    { id: 'daily', label: 'Quotidiennement', labelTunisian: 'كل يوم', diagnosticWeight: 0.8 },
                    { id: 'weekly', label: 'Hebdomadairement', labelTunisian: 'كل أسبوع', diagnosticWeight: 0.6 },
                    { id: 'monthly', label: 'Mensuellement', labelTunisian: 'كل شهر', diagnosticWeight: 0.4 },
                    { id: 'rarely', label: 'Rarement', labelTunisian: 'نادرا', diagnosticWeight: 0.3 },
                    { id: 'first-time', label: 'Première mesure', labelTunisian: 'أول مرة', diagnosticWeight: 0.5 }
                ],
                category: 'Suivi'
            },
            {
                id: 'bp-treatment',
                text: 'Prenez-vous déjà un traitement pour l\'hypertension ?',
                textTunisian: 'تاخذ دواء للتونسيو؟',
                type: 'yes-no',
                category: 'Traitement'
            }
        ]
    },

    // ==================== GÉNITO-URINAIRE ====================
    'cystite': {
        diagnosis: 'Infection urinaire / Cystite',
        minQuestionsForConfidence: 4,
        questions: [
            {
                id: 'uti-symptoms',
                text: 'Quels symptômes urinaires ressentez-vous ?',
                textTunisian: 'شنوة مشاكل البول اللي عندك؟',
                type: 'multiple-choice',
                options: [
                    { id: 'burning', label: 'Brûlures en urinant', labelTunisian: 'حرقان في البول', diagnosticWeight: 0.95 },
                    { id: 'frequency', label: 'Besoin fréquent d\'uriner', labelTunisian: 'تمشي برشا للتوالات', diagnosticWeight: 0.8 },
                    { id: 'urgency', label: 'Besoin urgent (impérieux)', labelTunisian: 'ما تنجمش تشد روحك', diagnosticWeight: 0.8 },
                    { id: 'blood', label: 'Sang dans les urines', labelTunisian: 'دم في البول', diagnosticWeight: 0.9 },
                    { id: 'pain', label: 'Douleur bas ventre', labelTunisian: 'وجيعة أسفل البطن', diagnosticWeight: 0.7 }
                ],
                required: true,
                category: 'Symptômes'
            },
            {
                id: 'uti-fever',
                text: 'Avez-vous de la fièvre ou des frissons ?',
                textTunisian: 'عندك سخانة ولا رعشة؟',
                type: 'yes-no',
                category: 'Signes de gravité',
                clinicalRelevance: 'Fièvre = risque de pyélonéphrite (infection rénale)'
            },
            {
                id: 'uti-back-pain',
                text: 'Avez-vous mal dans le bas du dos (côté reins) ?',
                textTunisian: 'عندك وجيعة في كلوتك (جنب الظهر)؟',
                type: 'yes-no',
                category: 'Signes de gravité',
                clinicalRelevance: 'Douleur lombaire = risque de pyélonéphrite'
            },
            {
                id: 'uti-history',
                text: 'Avez-vous souvent des infections urinaires ?',
                textTunisian: 'تجيك الحالة هاذي برشا؟',
                type: 'frequency',
                options: [
                    { id: 'first', label: 'C\'est la première fois', labelTunisian: 'أول مرة', diagnosticWeight: 0.5 },
                    { id: 'rare', label: 'Rarement (moins d\'une fois par an)', labelTunisian: 'مرة في العام', diagnosticWeight: 0.6 },
                    { id: 'often', label: 'Souvent (plusieurs fois par an)', labelTunisian: 'برشا مرات', diagnosticWeight: 0.8 }
                ],
                category: 'Antécédents'
            }
        ]
    },

    'regles': {
        diagnosis: 'Troubles menstruels',
        minQuestionsForConfidence: 4,
        questions: [
            {
                id: 'period-regularity',
                text: 'Vos règles sont-elles habituellement régulières ?',
                textTunisian: 'العادة متاعك منظمة؟',
                type: 'yes-no',
                category: 'Historique'
            },
            {
                id: 'period-pain',
                text: 'Intensité de la douleur (1-10) :',
                textTunisian: 'قوة الوجيعة (1-10):',
                type: 'scale',
                min: 1,
                max: 10,
                required: true,
                category: 'Intensité'
            },
            {
                id: 'period-flow',
                text: 'Comment est le flux menstruel ?',
                textTunisian: 'كيفاش كمية الدم؟',
                type: 'single-choice',
                options: [
                    { id: 'light', label: 'Léger', labelTunisian: 'خفيف', diagnosticWeight: 0.4 },
                    { id: 'normal', label: 'Normal', labelTunisian: 'عادي', diagnosticWeight: 0.5 },
                    { id: 'heavy', label: 'Abondant (change protection < 2h)', labelTunisian: 'قوي برشا', diagnosticWeight: 0.8 },
                    { id: 'clots', label: 'Avec caillots', labelTunisian: 'بالكعابر', diagnosticWeight: 0.7 }
                ],
                required: true,
                category: 'Flux'
            },
            {
                id: 'period-symptoms',
                text: 'Autres symptômes associés :',
                textTunisian: 'أعراض أخرى:',
                type: 'multiple-choice',
                options: [
                    { id: 'nausea', label: 'Nausées/Vomissements', labelTunisian: 'غثيان/ردان', diagnosticWeight: 0.6 },
                    { id: 'headache', label: 'Maux de tête', labelTunisian: 'صداع', diagnosticWeight: 0.5 },
                    { id: 'fatigue', label: 'Fatigue intense', labelTunisian: 'فشلة', diagnosticWeight: 0.6 },
                    { id: 'mood', label: 'Irritabilité/Déprime', labelTunisian: 'قلق', diagnosticWeight: 0.5 }
                ],
                category: 'Symptômes associés'
            }
        ]
    },

    'genital': {
        diagnosis: 'Infection génitale / Mycose',
        minQuestionsForConfidence: 4,
        questions: [
            {
                id: 'gen-symptoms',
                text: 'Quels symptômes locaux ressentez-vous ?',
                textTunisian: 'شنوة الأعراض في المنطقة الحساسة؟',
                type: 'multiple-choice',
                options: [
                    { id: 'itch', label: 'Démangeaisons (Prurit)', labelTunisian: 'حكة', diagnosticWeight: 0.9 },
                    { id: 'burn', label: 'Brûlures', labelTunisian: 'حرقان', diagnosticWeight: 0.8 },
                    { id: 'discharge', label: 'Pertes anormales', labelTunisian: 'إفرازات غريبة', diagnosticWeight: 0.9 },
                    { id: 'redness', label: 'Rougeur/Gonflement', labelTunisian: 'حمرة/نفخ', diagnosticWeight: 0.7 },
                    { id: 'odor', label: 'Mauvaise odeur', labelTunisian: 'ريحة خايبة', diagnosticWeight: 0.8 }
                ],
                required: true,
                category: 'Symptômes'
            },
            {
                id: 'gen-discharge-type',
                text: 'Aspect des pertes (si présentes) :',
                textTunisian: 'شكل الإفرازات:',
                type: 'single-choice',
                options: [
                    { id: 'white-thick', label: 'Blanches et épaisses (lait caillé)', labelTunisian: 'بيضاء وخاثرة', diagnosticWeight: 0.9 },
                    { id: 'yellow-green', label: 'Jaunes ou verdâtres', labelTunisian: 'صفراء ولا خضراء', diagnosticWeight: 0.9 },
                    { id: 'gray', label: 'Grisâtres et fluides', labelTunisian: 'رمادية وجارية', diagnosticWeight: 0.8 },
                    { id: 'none', label: 'Pas de pertes', labelTunisian: 'ما فماش', diagnosticWeight: 0.2 }
                ],
                category: 'Caractéristiques',
                clinicalRelevance: 'Blanches = mycose probable; Jaunes/Vertes = infection bactérienne probable'
            },
            {
                id: 'gen-risk',
                text: 'Avez-vous eu un rapport non protégé récemment ?',
                textTunisian: 'عملت علاقة بلاش وقاية مؤخرا؟',
                type: 'yes-no',
                category: 'Facteurs de risque',
                clinicalRelevance: 'Risque d\'IST'
            }
        ]
    },
};

/**
 * Retourne les questions adaptatives pour un diagnostic donné
 */
export function getAdaptiveQuestionsForDiagnosis(diagnosis: string): AdaptiveClarificationQuestion[] {
    const diagnosisLower = diagnosis.toLowerCase();

    // Recherche exacte d'abord
    for (const [key, questionSet] of Object.entries(adaptiveQuestionSets)) {
        if (diagnosisLower.includes(key)) {
            return questionSet.questions;
        }
    }

    // Questions génériques par défaut
    return [
        {
            id: 'generic-severity',
            text: 'Comment évaluez-vous la gravité de vos symptômes ?',
            textTunisian: 'كيفاش تقيم خطورة الأعراض؟',
            type: 'scale',
            min: 1,
            max: 10,
            required: true,
            category: 'Évaluation générale'
        },
        {
            id: 'generic-duration',
            text: 'Depuis combien de temps présentez-vous ces symptômes ?',
            textTunisian: 'قداش وقت و عندك هاذي الأعراض؟',
            type: 'duration',
            options: [
                { id: 'hours', label: 'Quelques heures', labelTunisian: 'ساعات', diagnosticWeight: 0.5 },
                { id: 'days', label: 'Quelques jours', labelTunisian: 'أيام', diagnosticWeight: 0.7 },
                { id: 'weeks', label: 'Quelques semaines', labelTunisian: 'أسابيع', diagnosticWeight: 0.8 },
                { id: 'months', label: 'Plusieurs mois', labelTunisian: 'أشهر', diagnosticWeight: 0.9 }
            ],
            required: true,
            category: 'Chronologie'
        },
        {
            id: 'generic-worsening',
            text: 'Les symptômes s\'aggravent-ils ?',
            textTunisian: 'الأعراض قاعدة تزيد؟',
            type: 'yes-no',
            category: 'Évolution'
        }
    ];
}
