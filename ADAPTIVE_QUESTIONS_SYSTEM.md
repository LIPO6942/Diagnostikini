# Système de Questions de Clarification Intelligentes et Adaptatives

## Vue d'ensemble

Ce système remplace les questions simples Oui/Non/Je ne sais pas par un système intelligent qui utilise le type de réponse le plus pertinent selon le contexte clinique et la nature de chaque question.

## Types de questions disponibles

### 1. **Yes-No** (`yes-no`)
Questions binaires simples avec option "Je ne sais pas"
- **Utilisation** : Questions à réponse claire (présence/absence de symptôme)
- **Exemple** : "Avez-vous de la fièvre ?"
- **Options** : Oui / Non / Je ne sais pas

### 2. **Choix unique** (`single-choice`)
Sélection d'une seule option parmi plusieurs
- **Utilisation** : Localisation, type de douleur, moment d'apparition
- **Exemple** : "Où se situe principalement la douleur ?"
- **Options** : Liste de choix exclusifs

### 3. **Choix multiple** (`multiple-choice`)
Sélection de plusieurs options
- **Utilisation** : Symptômes associés, facteurs déclenchants
- **Exemple** : "Quels symptômes accompagnent votre mal de tête ?"
- **Options** : Plusieurs choix possibles simultanément

### 4. **Échelle** (`scale`)
Curseur pour évaluer l'intensité
- **Utilisation** : Intensité de la douleur, gravité des symptômes
- **Exemple** : "Sur une échelle de 1 à 10, quelle est l'intensité de votre douleur ?"
- **Affichage** : Slider avec valeur en temps réel

### 5. **Numérique** (`numeric`)
Saisie d'une valeur numérique avec unité
- **Utilisation** : Température, fréquence, mesures
- **Exemple** : "Quelle est votre température actuelle ?"
- **Affichage** : Champ numérique + unité (°C, fois/jour, etc.)

### 6. **Durée** (`duration`)
Sélection d'une période de temps
- **Utilisation** : Depuis combien de temps, durée des symptômes
- **Exemple** : "Depuis combien de temps dure cette crise ?"
- **Options** : Heures, jours, semaines, mois

### 7. **Fréquence** (`frequency`)
Sélection d'une fréquence d'occurrence
- **Utilisation** : À quelle fréquence, combien de fois
- **Exemple** : "À quelle fréquence mesurez-vous votre tension ?"
- **Options** : Rarement, parfois, souvent, toujours

## Structure des données

### Question adaptative

```typescript
interface AdaptiveClarificationQuestion {
  id: string;
  text: string;
  textTunisian?: string;
  type: QuestionType;
  options?: QuestionOption[];
  min?: number; // Pour scale et numeric
  max?: number; // Pour scale et numeric
  unit?: string; // Pour numeric
  required?: boolean;
  category?: string;
  clinicalRelevance?: string;
}
```

### Option de question

```typescript
interface QuestionOption {
  id: string;
  label: string;
  labelTunisian?: string;
  diagnosticWeight?: number; // 0-1, pour pondérer le diagnostic
  followUpQuestions?: string[];
}
```

## Exemples de questions par diagnostic

### Migraine

```typescript
{
  id: 'migraine-intensity',
  text: 'Sur une échelle de 1 à 10, quelle est l\'intensité de votre douleur ?',
  type: 'scale',
  min: 1,
  max: 10,
  required: true
}

{
  id: 'migraine-symptoms',
  text: 'Quels symptômes accompagnent votre mal de tête ?',
  type: 'multiple-choice',
  options: [
    { id: 'nausea', label: 'Nausées ou vomissements', diagnosticWeight: 0.8 },
    { id: 'photophobia', label: 'Sensibilité à la lumière', diagnosticWeight: 0.9 },
    { id: 'aura', label: 'Troubles visuels', diagnosticWeight: 0.95 }
  ]
}
```

### Grippe

```typescript
{
  id: 'flu-temperature',
  text: 'Quelle est votre température actuelle ?',
  type: 'numeric',
  min: 35,
  max: 42,
  unit: '°C',
  required: true,
  clinicalRelevance: 'Fièvre >38.5°C typique de la grippe'
}

{
  id: 'flu-onset',
  text: 'Comment les symptômes sont-ils apparus ?',
  type: 'single-choice',
  options: [
    { id: 'sudden', label: 'Brutalement', diagnosticWeight: 0.9 },
    { id: 'gradual', label: 'Progressivement', diagnosticWeight: 0.4 }
  ]
}
```

### Lombalgie

```typescript
{
  id: 'back-radiation',
  text: 'La douleur irradie-t-elle ?',
  type: 'single-choice',
  options: [
    { id: 'no', label: 'Non, localisée au dos uniquement', diagnosticWeight: 0.6 },
    { id: 'leg', label: 'Descend dans la jambe (sciatique)', diagnosticWeight: 0.9 },
    { id: 'both-legs', label: 'Dans les deux jambes', diagnosticWeight: 0.95 }
  ],
  clinicalRelevance: 'Irradiation bilatérale = urgence possible'
}
```

## Catégories de questions

Les questions sont organisées par catégories cliniques :

- **Intensité** : Évaluation de la gravité
- **Symptômes** : Manifestations cliniques
- **Localisation** : Où se situe le problème
- **Chronologie** : Quand et depuis combien de temps
- **Facteurs déclenchants** : Qu'est-ce qui a causé/aggrave
- **Facteurs aggravants** : Ce qui empire les symptômes
- **Signes vitaux** : Température, tension, etc.
- **Complications** : Signes de gravité
- **Contexte épidémiologique** : Exposition, contagion

## Poids diagnostiques

Chaque option peut avoir un poids diagnostique (0-1) :

- **0.1-0.3** : Peu spécifique, faible valeur diagnostique
- **0.4-0.6** : Modérément spécifique
- **0.7-0.8** : Très spécifique, forte valeur diagnostique
- **0.9-1.0** : Pathognomonique, quasi-diagnostic

Ces poids sont utilisés pour :
1. Calculer la confiance du diagnostic
2. Prioriser les hypothèses diagnostiques
3. Adapter les recommandations

## Pertinence clinique

Certaines questions incluent une note de pertinence clinique :

```typescript
{
  clinicalRelevance: 'Fièvre >38.5°C typique de la grippe'
}
```

Affichée comme info-bulle pour :
- Éduquer l'utilisateur
- Expliquer pourquoi la question est posée
- Donner un contexte médical

## Ajout de nouveaux diagnostics

### 1. Créer un ensemble de questions

Dans `src/constants/adaptive-questions.ts` :

```typescript
export const adaptiveQuestionSets: Record<string, QuestionSet> = {
  'nouveau-diagnostic': {
    diagnosis: 'Nouveau Diagnostic',
    minQuestionsForConfidence: 4,
    questions: [
      {
        id: 'question-1',
        text: 'Question en français ?',
        textTunisian: 'سؤال بالعربية؟',
        type: 'single-choice', // ou autre type
        options: [
          { id: 'opt1', label: 'Option 1', diagnosticWeight: 0.7 },
          { id: 'opt2', label: 'Option 2', diagnosticWeight: 0.5 }
        ],
        required: true,
        category: 'Symptômes'
      }
      // ... autres questions
    ]
  }
};
```

### 2. Choisir le bon type de question

| Contexte | Type recommandé | Exemple |
|----------|----------------|---------|
| Présence/absence | `yes-no` | "Avez-vous de la fièvre ?" |
| Localisation unique | `single-choice` | "Où se situe la douleur ?" |
| Symptômes multiples | `multiple-choice` | "Quels symptômes avez-vous ?" |
| Intensité/Gravité | `scale` | "Intensité 1-10 ?" |
| Mesure précise | `numeric` | "Température ?" |
| Période | `duration` | "Depuis combien de temps ?" |
| Récurrence | `frequency` | "À quelle fréquence ?" |

## Avantages du système

### ✅ Précision diagnostique
- Questions adaptées au contexte clinique
- Poids diagnostiques pour affiner les hypothèses
- Catégorisation pour une analyse structurée

### ✅ Expérience utilisateur
- Interface adaptée au type de réponse
- Traduction bilingue (français/tunisien)
- Feedback visuel en temps réel
- Questions requises clairement identifiées

### ✅ Flexibilité
- 7 types de questions différents
- Extensible facilement
- Personnalisable par diagnostic

### ✅ Intelligence
- Pertinence clinique expliquée
- Poids diagnostiques pour priorisation
- Questions de suivi conditionnelles (future)

## Diagnostics actuellement supportés

### Validation intelligente
- Vérification de cohérence entre réponses
- Alertes pour réponses contradictoires

### Apprentissage
- Ajustement automatique des poids diagnostiques
- Optimisation des questions selon les résultats

### Multimédia
- Support d'images pour localisation
- Vidéos explicatives pour certaines questions

## Fichiers du système

```
src/
├── types/
│   └── clarification-types.ts          # Types TypeScript
├── constants/
│   └── adaptive-questions.ts           # Base de données de questions
├── components/
│   └── assistant/
│       ├── adaptive-question.tsx       # Composant de rendu
│       └── clarification-section.tsx   # Gestionnaire principal
```

## Utilisation

Le système est automatiquement activé lors du raffinement du diagnostic. Les questions sont chargées en fonction du diagnostic initial et affichées avec le type de réponse approprié.

```typescript
// Chargement automatique
const adaptiveQuestions = getAdaptiveQuestionsForDiagnosis(initialDiagnosis);

// Rendu adaptatif
<AdaptiveQuestion
  question={question}
  value={answers[question.id]}
  onChange={(value) => handleAnswer(question.id, value)}
/>
```

Le système gère automatiquement :
- Le formatage des réponses pour l'IA
- La validation des questions requises
- L'affichage du compteur de progression
- La soumission au service de raffinement

---

**Note** : Ce système remplace complètement l'ancien système Oui/Non/Je ne sais pas pour une expérience plus riche et des diagnostics plus précis.
