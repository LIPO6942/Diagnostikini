/**
 * @fileoverview Utilitaires pour gérer les questions sportives dans l'arborescence des symptômes
 */

import type { SymptomNode } from '@/lib/types';
import { sportRelatedSymptomIds } from './sports-data';

/**
 * Marque récursivement les nœuds de symptômes qui nécessitent des questions sportives
 */
export function markSportRelatedSymptoms(nodes: SymptomNode[]): SymptomNode[] {
    return nodes.map(node => {
        const updatedNode = { ...node };

        // Vérifier si ce symptôme nécessite des questions sportives
        if (sportRelatedSymptomIds.includes(node.id)) {
            updatedNode.requiresSportQuestion = true;
        }

        // Traiter récursivement les enfants
        if (node.children && node.children.length > 0) {
            updatedNode.children = markSportRelatedSymptoms(node.children);
        }

        return updatedNode;
    });
}

/**
 * Construit une description enrichie des symptômes incluant les informations sportives
 */
export function buildEnrichedSymptomDescription(
    selectedPath: SymptomNode[],
    sportData?: {
        practicesSport: boolean;
        sportId?: string;
        adaptiveAnswers?: Record<string, string>;
    }
): string {
    let description = selectedPath.map(node => node.label).join(' > ');

    if (sportData && sportData.practicesSport && sportData.sportId) {
        const { sportsDatabase } = require('./sports-data');
        const sport = sportsDatabase.find((s: any) => s.id === sportData.sportId);

        if (sport) {
            description += `\n\n**Contexte sportif** : Pratique de ${sport.name}`;

            if (sportData.adaptiveAnswers && Object.keys(sportData.adaptiveAnswers).length > 0) {
                description += '\n**Détails de la pratique** :';

                sport.adaptiveQuestions.forEach((question: any) => {
                    const answerId = sportData.adaptiveAnswers![question.id];
                    if (answerId) {
                        const option = question.options.find((opt: any) => opt.id === answerId);
                        if (option) {
                            description += `\n- ${question.question} : ${option.label}`;
                        }
                    }
                });
            }

            // Ajouter les tags biomécaniques pour l'IA
            if (sport.biomechanicalTags && sport.biomechanicalTags.length > 0) {
                description += `\n\n**Facteurs biomécaniques pertinents** : ${sport.biomechanicalTags.join(', ')}`;
            }

            // Ajouter les blessures communes
            if (sport.commonInjuries && sport.commonInjuries.length > 0) {
                description += `\n**Blessures communes dans ce sport** : ${sport.commonInjuries.join(', ')}`;
            }
        }
    } else if (sportData && !sportData.practicesSport) {
        description += '\n\n**Contexte sportif** : Pas de pratique sportive régulière';
    }

    return description;
}

/**
 * Calcule un poids diagnostique basé sur les réponses sportives
 * Utilisé pour affiner la probabilité des diagnostics
 */
export function calculateSportDiagnosticWeight(
    sportData?: {
        practicesSport: boolean;
        sportId?: string;
        adaptiveAnswers?: Record<string, string>;
    }
): number {
    if (!sportData || !sportData.practicesSport || !sportData.sportId) {
        return 0;
    }

    const { sportsDatabase } = require('./sports-data');
    const sport = sportsDatabase.find((s: any) => s.id === sportData.sportId);

    if (!sport || !sportData.adaptiveAnswers) {
        return 0.3; // Poids de base pour la pratique sportive
    }

    // Calculer le poids moyen basé sur les réponses adaptatives
    let totalWeight = 0;
    let count = 0;

    sport.adaptiveQuestions.forEach((question: any) => {
        const answerId = sportData.adaptiveAnswers![question.id];
        if (answerId) {
            const option = question.options.find((opt: any) => opt.id === answerId);
            if (option) {
                totalWeight += option.diagnosticWeight;
                count++;
            }
        }
    });

    return count > 0 ? totalWeight / count : 0.3;
}

/**
 * Génère des recommandations spécifiques au sport pour le diagnostic
 */
export function generateSportSpecificRecommendations(
    sportData?: {
        practicesSport: boolean;
        sportId?: string;
        adaptiveAnswers?: Record<string, string>;
    }
): string[] {
    if (!sportData || !sportData.practicesSport || !sportData.sportId) {
        return [];
    }

    const { sportsDatabase } = require('./sports-data');
    const sport = sportsDatabase.find((s: any) => s.id === sportData.sportId);

    if (!sport) {
        return [];
    }

    const recommendations: string[] = [];

    // Recommandations basées sur les tags biomécaniques
    if (sport.biomechanicalTags.includes('charge-lombaire')) {
        recommendations.push('Vérifier la technique de levage et renforcer les muscles stabilisateurs du tronc');
    }

    if (sport.biomechanicalTags.includes('impulsions-repetees')) {
        recommendations.push('Évaluer la qualité du chaussage et envisager un travail proprioceptif');
    }

    if (sport.biomechanicalTags.includes('rotation-epaule')) {
        recommendations.push('Renforcer la coiffe des rotateurs et vérifier l\'amplitude articulaire');
    }

    if (sport.biomechanicalTags.includes('torsion-tronc')) {
        recommendations.push('Travailler la mobilité thoracique et la stabilité lombaire');
    }

    // Recommandations basées sur les réponses adaptatives
    if (sportData.adaptiveAnswers) {
        Object.entries(sportData.adaptiveAnswers).forEach(([questionId, answerId]) => {
            const question = sport.adaptiveQuestions.find((q: any) => q.id === questionId);
            if (question) {
                const option = question.options.find((opt: any) => opt.id === answerId);
                if (option && option.diagnosticWeight > 0.7) {
                    // Recommandation pour les réponses à haut risque
                    if (questionId.includes('charges') || questionId.includes('volume')) {
                        recommendations.push('Envisager une réduction temporaire de l\'intensité/volume d\'entraînement');
                    }
                    if (questionId.includes('surface') || questionId.includes('terrain')) {
                        recommendations.push('Varier les surfaces d\'entraînement pour réduire les contraintes répétitives');
                    }
                }
            }
        });
    }

    return recommendations;
}
