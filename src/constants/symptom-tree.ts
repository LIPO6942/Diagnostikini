/**
 * @fileoverview Defines the interactive symptom tree structure.
 */
import type { SymptomNode } from "@/lib/types";
import { PersonStanding, Wind, Thermometer, Waves, Ear, Brain, Bone, Eye, Sheet, Activity, Droplet, HeartPulse, ShieldAlert, BadgeInfo, BrainCircuit } from "lucide-react";

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
        icon: Brain,
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
        icon: HeartPulse,
        children: [
            { 
              id: "oppression-poitrine", 
              label: "Oppression / serrement",
              descriptionTunisian: "تحس صدرك مزير عليك",
              children: [
                { id: "poitrine-oppression-effort", label: "À l'effort", description: "Oppression à la poitrine lors d'un effort", descriptionTunisian: "وقت المجهود" },
                { id: "poitrine-oppression-repos", label: "Au repos", description: "Oppression à la poitrine au repos", descriptionTunisian: "في الراحة" },
                { id: "poitrine-oppression-irradie", label: "Irradie vers le bras/mâchoire", description: "Oppression qui s'étend au bras ou à la mâchoire", descriptionTunisian: "الوجيعة تمشي للذراع/الفك" },
              ]
            },
            { 
              id: "brulure-poitrine",
              label: "Brûlure (remontant vers la gorge)", 
              descriptionTunisian: "حرقة طالعة لقرجومك",
              children: [
                { id: "poitrine-brulure-repas", label: "Après les repas", description: "Brûlure à la poitrine après avoir mangé", descriptionTunisian: "بعد الماكلة" },
                { id: "poitrine-brulure-couche", label: "En position couchée", description: "Brûlure à la poitrine en étant allongé", descriptionTunisian: "كي تتمد" },
              ]
            },
            { id: "elancement-poitrine", label: "Élancement (comme un coup de poignard)", description: "Douleur aiguë et brève à la poitrine", descriptionTunisian: "تحس في نغزة"},
        ]
      },
      {
        id: "ventre",
        label: "Ventre",
        descriptionTunisian: "كرش",
        icon: ShieldAlert,
        children: [
            {
              id: "crampes-ventre", 
              label: "Crampes", 
              descriptionTunisian: "تشنجات",
              children: [
                { id: "ventre-crampes-diarrhee", label: "Avec diarrhée", description: "Crampes au ventre avec diarrhée", descriptionTunisian: "معاها جريان كرش" },
                { id: "ventre-crampes-ballonnement", label: "Avec ballonnements", description: "Crampes au ventre avec ballonnements", descriptionTunisian: "معاها نفخ" },
              ]
            },
            {
              id: "brulures-estomac-ventre", 
              label: "Brûlures d'estomac", 
              descriptionTunisian: "حرقة في المعدة",
              children: [
                 { id: "ventre-brulure-repas", label: "Liées aux repas", description: "Brûlures d'estomac liées aux repas", descriptionTunisian: "مرتبطة بالماكلة" },
                 { id: "ventre-brulure-nuit", label: "Surtout la nuit", description: "Brûlures d'estomac principalement la nuit", descriptionTunisian: "خاصة في الليل" },
              ]
            },
            {
              id: "ventre-localise", 
              label: "Douleur localisée", 
              descriptionTunisian: "في بقعة معينة",
              children: [
                { id: "ventre-localise-droite-bas", label: "En bas à droite", description: "Douleur localisée en bas à droite du ventre", descriptionTunisian: "التحت على اليمين" },
                { id: "ventre-localise-haut", label: "Partie supérieure", description: "Douleur localisée dans la partie supérieure du ventre", descriptionTunisian: "من الفوق" },
              ]
            },
            { id: "ventre-generalise", label: "Douleur généralisée", description: "Douleur diffuse dans tout le ventre", descriptionTunisian: "الكرش الكل توجع"},
        ]
      },
      {
        id: "dos",
        label: "Dos",
        descriptionTunisian: "ظهر",
        icon: PersonStanding,
        children: [
            {id: "haut-dos", label: "Haut du dos / nuque", description: "Douleur dans le haut du dos ou la nuque", descriptionTunisian: "أعلى الظهر / رقبة"},
            {
              id: "bas-dos", 
              label: "Bas du dos (lombaire)", 
              descriptionTunisian: "أسفل الظهر",
              children: [
                { id: "dos-bas-mouvement", label: "Aggravée par le mouvement", description: "Douleur au bas du dos aggravée par le mouvement", descriptionTunisian: "تزيد مع الحركة" },
                { id: "dos-bas-matin", label: "Raideur le matin", description: "Douleur et raideur au bas du dos le matin", descriptionTunisian: "تّبس في الصباح" },
              ]
            },
            { id: "dos-irradie", label: "Irradie dans la jambe", description: "Douleur au dos qui descend dans la jambe", descriptionTunisian: "الوجيعة هابطة للساق"},
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
      { 
        id: "fievre-frissons", 
        label: "Avec frissons et sueurs", 
        descriptionTunisian: "معاها رعشة و عرق",
        children: [
          { id: "fievre-frissons-continus", label: "Frissons continus", description: "Fièvre avec des frissons constants", descriptionTunisian: "رعشة متواصلة" },
          { id: "fievre-sueurs-nocturnes", label: "Sueurs surtout la nuit", description: "Fièvre avec des sueurs principalement nocturnes", descriptionTunisian: "عرق في الليل" },
        ]
      },
    ],
  },
  {
    id: "gorge",
    label: "Mal de Gorge",
    descriptionTunisian: "وجيعة قراجم",
    icon: Activity,
    children: [
        { id: "gorge-picotement-brulure", label: "Picotement ou Brûlure", description: "Mal de gorge avec picotements ou sensation de brûlure", descriptionTunisian: "تنميل أو حرقة" },
        { id: "gorge-difficulte-avaler", label: "Difficulté à avaler", description: "Mal de gorge rendant la déglutition difficile", descriptionTunisian: "صعوبة في البلع" },
        { id: "gorge-rouge-gonflee", label: "Gorge rouge et/ou gonflée", description: "Gorge d'apparence très rouge ou enflée", descriptionTunisian: "حمراء و/أو منفوخة" },
        { id: "gorge-points-blancs-caseum", label: "Points blancs / Caséum", description: "Présence de points blancs ou de dépôts jaunâtres sur les amygdales", descriptionTunisian: "نقط بيض أو صفراء" },
        { id: "gorge-voix-enrouee", label: "Voix enrouée", description: "Modification de la voix, qui devient rauque", descriptionTunisian: "صوت مبحاح" },
        { id: "gorge-sensation-boule", label: "Sensation de boule dans la gorge", description: "Impression d'avoir quelque chose de coincé dans la gorge", descriptionTunisian: "تحس بكعبة في قرجومك" },
        { id: "gorge-avec-ganglions", label: "Avec des ganglions gonflés", description: "Mal de gorge avec des ganglions gonflés dans le cou", descriptionTunisian: "مع كعابر (غدد) منفوخة" },
        { id: "gorge-avec-toux", label: "Avec une toux", description: "Mal de gorge accompagné de toux", descriptionTunisian: "مع الكحة" },
        { id: "gorge-avec-nez-coule", label: "Avec le nez qui coule", description: "Mal de gorge avec un écoulement nasal", descriptionTunisian: "مع الخشم إللي يجري" },
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
            { 
              id: "toux-seche", 
              label: "Toux sèche et irritante", 
              descriptionTunisian: "كحة شايحة",
              children: [
                { id: "toux-seche-jour", label: "Surtout le jour", description: "Toux sèche principalement pendant la journée", descriptionTunisian: "خاصة في النهار" },
                { id: "toux-seche-nuit", label: "Surtout la nuit", description: "Toux sèche principalement la nuit", descriptionTunisian: "خاصة في الليل" },
              ]
            },
            { 
              id: "toux-grasse", 
              label: "Toux grasse (avec glaires)", 
              descriptionTunisian: "كحة بالبلغم",
              children: [
                { id: "toux-grasse-claires", label: "Glaires claires / blanches", description: "Toux grasse avec expectorations claires ou blanches", descriptionTunisian: "بلغم أبيض شفاف" },
                { id: "toux-grasse-colorees", label: "Glaires jaunes / vertes", description: "Toux grasse avec expectorations jaunes ou vertes", descriptionTunisian: "بلغم أصفر / أخضر" },
              ]
            },
        ]
      },
      { id: "respiration-sifflante", label: "Respiration sifflante", description: "Sifflement audible lors de la respiration", descriptionTunisian: "نفسك يزفر" },
      { id: "douleur-respiration", label: "Douleur en respirant profondément", description: "Douleur thoracique à l'inspiration profonde", descriptionTunisian: "وجيعة كي تجبد نفس بالقوي"},
    ],
  },
   {
    id: "troubles-digestifs",
    label: "Troubles digestifs",
    descriptionTunisian: "مشاكل في الهضم",
    icon: Waves,
    children: [
      { id: "nausees-vomissements", label: "Nausées ou vomissements", description: "Envie de vomir ou vomissements", descriptionTunisian: "غثيان أو تقيء" },
      { 
        id: "diarrhee", 
        label: "Diarrhée",
        descriptionTunisian: "جريان كرش",
        children: [
            { id: "diarrhee-aigue", label: "Aiguë (< 2 semaines)", description: "Diarrhée depuis moins de 2 semaines", descriptionTunisian: "أقل من جمعتين" },
            { id: "diarrhee-chronique", label: "Chronique (> 2 semaines)", description: "Diarrhée depuis plus de 2 semaines", descriptionTunisian: "أكثر من جمعتين" },
        ]
      },
      { id: "constipation", label: "Constipation", description: "Difficulté à évacuer les selles", descriptionTunisian: "قبض (كونستيباسيون)" },
      { id: "ballonnements", label: "Ballonnements et gaz", description: "Sensation de ventre gonflé et gaz excessifs", descriptionTunisian: "نفخ و غازات" },
      { id: "perte-appetit", label: "Perte d'appétit", description: "Absence de faim", descriptionTunisian: "شهية مسدودة"},
    ],
  },
  {
    id: "troubles-nez-oreilles",
    label: "Nez & Oreilles",
    descriptionTunisian: "خشم و وذنين",
    icon: Ear,
    children: [
      { id: "nez-bouche", label: "Nez bouché", description: "Congestion nasale", descriptionTunisian: "خشم مسكر" },
      { 
        id: "ecoulement-nasal", 
        label: "Écoulement nasal", 
        descriptionTunisian: "خشم يجري",
        children: [
           { id: "ecoulement-clair", label: "Clair (comme de l'eau)", description: "Écoulement nasal clair", descriptionTunisian: "صافي كي الماء" },
           { id: "ecoulement-epais", label: "Épais et coloré", description: "Écoulement nasal épais (jaune/vert)", descriptionTunisian: "خاثر و ملون" },
        ]
      },
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
      { 
        id: "eruption-cutanee", 
        label: "Éruption (boutons, plaques)", 
        descriptionTunisian: "حبوب، طفح جلدي",
        children: [
           { id: "eruption-localisee", label: "Localisée", description: "Éruption sur une zone précise du corps", descriptionTunisian: "في بقعة معينة" },
           { id: "eruption-generalisee", label: "Généralisée", description: "Éruption sur une grande partie du corps", descriptionTunisian: "منتشرة في البدن الكل" },
        ]
      },
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
      { 
        id: "vertiges-etourdissements", 
        label: "Vertiges ou étourdissements", 
        descriptionTunisian: "دوخة",
        children: [
          { id: "vertiges-debout", label: "En se levant", description: "Vertiges en passant de la position assise à debout", descriptionTunisian: "كي تقوم من بلاصتك" },
          { id: "vertiges-continus", label: "Continus", description: "Vertiges constants", descriptionTunisian: "متواصلة" },
          { id: "vertiges-rotatoires", label: "Rotatoires (tout tourne)", description: "Sensation que l'environnement tourne autour de vous", descriptionTunisian: "الدنيا تدور بيك"},
        ]
      },
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
        { 
          id: "ecoulement-oeil", 
          label: "Écoulement oculaire", 
          descriptionTunisian: "عينيك تدمّع",
          children: [
            { id: "ecoulement-oeil-clair", label: "Écoulement clair (larmes)", description: "Larmoiement excessif et clair", descriptionTunisian: "صافي كي الدموع" },
            { id: "ecoulement-oeil-purulent", label: "Écoulement purulent (jaunâtre)", description: "Écoulement épais et jaunâtre", descriptionTunisian: "أصفر وخاثر" },
          ]
        },
        { id: "sensibilite-lumiere", label: "Sensibilité à la lumière", description: "La lumière vive est douloureuse ou gênante", descriptionTunisian: "تتقلق من الضوء"},
    ]
  },
  {
    id: "genito-urinaire",
    label: "Génito-urinaire",
    descriptionTunisian: "مشاكل بولية أو تناسلية",
    icon: Droplet,
    children: [
      { 
        id: "brulure-urinaire", 
        label: "Brûlure en urinant", 
        descriptionTunisian: "حرقان في البول",
        children: [
          { id: "brulure-urinaire-fievre", label: "Avec fièvre", description: "Brûlure en urinant accompagnée de fièvre", descriptionTunisian: "مع السخانة" },
          { id: "brulure-urinaire-sans-fievre", label: "Sans fièvre", description: "Brûlure en urinant sans fièvre", descriptionTunisian: "بلاش سخانة" },
        ]
      },
      { 
        id: "frequence-urinaire", 
        label: "Envie fréquente d'uriner",
        descriptionTunisian: "تمشي للتوالات برشة",
        children: [
          { id: "frequence-urinaire-petite", label: "Petites quantités", description: "Envie fréquente d'uriner de petites quantités", descriptionTunisian: "كميات صغيرة" },
          { id: "frequence-urinaire-grande", label: "Grandes quantités", description: "Envie fréquente d'uriner de grandes quantités", descriptionTunisian: "كميات كبيرة" },
        ]
      },
      { id: "sang-urines", label: "Sang dans les urines", description: "Présence de sang dans les urines", descriptionTunisian: "دم في البول" },
      { id: "douleur-reins", label: "Douleur bas du dos / reins", description: "Douleur dans la région lombaire", descriptionTunisian: "وجيعة في أسفل الظهر / الكلاوي" },
      { id: "ecoulement-inhabituel", label: "Écoulement inhabituel", description: "Écoulement génital qui n'est pas normal", descriptionTunisian: "إفرازات غير عادية" },
    ]
  },
  {
    id: "bucco-dentaire",
    label: "Bucco-dentaire",
    descriptionTunisian: "وجيعة السنين",
    icon: Activity,
    children: [
      { 
        id: "douleur-dent", 
        label: "Douleur dentaire",
        descriptionTunisian: "وجيعة في السن",
        children: [
          { id: "douleur-dent-froid-chaud", label: "Sensibilité au chaud/froid", description: "Douleur dentaire au contact du chaud ou du froid", descriptionTunisian: "حساسية للسخون والبارد" },
          { id: "douleur-dent-mastication", label: "Douleur en mâchant", description: "Douleur dentaire lors de la mastication", descriptionTunisian: "وجيعة كي تمضغ" },
          { id: "douleur-dent-spontanee", label: "Douleur spontanée / pulsatile", description: "Douleur dentaire qui survient sans raison apparente et qui bat", descriptionTunisian: "وجيعة وحدها وتنبض" },
        ]
      },
      { 
        id: "gencives", 
        label: "Problème de gencives",
        descriptionTunisian: "مشكلة في اللثة",
        children: [
          { id: "gencives-saignement", label: "Saignement des gencives", description: "Gencives qui saignent facilement", descriptionTunisian: "اللثة تنزف بالدم" },
          { id: "gencives-gonflees", label: "Gencives rouges / gonflées", description: "Gencives enflammées, rouges et enflées", descriptionTunisian: "اللثة حمراء ومنفوخة" },
        ]
      },
      { id: "aphtes", label: "Aphtes / Lésions", description: "Présence d'ulcérations dans la bouche", descriptionTunisian: "أفت في الفم" },
      { id: "mauvaise-haleine", label: "Mauvaise haleine persistante", description: "Halitose qui ne part pas", descriptionTunisian: "ريحة فم خايبة" },
    ]
  }
];
