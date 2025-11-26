/**
 * @fileoverview Questions adaptatives spécifiques pour la catégorie Génito-urinaire
 * Couvre les aspects fonctionnels, infectieux, inflammatoires, hormonaux et contextuels
 */

import type { QuestionSet } from '@/types/clarification-types';

export const genitoUrinaryQuestions: Record<string, QuestionSet> = {
  // ==================== URINAIRE ====================
  'infection-urinaire': {
    diagnosis: 'Infection urinaire',
    minQuestionsForConfidence: 5,
    questions: [
      {
        id: 'gu-urinary-symptoms',
        text: 'Quels symptômes urinaires ressentez-vous ?',
        textTunisian: 'شنوة مشاكل البول اللي عندك؟',
        type: 'multiple-choice',
        options: [
          { id: 'burning', label: 'Brûlures en urinant', labelTunisian: 'حرقان في البول', diagnosticWeight: 0.9 },
          { id: 'frequency', label: 'Besoin fréquent d\'uriner', labelTunisian: 'تمشي برشا للتوالات', diagnosticWeight: 0.8 },
          { id: 'urgency', label: 'Besoin urgent / Fuites', labelTunisian: 'ما تنجمش تشد روحك', diagnosticWeight: 0.7 },
          { id: 'blood', label: 'Sang dans les urines', labelTunisian: 'دم في البول', diagnosticWeight: 0.9 },
          { id: 'cloudy', label: 'Urines troubles / Malodorantes', labelTunisian: 'بول خاثر / ريحة قوية', diagnosticWeight: 0.7 },
          { id: 'pain-end', label: 'Douleur à la fin de la miction', labelTunisian: 'وجيعة في لخر', diagnosticWeight: 0.8 }
        ],
        required: true,
        category: 'Symptômes urinaires'
      },
      {
        id: 'gu-pain-location',
        text: 'Où se situe la douleur ?',
        textTunisian: 'وين الوجيعة بالضبط؟',
        type: 'multiple-choice',
        options: [
          { id: 'lower-belly', label: 'Bas ventre (Vessie)', labelTunisian: 'أسفل البطن', diagnosticWeight: 0.8 },
          { id: 'lower-back', label: 'Bas du dos (Lombaires)', labelTunisian: 'أسفل الظهر', diagnosticWeight: 0.7 },
          { id: 'flank', label: 'Côté / Flanc (Rein)', labelTunisian: 'الجنب', diagnosticWeight: 0.9 },
          { id: 'urethra', label: 'Canal urinaire', labelTunisian: 'مجرى البول', diagnosticWeight: 0.8 }
        ],
        category: 'Localisation'
      },
      {
        id: 'gu-fever',
        text: 'Avez-vous de la fièvre ou des frissons ?',
        textTunisian: 'عندك سخانة ولا رعشة؟',
        type: 'yes-no',
        required: true,
        category: 'Signes généraux',
        clinicalRelevance: 'Fièvre + Douleur lombaire = Risque de Pyélonéphrite (Urgence)'
      }
    ]
  },

  // ==================== GÉNITAL HOMME ====================
  'genital-homme': {
    diagnosis: 'Trouble génital masculin',
    minQuestionsForConfidence: 5,
    questions: [
      {
        id: 'gu-male-symptoms',
        text: 'Quels symptômes génitaux présentez-vous ?',
        textTunisian: 'شنوة الأعراض في الجهاز التناسلي؟',
        type: 'multiple-choice',
        options: [
          { id: 'discharge', label: 'Écoulement urétral', labelTunisian: 'سيلان', diagnosticWeight: 0.9 },
          { id: 'pain-testicle', label: 'Douleur testiculaire', labelTunisian: 'وجيعة في الخصية', diagnosticWeight: 0.9 },
          { id: 'swelling', label: 'Gonflement / Rougeur', labelTunisian: 'نفخ / حمورية', diagnosticWeight: 0.8 },
          { id: 'lesion', label: 'Boutons / Lésions / Plaies', labelTunisian: 'حبوب / جروح', diagnosticWeight: 0.8 },
          { id: 'itching', label: 'Démangeaisons', labelTunisian: 'حكة', diagnosticWeight: 0.6 }
        ],
        required: true,
        category: 'Symptômes génitaux'
      },
      {
        id: 'gu-testicle-pain-type',
        text: 'Si douleur testiculaire, comment est-elle apparue ?',
        textTunisian: 'كان فما وجيعة في الخصية، كيفاش جات؟',
        type: 'single-choice',
        options: [
          { id: 'sudden', label: 'Brutalement (Urgence possible)', labelTunisian: 'فجأة', diagnosticWeight: 0.95 },
          { id: 'progressive', label: 'Progressivement', labelTunisian: 'شوية بشوية', diagnosticWeight: 0.5 },
          { id: 'trauma', label: 'Après un choc', labelTunisian: 'بعد ضربة', diagnosticWeight: 0.8 }
        ],
        category: 'Chronologie',
        clinicalRelevance: 'Douleur brutale = Torsion testiculaire possible (Urgence absolue)'
      },
      {
        id: 'gu-sexual-context',
        text: 'Y a-t-il eu un rapport sexuel à risque récemment ?',
        textTunisian: 'فما علاقة جنسية غير محمية مؤخرا؟',
        type: 'yes-no',
        category: 'Contexte'
      }
    ]
  },

  // ==================== GÉNITAL FEMME ====================
  'genital-femme': {
    diagnosis: 'Trouble génital féminin',
    minQuestionsForConfidence: 5,
    questions: [
      {
        id: 'gu-female-symptoms',
        text: 'Quels symptômes génitaux présentez-vous ?',
        textTunisian: 'شنوة الأعراض النسائية؟',
        type: 'multiple-choice',
        options: [
          { id: 'discharge-abnormal', label: 'Pertes anormales (couleur/odeur)', labelTunisian: 'إفرازات مش عادية', diagnosticWeight: 0.8 },
          { id: 'itching', label: 'Démangeaisons / Brûlures vulvaires', labelTunisian: 'حكة / حرقان', diagnosticWeight: 0.7 },
          { id: 'bleeding', label: 'Saignements hors règles', labelTunisian: 'دم في غير وقتو', diagnosticWeight: 0.9 },
          { id: 'pain-sex', label: 'Douleur pendant les rapports', labelTunisian: 'وجيعة في العلاقة', diagnosticWeight: 0.7 },
          { id: 'pelvic-pain', label: 'Douleur bas ventre / Pelvienne', labelTunisian: 'وجيعة أسفل البطن', diagnosticWeight: 0.8 }
        ],
        required: true,
        category: 'Symptômes génitaux'
      },
      {
        id: 'gu-discharge-type',
        text: 'Si pertes anormales, comment sont-elles ?',
        textTunisian: 'كيفاش شكل الإفرازات؟',
        type: 'single-choice',
        options: [
          { id: 'white-curd', label: 'Blanches, épaisses (lait caillé)', labelTunisian: 'بيضاء كي الياغورت', diagnosticWeight: 0.8 },
          { id: 'yellow-green', label: 'Jaunes / Vertes', labelTunisian: 'صفراء / خضراء', diagnosticWeight: 0.8 },
          { id: 'fishy', label: 'Odeur de poisson', labelTunisian: 'ريحة حوت', diagnosticWeight: 0.7 },
          { id: 'bloody', label: 'Teintées de sang', labelTunisian: 'مخلطة بالدم', diagnosticWeight: 0.6 }
        ],
        category: 'Caractéristiques'
      },
      {
        id: 'gu-cycle',
        text: 'Où en êtes-vous dans votre cycle ?',
        textTunisian: 'وين واصلة في العادة الشهرية؟',
        type: 'single-choice',
        options: [
          { id: 'during', label: 'Pendant les règles', labelTunisian: 'وقت العادة', diagnosticWeight: 0.5 },
          { id: 'before', label: 'Juste avant les règles', labelTunisian: 'قبل العادة', diagnosticWeight: 0.5 },
          { id: 'mid', label: 'Milieu de cycle (Ovulation)', labelTunisian: 'وسط الشهر', diagnosticWeight: 0.6 },
          { id: 'late', label: 'Retard de règles', labelTunisian: 'روطار', diagnosticWeight: 0.9 },
          { id: 'menopause', label: 'Ménopause', labelTunisian: 'سن اليأس', diagnosticWeight: 0.7 }
        ],
        required: true,
        category: 'Hormonal',
        clinicalRelevance: 'Retard + Douleur = Grossesse extra-utérine possible'
      }
    ]
  },

  // ==================== CONTEXTE & DÉCLENCHEURS ====================
  'genito-context': {
    diagnosis: 'Contexte génito-urinaire',
    minQuestionsForConfidence: 3,
    questions: [
      {
        id: 'gu-trigger',
        text: 'Y a-t-il un facteur déclenchant identifié ?',
        textTunisian: 'فما سبب واضح؟',
        type: 'multiple-choice',
        options: [
          { id: 'sex', label: 'Rapport sexuel récent', labelTunisian: 'علاقة جنسية', diagnosticWeight: 0.7 },
          { id: 'hygiene', label: 'Changement produit hygiène / Lessive', labelTunisian: 'تبديل صابون', diagnosticWeight: 0.6 },
          { id: 'sport', label: 'Activité sportive (Vélo, Équitation)', labelTunisian: 'رياضة (بسكليت)', diagnosticWeight: 0.5 },
          { id: 'medication', label: 'Prise d\'antibiotiques récente', labelTunisian: 'شربت دواء', diagnosticWeight: 0.6 },
          { id: 'stress', label: 'Stress intense', labelTunisian: 'ستريس', diagnosticWeight: 0.4 }
        ],
        category: 'Facteurs déclenchants'
      },
      {
        id: 'gu-history',
        text: 'Avez-vous des antécédents particuliers ?',
        textTunisian: 'عندك سوابق مرضية؟',
        type: 'multiple-choice',
        options: [
          { id: 'uti-recurrent', label: 'Infections urinaires à répétition', labelTunisian: 'التهابات بول ديما', diagnosticWeight: 0.7 },
          { id: 'sti', label: 'IST / MST passée', labelTunisian: 'أمراض جنسية قديمة', diagnosticWeight: 0.6 },
          { id: 'kidney-stones', label: 'Calculs rénaux', labelTunisian: 'حجر في الكلاوي', diagnosticWeight: 0.8 },
          { id: 'prostate', label: 'Problèmes de prostate (Homme)', labelTunisian: 'البروستات', diagnosticWeight: 0.8 },
          { id: 'endometriosis', label: 'Endométriose / Kystes (Femme)', labelTunisian: 'كيس', diagnosticWeight: 0.7 }
        ],
        category: 'Antécédents'
      }
    ]
  }
};
