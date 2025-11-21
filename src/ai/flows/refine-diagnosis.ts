'use server';
/**
 * @fileOverview AI flow to refine diagnosis based on clarification answers
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ClarificationAnswerSchema = z.object({
    question: z.string().describe("La question posée à l'utilisateur."),
    answer: z.string().describe("La réponse de l'utilisateur (oui/non/je ne sais pas)."),
});

const RefineDiagnosisInputSchema = z.object({
    initialSymptoms: z.string().describe("Description initiale des symptômes."),
    initialDiagnosis: z.string().describe("Le diagnostic initial suggéré."),
    clarificationAnswers: z.array(ClarificationAnswerSchema).describe("Les réponses aux questions de clarification."),
});

export type RefineDiagnosisInput = z.infer<typeof RefineDiagnosisInputSchema>;

const DiagnosisSuggestionSchema = z.object({
    name: z.string().describe("Le nom concis et direct du diagnostic potentiel."),
    description: z.string().describe("Une brève description de ce qu'est cette condition médicale."),
    justification: z.string().describe("Une explication personnalisée basée sur les symptômes ET les réponses aux questions."),
});

const MedicationSuggestionSchema = z.object({
    name: z.string().describe("Le nom du médicament en vente libre suggéré."),
    justification: z.string().describe("Une explication concise sur la manière dont ce médicament peut aider."),
});

const TraditionalRemedySchema = z.object({
    remedyName: z.string().describe("Le nom du remède traditionnel tunisien."),
    status: z.enum(['approved', 'not_recommended', 'neutral']).describe("Statut du remède : 'approved' (approuvé), 'not_recommended' (déconseillé), ou 'neutral' (neutre)."),
    justification: z.string().describe("Une brève justification scientifique ou médicale pour le statut du remède."),
});

const RefineDiagnosisOutputSchema = z.object({
    diagnosisSuggestions: z.array(DiagnosisSuggestionSchema).describe("Diagnostics potentiels raffinés basés sur les réponses."),
    medicationSuggestions: z.array(MedicationSuggestionSchema).describe("Médicaments en vente libre suggérés."),
    traditionalRemedies: z.array(TraditionalRemedySchema).describe("Remèdes traditionnels tunisiens pertinents (seulement si vraiment appropriés)."),
    confidence: z.number().describe("Niveau de confiance du diagnostic (0-1)."),
});

export type RefineDiagnosisOutput = z.infer<typeof RefineDiagnosisOutputSchema>;

const prompt = ai.definePrompt({
    name: 'refineDiagnosisPrompt',
    model: 'groq/llama-3.3-70b-versatile',
    input: { schema: RefineDiagnosisInputSchema },
    output: { schema: RefineDiagnosisOutputSchema },
    config: {
        temperature: 0.6,
        maxOutputTokens: 2048,
    },
    prompt: `Vous êtes un Assistant de Diagnostic Médical IA spécialisé dans l'affinement des diagnostics basés sur des questions de clarification.

MISSION :
Affinez le diagnostic initial en tenant compte des réponses de l'utilisateur aux questions de clarification.
Adaptez vos suggestions de médicaments et remèdes en fonction des nouvelles informations.

SYMPTÔMES INITIAUX :
{{{initialSymptoms}}}

DIAGNOSTIC INITIAL SUGGÉRÉ :
{{{initialDiagnosis}}}

RÉPONSES AUX QUESTIONS DE CLARIFICATION :
{{#each clarificationAnswers}}
Q: {{this.question}}
R: {{this.answer}}
{{/each}}

INSTRUCTIONS IMPORTANTES :
1. **DIAGNOSTIC RAFFINÉ** :
   - Utilisez les réponses pour confirmer, affiner ou modifier le diagnostic initial.
   - Si les réponses pointent vers un diagnostic différent, proposez-le en priorité.
   - Justifiez explicitement comment chaque réponse influence votre diagnostic.
   - Augmentez la confiance si les réponses confirment le diagnostic initial.
   - Diminuez la confiance si les réponses sont contradictoires ou incertaines.

2. **MÉDICAMENTS** :
   - Suggérez des médicaments en vente libre spécifiquement adaptés aux symptômes confirmés.
   - Tenez compte des réponses pour ajuster vos recommandations.
   - Soyez précis et pratique dans vos suggestions.

3. **REMÈDES TRADITIONNELS** :
   - NE PROPOSEZ des remèdes traditionnels QUE s'ils sont vraiment pertinents et efficaces pour les symptômes confirmés.
   - Si AUCUN remède traditionnel n'est approprié, retournez un tableau VIDE.
   - Ne proposez PAS de remèdes génériques par défaut.
   - Les remèdes doivent être spécifiquement adaptés au diagnostic raffiné et à la culture tunisienne.

4. **CONFIANCE** :
   - Calculez un score de confiance (0-1) basé sur :
     * Cohérence entre les symptômes initiaux et les réponses (0.3)
     * Nombre de réponses "Oui" confirmant le diagnostic (0.3)
     * Absence de contradictions (0.2)
     * Clarté diagnostique (0.2)
   - Confiance élevée (>0.8) : symptômes clairs et réponses cohérentes
   - Confiance moyenne (0.5-0.8) : quelques incertitudes
   - Confiance faible (<0.5) : réponses contradictoires ou "Je ne sais pas"

EXEMPLE DE RAISONNEMENT :
- Si l'utilisateur répond "Oui" à "Avez-vous de la fièvre ?" pour une grippe suspectée : confiance augmente
- Si l'utilisateur répond "Non" à toutes les questions spécifiques : envisagez un diagnostic alternatif
- Si l'utilisateur répond "Je ne sais pas" : maintenez le diagnostic initial mais diminuez la confiance

Soyez précis, professionnel et basez-vous strictement sur les informations fournies.`
});

const refineDiagnosisFlow = ai.defineFlow(
    {
        name: 'refineDiagnosisFlow',
        inputSchema: RefineDiagnosisInputSchema,
        outputSchema: RefineDiagnosisOutputSchema,
    },
    async (input) => {
        console.log('Début du raffinement du diagnostic avec :', JSON.stringify(input, null, 2));

        try {
            const llmResponse = await prompt(input);

            if (!llmResponse || !llmResponse.output) {
                console.error('LLM response was empty or failed');
                throw new Error('La réponse du modèle IA est vide ou invalide');
            }

            const output = llmResponse.output;
            console.log('Réponse du raffinement reçue:', output);

            return RefineDiagnosisOutputSchema.parse(output);
        } catch (error) {
            console.error('Erreur dans refineDiagnosisFlow:', error);

            // Retourner une réponse d'erreur structurée
            return {
                diagnosisSuggestions: [],
                medicationSuggestions: [],
                traditionalRemedies: [],
                confidence: 0.5,
            };
        }
    }
);

export async function refineDiagnosisWithAI(input: RefineDiagnosisInput): Promise<RefineDiagnosisOutput> {
    console.log('Appel de refineDiagnosisWithAI avec:', input);

    try {
        const validatedInput = RefineDiagnosisInputSchema.parse(input);
        const result = await refineDiagnosisFlow(validatedInput);
        console.log('Résultat du raffinement:', result);
        return result;
    } catch (error) {
        console.error("Erreur lors du raffinement du diagnostic :", error);

        return {
            diagnosisSuggestions: [],
            medicationSuggestions: [],
            traditionalRemedies: [],
            confidence: 0.5,
        };
    }
}
