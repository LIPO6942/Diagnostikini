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

// Helper to create common sub-nodes for pain characteristics
const painCharacteristics = (baseId: string): SymptomNode[] => [
  {
    id: `${baseId}-type`,
    label: "Type de douleur",
    description: "Comment ressentez-vous la douleur ?",
    descriptionTunisian: "كيفاش تحس الوجيعة؟",
    children: [
      { id: `${baseId}-type-aigue`, label: "Aiguë / Perçante", description: "Douleur vive et soudaine", descriptionTunisian: "وجيعة حادة" },
      { id: `${baseId}-type-sourde`, label: "Sourde / Lourdeur", description: "Douleur diffuse et pesante", descriptionTunisian: "وجيعة رزين" },
      { id: `${baseId}-type-brulure`, label: "Brûlure", description: "Sensation de chaleur intense", descriptionTunisian: "حرقان" },
      { id: `${baseId}-type-pulsatile`, label: "Pulsatile / Battante", description: "Comme un cœur qui bat", descriptionTunisian: "تسطير / تنبض" },
      { id: `${baseId}-type-electrique`, label: "Décharge électrique", description: "Sensation de choc", descriptionTunisian: "ضو يضرب" },
      { id: `${baseId}-type-crampe`, label: "Crampe / Torsion", description: "Contraction douloureuse", descriptionTunisian: "تكبس عليك" },
    ]
  },
  {
    id: `${baseId}-intensite`,
    label: "Intensité",
    description: "À quel point est-ce douloureux ?",
    descriptionTunisian: "قوة الوجيعة",
    children: [
      { id: `${baseId}-int-faible`, label: "Faible (1-3)", description: "Gênant mais supportable", descriptionTunisian: "خفيفة" },
      { id: `${baseId}-int-moderee`, label: "Modérée (4-6)", description: "Perturbe les activités", descriptionTunisian: "متوسطة" },
      { id: `${baseId}-int-severe`, label: "Sévère (7-9)", description: "Très difficile à supporter", descriptionTunisian: "قوية برشا" },
      { id: `${baseId}-int-insupportable`, label: "Insupportable (10)", description: "Urgence absolue", descriptionTunisian: "ما تنجمش تتحملها جملة" },
    ]
  },
  {
    id: `${baseId}-frequence`,
    label: "Fréquence & Durée",
    description: "Quand et combien de temps ?",
    descriptionTunisian: "وقتاش و قداش دوم؟",
    children: [
      { id: `${baseId}-freq-constante`, label: "Constante", description: "Ne s'arrête pas", descriptionTunisian: "ديما موجودة" },
      { id: `${baseId}-freq-intermittente`, label: "Intermittente", description: "Va et vient", descriptionTunisian: "تمشي و تجي" },
      { id: `${baseId}-freq-nuit`, label: "Surtout la nuit", description: "Réveille ou empêche de dormir", descriptionTunisian: "خاصة في الليل" },
      { id: `${baseId}-freq-matin`, label: "Au réveil", description: "Pire le matin", descriptionTunisian: "في الصباح" },
      { id: `${baseId}-duree-aigue`, label: "Depuis moins de 24h", description: "Récent", descriptionTunisian: "جديدة" },
      { id: `${baseId}-duree-jours`, label: "Quelques jours", description: "Moins d'une semaine", descriptionTunisian: "عندها أيامات" },
      { id: `${baseId}-duree-chronique`, label: "Chronique (> 3 mois)", description: "Installée depuis longtemps", descriptionTunisian: "عندها برشا" },
    ]
  },
  {
    id: `${baseId}-declencheurs`,
    label: "Facteurs aggravants/soulageants",
    description: "Qu'est-ce qui modifie la douleur ?",
    descriptionTunisian: "شنوة يزيد/ينقص الوجيعة؟",
    children: [
      { id: `${baseId}-agg-mouvement`, label: "Aggravé par le mouvement", descriptionTunisian: "تزيد بالحركة" },
      { id: `${baseId}-agg-repos`, label: "Aggravé au repos", descriptionTunisian: "تزيد في الراحة" },
      { id: `${baseId}-agg-pression`, label: "Aggravé par la pression/toucher", descriptionTunisian: "تزيد كي تمسها" },
      { id: `${baseId}-soul-repos`, label: "Soulagé par le repos", descriptionTunisian: "ترتاح كي ترقد" },
      { id: `${baseId}-soul-medicament`, label: "Soulagé par médicaments", descriptionTunisian: "ترتاح بالدواء" },
      { id: `${baseId}-soul-froid`, label: "Soulagé par le froid", descriptionTunisian: "ترتاح بالبارد" },
      { id: `${baseId}-soul-chaud`, label: "Soulagé par le chaud", descriptionTunisian: "ترتاح بالسخون" },
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
          { id: "gorge-gonflee", label: "Sensation de gonflement / Boule", descriptionTunisian: "كعبة في القرجومة" },
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
          { id: "dig-reflux", label: "Reflux acide / Aigreurs", descriptionTunisian: "جاير" },
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
          { id: "yeux-demangeaison", label: "Démangeaisons", descriptionTunisian: "حكة" },
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
          { id: "gencive-gonfle", label: "Gonflement / Abcès", descriptionTunisian: "نفخ" },
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
