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
});

const AnalyzeDocumentOutputSchema = z.object({
  analysisItems: z.array(AnalysisItemSchema).describe("Une liste des éléments d'analyse détectés dans le document."),
  summary: z.string().describe("Un bref résumé interprétatif des résultats, en termes simples. Mentionnez les valeurs anormales et ce qu'elles pourraient signifier, tout en conseillant de consulter un médecin."),
});
export type AnalyzeDocumentOutput = z.infer<typeof AnalyzeDocumentOutputSchema>;

export async function analyzeDocument(input: AnalyzeDocumentInput): Promise<AnalyzeDocumentOutput> {
  return analyzeDocumentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeDocumentPrompt',
  input: { schema: AnalyzeDocumentInputSchema },
  output: { schema: AnalyzeDocumentOutputSchema },
  prompt: `Vous êtes un assistant médical IA spécialisé dans l'analyse de documents de santé en français. Votre tâche est d'analyser le texte extrait d'un document (comme un bilan sanguin) pour un utilisateur. Vous devez identifier les mesures, leurs valeurs, les seuils normaux, et déterminer si les valeurs sont anormales.

  Tâches :
  1.  Parcourez le texte du document fourni : {{{documentText}}}.
  2.  Identifiez chaque ligne correspondant à une mesure médicale (ex: "Glycémie", "Cholestérol", "Leucocytes").
  3.  Pour chaque mesure, extrayez son nom, sa valeur avec l'unité, et l'intervalle de normalité.
  4.  Comparez la valeur de l'utilisateur à l'intervalle de normalité pour déterminer si elle est anormale ('isAbnormal').
  5.  Remplissez le tableau 'analysisItems' avec toutes les mesures que vous avez pu identifier.
  6.  Rédigez un résumé simple et clair. Si des valeurs sont anormales, mentionnez-les en priorité et expliquez brièvement ce que cela pourrait indiquer, en termes simples.
  7.  Très important : Concluez TOUJOURS le résumé en recommandant à l'utilisateur de consulter son médecin pour une interprétation professionnelle.
  8.  Si le profil de l'utilisateur est fourni, prenez-le en compte pour affiner votre résumé. Par exemple, une glycémie légèrement élevée est plus préoccupante chez un patient diabétique.

  {{#if userProfile}}
  Profil de l'utilisateur à prendre en compte :
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
