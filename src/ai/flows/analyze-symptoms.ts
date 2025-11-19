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
  console.log('Début de l\'analyse des symptômes avec l\'entrée :', JSON.stringify(input, null, 2));
  
  try {
    // Valider l'entrée
    const validatedInput = AnalyzeSymptomsInputSchema.parse(input);
    console.log('Entrée validée avec succès');
    
    // Si le profil utilisateur est fourni, s'assurer qu'il est valide
    if (validatedInput.userProfile) {
      console.log('Profil utilisateur fourni, validation...');
      validatedInput.userProfile = UserProfileSchema.parse(validatedInput.userProfile);
      console.log('Profil utilisateur validé');
    } else {
      console.log('Aucun profil utilisateur fourni');
    }
    
    // Exécuter le flux d'analyse
    console.log('Début du flux d\'analyse...');
    const result = await analyzeSymptomsFlow(validatedInput);
    console.log('Flux d\'analyse terminé avec le résultat :', result);
    
    // Valider la sortie
    const parsedResult = AnalyzeSymptomsOutputSchema.parse(result);
    console.log('Résultat validé avec succès');
    return parsedResult;
  } catch (error) {
    console.error("Erreur lors de l'analyse des symptômes :", error);
    
    // Extraire plus de détails de l'erreur
    let errorMessage = "Une erreur est survenue lors de l'analyse. Veuillez réessayer plus tard.";
    
    if (error instanceof Error) {
      console.error('Détails de l\'erreur principale:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      
      // Messages d'erreur spécifiques
      if (error.message.includes('401') || error.message.includes('unauthorized')) {
        errorMessage = "Erreur d'authentification avec l'API. Veuillez vérifier votre configuration.";
      } else if (error.message.includes('429') || error.message.includes('rate limit')) {
        errorMessage = "Trop de requêtes. Veuillez réessayer dans quelques instants.";
      } else if (error.message.includes('timeout')) {
        errorMessage = "Le serveur met trop temps à répondre. Veuillez réessayer.";
      }
    }
    
    // Retourner une réponse d'erreur structurée
    return {
      diagnosisSuggestions: [],
      clarifyingQuestions: [errorMessage],
      medicationSuggestions: [],
      traditionalRemedies: []
    };
  }
}

// Fonctions d'aide pour le template
const templateHelpers = {
  getAgeGroup: (age: number): string => {
    if (age >= 65) return 'personne âgée';
    if (age >= 18) return 'adulte';
    if (age >= 13) return 'adolescent';
    if (age >= 2) return 'enfant';
    return 'nourrisson';
  },
  formatSex: (sex?: string): string => {
    if (sex === 'homme') return 'Homme (prise en compte des spécificités masculines)';
    if (sex === 'femme') return 'Femme (prise en compte des spécificités féminines)';
    return sex || 'Non spécifié';
  }
};

const prompt = ai.definePrompt({
  name: 'analyzeSymptomsPrompt',
  model: 'groq/mixtral-8x7b-32768',
  input: {schema: AnalyzeSymptomsInputSchema},
  output: {schema: AnalyzeSymptomsOutputSchema},
  config: {
    temperature: 0.7,
    maxOutputTokens: 2048,
  },
  prompt: `Vous êtes un Assistant de Symptômes IA spécialisé dans l'analyse médicale personnalisée. Votre rôle est de fournir une évaluation préliminaire des symptômes en tenant compte du profil complet de l'utilisateur.

DIRECTIVES IMPORTANTES :
1. PERSONNALISATION DU DIAGNOSTIC :
   - Tenez systématiquement compte de l'âge, du sexe, du groupe sanguin et des antécédents médicaux dans votre analyse.
   - Adaptez vos explications et recommandations en fonction du profil complet de l'utilisateur.
   - Signalez clairement quand un symptôme pourrait être plus ou moins préoccupant en fonction de l'âge, du sexe ou du groupe sanguin.
   - Prenez en compte le groupe sanguin pour identifier d'éventuelles conditions spécifiques ou risques particuliers.

2. ANALYSE DES SYMPTÔMES :
   - Identifiez les diagnostics différentiels pertinents en fonction des symptômes décrits.
   - Pour chaque diagnostic, évaluez sa probabilité en fonction du profil utilisateur.
   - Mentionnez explicitement comment l'âge, le sexe ou les antécédents influencent chaque diagnostic potentiel.

3. MÉDICAMENTS ET TRAITEMENTS :
   - Tenez compte des allergies, du groupe sanguin et des traitements actuels dans vos recommandations.
   - Adaptez les posologies en fonction de l'âge, du poids et des caractéristiques physiologiques de l'utilisateur.
   - Mettez en garde contre les interactions médicamenteuses potentielles, notamment en fonction du groupe sanguin quand cela est pertinent.
   - Pour les traitements impliquant des transfusions ou des interventions chirurgicales, mentionnez l'importance du groupe sanguin.
   - Terminez toujours par : "(Avertissement : Consultez toujours un professionnel de santé avant de prendre un nouveau médicament ou de suivre un traitement)."

4. REMÈDES TRADITIONNELS :
   - Proposez des remèdes adaptés à la culture tunisienne.
   - Indiquez clairement leur efficacité et leurs limites.
   - Mentionnez les contre-indications éventuelles en fonction du profil de l'utilisateur.

INFORMATIONS SUR LES SYMPTÔMES :
{{{symptomsDescription}}}

{{#if userProfile}}
PROFIL UTILISATEUR :
{{#if userProfile.age}}
- Âge : {{userProfile.age}} ans ({{#if userProfile.age}}{{#if (gt userProfile.age 64)}}personne âgée{{else}}{{#if (gt userProfile.age 17)}}adulte{{else}}{{#if (gt userProfile.age 12)}}adolescent{{else}}{{#if (gt userProfile.age 1)}}enfant{{else}}nourrisson{{/if}}{{/if}}{{/if}}{{/if}}{{/if}})
{{/if}}
{{#if userProfile.sex}}
- Sexe : {{#if (eq userProfile.sex 'homme')}}Homme (prise en compte des spécificités masculines){{else if (eq userProfile.sex 'femme')}}Femme (prise en compte des spécificités féminines){{else}}Non spécifié{{/if}}
{{/if}}
{{#if userProfile.weight}}
- Poids : {{userProfile.weight}} kg
{{/if}}
{{#if userProfile.bloodGroup}}
- Groupe sanguin : {{userProfile.bloodGroup}}
{{/if}}

{{#if userProfile.medicalHistory.conditions}}
ANTÉCÉDENTS MÉDICAUX :
  {{#each userProfile.medicalHistory.conditions}}
  - {{this}}
  {{/each}}
{{/if}}
{{#if userProfile.medicalHistory.other}}
Autres antécédents : {{userProfile.medicalHistory.other}}
{{/if}}

{{#if userProfile.allergies.items}}
ALLERGIES CONNUES :
  {{#each userProfile.allergies.items}}
  - {{this}}
  {{/each}}
{{/if}}
{{#if userProfile.allergies.other}}
- {{userProfile.allergies.other}}
{{/if}}

{{#if userProfile.currentTreatments.medications}}
TRAITEMENTS EN COURS :
  {{#each userProfile.currentTreatments.medications}}
  - {{this}}
  {{/each}}
{{/if}}
{{#if userProfile.currentTreatments.other}}
- {{userProfile.currentTreatments.other}}
{{/if}}

{{#if userProfile.additionalSymptoms.symptoms}}
SYMPTÔMES SUPPLÉMENTAIRES :
  {{#each userProfile.additionalSymptoms.symptoms}}
  - {{this}}
  {{/each}}
{{/if}}
{{#if userProfile.additionalSymptoms.other}}
- {{userProfile.additionalSymptoms.other}}
{{/if}}
{{/if}}

CONSIGNES FINALES :
- Soyez particulièrement vigilant aux signes d'alerte nécessitant une consultation médicale urgente.
- Adaptez votre langage à la compréhension d'un non-professionnel de santé.
- Soyez rassurant mais ne minimisez pas les symptômes potentiellement graves.
- Proposez systématiquement des conseils sur le moment de consulter un médecin.
- Toutes les recommandations doivent être adaptées au contexte tunisien.`
});

const analyzeSymptomsFlow = ai.defineFlow(
  {
    name: 'analyzeSymptomsFlow',
    inputSchema: AnalyzeSymptomsInputSchema,
    outputSchema: AnalyzeSymptomsOutputSchema,
  },
  async input => {
    console.log('Début du flux d\'analyse avec l\'entrée :', JSON.stringify(input, null, 2));
    
    try {
      // Préparer l'entrée pour le prompt
      const promptInput = {
        ...input,
        // S'assurer que les tableaux sont définis pour éviter les erreurs dans le template
        userProfile: input.userProfile ? {
          ...input.userProfile,
          medicalHistory: input.userProfile.medicalHistory || { conditions: [], other: '' },
          allergies: input.userProfile.allergies || { items: [], other: '' },
          currentTreatments: input.userProfile.currentTreatments || { medications: [], other: '' },
          additionalSymptoms: input.userProfile.additionalSymptoms || { symptoms: [], other: '' }
        } : undefined
      };

      console.log('Appel du modèle IA avec le prompt :', JSON.stringify(promptInput, null, 2));
      
      // Appeler le modèle d'IA avec un timeout
      const llmResponse = await prompt(promptInput);
      
      console.log('Réponse du modèle IA reçue :', llmResponse);
      
      if (!llmResponse || !llmResponse.output) {
        console.error('LLM response was empty or failed', llmResponse);
        throw new Error('La réponse du modèle IA est vide ou invalide');
      }

      // Valider et retourner la sortie
      const output = llmResponse.output;
      console.log('Validation de la sortie du modèle...');
      return AnalyzeSymptomsOutputSchema.parse(output);
    } catch (error) {
      console.error('Erreur dans analyzeSymptomsFlow:', error);
      
      // Extraire plus de détails de l'erreur
      let errorMessage = "Une erreur est survenue lors du traitement de votre demande. Veuillez réessayer.";
      
      if (error instanceof Error) {
        console.error('Détails de l\'erreur:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
        
        // Messages d'erreur spécifiques pour Groq
        if (error.message.includes('401') || error.message.includes('unauthorized')) {
          errorMessage = "Erreur d'authentification avec l'API Groq. Veuillez vérifier votre clé API.";
        } else if (error.message.includes('429') || error.message.includes('rate limit')) {
          errorMessage = "Limite de débit de l'API Groq atteinte. Veuillez réessayer dans quelques instants.";
        } else if (error.message.includes('timeout')) {
          errorMessage = "Délai d'attente dépassé. Veuillez réessayer.";
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = "Erreur de connexion à l'API Groq. Veuillez vérifier votre connexion.";
        }
      }
      
      return {
        diagnosisSuggestions: [],
        clarifyingQuestions: [errorMessage],
        medicationSuggestions: [],
        traditionalRemedies: []
      };
    }
  }
);
