import { genkit } from 'genkit';
import { groq } from 'genkitx-groq';

// Configuration de base pour Genkit avec Groq
export const ai = genkit({
  plugins: [
    groq({
      // La clé API peut être définie via la variable d'environnement GROQ_API_KEY
      // ou décommenter et remplacer par votre clé API :
      // apiKey: 'votre-cle-api-groq-ici',
    })
  ]
});

// Configuration du modèle par défaut
export const DEFAULT_MODEL = 'groq/mixtral-8x7b-32768';
