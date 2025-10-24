'use server';
/**
 * @fileOverview AI-powered symptom analysis flow.
 *
 * - analyzeSymptoms - A function that handles the symptom analysis process.
 * - AnalyzeSymptomsInput - The input type for the analyzeSymptoms function.
 * - AnalyzeSymptomsOutput - The return type for the analyzeSymptoms function.
 */

import { generateJson } from '@/ai/groq';
import { UserProfileSchema } from '@/lib/types';
import { z } from 'zod';

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
  const profile = input.userProfile;

  const profileLines: string[] = [];
  if (profile) {
    profileLines.push(`Âge: ${profile.age ?? 'Non spécifié'}`);
    profileLines.push(`Sexe: ${profile.sex ?? 'Non spécifié'}`);
    if (profile.weight !== undefined && profile.weight !== null && profile.weight !== '') {
      profileLines.push(`Poids: ${profile.weight} kg`);
    }
    if (profile.medicalHistory?.conditions?.length) {
      profileLines.push(`Antécédents médicaux: ${profile.medicalHistory.conditions.join(', ')}`);
    }
    if (profile.medicalHistory?.other) {
      profileLines.push(`Antécédents médicaux (autre): ${profile.medicalHistory.other}`);
    }
    if (profile.allergies?.items?.length) {
      profileLines.push(`Allergies: ${profile.allergies.items.join(', ')}`);
    }
    if (profile.allergies?.other) {
      profileLines.push(`Allergies (autre): ${profile.allergies.other}`);
    }
    if (profile.currentTreatments?.medications?.length) {
      profileLines.push(`Traitements actuels: ${profile.currentTreatments.medications.join(', ')}`);
    }
    if (profile.currentTreatments?.other) {
      profileLines.push(`Traitements actuels (autre): ${profile.currentTreatments.other}`);
    }
    if (profile.additionalSymptoms?.symptoms?.length) {
      profileLines.push(`Symptômes supplémentaires: ${profile.additionalSymptoms.symptoms.join(', ')}`);
    }
    if (profile.additionalSymptoms?.other) {
      profileLines.push(`Symptômes supplémentaires (autre): ${profile.additionalSymptoms.other}`);
    }
  }

  const system = `Vous êtes un Assistant de Symptômes IA francophone. Vous produisez un JSON valide respectant strictement le schéma demandé.`;
  const user = [
    `Description des symptômes: ${input.symptomsDescription}`,
    profileLines.length ? `\nProfil utilisateur:\n- ${profileLines.join('\n- ')}` : '',
    `\n\nTâches:\n1. Suggérez plusieurs diagnostics potentiels. Pour chacun, fournissez name, description, justification personnalisée.\n2. Essayez d'être complet pour éviter des questions de clarification; s'il manque des infos cruciales seulement, ajoutez-les dans clarifyingQuestions.\n3. Suggérez des médicaments en vente libre pertinents. Chaque justification DOIT se terminer par: "(Avertissement : Consultez toujours un professionnel de santé avant de prendre un nouveau médicament)".\n4. Ajoutez des remèdes traditionnels tunisiens (approved, not_recommended ou neutral) pour le diagnostic le plus probable, avec justification scientifique simple.\n5. Répondez uniquement en français.`,
  ].join('');

  try {
    const output = await generateJson<AnalyzeSymptomsOutput>({
      system,
      user,
      schemaName: 'AnalyzeSymptomsOutput',
      schema: {},
      temperature: 0.2,
      maxTokens: 2048,
    });
    // Ensure arrays exist
    return {
      diagnosisSuggestions: output.diagnosisSuggestions ?? [],
      clarifyingQuestions: output.clarifyingQuestions ?? [],
      medicationSuggestions: output.medicationSuggestions ?? [],
      traditionalRemedies: output.traditionalRemedies ?? [],
    };
  } catch (e) {
    console.error('Groq analyzeSymptoms failed', e);
    return {
      diagnosisSuggestions: [],
      clarifyingQuestions: ["L'analyse n'a pas pu être complétée. Veuillez réessayer."],
      medicationSuggestions: [],
      traditionalRemedies: [],
    };
  }
}
