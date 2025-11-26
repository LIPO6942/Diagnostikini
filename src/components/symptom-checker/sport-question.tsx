/**
 * @fileoverview Composant pour afficher les questions sportives conditionnelles
 * lors de la sélection de symptômes
 */
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Activity, ChevronRight } from 'lucide-react';
import { sportsDatabase, getSportsForSymptom, type Sport } from '@/constants/sports-data';

interface SportQuestionProps {
    symptomId: string;
    symptomLabel: string;
    onComplete: (sportData: {
        practicesSport: boolean;
        sportId?: string;
        adaptiveAnswers?: Record<string, string>;
    }) => void;
}

export function SportQuestion({ symptomId, symptomLabel, onComplete }: SportQuestionProps) {
    const [practicesSport, setPracticesSport] = useState<boolean | null>(null);
    const [selectedSport, setSelectedSport] = useState<Sport | null>(null);
    const [adaptiveAnswers, setAdaptiveAnswers] = useState<Record<string, string>>({});

    const relevantSports = getSportsForSymptom(symptomId);

    const handleSportPracticeAnswer = (answer: boolean) => {
        setPracticesSport(answer);
        if (!answer) {
            // Si l'utilisateur ne pratique pas de sport, terminer
            onComplete({ practicesSport: false });
        }
    };

    const handleSportSelection = (sportId: string) => {
        const sport = sportsDatabase.find(s => s.id === sportId);
        setSelectedSport(sport || null);
        setAdaptiveAnswers({});
    };

    const handleAdaptiveAnswer = (questionId: string, optionId: string) => {
        setAdaptiveAnswers(prev => ({
            ...prev,
            [questionId]: optionId
        }));
    };

    const handleComplete = () => {
        if (selectedSport) {
            onComplete({
                practicesSport: true,
                sportId: selectedSport.id,
                adaptiveAnswers
            });
        }
    };

    const isComplete = () => {
        if (!selectedSport) return false;
        if (selectedSport.adaptiveQuestions.length === 0) return true;
        return selectedSport.adaptiveQuestions.every(q => adaptiveAnswers[q.id]);
    };

    return (
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    Pratique sportive
                </CardTitle>
                <CardDescription>
                    Pour affiner le diagnostic de "{symptomLabel}", nous avons besoin d'informations sur votre activité physique
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Question principale : Pratique sportive */}
                {practicesSport === null && (
                    <div className="space-y-4">
                        <Label className="text-base font-semibold">
                            Pratiquez-vous une activité sportive ?
                        </Label>
                        <div className="flex gap-4">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={() => handleSportPracticeAnswer(true)}
                            >
                                Oui
                            </Button>
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={() => handleSportPracticeAnswer(false)}
                            >
                                Non
                            </Button>
                        </div>
                    </div>
                )}

                {/* Sélection du sport */}
                {practicesSport === true && !selectedSport && (
                    <div className="space-y-4">
                        <Label className="text-base font-semibold">
                            Quel(s) sport(s) pratiquez-vous ?
                        </Label>
                        <RadioGroup onValueChange={handleSportSelection}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {relevantSports.map(sport => (
                                    <div key={sport.id} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
                                        <RadioGroupItem value={sport.id} id={sport.id} />
                                        <Label htmlFor={sport.id} className="flex-1 cursor-pointer">
                                            <div className="font-medium">{sport.name}</div>
                                            <div className="text-xs text-muted-foreground">{sport.nameTunisian}</div>
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>
                )}

                {/* Questions adaptatives */}
                {selectedSport && selectedSport.adaptiveQuestions.length > 0 && (
                    <div className="space-y-6">
                        <div className="text-sm font-medium text-primary">
                            Questions spécifiques pour {selectedSport.name}
                        </div>
                        {selectedSport.adaptiveQuestions.map(question => (
                            <div key={question.id} className="space-y-3">
                                <Label className="text-base">
                                    {question.question}
                                    <span className="text-sm text-muted-foreground ml-2">
                                        ({question.questionTunisian})
                                    </span>
                                </Label>
                                <RadioGroup
                                    value={adaptiveAnswers[question.id]}
                                    onValueChange={(value) => handleAdaptiveAnswer(question.id, value)}
                                >
                                    <div className="space-y-2">
                                        {question.options.map(option => (
                                            <div key={option.id} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50">
                                                <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} />
                                                <Label htmlFor={`${question.id}-${option.id}`} className="flex-1 cursor-pointer">
                                                    {option.label}
                                                    <span className="text-sm text-muted-foreground ml-2">
                                                        ({option.labelTunisian})
                                                    </span>
                                                </Label>
                                            </div>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                        ))}
                    </div>
                )}

                {/* Bouton de validation */}
                {selectedSport && (
                    <Button
                        onClick={handleComplete}
                        disabled={!isComplete()}
                        className="w-full"
                    >
                        Continuer
                        <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}
