# Système de Questions Sportives Conditionnelles

## Vue d'ensemble

Ce système intègre des questions conditionnelles liées à la pratique sportive dans l'arborescence de diagnostic des symptômes. Il permet d'affiner dynamiquement le diagnostic en fonction de l'activité physique de l'utilisateur et des facteurs biomécaniques spécifiques à chaque sport.

## Architecture

### 1. Base de données des sports (`sports-data.ts`)

Contient une base de données complète de sports avec :
- **Catégories** : Impact, Charge axiale, Endurance, Rotation/Flexion, Combat, Raquette, Aquatique
- **Tags biomécaniques** : Charge lombaire, torsion du tronc, impulsions répétées, etc.
- **Blessures communes** : Liste des blessures typiques pour chaque sport
- **Questions adaptatives** : Questions spécifiques à chaque sport avec options pondérées

#### Sports inclus (30+)
- **Impact** : Football, Basketball, Handball
- **Combat** : Boxe, Judo, Arts martiaux
- **Charge axiale** : Musculation, CrossFit, Gymnastique
- **Endurance** : Course à pied, Cyclisme, Natation
- **Raquette** : Tennis, Padel
- **Rotation/Flexion** : Golf, Danse

### 2. Utilitaires (`sport-utils.ts`)

Fonctions helper pour :
- **`markSportRelatedSymptoms()`** : Marque automatiquement les symptômes nécessitant des questions sportives
- **`buildEnrichedSymptomDescription()`** : Construit une description enrichie incluant le contexte sportif
- **`calculateSportDiagnosticWeight()`** : Calcule un poids diagnostique basé sur les réponses
- **`generateSportSpecificRecommendations()`** : Génère des recommandations spécifiques au sport

### 3. Composant UI (`sport-question.tsx`)

Interface utilisateur pour :
1. Question principale : "Pratiquez-vous une activité sportive ?"
2. Sélection du sport (filtrée selon le symptôme)
3. Questions adaptatives spécifiques au sport sélectionné

### 4. Intégration dans le flux (`symptom-checker.tsx`)

Le flux de diagnostic est modifié pour :
1. Détecter si un symptôme nécessite des questions sportives
2. Afficher les questions sportives avant l'analyse
3. Enrichir la description des symptômes avec les données sportives
4. Transmettre ces informations à l'IA pour un diagnostic plus précis

## Symptômes concernés

Les questions sportives sont déclenchées pour :
- **Douleurs du dos** : Cervicales, dorsales, lombaires, sciatique
- **Douleurs des membres** : Épaule, coude, poignet, hanche, genou, cheville, muscles
- **Essoufflement à l'effort**
- **Traumatismes** : Membres, chutes
- **Douleurs thoraciques** (à l'effort)

## Flux utilisateur

```
1. Sélection du symptôme (ex: "Douleur lombaire")
   ↓
2. Caractérisation du symptôme (type, intensité, etc.)
   ↓
3. [NOUVEAU] Questions sportives
   - Pratiquez-vous un sport ? (Oui/Non)
   - Si Oui : Quel sport ?
   - Questions adaptatives (ex: charges, fréquence, terrain)
   ↓
4. Analyse IA enrichie avec contexte sportif
```

## Exemple concret

### Utilisateur A : Douleur lombaire - Sédentaire
```
Symptôme : Douleur lombaire
Sport : Non
→ Diagnostic : Lombalgie posturale, manque d'activité
→ Recommandations : Renforcement musculaire, ergonomie
```

### Utilisateur B : Douleur lombaire - Musculation
```
Symptôme : Douleur lombaire
Sport : Musculation
Charges : Lourdes
Squats/Deadlifts : Oui, charges lourdes
→ Diagnostic : Lombalgie mécanique liée à la charge axiale
→ Facteurs biomécaniques : charge-lombaire, compression-disques
→ Recommandations : 
   - Vérifier la technique de levage
   - Renforcer les stabilisateurs du tronc
   - Réduire temporairement l'intensité
```

### Utilisateur C : Douleur lombaire - Course à pied
```
Symptôme : Douleur lombaire
Sport : Course à pied
Terrain : Bitume
Volume : Augmentation brutale >20%
Chaussures : >6 mois/usées
→ Diagnostic : Lombalgie liée aux impacts répétés
→ Facteurs biomécaniques : impulsions-repetees, impact-articulations
→ Recommandations :
   - Varier les surfaces d'entraînement
   - Remplacer les chaussures
   - Réduire le volume progressivement
```

## Tags biomécaniques

Les tags suivants sont utilisés pour orienter le diagnostic :

| Tag | Description | Sports concernés |
|-----|-------------|------------------|
| `charge-lombaire` | Charge importante sur la région lombaire | Musculation, CrossFit, Gymnastique |
| `torsion-tronc` | Mouvements de rotation du tronc | Tennis, Golf, Boxe, Football |
| `impulsions-repetees` | Sauts et impacts répétés | Basketball, Course, Football |
| `rotation-epaule` | Mouvements de rotation de l'épaule | Tennis, Natation, Handball |
| `compression-disques` | Compression des disques intervertébraux | Musculation, CrossFit |
| `surcharge-tendineuse` | Sollicitation excessive des tendons | Tennis, Course, Musculation |
| `contrainte-menisque` | Stress sur les ménisques | Football, Basketball |
| `surcharge-achilleen` | Sollicitation du tendon d'Achille | Course, Basketball |

## Poids diagnostiques

Chaque option de réponse a un poids diagnostique (0-1) :
- **0.1-0.3** : Faible risque
- **0.4-0.6** : Risque modéré
- **0.7-0.9** : Risque élevé
- **0.9-1.0** : Risque très élevé

Ces poids sont utilisés pour :
1. Calculer la probabilité des diagnostics
2. Prioriser les recommandations
3. Adapter les conseils de prévention

## Extension du système

### Ajouter un nouveau sport

```typescript
{
  id: 'nouveau-sport',
  name: 'Nouveau Sport',
  nameTunisian: 'رياضة جديدة',
  category: 'impact', // ou autre catégorie
  biomechanicalTags: [
    'tag1',
    'tag2'
  ],
  commonInjuries: [
    'Blessure 1',
    'Blessure 2'
  ],
  adaptiveQuestions: [
    {
      id: 'question-1',
      question: 'Question en français ?',
      questionTunisian: 'سؤال بالعربية؟',
      options: [
        { 
          id: 'opt1', 
          label: 'Option 1', 
          labelTunisian: 'خيار 1', 
          diagnosticWeight: 0.5 
        }
      ]
    }
  ]
}
```

### Ajouter un nouveau symptôme concerné

Dans `sports-data.ts`, ajouter l'ID du symptôme à `sportRelatedSymptomIds` :

```typescript
export const sportRelatedSymptomIds = [
  // ... existants
  'nouveau-symptome-id',
];
```

## Intégration avec l'IA

Les informations sportives sont transmises à l'IA via la description enrichie :

```
Symptôme : Douleur > Dos > Lombaires > Type aigu > Intensité sévère

**Contexte sportif** : Pratique de Musculation
**Détails de la pratique** :
- Type de charges utilisées ? : Lourdes (force)
- Squats / Deadlifts réguliers ? : Oui, charges lourdes

**Facteurs biomécaniques pertinents** : charge-lombaire, charge-axiale, compression-disques

**Blessures communes dans ce sport** : Lombalgie, Hernie discale, Tendinite épaule
```

L'IA utilise ces informations pour :
1. Affiner le diagnostic différentiel
2. Adapter les recommandations
3. Suggérer des mesures préventives spécifiques
4. Évaluer la gravité en contexte

## Avantages du système

✅ **Diagnostic personnalisé** : Deux utilisateurs avec le même symptôme reçoivent des analyses différentes
✅ **Prévention ciblée** : Recommandations adaptées à la pratique sportive
✅ **Éducation** : L'utilisateur comprend le lien entre son sport et ses symptômes
✅ **Extensible** : Facile d'ajouter de nouveaux sports ou questions
✅ **Bilingue** : Français et Tunisien pour chaque question
✅ **Pondéré** : Système de poids pour prioriser les diagnostics

## Limitations et améliorations futures

### Limitations actuelles
- Questions sportives uniquement pour les symptômes musculo-squelettiques
- Pas de prise en compte de l'historique sportif (années de pratique)
- Pas de questions sur l'échauffement/récupération

### Améliorations possibles
1. **Historique sportif** : Durée de pratique, changements récents
2. **Équipement** : Questions sur le matériel utilisé
3. **Technique** : Évaluation de la technique (auto-évaluation)
4. **Volume** : Tracking du volume d'entraînement
5. **Récupération** : Questions sur le repos et la récupération
6. **Nutrition** : Lien avec l'alimentation sportive
7. **Progression** : Suivi de l'évolution des symptômes

## Maintenance

### Tests recommandés
- Vérifier que tous les sports ont des questions adaptatives pertinentes
- Tester le flux complet pour chaque catégorie de symptôme
- Valider les poids diagnostiques avec des professionnels de santé
- S'assurer que les traductions tunisiennes sont correctes

### Mises à jour régulières
- Ajouter de nouveaux sports populaires
- Affiner les questions adaptatives basées sur les retours utilisateurs
- Mettre à jour les blessures communes selon les données médicales
- Ajuster les poids diagnostiques selon les résultats cliniques
