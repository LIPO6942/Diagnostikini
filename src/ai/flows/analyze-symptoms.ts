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
    .describe("La description des symptômes que l'utilisateur éprouve."),
  userProfile: UserProfileSchema.optional().describe("Le profil de l'utilisateur pour affiner le diagnostic."),
});
export type AnalyzeSymptomsInput = z.infer<typeof AnalyzeSymptomsInputSchema>;

const AnalyzeSymptomsOutputSchema = z.object({
  diagnosisSuggestions: z
    .array(z.string())
    .describe('Une liste de diagnostics potentiels basés sur les symptômes.'),
  clarifyingQuestions: z
    .array(z.string())
    .describe("Une liste de questions de clarification à poser à l'utilisateur pour plus d'informations."),
  medicationSuggestions: z
    .array(z.string())
    .describe("Une liste de médicaments en vente libre suggérés, avec un avertissement de consulter un médecin."),
});
export type AnalyzeSymptomsOutput = z.infer<typeof AnalyzeSymptomsOutputSchema>;

export async function analyzeSymptoms(input: AnalyzeSymptomsInput): Promise<AnalyzeSymptomsOutput> {
  return analyzeSymptomsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSymptomsPrompt',
  input: {schema: AnalyzeSymptomsInputSchema},
  output: {schema: AnalyzeSymptomsOutputSchema},
  prompt: `Vous êtes un Assistant de Symptômes IA. Un utilisateur vous décrira ses symptômes en français. Votre tâche est de fournir une analyse préliminaire.

  Tâches :
  1.  Suggérez quelques diagnostics potentiels basés sur les symptômes.
  2.  Posez des questions de clarification pour aider à affiner les possibilités.
  3.  Suggérez des médicaments en vente libre pertinents qui pourraient soulager les symptômes. Précisez TOUJOURS que l'avis d'un médecin est préférable avant de prendre tout médicament. Par exemple : "Ibuprofène (consultez un médecin avant de le prendre)".
  4.  Assurez-vous que toute votre sortie (suggestions de diagnostic, questions et médicaments) est en français.

  {{#if userProfile}}
  Voici quelques informations sur l'utilisateur pour vous aider à affiner votre analyse. Utilisez ces informations pour contextualiser votre réponse.
  - Âge : {{userProfile.age}}
  - Sexe : {{userProfile.sex}}
  - Poids : {{userProfile.weight}} kg
  {{#if userProfile.medicalHistory}}- Antécédents médicaux : {{userProfile.medicalHistory}}{{/if}}
  {{#if userProfile.allergies}}- Allergies : {{userProfile.allergies}}{{/if}}
  {{#if userProfile.currentTreatments}}- Traitements actuels : {{userProfile.currentTreatments}}{{/if}}
  {{/if}}

  Description des symptômes : {{{symptomsDescription}}}`,
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
      };
    }

    return output;
  }
);
