/**
 * @fileoverview Defines the interactive symptom tree structure.
 */
import type { SymptomNode } from "@/lib/types";
import { PersonStanding, Wind, Thermometer, Waves, Ear, BrainCircuit, Bone, Eye, Sheet, Activity } from "lucide-react";

export const symptomTree: SymptomNode[] = [
  {
    id: "douleur",
    label: "Douleur",
    descriptionTunisian: "وجيعة",
    icon: PersonStanding,
    children: [
      {
        id: "tete",
        label: "Tête",
        descriptionTunisian: "راس",
        children: [
          { 
            id: "pulsatile", 
            label: "Pulsatile",
            descriptionTunisian: "وجيعة تنبض",
            children: [
                { id: "tete-pulsatile-nausee", label: "Avec nausées/vomissements", description: "Douleur à la tête pulsatile, avec nausées ou vomissements", descriptionTunisian: "معاها غثيان و تقيا" },
                { id: "tete-pulsatile-lumiere-son", label: "Sensibilité lumière/son", description: "Douleur à la tête pulsatile, avec sensibilité à la lumière ou au son", descriptionTunisian: "تتقلق من الضو و الحس" },
            ]
          },
          { 
            id: "sensation-pression", 
            label: "Sensation de pression/serrement", 
            descriptionTunisian: "تحس بضغط على راسك",
            children: [
                { id: "tete-pression-stress", label: "Apparaît avec le stress", description: "Sensation de pression à la tête, liée au stress", descriptionTunisian: "تجيك وقت الستراس" },
                { id: "tete-pression-continue", label: "Continue tout le long de la journée", description: "Sensation de pression à la tête, continue", descriptionTunisian: "تكمل معاك النهار الكل" },
            ]
          },
          { 
            id: "un-cote", 
            label: "D'un seul côté",
            descriptionTunisian: "شيرة برك توجع فيك", 
            children: [
                { id: "tete-un-cote-oeil", label: "Derrière l'œil", description: "Douleur d'un seul côté de la tête, derrière l'œil", descriptionTunisian: "وراء العين" },
                { id: "tete-un-cote-sinus", label: "Au niveau des sinus", description: "Douleur d'un seul côté de la tête, au niveau des sinus", descriptionTunisian: "في الجيوب الأنفية" },
            ]
          },
        ],
      },
      {
        id: "poitrine",
        label: "Poitrine",
        descriptionTunisian: "صدر",
        children: [
            { id: "oppression-poitrine", label: "Oppression / serrement", description: "Douleur à la poitrine, sensation d'oppression ou de serrement", descriptionTunisian: "تحس صدرك مزير عليك" },
            { id: "brulure-poitrine", label: "Brûlure (remontant vers la gorge)", description: "Douleur à la poitrine, sensation de brûlure qui remonte", descriptionTunisian: "حرقة طالعة لقرجومك"},
            { id: "elancement-poitrine", label: "Élancement (comme un coup de poignard)", description: "Douleur aiguë et brève à la poitrine", descriptionTunisian: "تحس في نغزة"},
            { id: "poitrine-effort", label: "Douleur à l'effort", description: "Douleur à la poitrine qui apparaît pendant un effort physique", descriptionTunisian: "الوجيعة وقت تعمل مجهود"},
        ]
      },
      {
        id: "ventre",
        label: "Ventre",
        descriptionTunisian: "كرش",
        children: [
            {id: "crampes-ventre", label: "Crampes", description: "Douleur au ventre, de type crampes", descriptionTunisian: "تشنجات"},
            {id: "brulures-estomac-ventre", label: "Brûlures d'estomac", description: "Douleur au ventre, de type brûlures d'estomac", descriptionTunisian: "حرقة في المعدة"},
            {id: "ventre-localise", label: "Douleur localisée", description: "Douleur dans une zone précise du ventre", descriptionTunisian: "في بقعة معينة"},
            {id: "ventre-generalise", label: "Douleur généralisée", description: "Douleur diffuse dans tout le ventre", descriptionTunisian: "الكرش الكل توجع"},
        ]
      },
      {
        id: "dos",
        label: "Dos",
        descriptionTunisian: "ظهر",
        children: [
            {id: "haut-dos", label: "Haut du dos / nuque", description: "Douleur dans le haut du dos ou la nuque", descriptionTunisian: "أعلى الظهر / رقبة"},
            {id: "bas-dos", label: "Bas du dos (lombaire)", description: "Douleur dans le bas du dos", descriptionTunisian: "أسفل الظهر"},
            {id: "dos-irradie", label: "Irradie dans la jambe", description: "Douleur au dos qui descend dans la jambe", descriptionTunisian: "الوجيعة هابطة للساق"},
        ]
      },
      {
        id: "articulations",
        label: "Articulations",
        descriptionTunisian: "مفاصل",
        icon: Bone,
        children: [
            { id: "articulation-gonflee", label: "Articulation gonflée et rouge", description: "Douleur avec gonflement et rougeur d'une articulation", descriptionTunisian: "مفصل منفوخ و أحمر"},
            { id: "articulation-raide", label: "Raideur matinale", description: "Douleur et raideur dans les articulations le matin", descriptionTunisian: "تّبس في الصباح"},
            { id: "douleur-mouvement", label: "Douleur au mouvement", description: "Douleur articulaire qui s'aggrave avec le mouvement", descriptionTunisian: "توجع كي تتحرك"},
        ]
      }
    ],
  },
  {
    id: "respiration",
    label: "Gêne respiratoire",
    descriptionTunisian: "مشكلة في التنفس",
    icon: Wind,
    children: [
      { id: "essoufflement-effort", label: "Essoufflement à l'effort", description: "Essoufflement lors d'une activité physique", descriptionTunisian: "تتقطع النفس وقت المجهود" },
      { id: "essoufflement-repos", label: "Essoufflement au repos", description: "Essoufflement sans faire d'effort", descriptionTunisian: "تتقطع النفس في الراحة" },
      { 
        id: "toux", 
        label: "Toux",
        descriptionTunisian: "كحة",
        children: [
            { id: "toux-seche", label: "Toux sèche et irritante", description: "Toux sèche qui irrite la gorge", descriptionTunisian: "كحة شايحة" },
            { id: "toux-grasse", label: "Toux grasse (avec glaires)", description: "Toux grasse avec expectorations", descriptionTunisian: "كحة بالبلغم" },
            { id: "toux-nocturne", label: "Toux principalement la nuit", description: "Toux qui s'intensifie la nuit", descriptionTunisian: "تكح خاصة في الليل" },
        ]
      },
      { id: "respiration-sifflante", label: "Respiration sifflante", description: "Sifflement audible lors de la respiration", descriptionTunisian: "نفسك يزفر" },
      { id: "douleur-respiration", label: "Douleur en respirant profondément", description: "Douleur thoracique à l'inspiration profonde", descriptionTunisian: "وجيعة كي تجبد نفس بالقوي"},
    ],
  },
  {
    id: "fievre",
    label: "Fièvre / Température",
    descriptionTunisian: "سخانة",
    icon: Thermometer,
    children: [
      { 
        id: "fievre-legere", 
        label: "Légère (37.5-38.4°C)", 
        descriptionTunisian: "خفيفة",
        children: [
            { id: "fievre-legere-courte", label: "Depuis 1-2 jours", description: "Fièvre légère depuis 1 à 2 jours", descriptionTunisian: "عندها يوم أو يومين" },
            { id: "fievre-legere-longue", label: "Depuis plus de 3 jours", description: "Fièvre légère depuis plus de 3 jours", descriptionTunisian: "أكثر من 3 أيام" },
        ]
       },
      { id: "fievre-moderee", label: "Modérée (38.5-39.4°C)", description: "Fièvre modérée (38.5-39.4°C)", descriptionTunisian: "متوسطة" },
      { id: "fievre-elevee", label: "Élevée (>39.5°C)", description: "Fièvre élevée (plus de 39.5°C)", descriptionTunisian: "قوية" },
      { id: "fievre-frissons", label: "Avec frissons et sueurs", description: "Fièvre accompagnée de frissons et/ou de sueurs", descriptionTunisian: "معاها رعشة و عرق" },
    ],
  },
   {
    id: "troubles-digestifs",
    label: "Troubles digestifs",
    descriptionTunisian: "مشاكل في الهضم",
    icon: Waves,
    children: [
      { id: "nausees-vomissements", label: "Nausées ou vomissements", description: "Envie de vomir ou vomissements", descriptionTunisian: "غثيان أو تقيء" },
      { id: "diarrhee", label: "Diarrhée", description: "Selles liquides et fréquentes", descriptionTunisian: "جريان كرش" },
      { id: "constipation", label: "Constipation", description: "Difficulté à évacuer les selles", descriptionTunisian: "قبض (كونستيباسيون)" },
      { id: "ballonnements", label: "Ballonnements et gaz", description: "Sensation de ventre gonflé et gaz excessifs", descriptionTunisian: "نفخ و غازات" },
      { id: "perte-appetit", label: "Perte d'appétit", description: "Absence de faim", descriptionTunisian: "شهية مسدودة"},
    ],
  },
  {
    id: "troubles-orl",
    label: "Gorge, Nez, Oreilles",
    descriptionTunisian: "قراجم، خشم، وذنين",
    icon: Ear,
    children: [
      { id: "mal-gorge", label: "Mal de gorge", description: "Douleur ou irritation de la gorge", descriptionTunisian: "وجيعة قراجم" },
      { id: "nez-bouche", label: "Nez bouché", description: "Congestion nasale", descriptionTunisian: "خشم مسكر" },
      { id: "ecoulement-nasal", label: "Écoulement nasal", description: "Nez qui coule (clair ou coloré)", descriptionTunisian: "خشم يجري" },
      { id: "douleur-oreille", label: "Douleur d'oreille", description: "Douleur dans une ou les deux oreilles", descriptionTunisian: "وجيعة وذنين" },
      { id: "sinus-douloureux", label: "Sinus douloureux", description: "Douleur au niveau du front ou des joues", descriptionTunisian: "وجيعة في الجيوب الأنفية"},
    ],
  },
  {
    id: "peau",
    label: "Problèmes de peau",
    descriptionTunisian: "مشاكل جلدة",
    icon: Sheet,
    children: [
      { id: "eruption-cutanee", label: "Éruption (boutons, plaques rouges)", description: "Apparition de boutons ou de plaques sur la peau", descriptionTunisian: "حبوب، طفح جلدي" },
      { id: "demangeaisons", label: "Démangeaisons", description: "Sensation qui pousse à se gratter", descriptionTunisian: "حكة" },
      { id: "secheresse-peau", label: "Peau sèche ou qui pèle", description: "Peau sèche ou desquamation", descriptionTunisian: "جلدة شايحة تتقشر" },
      { id: "lesion-inhabituelle", label: "Lésion ou grain de beauté inhabituel", description: "Apparition ou modification d'une lésion cutanée", descriptionTunisian: "ظهور أو تغير في شكل \"خالة\"" },
    ]
  },
   {
    id: "etat-general",
    label: "État général / Neurologique",
    descriptionTunisian: "الحالة العامة / الأعصاب",
    icon: BrainCircuit,
    children: [
      { id: "fatigue-inhabituelle", label: "Fatigue intense et inhabituelle", description: "Grande fatigue qui ne passe pas avec le repos", descriptionTunisian: "تعب كبير غير عادي" },
      { id: "vertiges-etourdissements", label: "Vertiges ou étourdissements", description: "Sensation que la tête tourne", descriptionTunisian: "دوخة" },
      { id: "somnolence", label: "Somnolence excessive", description: "Envie de dormir constante durant la journée", descriptionTunisian: "تحب ترقد برشة" },
      { id: "trouble-concentration", label: "Difficulté de concentration", description: "Difficulté à se concentrer ou confusion", descriptionTunisian: "صعوبة في التركيز"},
    ],
  },
  {
    id: "troubles-yeux",
    label: "Troubles oculaires",
    descriptionTunisian: "مشاكل في العينين",
    icon: Eye,
    children: [
        { id: "yeux-rouges", label: "Yeux rouges ou irrités", description: "Rougeur ou irritation des yeux", descriptionTunisian: "عينين حمر" },
        { id: "vision-floue", label: "Vision floue", description: "Vue qui devient trouble", descriptionTunisian: "نظر مضبب" },
        { id: "secheresse-oculaire", label: "Sensation de sécheresse / sable", description: "Sensation de corps étranger ou de sécheresse dans les yeux", descriptionTunisian: "تحس عينيك شايحين" },
        { id: "ecoulement-oeil", label: "Écoulement oculaire", description: "Larmoiement excessif ou écoulement purulent", descriptionTunisian: "عينيك تدمّع" },
        { id: "sensibilite-lumiere", label: "Sensibilité à la lumière", description: "La lumière vive est douloureuse ou gênante", descriptionTunisian: "تتقلق من الضوء"},
    ]
  }
];
