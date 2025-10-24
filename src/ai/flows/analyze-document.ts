'use server';
/**
 * @fileOverview An AI flow to analyze a health document image.
 *
 * - analyzeDocument - A function that analyzes text from a health document.
 * - AnalyzeDocumentInput - The input type for the analyzeDocument function.
 * - AnalyzeDocumentOutput - The return type for the analyzeDocument function.
 */

import { generateJson } from '@/ai/groq';
import { UserProfileSchema } from '@/lib/types';
import { z } from 'zod';

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
  interpretation: z.string().describe("Une analyse personnalisée de ce résultat. Si la valeur est normale, expliquez brièvement son rôle et confirmez que tout est en ordre. Si anormale, expliquez ce que cela signifie pour la santé de l'utilisateur, en tenant compte de son profil, et proposez des pistes ou des actions concrètes."),
});

const AnalyzeDocumentOutputSchema = z.object({
  analysisItems: z.array(AnalysisItemSchema).describe("Une liste des éléments d'analyse détectés dans le document."),
  summary: z.string().describe("Uniquement si des valeurs anormales sont détectées, rédigez un résumé global qui synthétise les points d'attention et donne des conseils proactifs basés sur l'analyse. Si tout est normal, laissez ce champ vide."),
});
export type AnalyzeDocumentOutput = z.infer<typeof AnalyzeDocumentOutputSchema>;

export async function analyzeDocument(input: AnalyzeDocumentInput): Promise<AnalyzeDocumentOutput> {
  const profile = input.userProfile;
  const profileBits: string[] = [];
  if (profile) {
    profileBits.push(`Âge: ${profile.age ?? 'Non spécifié'}`);
    profileBits.push(`Sexe: ${profile.sex ?? 'Non spécifié'}`);
    if (profile.medicalHistory?.conditions?.length) {
      profileBits.push(`Antécédents: ${profile.medicalHistory.conditions.join(', ')}`);
    }
    if (profile.medicalHistory?.other) {
      profileBits.push(`Antécédents (autre): ${profile.medicalHistory.other}`);
    }
  }

  const system = `Vous êtes un expert médical IA francophone pour l'interprétation de bilans sanguins. Retournez un JSON strictement conforme.`;
  const user = [
    `Texte OCR du document:\n${input.documentText}\n`,
    profileBits.length ? `\nProfil utilisateur:\n- ${profileBits.join('\n- ')}` : '',
    `\n\nTâches:\n1. Identifiez chaque mesure médicale (ex: Glycémie, Cholestérol total, TSH), extrayez son nom, sa valeur et l'intervalle de normalité.\n2. Fournissez pour CHACUNE une interpretation personnalisée (normale: brève explication et confirmation; anormale: explication concrète tenant compte du profil et pistes d'action).\n3. Renseignez analysisItems pour toutes les mesures détectées.\n4. Générez summary UNIQUEMENT si au moins une valeur est anormale; sinon, summary doit être vide.\n5. Répondez uniquement en français.`,
  ].join('');

  try {
    const output = await generateJson<AnalyzeDocumentOutput>({
      system,
      user,
      schemaName: 'AnalyzeDocumentOutput',
      schema: {},
      temperature: 0.2,
      maxTokens: 1500,
    });
    return {
      analysisItems: output.analysisItems ?? [],
      summary: output.summary ?? '',
    };
  } catch (e) {
    console.error('Groq analyzeDocument failed', e);
    return { analysisItems: [], summary: '' };
  }
}
