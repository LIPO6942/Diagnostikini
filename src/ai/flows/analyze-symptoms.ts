// 'use server'
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
});
export type AnalyzeSymptomsOutput = z.infer<typeof AnalyzeSymptomsOutputSchema>;

export async function analyzeSymptoms(input: AnalyzeSymptomsInput): Promise<AnalyzeSymptomsOutput> {
  return analyzeSymptomsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSymptomsPrompt',
  input: {schema: AnalyzeSymptomsInputSchema},
  output: {schema: AnalyzeSymptomsOutputSchema},
  prompt: `Vous êtes un Assistant de Symptômes IA. Un utilisateur vous décrira ses symptômes en français. Vous poserez des questions de clarification pour affiner les diagnostics potentiels.

  En fonction de la description de l'utilisateur, suggérez quelques diagnostics potentiels. Posez également des questions de clarification pour aider à affiner les possibilités. Assurez-vous que toute votre sortie (suggestions de diagnostic et questions) est en français.

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
    const {output} = await prompt(input);
    return output!;
  }
);
