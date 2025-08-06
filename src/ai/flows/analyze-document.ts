'use server';
/**
 * @fileOverview An AI flow to analyze a health document image.
 *
 * - analyzeDocument - A function that analyzes text from a health document.
 * - AnalyzeDocumentInput - The input type for the analyzeDocument function.
 * - AnalyzeDocumentOutput - The return type for the analyzeDocument function.
 */

import { ai } from '@/ai/genkit';
import { UserProfileSchema } from '@/lib/types';
import { z } from 'genkit';

const AnalyzeDocumentInputSchema = z.object({
  documentText: z.string().describe('The text extracted via OCR from the health document.'),
  documentImage: z.string().describe("The health document image as a data URI."),
  userProfile: UserProfileSchema.optional().describe("The user's profile to refine the analysis."),
});
export type AnalyzeDocumentInput = z.infer<typeof AnalyzeDocumentInputSchema>;

const AnalysisItemSchema = z.object({
  name: z.string().describe("Le nom de l'élément analysé (ex: Glycémie, Cholestérol Total)."),
  value: z.string().describe("La valeur mesurée, incluant l'unité (ex: 1.05 g/L)."),
  normalRange: z.string().describe("L'intervalle de valeurs normales indiqué sur le document (ex: 0.70 - 1.10 g/L)."),
  isAbnormal: z.boolean().describe("Vrai si la valeur est en dehors de l'intervalle normal, sinon faux."),
  interpretation: z.string().describe("Une brève interprétation de ce résultat spécifique, en termes simples. Si la valeur est normale, mentionnez-le simplement. Si elle est anormale, expliquez ce que cela pourrait signifier en tenant compte du profil de l'utilisateur."),
});

const AnalyzeDocumentOutputSchema = z.object({
  analysisItems: z.array(AnalysisItemSchema).describe("Une liste des éléments d'analyse détectés dans le document."),
  summary: z.string().describe("Uniquement si des valeurs anormales sont détectées, rédigez un bref résumé global qui mentionne les points clés et conclut TOUJOURS en recommandant de consulter un médecin. Si tout est normal, laissez ce champ vide."),
});
export type AnalyzeDocumentOutput = z.infer<typeof AnalyzeDocumentOutputSchema>;

export async function analyzeDocument(input: AnalyzeDocumentInput): Promise<AnalyzeDocumentOutput> {
  return analyzeDocumentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeDocumentPrompt',
  input: { schema: AnalyzeDocumentInputSchema },
  output: { schema: AnalyzeDocumentOutputSchema },
  prompt: `Vous êtes un assistant médical IA spécialisé dans l'analyse de documents de santé en français. Votre tâche est d'analyser le texte extrait d'un document (comme un bilan sanguin) et de fournir une interprétation claire et personnalisée.

  Tâches :
  1.  Parcourez le texte du document fourni : {{{documentText}}}.
  2.  Pour chaque mesure médicale identifiable (ex: "Glycémie", "Cholestérol", "TSH"), extrayez son nom, sa valeur, et l'intervalle de normalité.
  3.  Pour CHAQUE mesure, fournissez une 'interpretation' concise.
      - Si la valeur est NORMALE, indiquez simplement ce qu'elle représente et que le résultat est dans la norme.
      - Si la valeur est ANORMALE (haute ou basse), expliquez brièvement ce que cela pourrait signifier en termes simples, en utilisant le profil de l'utilisateur si disponible pour personnaliser l'analyse (ex: "légèrement élevé, ce qui chez un patient diabétique connu nécessite une surveillance...").
  4.  Remplissez le tableau 'analysisItems' avec toutes les mesures et leurs interprétations.
  5.  Générez un 'summary' global UNIQUEMENT si une ou plusieurs valeurs sont anormales. Ce résumé doit mentionner les points les plus importants et TOUJOURS se terminer en recommandant de consulter un médecin pour un avis professionnel. Si tout est normal, laissez le champ 'summary' vide.

  {{#if userProfile}}
  Profil de l'utilisateur à prendre en compte pour l'interprétation :
  - Âge : {{#if userProfile.age}}{{userProfile.age}}{{else}}Non spécifié{{/if}}
  - Sexe : {{#if userProfile.sex}}{{userProfile.sex}}{{else}}Non spécifié{{/if}}
  - Antécédents : {{#if userProfile.medicalHistory.conditions}}{{#each userProfile.medicalHistory.conditions}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}{{else}}Aucun{{/if}}{{#if userProfile.medicalHistory.other}}, {{userProfile.medicalHistory.other}}{{/if}}
  {{/if}}
  
  Image du document pour référence visuelle (ne pas l'analyser directement, se baser sur le texte) :
  {{media url=documentImage}}
  `,
});


const analyzeDocumentFlow = ai.defineFlow(
  {
    name: 'analyzeDocumentFlow',
    inputSchema: AnalyzeDocumentInputSchema,
    outputSchema: AnalyzeDocumentOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error("L'analyse IA n'a retourné aucune sortie.");
    }
    return output;
  }
);
