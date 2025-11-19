import { genkit } from 'genkit';
import { groq } from 'genkitx-groq';

// Vérification de la clé API
const groqApiKey = process.env.GROQ_API_KEY;
console.log('Vérification de la clé API Groq:', groqApiKey ? '✅ Clé API trouvée' : '❌ Clé API manquante');

// Configuration de base pour Genkit avec Groq
export const ai = genkit({
  plugins: [
    groq({
      // La clé API peut être définie via la variable d'environnement GROQ_API_KEY
      // ou directement ici pour le débogage :
      apiKey: groqApiKey || undefined,
    })
  ]
});

// Configuration du modèle par défaut
export const DEFAULT_MODEL = 'groq/mixtral-8x7b-32768';
