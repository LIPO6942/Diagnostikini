/**
 * @fileoverview Defines the interactive symptom tree structure.
 * Ultra-exhaustive version for precise AI diagnosis.
 */
import type { SymptomNode } from "@/lib/types";
import {
  PersonStanding, Wind, Thermometer, Waves, Ear, Brain, Bone, Eye, Sheet,
  Activity, Droplet, HeartPulse, ShieldAlert, BadgeInfo, BrainCircuit, Users,
  Heart, Annoyed, AlertTriangle, Bandage, CarCrash, Bone as BoneIcon,
  Flame, Zap, Clock, MapPin, Smile, Frown, Stethoscope, Pill
} from "lucide-react";

// Helper to create common sub-nodes for symptom characteristics (sequential flow)
// Helper to create common sub-nodes for symptom characteristics (sequential flow)
const symptomCharacteristics = (
  baseId: string,
  type: 'pain' | 'digestive' | 'respiratory' | 'skin' | 'neuro' | 'general' | 'urinary' = 'pain'
): SymptomNode[] => {
  const natureOptions: Record<string, { label: string, descriptionTunisian: string }[]> = {
    pain: [
      { label: "Pression / Écrasement / Poids", descriptionTunisian: "رصان / ثقل / تعصير" },
      { label: "Douleur vive / Aigüe / Piquante", descriptionTunisian: "وجيعة تشوي / تنخس" },
      { label: "Brûlure / Chaleur / Échauffement", descriptionTunisian: "حرقان / سخانة" },
      { label: "Lancements / Battements (Pulsatile)", descriptionTunisian: "تسطير / نبض / يخبط" },
      { label: "Tiraillement / Tension / Étirement", descriptionTunisian: "تجبيد" },
      { label: "Crampe / Torsion / Contraction", descriptionTunisian: "تكميش / تعصر" },
      { label: "Décharge électrique / Choc", descriptionTunisian: "ضو يضرب" },
      { label: "Irritation / Sensibilité / Picotement", descriptionTunisian: "حكة / تهييج / تنميل" },
      { label: "Douleur sourde / Continue", descriptionTunisian: "وجيعة كاسحة ما تقصش" },
    ],
    digestive: [
      { label: "Brûlures / Acidité / Remontées", descriptionTunisian: "حرقان / جاير" },
      { label: "Crampes / Torsions / Spasmes", descriptionTunisian: "تكميش / تعصر / مغص" },
      { label: "Pesanteur / Estomac lourd", descriptionTunisian: "رزانة / تخمة / معدة رزينا" },
      { label: "Ballonnement / Gaz / Tension", descriptionTunisian: "نفخ / غازات / كرش منفوخة" },
      { label: "Sensation de barre / Blocage", descriptionTunisian: "حاجة واحة / بلوكاج" },
    ],
    respiratory: [
      { label: "Sifflement / Respiration bruyante", descriptionTunisian: "تزفير / تنهيت" },
      { label: "Oppression / Poitrine serrée", descriptionTunisian: "صدر مكبوس" },
      { label: "Encombrement / Glaires", descriptionTunisian: "صدر معبّي / بلغم" },
      { label: "Irritation / Chatouillement", descriptionTunisian: "تنميل / حكة في القرجومة" },
      { label: "Sensation d'étouffement / Manque d'air", descriptionTunisian: "تخنيقة / نقص هواء" },
    ],
    skin: [
      { label: "Démangeaisons / Besoin de gratter", descriptionTunisian: "حكة قوية" },
      { label: "Brûlure / Échauffement local", descriptionTunisian: "حرقان / سخانة في الجلدة" },
      { label: "Picotements / Fourmillements", descriptionTunisian: "نمال / تنخيس خفيف" },
      { label: "Tiraillement / Peau sèche/tendue", descriptionTunisian: "جلدة تجبد / شايحة" },
      { label: "Sensibilité excessive / Douleur au toucher", descriptionTunisian: "توجع كي تمسها" },
    ],
    neuro: [
      { label: "Fourmillements / Engourdissement", descriptionTunisian: "تنميل / يد/ساق راقدة" },
      { label: "Décharge électrique / Choc soudain", descriptionTunisian: "ضو يضرب" },
      { label: "Étourdissement / Instabilité / Vertige", descriptionTunisian: "دوخة / عدم توازن" },
      { label: "Faiblesse / Lourdeur d'un membre", descriptionTunisian: "فشلة / عضو رزين" },
      { label: "Vibration / Tremblement interne", descriptionTunisian: "رعشة داخلية" },
    ],
    urinary: [
      { label: "Brûlure vive en urinant", descriptionTunisian: "حرقان قوي كي تبول" },
      { label: "Picotement / Gêne constante", descriptionTunisian: "تقلق / شكة" },
      { label: "Pression / Pesanteur pelvienne", descriptionTunisian: "ضغط / رزانة لوطة" },
      { label: "Crampe / Contraction après miction", descriptionTunisian: "عصرة بعد البول" },
    ],
    general: [
      { label: "Frissons / Tremblements de froid", descriptionTunisian: "رعشة / برد كلاني" },
      { label: "Sueurs / Transpiration excessive", descriptionTunisian: "عرق يصب" },
      { label: "Épuisement total / Sortie de force", descriptionTunisian: "فشلة كبيرة / بلاش جهد" },
      { label: "Courbatures / Mal aux os et muscles", descriptionTunisian: "تكسير في العظام" },
    ]
  };

  const currentNature = natureOptions[type] || natureOptions.pain;

  return [
    {
      id: `${baseId}-nature`,
      label: "Nature du symptôme",
      description: "Comment décririez-vous la sensation ?",
      descriptionTunisian: "كيفاش توصف الإحساس؟",
      children: currentNature.map((opt, idx) => ({
        id: `${baseId}-nat-${idx}`,
        label: opt.label,
        descriptionTunisian: opt.descriptionTunisian
      }))
    },
    {
      id: `${baseId}-intensite`,
      label: "Intensité",
      description: "Quelle est l'intensité de la gêne ?",
      descriptionTunisian: "قداش قوية القلق؟",
      children: [
        { id: `${baseId}-int-legere`, label: "Légère / Supportable", descriptionTunisian: "خفيفة / نجم نتحملها" },
        { id: `${baseId}-int-inconfortable`, label: "Inconfortable / Gênante", descriptionTunisian: "تقلق شوي" },
        { id: `${baseId}-int-moderee`, label: "Modérée / Assez forte", descriptionTunisian: "متوسطة / وجيعة باهية" },
        { id: `${baseId}-int-severe`, label: "Sévère / Très forte", descriptionTunisian: "قوية برشا" },
        { id: `${baseId}-int-insupportable`, label: "Insupportable / Atroce", descriptionTunisian: "ما تنجمش تتحملها جملة" },
        { id: `${baseId}-int-fluctuante`, label: "Variable (Ça va et ça vient)", descriptionTunisian: "تمشي و تجي" },
        { id: `${baseId}-int-brutale`, label: "Soudaine et violente", descriptionTunisian: "جات ضربة وحدة قوية" },
      ]
    },
    {
      id: `${baseId}-frequence`,
      label: "Fréquence / Apparition",
      description: "À quelle fréquence ou quand cela arrive-t-il ?",
      descriptionTunisian: "قداش من مرة تصير ولا وقتاش؟",
      children: [
        { id: `${baseId}-freq-unique`, label: "Événement unique / Une fois", descriptionTunisian: "مرة برك / صارت وتعدات" },
        { id: `${baseId}-freq-continue`, label: "Constant / Ne s'arrête pas", descriptionTunisian: "ديما موجودة ما تقصش" },
        { id: `${baseId}-freq-intermittente`, label: "Par moments (Intermittent)", descriptionTunisian: "ساعات تجي وساعات لا" },
        { id: `${baseId}-freq-recurrent`, label: "Récurrent / Revient souvent", descriptionTunisian: "ترجع ديما" },
        { id: `${baseId}-freq-progressif`, label: "S'aggrave progressivement", descriptionTunisian: "ماشية وتزيد" },
        { id: `${baseId}-freq-crises`, label: "Par crises ou accès soudains", descriptionTunisian: "تجي نوبات" },
        { id: `${baseId}-freq-declencheur`, label: "Uniquement provoqué (Mouvement, Toucher...)", descriptionTunisian: "كان كي تمسها wala تتحرك" },
      ]
    },
    {
      id: `${baseId}-duree`,
      label: "Durée d'évolution",
      description: "Depuis quand avez-vous ce symptôme ?",
      descriptionTunisian: "ملي وقتاش عندك؟",
      children: [
        { id: `${baseId}-dur-instant`, label: "À l'instant / Tout de suite", descriptionTunisian: "توا برك" },
        { id: `${baseId}-dur-heures`, label: "Quelques heures", descriptionTunisian: "عندها سوايع" },
        { id: `${baseId}-dur-jours`, label: "Quelques jours", descriptionTunisian: "عندها أيامات" },
        { id: `${baseId}-dur-semaines`, label: "Plusieurs semaines", descriptionTunisian: "عندها جمعات" },
        { id: `${baseId}-dur-mois`, label: "Plusieurs mois ou années", descriptionTunisian: "عندها أشهر / سنين" },
      ]
    },
    {
      id: `${baseId}-facteurs`,
      label: "Facteurs influents",
      description: "Qu'est-ce qui aggrave ou soulage ?",
      descriptionTunisian: "شنوة يزيد عليك ولا يريحك؟",
      children: [
        { id: `${baseId}-fac-mouvement`, label: "Mouvement / Activité", descriptionTunisian: "الحركة / المشي" },
        { id: `${baseId}-fac-repos`, label: "Repos / Immobilité", descriptionTunisian: "الراحة / النوم" },
        { id: `${baseId}-fac-contact`, label: "Au toucher / Pression", descriptionTunisian: "كي تمسها" },
        { id: `${baseId}-fac-position`, label: "Certaines positions", descriptionTunisian: "وقفة ولا نومة معينة" },
        { id: `${baseId}-fac-froid-chaud`, label: "Froid ou Chaud", descriptionTunisian: "البرد ولا السخانة" },
        { id: `${baseId}-fac-stress`, label: "Stress / Émotion", descriptionTunisian: "الستراس / الفجعة" },
        { id: `${baseId}-fac-alimentation`, label: "Alimentation", descriptionTunisian: "الماكلة" },
        { id: `${baseId}-fac-medicament`, label: "Prise de médicaments", descriptionTunisian: "الدواء" },
        { id: `${baseId}-fac-spontane`, label: "Rien de particulier (Spontané)", descriptionTunisian: "وحدها بلاش سبة" },
      ]
    }
  ];
};

// Helper specifically for Genito-Urinary symptoms with specific context factors
const genitoUrinaryCharacteristics = (baseId: string): SymptomNode[] => {
  // Clone the standard structure to avoid mutation references
  const standardChars = JSON.parse(JSON.stringify(symptomCharacteristics(baseId, 'urinary')));

  // Find the factors node
  const factorsNode = standardChars.find((n: any) => n.id.endsWith('-facteurs'));

  if (factorsNode && factorsNode.children) {
    // Add specific GU factors at the beginning
    factorsNode.children.unshift(
      { id: `${baseId}-fac-rapport`, label: "Après rapport sexuel", descriptionTunisian: "بعد العلاقة" },
      { id: `${baseId}-fac-hygiene`, label: "Changement produit hygiène/lessive", descriptionTunisian: "تبديل صابون/دواء غسيل" },
      { id: `${baseId}-fac-medicament`, label: "Prise de nouveaux médicaments", descriptionTunisian: "دواء جديد" },
      { id: `${baseId}-fac-hormonal`, label: "Changement hormonal (Grossesse, Ménopause...)", descriptionTunisian: "تغير هرمونات" }
    );
  }

  return standardChars;
};

export const symptomTree: SymptomNode[] = [
  {
    id: "douleur",
    label: "Douleur",
    descriptionTunisian: "وجيعة",
    icon: PersonStanding,
    children: [
      {
        id: "douleur-tete",
        label: "Tête & Visage",
        descriptionTunisian: "الراس و الوجه",
        children: [
          {
            id: "tete-globale",
            label: "Toute la tête",
            descriptionTunisian: "الراس الكل",
            children: symptomCharacteristics("tete-globale")
          },
          {
            id: "tete-tempes",
            label: "Tempes (Côtés)",
            descriptionTunisian: "الشقيقة",
            children: symptomCharacteristics("tete-tempes")
          },
          {
            id: "tete-front",
            label: "Front / Yeux",
            descriptionTunisian: "الجبهة / العينين",
            children: symptomCharacteristics("tete-front")
          },
          {
            id: "tete-nuque",
            label: "Nuque / Arrière du crâne",
            descriptionTunisian: "القفا / الرقبة من تالي",
            children: symptomCharacteristics("tete-nuque")
          },
          {
            id: "visage-sinus",
            label: "Visage / Sinus",
            descriptionTunisian: "الوجه / الجيوب الأنفية",
            children: symptomCharacteristics("visage-sinus")
          }
        ]
      },
      {
        id: "douleur-dos",
        label: "Dos",
        descriptionTunisian: "الظهر",
        children: [
          { id: "dos-cervicales", label: "Cervicales (Haut)", descriptionTunisian: "الرقبة", children: symptomCharacteristics("dos-cervicales") },
          { id: "dos-dorsales", label: "Milieu du dos", descriptionTunisian: "وسط الظهر", children: symptomCharacteristics("dos-dorsales") },
          { id: "dos-lombaires", label: "Lombaires (Bas)", descriptionTunisian: "أسفل الظهر", children: symptomCharacteristics("dos-lombaires") },
          { id: "dos-sciatique", label: "Bas du dos irradiant jambe", descriptionTunisian: "عرق لاسة", children: symptomCharacteristics("dos-sciatique") },
        ]
      },
      {
        id: "douleur-poitrine",
        label: "Poitrine / Thorax",
        descriptionTunisian: "الصدر",
        children: [
          { id: "poitrine-gauche", label: "Côté gauche (Cœur)", descriptionTunisian: "شيرة القلب", children: symptomCharacteristics("poitrine-gauche") },
          { id: "poitrine-droite", label: "Côté droit", descriptionTunisian: "شيرة اليمين", children: symptomCharacteristics("poitrine-droite") },
          { id: "poitrine-centre", label: "Centre (Sternum)", descriptionTunisian: "في الوسط", children: symptomCharacteristics("poitrine-centre") },
          { id: "poitrine-cotes", label: "Côtés / Flancs", descriptionTunisian: "الأجناب", children: symptomCharacteristics("poitrine-cotes") },
        ]
      },
      {
        id: "douleur-ventre",
        label: "Ventre / Abdomen",
        descriptionTunisian: "الكرش",
        children: [
          { id: "ventre-estomac", label: "Creux de l'estomac (Haut centre)", descriptionTunisian: "فم المعدة", children: symptomCharacteristics("ventre-estomac", "digestive") },
          { id: "ventre-foie", label: "Sous les côtes droites", descriptionTunisian: "تحت الضلوع يمين", children: symptomCharacteristics("ventre-foie", "digestive") },
          { id: "ventre-nombril", label: "Autour du nombril", descriptionTunisian: "داير بالسرّة", children: symptomCharacteristics("ventre-nombril", "digestive") },
          { id: "ventre-bas-droite", label: "Bas droite (Appendice?)", descriptionTunisian: "لوطة يمين", children: symptomCharacteristics("ventre-bas-droite", "digestive") },
          { id: "ventre-bas-gauche", label: "Bas gauche", descriptionTunisian: "لوطة يسار", children: symptomCharacteristics("ventre-bas-gauche", "digestive") },
          { id: "ventre-bas-centre", label: "Bas ventre / Pelvis", descriptionTunisian: "أسفل البطن", children: symptomCharacteristics("ventre-bas-centre", "digestive") },
        ]
      },
      {
        id: "douleur-membres",
        label: "Bras & Jambes",
        descriptionTunisian: "يدين و ساقين",
        children: [
          { id: "membre-epaule", label: "Épaule", descriptionTunisian: "الكتف", children: symptomCharacteristics("membre-epaule") },
          { id: "membre-coude", label: "Coude", descriptionTunisian: "المرفق", children: symptomCharacteristics("membre-coude") },
          { id: "membre-poignet", label: "Poignet / Main", descriptionTunisian: "المعصم / اليد", children: symptomCharacteristics("membre-poignet") },
          { id: "membre-hanche", label: "Hanche", descriptionTunisian: "الفخذ", children: symptomCharacteristics("membre-hanche") },
          { id: "membre-genou", label: "Genou", descriptionTunisian: "الركبة", children: symptomCharacteristics("membre-genou") },
          { id: "membre-cheville", label: "Cheville / Pied", descriptionTunisian: "الكعب / الساق", children: symptomCharacteristics("membre-cheville") },
          { id: "membre-muscle", label: "Muscle (Mollet, Cuisse...)", descriptionTunisian: "العضلات", children: symptomCharacteristics("membre-muscle") },
        ]
      }
    ]
  },
  {
    id: "respiratoire",
    label: "Respiratoire & ORL",
    descriptionTunisian: "تنفس، خشم، وذننين",
    icon: Wind,
    children: [
      {
        id: "nez",
        label: "Nez / Sinus",
        descriptionTunisian: "الخشم",
        children: [
          { id: "nez-bouche", label: "Nez bouché / Congestion", descriptionTunisian: "خشم مسكر", children: symptomCharacteristics("nez-bouche", "respiratory") },
          {
            id: "nez-coule",
            label: "Écoulement nasal",
            descriptionTunisian: "خشم يجري",
            children: [
              { id: "nez-coule-clair", label: "Clair / Liquide", descriptionTunisian: "ماء صافي", children: symptomCharacteristics("nez-coule-clair", "respiratory") },
              { id: "nez-coule-epais", label: "Épais / Jaune / Vert", descriptionTunisian: "خاثر / أصفر / أخضر", children: symptomCharacteristics("nez-coule-epais", "respiratory") },
              { id: "nez-coule-sang", label: "Avec sang", descriptionTunisian: "بالدم", children: symptomCharacteristics("nez-coule-sang", "respiratory") },
            ]
          },
          { id: "nez-eternuement", label: "Éternuements fréquents", descriptionTunisian: "عطish برشا", children: symptomCharacteristics("nez-eternuement", "respiratory") },
          { id: "nez-odorat", label: "Perte d'odorat", descriptionTunisian: "ما تشمش", children: symptomCharacteristics("nez-odorat", "respiratory") },
        ]
      },
      {
        id: "gorge",
        label: "Gorge",
        descriptionTunisian: "القراجم",
        children: [
          { id: "gorge-douleur", label: "Douleur / Picotement", descriptionTunisian: "وجيعة / تنميل", children: symptomCharacteristics("gorge", "respiratory") },
          { id: "gorge-avaler", label: "Difficulté à avaler", descriptionTunisian: "وحلان الماكلة", children: symptomCharacteristics("gorge-avaler", "respiratory") },
          { id: "gorge-enrouee", label: "Voix enrouée / Perte de voix", descriptionTunisian: "صوت مبحاح", children: symptomCharacteristics("gorge-enrouee", "respiratory") },
          { id: "gorge-gonflee", label: "Sensation de gonflement / Boule", descriptionTunisian: "كعبة في القرجومة", children: symptomCharacteristics("gorge-gonflee", "respiratory") },
        ]
      },
      {
        id: "toux",
        label: "Toux",
        descriptionTunisian: "الكحة",
        children: [
          {
            id: "toux-seche",
            label: "Sèche / Irritante",
            descriptionTunisian: "شايحة",
            children: [
              { id: "toux-seche-nuit", label: "Surtout la nuit", descriptionTunisian: "في الليل", children: symptomCharacteristics("toux-seche-nuit", "respiratory") },
              { id: "toux-seche-reveil", label: "Au réveil le matin", descriptionTunisian: "كي تقوم من النوم", children: symptomCharacteristics("toux-seche-reveil", "respiratory") },
              { id: "toux-seche-effort", label: "À l'effort / Froid", descriptionTunisian: "بالمجهود / البرد", children: symptomCharacteristics("toux-seche-effort", "respiratory") },
              { id: "toux-seche-quinte", label: "Par quintes (crises)", descriptionTunisian: "نوبات كحة", children: symptomCharacteristics("toux-seche-quinte", "respiratory") },
            ]
          },
          {
            id: "toux-grasse",
            label: "Grasse / Productive",
            descriptionTunisian: "بالبلغم",
            children: [
              { id: "toux-grasse-blanc", label: "Crachats blancs/clairs", descriptionTunisian: "بلغم أبيض", children: symptomCharacteristics("toux-grasse-blanc", "respiratory") },
              { id: "toux-grasse-jaune", label: "Crachats jaunes/verts", descriptionTunisian: "بلغم أصفر/أخضر", children: symptomCharacteristics("toux-grasse-jaune", "respiratory") },
              { id: "toux-grasse-sang", label: "Crachats avec sang", descriptionTunisian: "بلغم بالدم", children: symptomCharacteristics("toux-grasse-sang", "respiratory") },
            ]
          }
        ]
      },
      {
        id: "oreilles",
        label: "Oreilles",
        descriptionTunisian: "الوذنين",
        children: [
          { id: "oreille-douleur", label: "Douleur (Otite?)", descriptionTunisian: "وجيعة وذن", children: symptomCharacteristics("oreille", "pain") },
          { id: "oreille-bouchon", label: "Sensation d'oreille bouchée", descriptionTunisian: "وذن مسكرة", children: symptomCharacteristics("oreille-bouchon", "respiratory") },
          { id: "oreille-bourdonnement", label: "Bourdonnements / Acouphènes", descriptionTunisian: "تزفير في الوذن", children: symptomCharacteristics("oreille-bourdonnement", "respiratory") },
          { id: "oreille-ecoulement", label: "Écoulement liquide", descriptionTunisian: "وذن تخرج في الماء/القيح", children: symptomCharacteristics("oreille-ecoulement", "respiratory") },
          { id: "oreille-audition", label: "Baisse d'audition", descriptionTunisian: "نقص سمع", children: symptomCharacteristics("oreille-audition", "neuro") },
        ]
      },
      {
        id: "souffle",
        label: "Respiration / Souffle",
        descriptionTunisian: "النفس",
        children: [
          {
            id: "souffle-court", label: "Essoufflement (Dyspnée)", descriptionTunisian: "نفس قصير", children: [
              { id: "souffle-court-effort", label: "À l'effort", descriptionTunisian: "بالمجهود", children: symptomCharacteristics("souffle-court-effort", "respiratory") },
              { id: "souffle-court-repos", label: "Au repos", descriptionTunisian: "وانت قاعد", children: symptomCharacteristics("souffle-court-repos", "respiratory") },
              { id: "souffle-court-alonge", label: "En position allongée", descriptionTunisian: "كي تتمد", children: symptomCharacteristics("souffle-court-alonge", "respiratory") },
            ]
          },
          { id: "souffle-sifflement", label: "Sifflement respiratoire", descriptionTunisian: "تزفير في الصدر", children: symptomCharacteristics("souffle-sifflement", "respiratory") },
          { id: "souffle-irregulier", label: "Respiration rapide ou irrégulière", descriptionTunisian: "نفس يجري", children: symptomCharacteristics("souffle-irregulier", "respiratory") },
        ]
      }
    ]
  },
  {
    id: "neurologique",
    label: "Neurologique",
    descriptionTunisian: "الأعصاب",
    icon: Brain,
    children: [
      {
        id: "neuro-tete",
        label: "Maux de tête spécifiques",
        descriptionTunisian: "وجيعة الراس",
        children: [
          {
            id: "migraine", label: "Migraine (Unilatérale, Pulsatile)", descriptionTunisian: "شقيقة", children: [
              { id: "migraine-aura", label: "Avec aura (visuelle/sensitive)", descriptionTunisian: "بالضباب/تنميل", children: symptomCharacteristics("migraine-aura", "neuro") },
              { id: "migraine-nausee", label: "Avec nausées", descriptionTunisian: "بالغثيان", children: symptomCharacteristics("migraine-nausee", "digestive") },
              { id: "migraine-simple", label: "Migraine simple", descriptionTunisian: "وجيعة برك", children: symptomCharacteristics("migraine-simple", "pain") }
            ]
          },
          { id: "cephalee-tension", label: "Céphalée de tension (Casque, Barre)", descriptionTunisian: "راس مكبوس", children: symptomCharacteristics("cephalee-tension", "neuro") },
        ]
      },
      {
        id: "neuro-vertiges",
        label: "Vertiges & Équilibre",
        descriptionTunisian: "الدوخة",
        children: [
          { id: "vertige-rotatoire", label: "Ça tourne (Vrai vertige)", descriptionTunisian: "الدنيا تدور", children: symptomCharacteristics("vertige-rotatoire", "neuro") },
          { id: "vertige-etourdissement", label: "Sensation de tête légère / Malaise", descriptionTunisian: "دوخة خفيفة", children: symptomCharacteristics("vertige-etourdissement", "neuro") },
          { id: "vertige-perte-connaissance", label: "Perte de connaissance / Syncope", descriptionTunisian: "غيبوبة", children: symptomCharacteristics("vertige-perte-connaissance", "neuro") },
        ]
      },
      {
        id: "neuro-sensibilite",
        label: "Sensibilité & Motricité",
        descriptionTunisian: "الحس و الحركة",
        children: [
          {
            id: "neuro-fourmillements", label: "Fourmillements / Engourdissement", descriptionTunisian: "تنميل", children: [
              { id: "fourmi-main", label: "Mains / Bras", descriptionTunisian: "في اليدين", children: symptomCharacteristics("fourmi-main", "neuro") },
              { id: "fourmi-pied", label: "Pieds / Jambes", descriptionTunisian: "في الساقين", children: symptomCharacteristics("fourmi-pied", "neuro") },
              { id: "fourmi-visage", label: "Visage", descriptionTunisian: "في الوجه", children: symptomCharacteristics("fourmi-visage", "neuro") },
            ]
          },
          { id: "neuro-faiblesse", label: "Faiblesse musculaire / Paralysie", descriptionTunisian: "فشلة / شلل", children: symptomCharacteristics("neuro-faiblesse", "neuro") },
          { id: "neuro-tremblements", label: "Tremblements", descriptionTunisian: "رعشة", children: symptomCharacteristics("neuro-tremblements", "neuro") },
        ]
      },
      {
        id: "neuro-cognitif",
        label: "Troubles cognitifs & Sensoriels",
        descriptionTunisian: "التركيز و الحواس",
        children: [
          { id: "neuro-memoire", label: "Perte de mémoire soudaine", descriptionTunisian: "نسيان مفاجئ", children: symptomCharacteristics("neuro-memoire", "neuro") },
          { id: "neuro-parole", label: "Difficulté à parler (Aphasie)", descriptionTunisian: "رزن في الكلام", children: symptomCharacteristics("neuro-parole", "neuro") },
          { id: "neuro-confusion", label: "Confusion / Désorientation", descriptionTunisian: "تضيع البوصلة", children: symptomCharacteristics("neuro-confusion", "neuro") },
        ]
      }
    ]
  },
  {
    id: "cardiovasculaire",
    label: "Cardio-vasculaire",
    descriptionTunisian: "القلب و الشرايين",
    icon: Heart,
    children: [
      { id: "cardio-douleur", label: "Douleur thoracique (Angine?)", descriptionTunisian: "وجيعة في القلب", children: symptomCharacteristics("cardio-douleur", "pain") },
      {
        id: "cardio-palpitations",
        label: "Palpitations / Rythme",
        descriptionTunisian: "دقات القلب",
        children: [
          { id: "palp-rapide", label: "Cœur bat trop vite (Tachycardie)", descriptionTunisian: "دقات سريعة", children: symptomCharacteristics("palp-rapide", "neuro") },
          { id: "palp-irregulier", label: "Battements irréguliers (Ratés)", descriptionTunisian: "دقات ملخبطة", children: symptomCharacteristics("palp-irregulier", "neuro") },
          { id: "palp-fort", label: "Battements forts / Impression de coup", descriptionTunisian: "دقات قوية / خبطة", children: symptomCharacteristics("palp-fort", "neuro") },
          { id: "palp-stress", label: "Palpitations après stress ou café", descriptionTunisian: "بالقهوة ولا التخمام", children: symptomCharacteristics("palp-stress", "general") },
        ]
      },
      {
        id: "cardio-oedeme", label: "Gonflement des jambes (Oedème)", descriptionTunisian: "ساقين منفوخة", children: [
          { id: "oedeme-deux", label: "Les deux jambes", descriptionTunisian: "الزوز ساقين", children: symptomCharacteristics("oedeme-deux", "general") },
          { id: "oedeme-matin-soir", label: "Pire le soir", descriptionTunisian: "تزيد في الليل", children: symptomCharacteristics("oedeme-matin-soir", "general") },
        ]
      },
      {
        id: "cardio-tension", label: "Problèmes de tension (connus ou ressentis)", descriptionTunisian: "ضغط الدم", children: [
          { id: "tension-haute", label: "Poussée hypertensive", descriptionTunisian: "تونسيو طالعة", children: symptomCharacteristics("tension-haute", "neuro") },
          { id: "tension-basse", label: "Chute de tension", descriptionTunisian: "تونسيو طايحة", children: symptomCharacteristics("tension-basse", "neuro") },
        ]
      }
    ]
  },
  {
    id: "digestif",
    label: "Digestif",
    descriptionTunisian: "المعدة و المصران",
    icon: Waves,
    children: [
      {
        id: "digestif-haut",
        label: "Estomac / Oesophage",
        descriptionTunisian: "المعدة",
        children: [
          { id: "dig-nausee", label: "Nausées", descriptionTunisian: "غثيان", children: symptomCharacteristics("dig-nausee", "digestive") },
          {
            id: "dig-vomissement", label: "Vomissements", descriptionTunisian: "ردان", children: [
              { id: "vomis-alimentaire", label: "Alimentaires", descriptionTunisian: "ماكلة", children: symptomCharacteristics("vomis-alimentaire", "digestive") },
              { id: "vomis-bile", label: "Bile (Jaune/Vert)", descriptionTunisian: "مرارة", children: symptomCharacteristics("vomis-bile", "digestive") },
              { id: "vomis-sang", label: "Sang", descriptionTunisian: "دم", children: symptomCharacteristics("vomis-sang", "digestive") },
            ]
          },
          { id: "dig-reflux", label: "Reflux acide / Aigreurs", descriptionTunisian: "جاير", children: symptomCharacteristics("dig-reflux", "digestive") },
          { id: "dig-ballonnement-haut", label: "Éructations (Rots) excessifs", descriptionTunisian: "تكرع برشا", children: symptomCharacteristics("dig-ballonnement-haut", "digestive") },
        ]
      },
      {
        id: "digestif-bas",
        label: "Intestins / Transit",
        descriptionTunisian: "المصران",
        children: [
          {
            id: "dig-diarrhee", label: "Diarrhée", descriptionTunisian: "جريان جوف", children: [
              { id: "diarrhee-eau", label: "Liquide / Eau", descriptionTunisian: "ماء", children: symptomCharacteristics("diarrhee-eau", "digestive") },
              { id: "diarrhee-glaires", label: "Glaireuse", descriptionTunisian: "بالرغوة", children: symptomCharacteristics("diarrhee-glaires", "digestive") },
              { id: "diarrhee-sang", label: "Sanglante", descriptionTunisian: "بالدم", children: symptomCharacteristics("diarrhee-sang", "digestive") },
            ]
          },
          { id: "dig-gaz", label: "Gaz / Ballonnements intestinaux", descriptionTunisian: "غازات", children: symptomCharacteristics("dig-gaz", "digestive") },
          { id: "dig-lourd", label: "Sensation d'estomac lourd", descriptionTunisian: "المعدة رزينة", children: symptomCharacteristics("dig-lourd", "digestive") },
          {
            id: "dig-selles", label: "Anomalie des selles", descriptionTunisian: "لون الخروج", children: [
              { id: "selles-noires", label: "Noires (comme du goudron)", descriptionTunisian: "كحلة", children: symptomCharacteristics("selles-noires", "digestive") },
              { id: "selles-pales", label: "Pâles / Blanches", descriptionTunisian: "بيضاء", children: symptomCharacteristics("selles-pales", "digestive") },
              { id: "selles-graisseuses", label: "Graisseuses / Flottantes", descriptionTunisian: "مزيته", children: symptomCharacteristics("selles-graisseuses", "digestive") },
            ]
          },
        ]
      },
      {
        id: "dig-appetit", label: "Appétit & Poids", descriptionTunisian: "الشهية", children: [
          { id: "appetit-perte", label: "Perte d'appétit", descriptionTunisian: "شبعان ديما", children: symptomCharacteristics("appetit-perte", "general") },
          { id: "appetit-augmentation", label: "Faim excessive", descriptionTunisian: "جيعان ديما", children: symptomCharacteristics("appetit-augmentation", "general") },
        ]
      }
    ]
  },
  {
    id: "genito-urinaire",
    label: "Génito-urinaire & Sexuel",
    descriptionTunisian: "البول و الجهاز التناسلي",
    icon: Droplet,
    children: [
      {
        id: "urinaire",
        label: "Urinaire",
        descriptionTunisian: "البول",
        children: [
          { id: "uri-douleur", label: "Brûlure / Douleur en urinant", descriptionTunisian: "حرقان", children: genitoUrinaryCharacteristics("uri-douleur") },
          { id: "uri-frequence", label: "Besoin fréquent (Pollakiurie)", descriptionTunisian: "تمشي برشا للتوالات", children: genitoUrinaryCharacteristics("uri-frequence") },
          { id: "uri-urgent", label: "Besoin urgent / Fuites", descriptionTunisian: "ما تنجمش تشد روحك", children: genitoUrinaryCharacteristics("uri-urgent") },
          { id: "uri-sang", label: "Sang dans les urines", descriptionTunisian: "دم في البول", children: genitoUrinaryCharacteristics("uri-sang") },
          { id: "uri-couleur", label: "Urine trouble / odeur forte", descriptionTunisian: "بول خاثر / ريحة قوية", children: genitoUrinaryCharacteristics("uri-couleur") },
          { id: "uri-retention", label: "Difficulté à uriner / Blocage", descriptionTunisian: "البول محصور", children: genitoUrinaryCharacteristics("uri-retention") },
          { id: "uri-nuit", label: "Besoin d'uriner la nuit (Nycturie)", descriptionTunisian: "تقوم في الليل للبول", children: genitoUrinaryCharacteristics("uri-nuit") },
        ]
      },
      {
        id: "genital-symptomes",
        label: "Symptômes Génitaux",
        descriptionTunisian: "أعراض الجهاز التناسلي",
        children: [
          {
            id: "gen-douleur",
            label: "Douleurs génitales",
            descriptionTunisian: "وجيعة في المناطق الحساسة",
            children: [
              { id: "gen-douleur-pelvienne", label: "Douleur pelvienne / Bas ventre", descriptionTunisian: "وجيعة أسفل البطن", children: genitoUrinaryCharacteristics("gen-douleur-pelvienne") },
              { id: "gen-douleur-rapport", label: "Douleur pendant/après rapports", descriptionTunisian: "وجيعة وقت العلاقة", children: genitoUrinaryCharacteristics("gen-douleur-rapport") },
              { id: "gen-douleur-testiculaire", label: "Douleur testiculaire (Homme)", descriptionTunisian: "وجيعة في الخصitien", sex: 'homme', children: genitoUrinaryCharacteristics("gen-douleur-testiculaire") },
              { id: "gen-douleur-vulvaire", label: "Douleur vulvaire/vaginale (Femme)", descriptionTunisian: "وجيعة في المهبل", sex: 'femme', children: genitoUrinaryCharacteristics("gen-douleur-vulvaire") },
            ]
          },
          {
            id: "gen-ecoulement",
            label: "Écoulements & Sécrétions",
            descriptionTunisian: "إفرازات",
            children: [
              { id: "gen-ecoulement-anormal", label: "Écoulement inhabituel", descriptionTunisian: "إفرازات غريبة", children: genitoUrinaryCharacteristics("gen-ecoulement-anormal") },
              { id: "gen-ecoulement-sang", label: "Saignement hors règles", descriptionTunisian: "دم في غير وقتو", children: genitoUrinaryCharacteristics("gen-ecoulement-sang") },
              { id: "gen-ecoulement-odeur", label: "Mauvaise odeur", descriptionTunisian: "ريحة خايبة", children: genitoUrinaryCharacteristics("gen-ecoulement-odeur") },
            ]
          },
          {
            id: "gen-peau",
            label: "Lésions & Peau",
            descriptionTunisian: "حبوب و جلدة",
            children: [
              { id: "gen-demangeaison", label: "Démangeaisons intenses", descriptionTunisian: "حكة قوية", children: genitoUrinaryCharacteristics("gen-demangeaison") },
              { id: "gen-rougeur", label: "Rougeur / Irritation", descriptionTunisian: "حمرة / طياب", children: genitoUrinaryCharacteristics("gen-rougeur") },
              { id: "gen-boutons", label: "Boutons / Verrues / Ulcères", descriptionTunisian: "حبوب / جروح", children: genitoUrinaryCharacteristics("gen-boutons") },
              { id: "gen-gonflement", label: "Gonflement / Masse", descriptionTunisian: "نفخ / كعبرة", children: genitoUrinaryCharacteristics("gen-gonflement") },
            ]
          }
        ]
      },
      {
        id: "sante-reproductive",
        label: "Santé Reproductive & Sexuelle",
        descriptionTunisian: "الصحة الإنجابية و الجنسية",
        children: [
          {
            id: "repro-femme",
            label: "Cycle & Règles (Femme)",
            descriptionTunisian: "العادة الشهرية",
            sex: 'femme',
            children: [
              { id: "cycle-retard", label: "Retard de règles / Absence", descriptionTunisian: "تأخر العادة", children: genitoUrinaryCharacteristics("cycle-retard") },
              { id: "cycle-abondant", label: "Règles très abondantes", descriptionTunisian: "دم قوي برشا", children: genitoUrinaryCharacteristics("cycle-abondant") },
              { id: "cycle-douloureux", label: "Règles très douloureuses", descriptionTunisian: "وجيعة قوية وقت العادة", children: genitoUrinaryCharacteristics("cycle-douloureux") },
              { id: "cycle-irregulier", label: "Cycle irrégulier", descriptionTunisian: "عادة مش منظمة", children: genitoUrinaryCharacteristics("cycle-irregulier") },
              { id: "cycle-syndrome-premenstruel", label: "Syndrome prémenstruel sévère", descriptionTunisian: "قلق قبل العادة", children: genitoUrinaryCharacteristics("cycle-syndrome-premenstruel") },
            ]
          },
          {
            id: "repro-sexuel",
            label: "Fonction Sexuelle",
            descriptionTunisian: "الحياة الجنسية",
            children: [
              { id: "sex-libido", label: "Baisse de libido", descriptionTunisian: "نقص الرغبة", children: genitoUrinaryCharacteristics("sex-libido") },
              { id: "sex-erection", label: "Troubles de l'érection (Homme)", descriptionTunisian: "ضعف الانتصاب", sex: 'homme', children: genitoUrinaryCharacteristics("sex-erection") },
              { id: "sex-ejaculation", label: "Troubles de l'éjaculation (Homme)", descriptionTunisian: "مشاكل القذف", sex: 'homme', children: genitoUrinaryCharacteristics("sex-ejaculation") },
              { id: "sex-secheresse", label: "Sécheresse vaginale (Femme)", descriptionTunisian: "شياح المهبل", sex: 'femme', children: genitoUrinaryCharacteristics("sex-secheresse") },
            ]
          },
          {
            id: "repro-fertilite",
            label: "Fertilité",
            descriptionTunisian: "الخصوبة",
            children: [
              { id: "fert-conception", label: "Difficulté à concevoir", descriptionTunisian: "صعوبة في الحمل", children: genitoUrinaryCharacteristics("fert-conception") },
            ]
          }
        ]
      },

    ]
  },
  {
    id: "peau",
    label: "Problèmes de peau",
    descriptionTunisian: "الجلدة",
    icon: Sheet,
    children: [
      {
        id: "peau-aspect",
        label: "Changement d'aspect",
        descriptionTunisian: "منظر الجلدة",
        children: [
          { id: "peau-rougeur", label: "Rougeur (Erythème)", descriptionTunisian: "حمورية", children: symptomCharacteristics("peau-rougeur", "skin") },
          { id: "peau-paleur", label: "Pâleur", descriptionTunisian: "صفuriya", children: symptomCharacteristics("peau-paleur", "skin") },
          { id: "peau-jaunisse", label: "Jaunisse (Ictère)", descriptionTunisian: "بوصفر", children: symptomCharacteristics("peau-jaunisse", "general") },
          { id: "peau-bleu", label: "Bleus (Ecchymoses) faciles", descriptionTunisian: "زروقية", children: symptomCharacteristics("peau-bleu", "skin") },
        ]
      },
      {
        id: "peau-lesion",
        label: "Boutons & Lésions",
        descriptionTunisian: "حبوب و جروح",
        children: [
          { id: "peau-boutons", label: "Boutons / Acné", descriptionTunisian: "حب", children: symptomCharacteristics("peau-boutons", "skin") },
          { id: "peau-plaques", label: "Plaques sèches / Eczéma", descriptionTunisian: "قشور", children: symptomCharacteristics("peau-plaques", "skin") },
          { id: "peau-urticaire", label: "Urticaire (Gonflement, gratte)", descriptionTunisian: "حكة و نفخ", children: symptomCharacteristics("peau-urticaire", "skin") },
          { id: "peau-vesicules", label: "Vésicules / Cloques", descriptionTunisian: "فقalil", children: symptomCharacteristics("peau-vesicules", "skin") },
          { id: "peau-grain-beaute", label: "Grain de beauté suspect", descriptionTunisian: "خالة تبدلت", children: symptomCharacteristics("peau-grain-beaute", "skin") },
        ]
      },
      {
        id: "peau-sensation",
        label: "Sensations",
        descriptionTunisian: "إحساس",
        children: [
          { id: "peau-grattage", label: "Démangeaisons (Prurit)", descriptionTunisian: "حكة", children: symptomCharacteristics("peau-grattage", "skin") },
          { id: "peau-seche", label: "Sécheresse intense", descriptionTunisian: "شياح", children: symptomCharacteristics("peau-seche", "skin") },
          { id: "peau-chaude", label: "Chaleur au toucher", descriptionTunisian: "سخونة", children: symptomCharacteristics("peau-chaude", "skin") },
        ]
      },
      {
        id: "peau-cheveux", label: "Cheveux & Ongles", descriptionTunisian: "شعر و ضوافر", children: [
          { id: "cheveux-chute", label: "Chute de cheveux", descriptionTunisian: "طيحان الشعر", children: symptomCharacteristics("cheveux-chute") },
          { id: "ongles-cassants", label: "Ongles cassants / colorés", descriptionTunisian: "ضوافر تتكسر", children: symptomCharacteristics("ongles-cassants") },
        ]
      }
    ]
  },
  {
    id: "etat-general",
    label: "État général",
    descriptionTunisian: "الحالة العامة",
    icon: Users,
    children: [
      {
        id: "general-fievre",
        label: "Fièvre & Frissons",
        descriptionTunisian: "سخانة",
        children: [
          { id: "fievre-legere", label: "Légère (38-38.5°C)", descriptionTunisian: "سخانة خفيفة", children: symptomCharacteristics("fievre-legere", "general") },
          { id: "fievre-elevee", label: "Élevée (> 38.5°C)", descriptionTunisian: "سخانة قوية", children: symptomCharacteristics("fievre-elevee", "general") },
          { id: "fievre-frissons", label: "Avec frissons / Tremblements", descriptionTunisian: "رعشة", children: symptomCharacteristics("fievre-frissons", "general") },
          { id: "fievre-frissons-sans", label: "Frissons SANS fièvre", descriptionTunisian: "ترعيش بلاش سخانة", children: symptomCharacteristics("fievre-frissons-sans") },
          { id: "fievre-sueurs", label: "Avec sueurs profuses", descriptionTunisian: "عرق برشا", children: symptomCharacteristics("fievre-sueurs") },
          { id: "fievre-froides", label: "Sueurs froides nocturnes", descriptionTunisian: "عرق بارد في الليل", children: symptomCharacteristics("fievre-froides") },
        ]
      },
      {
        id: "general-fatigue",
        label: "Fatigue (Asthénie)",
        descriptionTunisian: "فشلة",
        children: [
          { id: "fatigue-reveil", label: "Dès le réveil", descriptionTunisian: "تعبان ملي تقوم", children: symptomCharacteristics("fatigue-reveil", "general") },
          { id: "fatigue-effort", label: "Au moindre effort", descriptionTunisian: "تتعب فيسع", children: symptomCharacteristics("fatigue-effort", "general") },
          { id: "fatigue-chronique", label: "Permanente", descriptionTunisian: "ديما تعبان", children: symptomCharacteristics("fatigue-chronique", "general") },
        ]
      },
      {
        id: "general-poids",
        label: "Poids",
        descriptionTunisian: "الميزان",
        children: [
          { id: "poids-perte", label: "Perte de poids involontaire", descriptionTunisian: "ضعفت وحدك", children: symptomCharacteristics("poids-perte", "general") },
          { id: "poids-prise", label: "Prise de poids rapide", descriptionTunisian: "سمنت فيسع", children: symptomCharacteristics("poids-prise", "general") },
        ]
      },
      {
        id: "general-ganglions", label: "Ganglions gonflés", descriptionTunisian: "ولسيس", children: [
          { id: "ganglion-cou", label: "Cou", descriptionTunisian: "في الرقبة", children: symptomCharacteristics("ganglion-cou", "skin") },
          { id: "ganglion-aisselle", label: "Aisselles", descriptionTunisian: "تحت الإبط", children: symptomCharacteristics("ganglion-aisselle", "skin") },
          { id: "ganglion-aine", label: "Aine", descriptionTunisian: "في Fkhadh", children: symptomCharacteristics("ganglion-aine", "skin") },
        ]
      }
    ]
  },
  {
    id: "sante-mentale",
    label: "Humeur & Santé Mentale",
    descriptionTunisian: "النفسية",
    icon: BrainCircuit,
    children: [
      {
        id: "mental-humeur",
        label: "Humeur",
        descriptionTunisian: "المورال",
        children: [
          { id: "humeur-triste", label: "Tristesse / Déprime", descriptionTunisian: "حزن", children: symptomCharacteristics("humeur-triste", "general") },
          { id: "humeur-anxiete", label: "Anxiété / Angoisse", descriptionTunisian: "فجعة / خوف", children: symptomCharacteristics("humeur-anxiete", "general") },
          { id: "humeur-colere", label: "Irritabilité / Colère", descriptionTunisian: "غش", children: symptomCharacteristics("humeur-colere", "general") },
          { id: "humeur-vide", label: "Sentiment de vide / Apathie", descriptionTunisian: "فراغ", children: symptomCharacteristics("humeur-vide", "general") },
        ]
      },
      {
        id: "mental-sommeil",
        label: "Sommeil",
        descriptionTunisian: "النوم",
        children: [
          { id: "sommeil-insomnie", label: "Insomnie (Endormissement)", descriptionTunisian: "ما يجيكش النوم", children: symptomCharacteristics("sommeil-insomnie", "general") },
          { id: "sommeil-reveils", label: "Réveils nocturnes", descriptionTunisian: "تفيق في الليل", children: symptomCharacteristics("sommeil-reveils", "general") },
          { id: "sommeil-cauchemars", label: "Cauchemars", descriptionTunisian: "كوابيس", children: symptomCharacteristics("sommeil-cauchemars", "general") },
          { id: "sommeil-exces", label: "Trop dormir (Hypersomnie)", descriptionTunisian: "نوم برشا", children: symptomCharacteristics("sommeil-exces", "general") },
        ]
      },
      {
        id: "mental-comportement", label: "Changement de comportement", descriptionTunisian: "تبدل الطبع", children: [
          { id: "comportement-isolement", label: "Isolement social", descriptionTunisian: "عزلة", children: symptomCharacteristics("comportement-isolement", "general") },
          { id: "comportement-agitation", label: "Agitation", descriptionTunisian: "حركة زايدة", children: symptomCharacteristics("comportement-agitation", "general") },
        ]
      }
    ]
  },
  {
    id: "troubles-yeux",
    label: "Troubles oculaires",
    descriptionTunisian: "العينين",
    icon: Eye,
    children: [
      {
        id: "yeux-vision", label: "Vision", descriptionTunisian: "النظر", children: [
          { id: "vision-floue", label: "Floue / Trouble", descriptionTunisian: "ضباب", children: symptomCharacteristics("vision-floue", "neuro") },
          { id: "vision-double", label: "Double (Diplopie)", descriptionTunisian: "ترا الحاجة ثنين", children: symptomCharacteristics("vision-double", "neuro") },
          { id: "vision-baisse", label: "Baisse brutale de la vue", descriptionTunisian: "نقص نظر مفاجئ", children: symptomCharacteristics("vision-baisse", "neuro") },
          { id: "vision-taches", label: "Tâches / Mouches volantes", descriptionTunisian: "ذبان قدام عينك", children: symptomCharacteristics("vision-taches", "neuro") },
        ]
      },
      {
        id: "yeux-aspect", label: "Aspect de l'œil", descriptionTunisian: "منظر العين", children: [
          { id: "yeux-rouge", label: "Rougeur", descriptionTunisian: "حمرة", children: symptomCharacteristics("yeux-rouge", "skin") },
          { id: "yeux-jaune", label: "Jaune (Blanc de l'œil)", descriptionTunisian: "صفuriya", children: symptomCharacteristics("yeux-jaune", "general") },
          { id: "yeux-gonfle", label: "Paupière gonflée", descriptionTunisian: "جفن منفوخ", children: symptomCharacteristics("yeux-gonfle", "skin") },
        ]
      },
      {
        id: "yeux-sensation", label: "Sensations", descriptionTunisian: "إحساس", children: [
          { id: "yeux-douleur", label: "Douleur oculaire", descriptionTunisian: "وجيعة", children: symptomCharacteristics("yeux-douleur", "pain") },
          { id: "yeux-demangeaison", label: "Démangeaisons", descriptionTunisian: "حكة", children: symptomCharacteristics("yeux-demangeaison", "skin") },
          { id: "yeux-sec", label: "Sécheresse / Sable", descriptionTunisian: "شياح", children: symptomCharacteristics("yeux-sec", "skin") },
          { id: "yeux-lumiere", label: "Sensibilité lumière (Photophobie)", descriptionTunisian: "قلق من الضو", children: symptomCharacteristics("yeux-lumiere", "neuro") },
          { id: "yeux-ecoulement", label: "Écoulement / Larmes", descriptionTunisian: "دموع / قيح", children: symptomCharacteristics("yeux-ecoulement", "skin") },
        ]
      }
    ]
  },
  {
    id: "blessures-incidents",
    label: "Blessures & Incidents",
    descriptionTunisian: "حوادث",
    icon: AlertTriangle,
    children: [
      {
        id: "traumatisme",
        label: "Choc / Coup",
        descriptionTunisian: "ضربة",
        children: [
          { id: "trauma-tete", label: "Traumatisme crânien", descriptionTunisian: "ضربة في الراس", children: symptomCharacteristics("trauma-tete", "neuro") },
          { id: "trauma-membre", label: "Coup sur un membre", descriptionTunisian: "ضربة في اليد/الساق", children: symptomCharacteristics("trauma-membre", "pain") },
          { id: "trauma-chute", label: "Chute", descriptionTunisian: "طيحة", children: symptomCharacteristics("trauma-chute", "pain") },
        ]
      },
      {
        id: "plaies",
        label: "Plaies & Saignements",
        descriptionTunisian: "جروح",
        children: [
          { id: "plaie-coupure", label: "Coupure nette", descriptionTunisian: "جرح بموس", children: symptomCharacteristics("plaie-coupure", "skin") },
          { id: "plaie-ecorchure", label: "Écorchure / Égratignure", descriptionTunisian: "تخبش", children: symptomCharacteristics("plaie-ecorchure", "skin") },
          { id: "plaie-profonde", label: "Plaie profonde / Ouverte", descriptionTunisian: "جرح غارق", children: symptomCharacteristics("plaie-profonde", "skin") },
          { id: "plaie-infectee", label: "Signes d'infection (Pus, Rougeur)", descriptionTunisian: "جرح مسخ", children: symptomCharacteristics("plaie-infectee", "skin") },
        ]
      },
      {
        id: "brulures",
        label: "Brûlures",
        descriptionTunisian: "حروق",
        children: [
          { id: "brulure-thermique", label: "Chaleur / Feu / Liquide", descriptionTunisian: "نار / ماء سخون", children: symptomCharacteristics("brulure-thermique", "skin") },
          { id: "brulure-chimique", label: "Produit chimique", descriptionTunisian: "produit", children: symptomCharacteristics("brulure-chimique", "skin") },
          { id: "brulure-soleil", label: "Coup de soleil", descriptionTunisian: "شمس", children: symptomCharacteristics("brulure-soleil", "skin") },
        ]
      },
      {
        id: "morsures", label: "Morsures & Piqûres", descriptionTunisian: "عضة / قرصة", children: [
          { id: "morsure-animal", label: "Animal (Chien, Chat...)", descriptionTunisian: "حيوان", children: symptomCharacteristics("morsure-animal", "skin") },
          { id: "piqure-insecte", label: "Insecte (Guêpe, Araignée...)", descriptionTunisian: "حشره", children: symptomCharacteristics("piqure-insecte", "skin") },
        ]
      }
    ]
  },
  {
    id: "bucco-dentaire",
    label: "Bucco-dentaire",
    descriptionTunisian: "الفم و السنين",
    icon: Activity,
    children: [
      {
        id: "dents",
        label: "Dents",
        descriptionTunisian: "السنين",
        children: [
          { id: "dent-douleur", label: "Rage de dent", descriptionTunisian: "وجيعة سنين", children: symptomCharacteristics("dent-douleur", "pain") },
          { id: "dent-sensible", label: "Sensibilité Chaud/Froid", descriptionTunisian: "حساسية", children: symptomCharacteristics("dent-sensible", "pain") },
          { id: "dent-casse", label: "Dent cassée / bouge", descriptionTunisian: "سن مكسرة", children: symptomCharacteristics("dent-casse", "pain") },
        ]
      },
      {
        id: "gencives",
        label: "Gencives",
        descriptionTunisian: "اللثة",
        children: [
          { id: "gencive-saigne", label: "Saignement", descriptionTunisian: "دم", children: symptomCharacteristics("gencive-saigne", "skin") },
          { id: "gencive-gonfle", label: "Gonflement / Abcès", descriptionTunisian: "نفخ", children: symptomCharacteristics("gencive-gonfle", "skin") },
        ]
      },
      {
        id: "bouche",
        label: "Bouche & Langue",
        descriptionTunisian: "الفم",
        children: [
          { id: "bouche-aphte", label: "Aphtes", descriptionTunisian: "أفت", children: symptomCharacteristics("bouche-aphte", "skin") },
          { id: "bouche-langue", label: "Langue (Douleur, Tâche)", descriptionTunisian: "اللسان", children: symptomCharacteristics("bouche-langue", "skin") },
          { id: "bouche-haleine", label: "Mauvaise haleine", descriptionTunisian: "ريحة خايبة", children: symptomCharacteristics("bouche-haleine", "general") },
          { id: "bouche-seche", label: "Bouche sèche", descriptionTunisian: "فم شايح", children: symptomCharacteristics("bouche-seche", "skin") },
        ]
      }
    ]
  }
];
