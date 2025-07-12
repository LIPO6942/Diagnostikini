'use server';
/**
 * @fileOverview AI-powered symptom analysis flow.
 *
 * - analyzeSymptoms - A function that handles the symptom analysis process.
 * - AnalyzeSymptomsInput - The input type for the analyzeSymptoms function.
 * - AnalyzeSymptomsOutput - The return type for the analyzeSymptoms function.
 */

import {ai} from '@/ai/genkit';
import { UserProfileSchema } from '@/lib/types';
import {z} from 'genkit';

const AnalyzeSymptomsInputSchema = z.object({
  symptomsDescription: z
    .string()
    .describe("La description des symptômes que l'utilisateur éprouve, basée sur ses sélections dans l'arbre de symptômes."),
  userProfile: UserProfileSchema.optional().describe("Le profil de l'utilisateur pour affiner le diagnostic."),
});
export type AnalyzeSymptomsInput = z.infer<typeof AnalyzeSymptomsInputSchema>;

const AnalyzeSymptomsOutputSchema = z.object({
  diagnosisSuggestions: z
    .array(z.string())
    .describe('Une liste de diagnostics potentiels basés sur les symptômes.'),
  clarifyingQuestions: z
    .array(z.string())
    .describe("Une liste de questions de clarification à poser à l'utilisateur pour plus d'informations. Cette liste doit être vide si les informations fournies sont suffisantes."),
  medicationSuggestions: z
    .array(z.string())
    .describe("Une liste de médicaments en vente libre suggérés, avec un avertissement de consulter un médecin."),
  traditionalRemedies: z.array(z.object({
    remedyName: z.string().describe("Le nom du remède traditionnel tunisien (ex: Tisane de thym)."),
    status: z.enum(['approved', 'not_recommended', 'neutral']).describe("Statut du remède : 'approved' (approuvé), 'not_recommended' (déconseillé), ou 'neutral' (neutre/informatif)."),
    justification: z.string().describe("Une brève justification scientifique ou médicale pour le statut du remède.")
  })).describe("Une liste de remèdes traditionnels tunisiens pertinents, avec leur statut et une justification.")
});
export type AnalyzeSymptomsOutput = z.infer<typeof AnalyzeSymptomsOutputSchema>;

export async function analyzeSymptoms(input: AnalyzeSymptomsInput): Promise<AnalyzeSymptomsOutput> {
  return analyzeSymptomsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSymptomsPrompt',
  input: {schema: AnalyzeSymptomsInputSchema},
  output: {schema: AnalyzeSymptomsOutputSchema},
  prompt: `Vous êtes un Assistant de Symptômes IA. Un utilisateur vous décrira ses symptômes en français. Votre tâche est de fournir une analyse préliminaire complète basée sur TOUTES les informations fournies.

  Tâches :
  1.  Analysez la description des symptômes et le profil utilisateur (s'il est fourni) pour suggérer quelques diagnostics potentiels.
  2.  Votre objectif est de fournir un diagnostic si complet que vous n'avez PAS besoin de poser de questions de clarification. La liste 'clarifyingQuestions' doit être vide, sauf si des informations cruciales manquent.
  3.  Suggérez des médicaments en vente libre pertinents qui pourraient soulager les symptômes. Précisez TOUJOURS que l'avis d'un médecin est préférable avant de prendre tout médicament. Par exemple : "Ibuprofène (consultez un médecin avant de le prendre)".
  4.  Pour le diagnostic le plus probable, suggérez des remèdes traditionnels tunisiens (remèdes de grand-mère). Pour chaque remède, spécifiez son statut (approuvé, déconseillé, ou neutre) et fournissez une justification scientifique claire et simple. Par exemple, pour un rhume, "Tisane au thym et au miel (Approuvé : Le thym a des propriétés antiseptiques et le miel adoucit la gorge)".
  5.  Assurez-vous que toute votre sortie (suggestions de diagnostic, questions, médicaments et remèdes traditionnels) est en français.

  Description des symptômes (basée sur la sélection de l'utilisateur) : {{{symptomsDescription}}}

  {{#if userProfile}}
  Informations complémentaires du profil utilisateur :
  - Âge : {{#if userProfile.age}}{{userProfile.age}}{{else}}Non spécifié{{/if}}
  - Sexe : {{#if userProfile.sex}}{{userProfile.sex}}{{else}}Non spécifié{{/if}}
  - Poids : {{#if userProfile.weight}}{{userProfile.weight}} kg{{else}}Non spécifié{{/if}}
  {{#if userProfile.medicalHistory}}- Antécédents médicaux : {{userProfile.medicalHistory}}{{/if}}
  {{#if userProfile.allergies}}- Allergies : {{userProfile.allergies}}{{/if}}
  {{#if userProfile.currentTreatments}}- Traitements actuels : {{userProfile.currentTreatments}}{{/if}}
  {{#if userProfile.additionalSymptoms}}- Symptômes supplémentaires décrits par l'utilisateur : {{userProfile.additionalSymptoms}}{{/if}}
  {{/if}}`,
});

const analyzeSymptomsFlow = ai.defineFlow(
  {
    name: 'analyzeSymptomsFlow',
    inputSchema: AnalyzeSymptomsInputSchema,
    outputSchema: AnalyzeSymptomsOutputSchema,
  },
  async input => {
    const llmResponse = await prompt(input);
    const output = llmResponse.output;

    if (!output) {
      console.error('LLM response was empty or failed', llmResponse);
      return {
        diagnosisSuggestions: ["Analyse non disponible"],
        clarifyingQuestions: ["L'analyse n'a pas pu être complétée. Veuillez réessayer."],
        medicationSuggestions: [],
        traditionalRemedies: [],
      };
    }

    return output;
  }
);
