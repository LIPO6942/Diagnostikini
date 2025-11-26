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
const symptomCharacteristics = (baseId: string): SymptomNode[] => [
  {
    id: `${baseId}-nature`,
    label: "Nature du symptôme",
    description: "Comment décririez-vous la sensation ?",
    descriptionTunisian: "كيفاش توصف الإحساس؟",
    children: [
      { id: `${baseId}-nat-pression`, label: "Pression / Écrasement / Serrement", descriptionTunisian: "رصان / ثقل / تعصير" },
      { id: `${baseId}-nat-brulure`, label: "Brûlure / Chaleur intense", descriptionTunisian: "حرقان / سخانة" },
      { id: `${baseId}-nat-tiraillement`, label: "Tiraillement / Étirement", descriptionTunisian: "تجبيد" },
      { id: `${baseId}-nat-crampe`, label: "Crampe / Torsion", descriptionTunisian: "تكميش" },
      { id: `${baseId}-nat-piqure`, label: "Piqûre / Coup d'aiguille / Poignard", descriptionTunisian: "نخس / سكاكين" },
      { id: `${baseId}-nat-pulsation`, label: "Pulsation / Battement", descriptionTunisian: "تسطير / نبض" },
      { id: `${baseId}-nat-decharge`, label: "Décharge électrique", descriptionTunisian: "ضو يضرب" },
      { id: `${baseId}-nat-irritation`, label: "Irritation / Démangeaison / Picotement", descriptionTunisian: "حكة / تهييج / تنميل" },
      { id: `${baseId}-nat-lourdeur`, label: "Lourdeur / Pesanteur", descriptionTunisian: "رزن" },
      { id: `${baseId}-nat-autre`, label: "Autre (Précisez)", descriptionTunisian: "حاجة أخرى" },
    ]
  },
  {
    id: `${baseId}-intensite`,
    label: "Intensité",
    description: "Quelle est l'intensité de la gêne ?",
    descriptionTunisian: "قداش قوية القلق؟",
    children: [
      { id: `${baseId}-int-legere`, label: "Légère / Gênante", descriptionTunisian: "خفيفة / تقلق شوي" },
      { id: `${baseId}-int-inconfortable`, label: "Inconfortable", descriptionTunisian: "تقلق" },
      { id: `${baseId}-int-moderee`, label: "Modérée", descriptionTunisian: "متوسطة" },
      { id: `${baseId}-int-severe`, label: "Sévère", descriptionTunisian: "قوية" },
      { id: `${baseId}-int-invalidante`, label: "Invalidante / Empêche les activités", descriptionTunisian: "قوية برشا / ما تنجم تعمل شي" },
      { id: `${baseId}-int-fluctuante`, label: "Fluctuante (Ça va et ça vient)", descriptionTunisian: "تمشي و تجي" },
      { id: `${baseId}-int-brutale`, label: "Brutale / Soudaine", descriptionTunisian: "جات ضربة وحدة" },
    ]
  },
  {
    id: `${baseId}-frequence`,
    label: "Fréquence",
    description: "À quelle fréquence cela arrive-t-il ?",
    descriptionTunisian: "قداش من مرة تصير؟",
    children: [
      { id: `${baseId}-freq-unique`, label: "Unique (Une seule fois)", descriptionTunisian: "مرة برك" },
      { id: `${baseId}-freq-rare`, label: "Rare (Quelques fois)", descriptionTunisian: "ساعات قليلة" },
      { id: `${baseId}-freq-intermittente`, label: "Intermittente (Parfois)", descriptionTunisian: "ساعات" },
      { id: `${baseId}-freq-reguliere`, label: "Régulière / Quotidienne", descriptionTunisian: "كل يوم / ديما" },
      { id: `${baseId}-freq-persistante`, label: "Persistante / Ne part pas", descriptionTunisian: "ما تتنحاش جملة" },
      { id: `${baseId}-freq-crises`, label: "Par crises / Épisodes", descriptionTunisian: "نوبات" },
      { id: `${baseId}-freq-moments`, label: "Liée à des moments précis", descriptionTunisian: "في أوقات معينة" },
    ]
  },
  {
    id: `${baseId}-duree`,
    label: "Durée d'évolution",
    description: "Depuis quand avez-vous ce symptôme ?",
    descriptionTunisian: "ملي وقتاش عندك؟",
    children: [
      { id: `${baseId}-dur-tres-recente`, label: "Très récente (< 24h)", descriptionTunisian: "جديدة (أقل من نهار)" },
      { id: `${baseId}-dur-recente`, label: "Récente (Quelques jours)", descriptionTunisian: "عندها أيامات" },
      { id: `${baseId}-dur-installee`, label: "Installée (Semaines)", descriptionTunisian: "عندها جمعات" },
      { id: `${baseId}-dur-chronique`, label: "Chronique (Mois/Années)", descriptionTunisian: "عندها أشهر / سنين" },
      { id: `${baseId}-dur-saisonniere`, label: "Saisonnière / Récurrente", descriptionTunisian: "موسمية / ترجع كل مرة" },
    ]
  },
  {
    id: `${baseId}-facteurs`,
    label: "Facteurs déclenchants / aggravants",
    description: "Qu'est-ce qui déclenche ou aggrave le symptôme ?",
    descriptionTunisian: "شنوة يزيد عليك؟",
    children: [
      { id: `${baseId}-fac-effort`, label: "Effort physique / Sport", descriptionTunisian: "المجهود / الرياضة" },
      { id: `${baseId}-fac-repos`, label: "Repos / Inactivité", descriptionTunisian: "الراحة / النوم" },
      { id: `${baseId}-fac-stress`, label: "Stress / Émotion", descriptionTunisian: "الستراس / الفجعة" },
      { id: `${baseId}-fac-alimentation`, label: "Alimentation / Repas", descriptionTunisian: "الماكلة" },
      { id: `${baseId}-fac-position`, label: "Position (Debout/Assis/Couché)", descriptionTunisian: "الوقفة / القعدة / النوم" },
      { id: `${baseId}-fac-mouvement`, label: "Mouvement spécifique", descriptionTunisian: "حركة معينة" },
      { id: `${baseId}-fac-froid-chaud`, label: "Froid / Chaud", descriptionTunisian: "البرد / السخانة" },
      { id: `${baseId}-fac-contact`, label: "Contact / Toucher / Pression", descriptionTunisian: "المس" },
      { id: `${baseId}-fac-cycle`, label: "Cycle menstruel / Hormonal", descriptionTunisian: "العادة الشهرية" },
      { id: `${baseId}-fac-hygiene`, label: "Hygiène / Produits", descriptionTunisian: "النظافة / مواد تنظيف" },
      { id: `${baseId}-fac-autre`, label: "Autre facteur", descriptionTunisian: "حاجة أخرى" },
    ]
  }
];

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
            children: painCharacteristics("tete-globale")
          },
          {
            id: "tete-tempes",
            label: "Tempes (Côtés)",
            descriptionTunisian: "الشقيقة",
            children: painCharacteristics("tete-tempes")
          },
          {
            id: "tete-front",
            label: "Front / Yeux",
            descriptionTunisian: "الجبهة / العينين",
            children: painCharacteristics("tete-front")
          },
          {
            id: "tete-nuque",
            label: "Nuque / Arrière du crâne",
            descriptionTunisian: "القفا / الرقبة من تالي",
            children: painCharacteristics("tete-nuque")
          },
          {
            id: "visage-sinus",
            label: "Visage / Sinus",
            descriptionTunisian: "الوجه / الجيوب الأنفية",
            children: painCharacteristics("visage-sinus")
          }
        ]
      },
      {
        id: "douleur-dos",
        label: "Dos",
        descriptionTunisian: "الظهر",
        children: [
          { id: "dos-cervicales", label: "Cervicales (Haut)", descriptionTunisian: "الرقبة", children: painCharacteristics("dos-cervicales") },
          { id: "dos-dorsales", label: "Milieu du dos", descriptionTunisian: "وسط الظهر", children: painCharacteristics("dos-dorsales") },
          { id: "dos-lombaires", label: "Lombaires (Bas)", descriptionTunisian: "أسفل الظهر", children: painCharacteristics("dos-lombaires") },
          { id: "dos-sciatique", label: "Bas du dos irradiant jambe", descriptionTunisian: "عرق لاسة", children: painCharacteristics("dos-sciatique") },
        ]
      },
      {
        id: "douleur-poitrine",
        label: "Poitrine / Thorax",
        descriptionTunisian: "الصدر",
        children: [
          { id: "poitrine-gauche", label: "Côté gauche (Cœur)", descriptionTunisian: "شيرة القلب", children: painCharacteristics("poitrine-gauche") },
          { id: "poitrine-droite", label: "Côté droit", descriptionTunisian: "شيرة اليمين", children: painCharacteristics("poitrine-droite") },
          { id: "poitrine-centre", label: "Centre (Sternum)", descriptionTunisian: "في الوسط", children: painCharacteristics("poitrine-centre") },
          { id: "poitrine-cotes", label: "Côtés / Flancs", descriptionTunisian: "الأجناب", children: painCharacteristics("poitrine-cotes") },
        ]
      },
      {
        id: "douleur-ventre",
        label: "Ventre / Abdomen",
        descriptionTunisian: "الكرش",
        children: [
          { id: "ventre-estomac", label: "Creux de l'estomac (Haut centre)", descriptionTunisian: "فم المعدة", children: painCharacteristics("ventre-estomac") },
          { id: "ventre-foie", label: "Sous les côtes droites", descriptionTunisian: "تحت الضلوع يمين", children: painCharacteristics("ventre-foie") },
          { id: "ventre-nombril", label: "Autour du nombril", descriptionTunisian: "داير بالسرّة", children: painCharacteristics("ventre-nombril") },
          { id: "ventre-bas-droite", label: "Bas droite (Appendice?)", descriptionTunisian: "لوطة يمين", children: painCharacteristics("ventre-bas-droite") },
          { id: "ventre-bas-gauche", label: "Bas gauche", descriptionTunisian: "لوطة يسار", children: painCharacteristics("ventre-bas-gauche") },
          { id: "ventre-bas-centre", label: "Bas ventre / Pelvis", descriptionTunisian: "أسفل البطن", children: painCharacteristics("ventre-bas-centre") },
        ]
      },
      {
        id: "douleur-membres",
        label: "Bras & Jambes",
        descriptionTunisian: "يدين و ساقين",
        children: [
          { id: "membre-epaule", label: "Épaule", descriptionTunisian: "الكتف", children: painCharacteristics("membre-epaule") },
          { id: "membre-coude", label: "Coude", descriptionTunisian: "المرفق", children: painCharacteristics("membre-coude") },
          { id: "membre-poignet", label: "Poignet / Main", descriptionTunisian: "المعصم / اليد", children: painCharacteristics("membre-poignet") },
          { id: "membre-hanche", label: "Hanche", descriptionTunisian: "الفخذ", children: painCharacteristics("membre-hanche") },
          { id: "membre-genou", label: "Genou", descriptionTunisian: "الركبة", children: painCharacteristics("membre-genou") },
          { id: "membre-cheville", label: "Cheville / Pied", descriptionTunisian: "الكعب / الساق", children: painCharacteristics("membre-cheville") },
          { id: "membre-muscle", label: "Muscle (Mollet, Cuisse...)", descriptionTunisian: "العضلات", children: painCharacteristics("membre-muscle") },
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
          { id: "nez-bouche", label: "Nez bouché / Congestion", descriptionTunisian: "خشم مسكر" },
          {
            id: "nez-coule",
            label: "Écoulement nasal",
            descriptionTunisian: "خشم يجري",
            children: [
              { id: "nez-coule-clair", label: "Clair / Liquide", descriptionTunisian: "ماء صافي" },
              { id: "nez-coule-epais", label: "Épais / Jaune / Vert", descriptionTunisian: "خاثر / أصفر / أخضر" },
              { id: "nez-coule-sang", label: "Avec sang", descriptionTunisian: "بالدم" },
            ]
          },
          { id: "nez-eternuement", label: "Éternuements fréquents", descriptionTunisian: "عطish برشا" },
          { id: "nez-odorat", label: "Perte d'odorat", descriptionTunisian: "ما تشمش" },
        ]
      },
      {
        id: "gorge",
        label: "Gorge",
        descriptionTunisian: "القراجم",
        children: [
          { id: "gorge-douleur", label: "Douleur / Picotement", descriptionTunisian: "وجيعة / تنميل", children: painCharacteristics("gorge") },
          { id: "gorge-avaler", label: "Difficulté à avaler", descriptionTunisian: "وحلان الماكلة" },
          { id: "gorge-enrouee", label: "Voix enrouée / Perte de voix", descriptionTunisian: "صوت مبحاح" },
          { id: "gorge-gonflee", label: "Sensation de gonflement / Boule", descriptionTunisian: "كعبة في القرجومة", children: painCharacteristics("gorge-gonflee") },
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
              { id: "toux-seche-nuit", label: "Surtout la nuit", descriptionTunisian: "في الليل" },
              { id: "toux-seche-effort", label: "À l'effort / Froid", descriptionTunisian: "بالمجهود / البرد" },
              { id: "toux-seche-quinte", label: "Par quintes (crises)", descriptionTunisian: "نوبات كحة" },
            ]
          },
          {
            id: "toux-grasse",
            label: "Grasse / Productive",
            descriptionTunisian: "بالبلغم",
            children: [
              { id: "toux-grasse-blanc", label: "Crachats blancs/clairs", descriptionTunisian: "بلغم أبيض" },
              { id: "toux-grasse-jaune", label: "Crachats jaunes/verts", descriptionTunisian: "بلغم أصفر/أخضر" },
              { id: "toux-grasse-sang", label: "Crachats avec sang", descriptionTunisian: "بلغم بالدم" },
            ]
          }
        ]
      },
      {
        id: "oreilles",
        label: "Oreilles",
        descriptionTunisian: "الوذنين",
        children: [
          { id: "oreille-douleur", label: "Douleur (Otite?)", descriptionTunisian: "وجيعة وذن", children: painCharacteristics("oreille") },
          { id: "oreille-bouchon", label: "Sensation d'oreille bouchée", descriptionTunisian: "وذن مسكرة" },
          { id: "oreille-bourdonnement", label: "Bourdonnements / Acouphènes", descriptionTunisian: "تزفير في الوذن" },
          { id: "oreille-ecoulement", label: "Écoulement liquide", descriptionTunisian: "وذن تخرج في الماء/القيح" },
          { id: "oreille-audition", label: "Baisse d'audition", descriptionTunisian: "نقص سمع" },
        ]
      },
      {
        id: "souffle",
        label: "Respiration / Souffle",
        descriptionTunisian: "النفس",
        children: [
          {
            id: "souffle-court", label: "Essoufflement (Dyspnée)", descriptionTunisian: "نفس قصير", children: [
              { id: "souffle-court-effort", label: "À l'effort", descriptionTunisian: "بالمجهود" },
              { id: "souffle-court-repos", label: "Au repos", descriptionTunisian: "وانت قاعد" },
              { id: "souffle-court-alonge", label: "En position allongée", descriptionTunisian: "كي تتمد" },
            ]
          },
          { id: "souffle-sifflement", label: "Sifflement respiratoire", descriptionTunisian: "تزفير في الصدر" },
          { id: "souffle-irregulier", label: "Respiration rapide ou irrégulière", descriptionTunisian: "نفس يجري" },
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
              { id: "migraine-aura", label: "Avec aura (visuelle/sensitive)", descriptionTunisian: "بالضباب/تنميل" },
              { id: "migraine-nausee", label: "Avec nausées", descriptionTunisian: "بالغثيان" },
              ...painCharacteristics("migraine")
            ]
          },
          { id: "cephalee-tension", label: "Céphalée de tension (Casque, Barre)", descriptionTunisian: "راس مكبوس", children: painCharacteristics("cephalee-tension") },
        ]
      },
      {
        id: "neuro-vertiges",
        label: "Vertiges & Équilibre",
        descriptionTunisian: "الدوخة",
        children: [
          { id: "vertige-rotatoire", label: "Ça tourne (Vrai vertige)", descriptionTunisian: "الدنيا تدور" },
          { id: "vertige-etourdissement", label: "Sensation de tête légère / Malaise", descriptionTunisian: "دوخة خفيفة" },
          { id: "vertige-perte-connaissance", label: "Perte de connaissance / Syncope", descriptionTunisian: "غيبوبة" },
        ]
      },
      {
        id: "neuro-sensibilite",
        label: "Sensibilité & Motricité",
        descriptionTunisian: "الحس و الحركة",
        children: [
          {
            id: "neuro-fourmillements", label: "Fourmillements / Engourdissement", descriptionTunisian: "تنميل", children: [
              { id: "fourmi-main", label: "Mains / Bras", descriptionTunisian: "في اليدين" },
              { id: "fourmi-pied", label: "Pieds / Jambes", descriptionTunisian: "في الساقين" },
              { id: "fourmi-visage", label: "Visage", descriptionTunisian: "في الوجه" },
              ...painCharacteristics("neuro-fourmillements")
            ]
          },
          { id: "neuro-faiblesse", label: "Faiblesse musculaire / Paralysie", descriptionTunisian: "فشلة / شلل" },
          { id: "neuro-tremblements", label: "Tremblements", descriptionTunisian: "رعشة" },
        ]
      },
      {
        id: "neuro-cognitif",
        label: "Troubles cognitifs & Sensoriels",
        descriptionTunisian: "التركيز و الحواس",
        children: [
          { id: "neuro-memoire", label: "Perte de mémoire soudaine", descriptionTunisian: "نسيان مفاجئ" },
          { id: "neuro-parole", label: "Difficulté à parler (Aphasie)", descriptionTunisian: "رزن في الكلام" },
          { id: "neuro-confusion", label: "Confusion / Désorientation", descriptionTunisian: "تضيع البوصلة" },
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
      { id: "cardio-douleur", label: "Douleur thoracique (Angine?)", descriptionTunisian: "وجيعة في القلب", children: painCharacteristics("cardio-douleur") },
      {
        id: "cardio-palpitations",
        label: "Palpitations / Rythme",
        descriptionTunisian: "دقات القلب",
        children: [
          { id: "palp-rapide", label: "Cœur bat trop vite (Tachycardie)", descriptionTunisian: "دقات سريعة" },
          { id: "palp-irregulier", label: "Battements irréguliers (Ratés)", descriptionTunisian: "دقات ملخبطة" },
          { id: "palp-fort", label: "Battements forts", descriptionTunisian: "دقات قوية" },
          ...painCharacteristics("cardio-palpitations")
        ]
      },
      {
        id: "cardio-oedeme", label: "Gonflement des jambes (Oedème)", descriptionTunisian: "ساقين منفوخة", children: [
          { id: "oedeme-deux", label: "Les deux jambes", descriptionTunisian: "الزوز ساقين" },
          { id: "oedeme-matin-soir", label: "Pire le soir", descriptionTunisian: "تزيد في الليل" },
        ]
      },
      {
        id: "cardio-tension", label: "Problèmes de tension (connus ou ressentis)", descriptionTunisian: "ضغط الدم", children: [
          { id: "tension-haute", label: "Poussée hypertensive", descriptionTunisian: "تونسيو طالعة" },
          { id: "tension-basse", label: "Chute de tension", descriptionTunisian: "تونسيو طايحة" },
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
          { id: "dig-nausee", label: "Nausées", descriptionTunisian: "غثيان" },
          {
            id: "dig-vomissement", label: "Vomissements", descriptionTunisian: "ردان", children: [
              { id: "vomis-alimentaire", label: "Alimentaires", descriptionTunisian: "ماكلة" },
              { id: "vomis-bile", label: "Bile (Jaune/Vert)", descriptionTunisian: "مرارة" },
              { id: "vomis-sang", label: "Sang", descriptionTunisian: "دم" },
            ]
          },
          { id: "dig-reflux", label: "Reflux acide / Aigreurs", descriptionTunisian: "جاير", children: painCharacteristics("dig-reflux") },
          { id: "dig-ballonnement-haut", label: "Éructations (Rots) excessifs", descriptionTunisian: "تكرع برشا" },
        ]
      },
      {
        id: "digestif-bas",
        label: "Intestins / Transit",
        descriptionTunisian: "المصران",
        children: [
          {
            id: "dig-diarrhee", label: "Diarrhée", descriptionTunisian: "جريان جوف", children: [
              { id: "diarrhee-eau", label: "Liquide / Eau", descriptionTunisian: "ماء" },
              { id: "diarrhee-glaires", label: "Glaireuse", descriptionTunisian: "بالرغوة" },
              { id: "diarrhee-sang", label: "Sanglante", descriptionTunisian: "بالدم" },
            ]
          },
          { id: "dig-constipation", label: "Constipation", descriptionTunisian: "قبض" },
          { id: "dig-gaz", label: "Gaz / Ballonnements", descriptionTunisian: "غازات" },
          {
            id: "dig-selles", label: "Anomalie des selles", descriptionTunisian: "لون الخروج", children: [
              { id: "selles-noires", label: "Noires (comme du goudron)", descriptionTunisian: "كحلة" },
              { id: "selles-pales", label: "Pâles / Blanches", descriptionTunisian: "بيضاء" },
              { id: "selles-graisseuses", label: "Graisseuses / Flottantes", descriptionTunisian: "مزيته" },
            ]
          },
        ]
      },
      {
        id: "dig-appetit", label: "Appétit & Poids", descriptionTunisian: "الشهية", children: [
          { id: "appetit-perte", label: "Perte d'appétit", descriptionTunisian: "شبعان ديما" },
          { id: "appetit-augmentation", label: "Faim excessive", descriptionTunisian: "جيعان ديما" },
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
          { id: "uri-douleur", label: "Brûlure / Douleur en urinant", descriptionTunisian: "حرقان", children: painCharacteristics("uri-douleur") },
          { id: "uri-frequence", label: "Besoin fréquent (Pollakiurie)", descriptionTunisian: "تمشي برشا للتوالات" },
          { id: "uri-urgent", label: "Besoin urgent / Fuites", descriptionTunisian: "ما تنجمش تشد روحك" },
          { id: "uri-sang", label: "Sang dans les urines", descriptionTunisian: "دم في البول" },
          { id: "uri-couleur", label: "Urine trouble / odeur forte", descriptionTunisian: "بول خاثر / ريحة قوية" },
          { id: "uri-retention", label: "Difficulté à uriner / Blocage", descriptionTunisian: "البول محصور" },
          { id: "uri-nuit", label: "Besoin d'uriner la nuit (Nycturie)", descriptionTunisian: "تقوم في الليل للبول" },
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
              { id: "gen-douleur-pelvienne", label: "Douleur pelvienne / Bas ventre", descriptionTunisian: "وجيعة أسفل البطن", children: painCharacteristics("gen-douleur-pelvienne") },
              { id: "gen-douleur-rapport", label: "Douleur pendant/après rapports", descriptionTunisian: "وجيعة وقت العلاقة", children: painCharacteristics("gen-douleur-rapport") },
              { id: "gen-douleur-testiculaire", label: "Douleur testiculaire (Homme)", descriptionTunisian: "وجيعة في الخصitien", sex: 'homme', children: painCharacteristics("gen-douleur-testiculaire") },
              { id: "gen-douleur-vulvaire", label: "Douleur vulvaire/vaginale (Femme)", descriptionTunisian: "وجيعة في المهبل", sex: 'femme', children: painCharacteristics("gen-douleur-vulvaire") },
            ]
          },
          {
            id: "gen-ecoulement",
            label: "Écoulements & Sécrétions",
            descriptionTunisian: "إفرازات",
            children: [
              { id: "gen-ecoulement-anormal", label: "Écoulement inhabituel", descriptionTunisian: "إفرازات غريبة" },
              { id: "gen-ecoulement-sang", label: "Saignement hors règles", descriptionTunisian: "دم في غير وقتو" },
              { id: "gen-ecoulement-odeur", label: "Mauvaise odeur", descriptionTunisian: "ريحة خايبة" },
            ]
          },
          {
            id: "gen-peau",
            label: "Lésions & Peau",
            descriptionTunisian: "حبوب و جلدة",
            children: [
              { id: "gen-demangeaison", label: "Démangeaisons intenses", descriptionTunisian: "حكة قوية" },
              { id: "gen-rougeur", label: "Rougeur / Irritation", descriptionTunisian: "حمرة / طياب" },
              { id: "gen-boutons", label: "Boutons / Verrues / Ulcères", descriptionTunisian: "حبوب / جروح" },
              { id: "gen-gonflement", label: "Gonflement / Masse", descriptionTunisian: "نفخ / كعبرة" },
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
              { id: "cycle-retard", label: "Retard de règles / Absence", descriptionTunisian: "تأخر العادة" },
              { id: "cycle-abondant", label: "Règles très abondantes", descriptionTunisian: "دم قوي برشا" },
              { id: "cycle-douloureux", label: "Règles très douloureuses", descriptionTunisian: "وجيعة قوية وقت العادة", children: painCharacteristics("cycle-douloureux") },
              { id: "cycle-irregulier", label: "Cycle irrégulier", descriptionTunisian: "عادة مش منظمة" },
              { id: "cycle-syndrome-premenstruel", label: "Syndrome prémenstruel sévère", descriptionTunisian: "قلق قبل العادة" },
            ]
          },
          {
            id: "repro-sexuel",
            label: "Fonction Sexuelle",
            descriptionTunisian: "الحياة الجنسية",
            children: [
              { id: "sex-libido", label: "Baisse de libido", descriptionTunisian: "نقص الرغبة" },
              { id: "sex-erection", label: "Troubles de l'érection (Homme)", descriptionTunisian: "ضعف الانتصاب", sex: 'homme' },
              { id: "sex-ejaculation", label: "Troubles de l'éjaculation (Homme)", descriptionTunisian: "مشاكل القذف", sex: 'homme' },
              { id: "sex-secheresse", label: "Sécheresse vaginale (Femme)", descriptionTunisian: "شياح المهبل", sex: 'femme' },
            ]
          },
          {
            id: "repro-fertilite",
            label: "Fertilité",
            descriptionTunisian: "الخصوبة",
            children: [
              { id: "fert-conception", label: "Difficulté à concevoir", descriptionTunisian: "صعوبة في الحمل" },
            ]
          }
        ]
      },
      {
        id: "contexte-declencheur",
        label: "Contexte & Facteurs",
        descriptionTunisian: "ظروف و أسباب",
        children: [
          { id: "ctx-rapport", label: "Après rapport sexuel", descriptionTunisian: "بعد العلاقة" },
          { id: "ctx-sport", label: "Après activité sportive", descriptionTunisian: "بعد الرياضة" },
          { id: "ctx-hygiene", label: "Changement produit hygiène/lessive", descriptionTunisian: "تبديل صابون/دواء غسيل" },
          { id: "ctx-medicament", label: "Prise de nouveaux médicaments", descriptionTunisian: "دواء جديد" },
          { id: "ctx-hormonal", label: "Changement hormonal (Grossesse, Ménopause...)", descriptionTunisian: "تغير هرمونات" },
        ]
      }
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
          { id: "peau-rougeur", label: "Rougeur (Erythème)", descriptionTunisian: "حمورية" },
          { id: "peau-paleur", label: "Pâleur", descriptionTunisian: "صفuriya" },
          { id: "peau-jaunisse", label: "Jaunisse (Ictère)", descriptionTunisian: "بوصفر" },
          { id: "peau-bleu", label: "Bleus (Ecchymoses) faciles", descriptionTunisian: "زروقية" },
        ]
      },
      {
        id: "peau-lesion",
        label: "Boutons & Lésions",
        descriptionTunisian: "حبوب و جروح",
        children: [
          { id: "peau-boutons", label: "Boutons / Acné", descriptionTunisian: "حب" },
          { id: "peau-plaques", label: "Plaques sèches / Eczéma", descriptionTunisian: "قشور" },
          { id: "peau-urticaire", label: "Urticaire (Gonflement, gratte)", descriptionTunisian: "حكة و نفخ", children: painCharacteristics("peau-urticaire") },
          { id: "peau-vesicules", label: "Vésicules / Cloques", descriptionTunisian: "فقalil" },
          { id: "peau-grain-beaute", label: "Grain de beauté suspect", descriptionTunisian: "خالة تبدلت" },
        ]
      },
      {
        id: "peau-sensation",
        label: "Sensations",
        descriptionTunisian: "إحساس",
        children: [
          { id: "peau-grattage", label: "Démangeaisons (Prurit)", descriptionTunisian: "حكة", children: painCharacteristics("peau-grattage") },
          { id: "peau-seche", label: "Sécheresse intense", descriptionTunisian: "شياح" },
          { id: "peau-chaude", label: "Chaleur au toucher", descriptionTunisian: "سخونة" },
        ]
      },
      {
        id: "peau-cheveux", label: "Cheveux & Ongles", descriptionTunisian: "شعر و ضوافر", children: [
          { id: "cheveux-chute", label: "Chute de cheveux", descriptionTunisian: "طيحان الشعر" },
          { id: "ongles-cassants", label: "Ongles cassants / colorés", descriptionTunisian: "ضوافر تتكسر" },
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
          { id: "fievre-legere", label: "Légère (38-38.5°C)", descriptionTunisian: "سخانة خفيفة" },
          { id: "fievre-elevee", label: "Élevée (> 38.5°C)", descriptionTunisian: "سخانة قوية" },
          { id: "fievre-frissons", label: "Avec frissons / Tremblements", descriptionTunisian: "رعشة" },
          { id: "fievre-sueurs", label: "Avec sueurs profuses", descriptionTunisian: "عرق" },
        ]
      },
      {
        id: "general-fatigue",
        label: "Fatigue (Asthénie)",
        descriptionTunisian: "فشلة",
        children: [
          { id: "fatigue-reveil", label: "Dès le réveil", descriptionTunisian: "تعبان ملي تقوم" },
          { id: "fatigue-effort", label: "Au moindre effort", descriptionTunisian: "تتعب فيسع" },
          { id: "fatigue-chronique", label: "Permanente", descriptionTunisian: "ديما تعبان" },
        ]
      },
      {
        id: "general-poids",
        label: "Poids",
        descriptionTunisian: "الميزان",
        children: [
          { id: "poids-perte", label: "Perte de poids involontaire", descriptionTunisian: "ضعفت وحدك" },
          { id: "poids-prise", label: "Prise de poids rapide", descriptionTunisian: "سمنت فيسع" },
        ]
      },
      {
        id: "general-ganglions", label: "Ganglions gonflés", descriptionTunisian: "ولسيس", children: [
          { id: "ganglion-cou", label: "Cou", descriptionTunisian: "في الرقبة" },
          { id: "ganglion-aisselle", label: "Aisselles", descriptionTunisian: "تحت الإبط" },
          { id: "ganglion-aine", label: "Aine", descriptionTunisian: "في Fkhadh" },
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
          { id: "humeur-triste", label: "Tristesse / Déprime", descriptionTunisian: "حزن" },
          { id: "humeur-anxiete", label: "Anxiété / Angoisse", descriptionTunisian: "فجعة / خوف" },
          { id: "humeur-colere", label: "Irritabilité / Colère", descriptionTunisian: "غش" },
          { id: "humeur-vide", label: "Sentiment de vide / Apathie", descriptionTunisian: "فراغ" },
        ]
      },
      {
        id: "mental-sommeil",
        label: "Sommeil",
        descriptionTunisian: "النوم",
        children: [
          { id: "sommeil-insomnie", label: "Insomnie (Endormissement)", descriptionTunisian: "ما يجيكش النوم" },
          { id: "sommeil-reveils", label: "Réveils nocturnes", descriptionTunisian: "تفيق في الليل" },
          { id: "sommeil-cauchemars", label: "Cauchemars", descriptionTunisian: "كوابيس" },
          { id: "sommeil-exces", label: "Trop dormir (Hypersomnie)", descriptionTunisian: "نوم برشا" },
        ]
      },
      {
        id: "mental-comportement", label: "Changement de comportement", descriptionTunisian: "تبدل الطبع", children: [
          { id: "comportement-isolement", label: "Isolement social", descriptionTunisian: "عزلة" },
          { id: "comportement-agitation", label: "Agitation", descriptionTunisian: "حركة زايدة" },
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
          { id: "vision-floue", label: "Floue / Trouble", descriptionTunisian: "ضباب" },
          { id: "vision-double", label: "Double (Diplopie)", descriptionTunisian: "ترا الحاجة ثنين" },
          { id: "vision-baisse", label: "Baisse brutale de la vue", descriptionTunisian: "نقص نظر مفاجئ" },
          { id: "vision-taches", label: "Tâches / Mouches volantes", descriptionTunisian: "ذبان قدام عينك" },
        ]
      },
      {
        id: "yeux-aspect", label: "Aspect de l'œil", descriptionTunisian: "منظر العين", children: [
          { id: "yeux-rouge", label: "Rougeur", descriptionTunisian: "حمرة" },
          { id: "yeux-jaune", label: "Jaune (Blanc de l'œil)", descriptionTunisian: "صفuriya" },
          { id: "yeux-gonfle", label: "Paupière gonflée", descriptionTunisian: "جفن منفوخ" },
        ]
      },
      {
        id: "yeux-sensation", label: "Sensations", descriptionTunisian: "إحساس", children: [
          { id: "yeux-douleur", label: "Douleur oculaire", descriptionTunisian: "وجيعة", children: painCharacteristics("yeux-douleur") },
          { id: "yeux-demangeaison", label: "Démangeaisons", descriptionTunisian: "حكة", children: painCharacteristics("yeux-demangeaison") },
          { id: "yeux-sec", label: "Sécheresse / Sable", descriptionTunisian: "شياح" },
          { id: "yeux-lumiere", label: "Sensibilité lumière (Photophobie)", descriptionTunisian: "قلق من الضو" },
          { id: "yeux-ecoulement", label: "Écoulement / Larmes", descriptionTunisian: "دموع / قيح" },
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
          { id: "trauma-tete", label: "Traumatisme crânien", descriptionTunisian: "ضربة في الراس", children: painCharacteristics("trauma-tete") },
          { id: "trauma-membre", label: "Coup sur un membre", descriptionTunisian: "ضربة في اليد/الساق", children: painCharacteristics("trauma-membre") },
          { id: "trauma-chute", label: "Chute", descriptionTunisian: "طيحة" },
        ]
      },
      {
        id: "plaies",
        label: "Plaies & Saignements",
        descriptionTunisian: "جروح",
        children: [
          { id: "plaie-coupure", label: "Coupure nette", descriptionTunisian: "جرح بموس" },
          { id: "plaie-ecorchure", label: "Écorchure / Égratignure", descriptionTunisian: "تخبش" },
          { id: "plaie-profonde", label: "Plaie profonde / Ouverte", descriptionTunisian: "جرح غارق" },
          { id: "plaie-infectee", label: "Signes d'infection (Pus, Rougeur)", descriptionTunisian: "جرح مسخ" },
        ]
      },
      {
        id: "brulures",
        label: "Brûlures",
        descriptionTunisian: "حروق",
        children: [
          { id: "brulure-thermique", label: "Chaleur / Feu / Liquide", descriptionTunisian: "نار / ماء سخون", children: painCharacteristics("brulure-thermique") },
          { id: "brulure-chimique", label: "Produit chimique", descriptionTunisian: "produit", children: painCharacteristics("brulure-chimique") },
          { id: "brulure-soleil", label: "Coup de soleil", descriptionTunisian: "شمس", children: painCharacteristics("brulure-soleil") },
        ]
      },
      {
        id: "morsures", label: "Morsures & Piqûres", descriptionTunisian: "عضة / قرصة", children: [
          { id: "morsure-animal", label: "Animal (Chien, Chat...)", descriptionTunisian: "حيوان", children: painCharacteristics("morsure-animal") },
          { id: "piqure-insecte", label: "Insecte (Guêpe, Araignée...)", descriptionTunisian: "حشره", children: painCharacteristics("piqure-insecte") },
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
          { id: "dent-douleur", label: "Rage de dent", descriptionTunisian: "وجيعة سنين", children: painCharacteristics("dent") },
          { id: "dent-sensible", label: "Sensibilité Chaud/Froid", descriptionTunisian: "حساسية" },
          { id: "dent-casse", label: "Dent cassée / bouge", descriptionTunisian: "سن مكسرة" },
        ]
      },
      {
        id: "gencives",
        label: "Gencives",
        descriptionTunisian: "اللثة",
        children: [
          { id: "gencive-saigne", label: "Saignement", descriptionTunisian: "دم" },
          { id: "gencive-gonfle", label: "Gonflement / Abcès", descriptionTunisian: "نفخ", children: painCharacteristics("gencive-gonfle") },
        ]
      },
      {
        id: "bouche",
        label: "Bouche & Langue",
        descriptionTunisian: "الفم",
        children: [
          { id: "bouche-aphte", label: "Aphtes", descriptionTunisian: "أفت", children: painCharacteristics("bouche-aphte") },
          { id: "bouche-langue", label: "Langue (Douleur, Tâche)", descriptionTunisian: "اللسان", children: painCharacteristics("bouche-langue") },
          { id: "bouche-haleine", label: "Mauvaise haleine", descriptionTunisian: "ريحة خايبة" },
          { id: "bouche-seche", label: "Bouche sèche", descriptionTunisian: "فم شايح" },
        ]
      }
    ]
  }
];
