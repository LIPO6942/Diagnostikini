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

const DiagnosisSuggestionSchema = z.object({
  name: z.string().describe("Le nom concis et direct du diagnostic potentiel (ex: 'Migraine', 'Gastro-entérite virale')."),
  description: z.string().describe("Une brève description de ce qu'est cette condition médicale."),
  justification: z.string().describe("Une explication personnalisée expliquant pourquoi ce diagnostic est suggéré, en se basant spécifiquement sur les symptômes et le profil de l'utilisateur."),
});

const MedicationSuggestionSchema = z.object({
    name: z.string().describe("Le nom du médicament en vente libre suggéré."),
    justification: z.string().describe("Une explication sur la manière dont ce médicament peut aider à soulager les symptômes décrits. Inclure systématiquement un avertissement de consulter un médecin avant de prendre le médicament."),
});

const AnalyzeSymptomsOutputSchema = z.object({
  diagnosisSuggestions: z
    .array(DiagnosisSuggestionSchema)
    .describe("Une liste de diagnostics potentiels, chacun avec un nom, une description et une justification personnalisée."),
  clarifyingQuestions: z
    .array(z.string())
    .describe("Une liste de questions de clarification à poser à l'utilisateur pour plus d'informations. Cette liste doit être vide si les informations fournies sont suffisantes."),
  medicationSuggestions: z
    .array(MedicationSuggestionSchema)
    .describe("Une liste de médicaments en vente libre suggérés, avec une justification et un avertissement de consulter un médecin."),
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
  prompt: `Vous êtes un Assistant de Symptômes IA. Un utilisateur vous décrira ses symptômes en français. Votre tâche est de fournir une analyse préliminaire complète, détaillée et personnalisée.

  Tâches :
  1. Analysez la description des symptômes et le profil utilisateur pour suggérer plusieurs diagnostics potentiels. Pour chaque diagnostic :
     - Fournissez un 'name' concis et direct (ex: "Migraine", "Gastro-entérite virale").
     - Ajoutez une 'description' claire de ce qu'est la condition.
     - Rédigez une 'justification' personnalisée expliquant pourquoi ce diagnostic est plausible en se basant sur les symptômes spécifiques fournis.

  2.  Votre objectif est de fournir une analyse si complète que la liste 'clarifyingQuestions' reste vide, sauf si des informations cruciales manquent.
  
  3.  Suggérez des médicaments en vente libre pertinents. Pour chaque médicament, fournissez son 'name' et une 'justification' expliquant son action sur les symptômes décrits. IMPORTANT : La justification doit systématiquement se terminer par la phrase : "(Avertissement : Consultez toujours un professionnel de santé avant de prendre un nouveau médicament)".

  4.  Pour le diagnostic le plus probable, suggérez des remèdes traditionnels tunisiens (remèdes de grand-mère). Pour chaque remède, spécifiez son statut (approuvé, déconseillé, ou neutre) et fournissez une justification scientifique claire et simple.

  5.  Assurez-vous que toute votre sortie est en français.

  Description des symptômes (basée sur la sélection de l'utilisateur) : {{{symptomsDescription}}}

  {{#if userProfile}}
  Informations complémentaires du profil utilisateur :
  - Âge : {{#if userProfile.age}}{{userProfile.age}}{{else}}Non spécifié{{/if}}
  - Sexe : {{#if userProfile.sex}}{{userProfile.sex}}{{else}}Non spécifié{{/if}}
  - Poids : {{#if userProfile.weight}}{{userProfile.weight}} kg{{else}}Non spécifié{{/if}}

  {{#if userProfile.medicalHistory.conditions}}
  - Antécédents médicaux (sélection) : 
    {{#each userProfile.medicalHistory.conditions}}
    - {{this}}
    {{/each}}
  {{/if}}
  {{#if userProfile.medicalHistory.other}}
  - Antécédents médicaux (autre) : {{userProfile.medicalHistory.other}}
  {{/if}}

  {{#if userProfile.allergies.items}}
  - Allergies (sélection) : 
    {{#each userProfile.allergies.items}}
    - {{this}}
    {{/each}}
  {{/if}}
  {{#if userProfile.allergies.other}}
  - Allergies (autre) : {{userProfile.allergies.other}}
  {{/if}}

  {{#if userProfile.currentTreatments.medications}}
  - Traitements actuels (sélection) :
    {{#each userProfile.currentTreatments.medications}}
    - {{this}}
    {{/each}}
  {{/if}}
  {{#if userProfile.currentTreatments.other}}
  - Traitements actuels (autre) : {{userProfile.currentTreatments.other}}
  {{/if}}

  {{#if userProfile.additionalSymptoms.symptoms}}
  - Symptômes supplémentaires (sélection) :
    {{#each userProfile.additionalSymptoms.symptoms}}
    - {{this}}
    {{/each}}
  {{/if}}
  {{#if userProfile.additionalSymptoms.other}}
  - Symptômes supplémentaires (autre) : {{userProfile.additionalSymptoms.other}}
  {{/if}}
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
        diagnosisSuggestions: [],
        clarifyingQuestions: ["L'analyse n'a pas pu être complétée. Veuillez réessayer."],
        medicationSuggestions: [],
        traditionalRemedies: [],
      };
    }

    return output;
  }
);
