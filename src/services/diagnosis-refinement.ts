export interface ClarificationAnswer {
  question: string;
  answer: string;
}

interface RefineDiagnosisParams {
  diagnosis: string;
  symptoms: string[];
  previousAnswers?: ClarificationAnswer[];
}

export async function refineDiagnosis({
  diagnosis,
  symptoms,
  previousAnswers = []
}: RefineDiagnosisParams): Promise<{
  refinedDiagnosis: string;
  confidence: number;
  questions: string[];
}> {
  // Logique enrichie pour déterminer les questions en fonction du diagnostic
  const getQuestionsForDiagnosis = (diagnosis: string): string[] => {
    const questions: string[] = [];
    const diagnosisLower = diagnosis.toLowerCase();

    // Maux de tête / Neurologiques
    if (diagnosisLower.includes('migraine') || diagnosisLower.includes('céphalée')) {
      questions.push('Avez-vous des nausées ou vomissements ?');
      questions.push('Êtes-vous sensible à la lumière (photophobie) ou au bruit (phonophobie) ?');
      questions.push('La douleur est-elle pulsatile (battements) et d\'un seul côté ?');
      questions.push('Voyez-vous des points lumineux ou des zigzags (aura visuelle) ?');
      questions.push('La douleur s\'aggrave-t-elle avec l\'activité physique ?');
    }
    // Respiratoire - Grippe/Rhume
    else if (diagnosisLower.includes('grippe') || diagnosisLower.includes('rhume')) {
      questions.push('Avez-vous de la fièvre supérieure à 38°C ?');
      questions.push('Avez-vous des courbatures et une fatigue intense ?');
      questions.push('Avez-vous une toux sèche ou grasse ?');
      questions.push('Avez-vous le nez qui coule ou bouché ?');
      questions.push('Avez-vous mal à la gorge ?');
      questions.push('Les symptômes sont-ils apparus brutalement ?');
    }
    else if (diagnosisLower.includes('angine') || diagnosisLower.includes('pharyngite')) {
      questions.push('Avez-vous des difficultés à avaler (dysphagie) ?');
      questions.push('Y a-t-il des points blancs sur vos amygdales ?');
      questions.push('Avez-vous de la fièvre élevée (>38.5°C) ?');
      questions.push('Vos ganglions du cou sont-ils gonflés et douloureux ?');
      questions.push('Avez-vous une mauvaise haleine ?');
    }
    else if (diagnosisLower.includes('bronchite') || diagnosisLower.includes('toux')) {
      questions.push('La toux est-elle grasse (avec expectorations) ?');
      questions.push('Les expectorations sont-elles colorées (jaunes/vertes) ?');
      questions.push('Avez-vous des sifflements respiratoires (wheezing) ?');
      questions.push('La toux vous empêche-t-elle de dormir ?');
      questions.push('Avez-vous des douleurs thoraciques en toussant ?');
      questions.push('Êtes-vous fumeur ou exposé à la fumée ?');
    }
    else if (diagnosisLower.includes('sinusite')) {
      questions.push('Avez-vous une douleur intense au front, aux joues ou autour des yeux ?');
      questions.push('Les sécrétions nasales sont-elles épaisses et jaunes/vertes ?');
      questions.push('La douleur augmente-t-elle en vous penchant en avant ?');
      questions.push('Avez-vous une sensation de pression au visage ?');
      questions.push('Avez-vous perdu l\'odorat (anosmie) ?');
    }
    else if (diagnosisLower.includes('asthme') || diagnosisLower.includes('dyspnée')) {
      questions.push('Avez-vous des difficultés à respirer (essoufflement) ?');
      questions.push('Entendez-vous des sifflements en respirant ?');
      questions.push('Une oppression thoracique est-elle présente ?');
      questions.push('Les symptômes s\'aggravent-ils la nuit ou tôt le matin ?');
      questions.push('Avez-vous des antécédents d\'allergie ou d\'asthme ?');
    }
    // Allergies
    else if (diagnosisLower.includes('allergie') || diagnosisLower.includes('allergique')) {
      questions.push('Avez-vous des démangeaisons (prurit) cutanées ou oculaires ?');
      questions.push('Avez-vous des éruptions cutanées, de l\'urticaire ou des rougeurs ?');
      questions.push('Avez-vous des éternuements fréquents ou le nez qui coule ?');
      questions.push('Avez-vous les yeux rouges, larmoyants ou gonflés ?');
      questions.push('Avez-vous été exposé à un nouvel aliment, médicament ou produit ?');
      questions.push('Avez-vous des difficultés respiratoires ou un gonflement du visage/langue ?');
    }
    // Digestif
    else if (diagnosisLower.includes('gastro') || diagnosisLower.includes('diarrhée') || diagnosisLower.includes('entérite')) {
      questions.push('Avez-vous des crampes ou douleurs abdominales intenses ?');
      questions.push('Y a-t-il du sang, du mucus ou une couleur inhabituelle dans les selles ?');
      questions.push('Avez-vous de la fièvre ou des frissons ?');
      questions.push('Avez-vous des vomissements ?');
      questions.push('Êtes-vous déshydraté (bouche sèche, soif intense, urines foncées) ?');
      questions.push('D\'autres personnes de votre entourage ont-elles les mêmes symptômes ?');
    }
    else if (diagnosisLower.includes('reflux') || diagnosisLower.includes('brûlures') || diagnosisLower.includes('rgo')) {
      questions.push('Les symptômes empirent-ils après les repas ou en position couchée ?');
      questions.push('Avez-vous un goût acide ou amer dans la bouche (régurgitations) ?');
      questions.push('Avez-vous une sensation de brûlure remontant dans la poitrine ?');
      questions.push('Avez-vous des nausées ou des difficultés à avaler ?');
      questions.push('Les symptômes s\'améliorent-ils avec des antacides ?');
    }
    else if (diagnosisLower.includes('appendicite')) {
      questions.push('La douleur est-elle localisée en bas à droite de l\'abdomen (fosse iliaque droite) ?');
      questions.push('Avez-vous de la fièvre (même légère) ?');
      questions.push('La douleur augmente-t-elle en marchant, toussant ou touchant la zone ?');
      questions.push('Avez-vous perdu l\'appétit ou avez-vous des nausées/vomissements ?');
      questions.push('La douleur a-t-elle commencé autour du nombril puis s\'est déplacée ?');
    }
    else if (diagnosisLower.includes('constipation')) {
      questions.push('Depuis combien de jours n\'avez-vous pas eu de selles ?');
      questions.push('Avez-vous des ballonnements ou des douleurs abdominales ?');
      questions.push('Les selles sont-elles dures et difficiles à évacuer ?');
      questions.push('Avez-vous changé votre alimentation ou votre niveau d\'hydratation récemment ?');
    }
    else if (diagnosisLower.includes('intoxication alimentaire')) {
      questions.push('Quand les symptômes ont-ils commencé après le repas ?');
      questions.push('D\'autres personnes ayant mangé le même repas sont-elles malades ?');
      questions.push('Avez-vous consommé des aliments crus, des fruits de mer ou des produits laitiers ?');
      questions.push('Y a-t-il du sang dans les vomissements ou les selles ?');
    }
    // Cardiovasculaire
    else if (diagnosisLower.includes('angine de poitrine') || diagnosisLower.includes('cardiaque') || diagnosisLower.includes('douleur thoracique')) {
      questions.push('La douleur survient-elle à l\'effort et disparaît-elle au repos ?');
      questions.push('Irradie-t-elle vers le bras gauche, la mâchoire, le cou ou le dos ?');
      questions.push('Avez-vous des essoufflements, sueurs froides ou nausées ?');
      questions.push('La douleur est-elle oppressante, comme un poids sur la poitrine ?');
      questions.push('Avez-vous des antécédents de problèmes cardiaques ou de diabète ?');
    }
    else if (diagnosisLower.includes('hypertension') || diagnosisLower.includes('tension')) {
      questions.push('Avez-vous des maux de tête, surtout le matin ?');
      questions.push('Avez-vous des vertiges, des acouphènes (bourdonnements) ?');
      questions.push('Avez-vous des palpitations ou une vision trouble ?');
      questions.push('Prenez-vous déjà un traitement pour l\'hypertension ?');
    }
    // Urinaire
    else if (diagnosisLower.includes('infection urinaire') || diagnosisLower.includes('cystite')) {
      questions.push('Avez-vous des brûlures ou douleurs en urinant (dysurie) ?');
      questions.push('Urinez-vous fréquemment en petites quantités ?');
      questions.push('Y a-t-il du sang dans les urines (hématurie) ?');
      questions.push('Les urines sont-elles troubles ou malodorantes ?');
      questions.push('Avez-vous des douleurs dans le bas-ventre ou le dos ?');
      questions.push('Avez-vous de la fièvre (signe de pyélonéphrite) ?');
    }
    else if (diagnosisLower.includes('calcul') || diagnosisLower.includes('colique néphrétique')) {
      questions.push('La douleur est-elle intense et par vagues (coliques) ?');
      questions.push('La douleur irradie-t-elle du dos vers l\'aine ou les organes génitaux ?');
      questions.push('Y a-t-il du sang dans les urines ?');
      questions.push('Avez-vous des nausées ou vomissements ?');
    }
    // Musculo-squelettique
    else if (diagnosisLower.includes('entorse') || diagnosisLower.includes('foulure') || diagnosisLower.includes('traumatisme')) {
      questions.push('Y a-t-il un gonflement (œdème) visible ?');
      questions.push('La zone est-elle bleue/noire (ecchymose/hématome) ?');
      questions.push('Pouvez-vous bouger l\'articulation ou supporter du poids ?');
      questions.push('Avez-vous entendu un craquement au moment du traumatisme ?');
      questions.push('La douleur est-elle intense et constante ?');
    }
    else if (diagnosisLower.includes('lombalgie') || diagnosisLower.includes('mal de dos') || diagnosisLower.includes('dos')) {
      questions.push('La douleur descend-elle dans la jambe (sciatique) ?');
      questions.push('Est-elle pire le matin au réveil ou après une position prolongée ?');
      questions.push('Avez-vous des fourmillements, engourdissements ou faiblesse musculaire ?');
      questions.push('La douleur s\'améliore-t-elle avec le mouvement ou le repos ?');
      questions.push('Avez-vous soulevé quelque chose de lourd récemment ?');
    }
    else if (diagnosisLower.includes('arthrite') || diagnosisLower.includes('arthrose') || diagnosisLower.includes('douleur articulaire')) {
      questions.push('Les articulations sont-elles raides, surtout le matin ?');
      questions.push('Y a-t-il un gonflement ou une rougeur des articulations ?');
      questions.push('La douleur s\'aggrave-t-elle avec le mouvement ou le froid ?');
      questions.push('Plusieurs articulations sont-elles touchées ?');
    }
    else if (diagnosisLower.includes('tendinite') || diagnosisLower.includes('inflammation')) {
      questions.push('La douleur s\'aggrave-t-elle lors de mouvements spécifiques ?');
      questions.push('Y a-t-il un gonflement localisé ?');
      questions.push('Avez-vous répété un geste ou un mouvement récemment ?');
    }
    // Peau
    else if (diagnosisLower.includes('eczéma') || diagnosisLower.includes('dermatite')) {
      questions.push('Avez-vous des démangeaisons intenses (prurit) ?');
      questions.push('La peau est-elle sèche, rouge, et qui pèle ?');
      questions.push('Avez-vous des antécédents d\'allergies, d\'asthme ou d\'eczéma familial ?');
      questions.push('Les lésions sont-elles au niveau des plis (coudes, genoux) ?');
    }
    else if (diagnosisLower.includes('psoriasis')) {
      questions.push('Avez-vous des plaques rouges couvertes de squames blanches ?');
      questions.push('Les lésions sont-elles au niveau des coudes, genoux ou cuir chevelu ?');
      questions.push('Y a-t-il des antécédents familiaux de psoriasis ?');
    }
    else if (diagnosisLower.includes('acné')) {
      questions.push('Avez-vous des points noirs, boutons rouges ou pustules ?');
      questions.push('Les lésions sont-elles sur le visage, dos ou poitrine ?');
      questions.push('Votre peau est-elle grasse ?');
      questions.push('Les symptômes s\'aggravent-ils avant les règles (pour les femmes) ?');
    }
    else if (diagnosisLower.includes('mycose') || diagnosisLower.includes('champignon')) {
      questions.push('Y a-t-il des démangeaisons intenses ?');
      questions.push('La zone est-elle rouge avec une bordure bien délimitée ?');
      questions.push('Y a-t-il une desquamation, des fissures ou une macération ?');
      questions.push('La mycose est-elle entre les orteils, dans les plis ou au niveau des ongles ?');
    }
    // Yeux et ORL
    else if (diagnosisLower.includes('conjonctivite')) {
      questions.push('Avez-vous un écoulement de l\'œil (purulent, clair ou collant) ?');
      questions.push('L\'œil est-il rouge, irrité et larmoyant ?');
      questions.push('Avez-vous une sensation de sable ou de corps étranger dans l\'œil ?');
      questions.push('Les paupières sont-elles collées au réveil ?');
      questions.push('Les deux yeux sont-ils touchés ?');
    }
    else if (diagnosisLower.includes('otite')) {
      questions.push('Avez-vous une douleur d\'oreille intense (otalgie) ?');
      questions.push('Y a-t-il un écoulement de l\'oreille (otorrhée) ?');
      questions.push('Avez-vous une baisse de l\'audition ou une sensation d\'oreille bouchée ?');
      questions.push('Avez-vous de la fièvre ?');
      questions.push('Avez-vous eu un rhume récemment ?');
    }
    else if (diagnosisLower.includes('vertige') || diagnosisLower.includes('étourdissement')) {
      questions.push('Avez-vous l\'impression que tout tourne autour de vous ?');
      questions.push('Les vertiges s\'accompagnent-ils de nausées ou vomissements ?');
      questions.push('Les symptômes apparaissent-ils en changeant de position ?');
      questions.push('Avez-vous des acouphènes ou une baisse de l\'audition ?');
    }
    // Troubles métaboliques et endocriniens
    else if (diagnosisLower.includes('diabète') || diagnosisLower.includes('glycémie')) {
      questions.push('Avez-vous une soif intense et urinez-vous fréquemment ?');
      questions.push('Avez-vous perdu du poids sans raison ?');
      questions.push('Avez-vous une fatigue inhabituelle ?');
      questions.push('Avez-vous une vision floue ?');
    }
    else if (diagnosisLower.includes('thyroïde') || diagnosisLower.includes('hyperthyroïdie') || diagnosisLower.includes('hypothyroïdie')) {
      questions.push('Avez-vous pris ou perdu du poids récemment ?');
      questions.push('Avez-vous des palpitations, tremblements ou anxiété ?');
      questions.push('Êtes-vous plus sensible au froid ou à la chaleur ?');
      questions.push('Avez-vous remarqué un gonflement au niveau du cou ?');
    }
    // Troubles psychologiques
    else if (diagnosisLower.includes('anxiété') || diagnosisLower.includes('angoisse') || diagnosisLower.includes('stress')) {
      questions.push('Avez-vous des palpitations, sueurs ou tremblements ?');
      questions.push('Avez-vous des difficultés à respirer ou une sensation d\'oppression ?');
      questions.push('Avez-vous des pensées inquiétantes difficiles à contrôler ?');
      questions.push('Ces symptômes affectent-ils votre vie quotidienne ?');
    }
    else if (diagnosisLower.includes('dépression') || diagnosisLower.includes('tristesse')) {
      questions.push('Vous sentez-vous triste, vide ou sans espoir la plupart du temps ?');
      questions.push('Avez-vous perdu l\'intérêt pour des activités que vous aimiez ?');
      questions.push('Avez-vous des troubles du sommeil ou de l\'appétit ?');
      questions.push('Avez-vous des pensées négatives ou des idées noires ?');
    }
    // Gynécologie (si applicable)
    else if (diagnosisLower.includes('menstruel') || diagnosisLower.includes('règles') || diagnosisLower.includes('dysménorrhée')) {
      questions.push('Les douleurs sont-elles associées à vos règles ?');
      questions.push('Les saignements sont-ils plus abondants ou prolongés que d\'habitude ?');
      questions.push('Y a-t-il des caillots de sang ?');
      questions.push('Avez-vous des nausées, vomissements ou diarrhée pendant vos règles ?');
    }
    // Fièvre générale
    else if (diagnosisLower.includes('fièvre') && !diagnosisLower.includes('grippe')) {
      questions.push('Quelle est votre température ?');
      questions.push('Depuis combien de temps avez-vous de la fièvre ?');
      questions.push('Avez-vous des frissons, sueurs ou courbatures ?');
      questions.push('Y a-t-il d\'autres symptômes associés (toux, douleur, etc.) ?');
      questions.push('Avez-vous voyagé récemment ou été en contact avec une personne malade ?');
    }
    // Fatigue
    else if (diagnosisLower.includes('fatigue') || diagnosisLower.includes('asthénie')) {
      questions.push('La fatigue est-elle constante ou s\'améliore-t-elle avec le repos ?');
      questions.push('Depuis combien de temps ressentez-vous cette fatigue ?');
      questions.push('Avez-vous des troubles du sommeil ?');
      questions.push('Avez-vous perdu du poids ou l\'appétit ?');
      questions.push('Avez-vous d\'autres symptômes (fièvre, douleurs, pâleur) ?');
    }
    // Questions génériques si aucun cas spécifique n'est détecté
    else {
      questions.push('Les symptômes se sont-ils aggravés récemment ?');
      questions.push('Depuis combien de temps présentez-vous ces symptômes ?');
      questions.push('Avez-vous pris des médicaments et ont-ils aidé ?');
      questions.push('Avez-vous déjà eu ces symptômes auparavant ?');
      questions.push('Y a-t-il des facteurs aggravants ou améliorants ?');
      questions.push('Avez-vous consulté un médecin ?');
    }

    // Limiter à 5 questions max (augmenté de 3 à 5 pour plus de précision)
    return questions.slice(0, 5);
  };

  // Calculer la confiance basée sur les réponses précédentes
  const calculateConfidence = (answers: ClarificationAnswer[]): number => {
    if (answers.length === 0) return 0.5; // Confiance moyenne sans réponses

    // Augmenter la confiance avec chaque réponse cohérente
    const baseConfidence = 0.5;
    const confidenceIncrement = 0.12; // Ajusté pour 5 questions max

    return Math.min(
      0.95, // Ne pas dépasser 95% de confiance
      baseConfidence + (answers.length * confidenceIncrement)
    );
  };

  // Générer de nouvelles questions si nécessaire (jusqu'à 5 questions max)
  const shouldAskMoreQuestions = previousAnswers.length < 5 &&
    calculateConfidence(previousAnswers) < 0.85;

  const questions = shouldAskMoreQuestions
    ? getQuestionsForDiagnosis(diagnosis).slice(0, 5 - previousAnswers.length)
    : [];

  return {
    refinedDiagnosis: diagnosis,
    confidence: calculateConfidence(previousAnswers),
    questions
  };
}
