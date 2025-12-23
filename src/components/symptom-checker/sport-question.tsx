/**
 * @fileoverview Composant pour afficher les questions sportives conditionnelles
 * lors de la sélection de symptômes
 */
'use client';

import { useState } from 'react';
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
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
            {/* Header épuré */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                    <div className="p-2 rounded-full bg-primary/10">
                        <Activity className="size-5" />
                    </div>
                    <span className="text-sm font-semibold tracking-wider uppercase">Contexte sportif</span>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                        Affiner le diagnostic
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                        Pour "{symptomLabel}", nous analysons l'impact de votre activité physique.
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Question principale : Pratique sportive condensée */}
                {practicesSport === null && (
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => handleSportPracticeAnswer(true)}
                            className="group flex flex-col items-center justify-center p-4 bg-card hover:bg-primary/5 border border-border/50 hover:border-primary/40 rounded-xl transition-all duration-300 shadow-sm active:scale-[0.97]"
                        >
                            <span className="text-lg font-bold text-foreground mb-0.5">Oui</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Sportif</span>
                        </button>
                        <button
                            onClick={() => handleSportPracticeAnswer(false)}
                            className="group flex flex-col items-center justify-center p-4 bg-card hover:bg-destructive/5 border border-border/50 hover:border-destructive/40 rounded-xl transition-all duration-300 shadow-sm active:scale-[0.97]"
                        >
                            <span className="text-lg font-bold text-foreground mb-0.5">Non</span>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Sédentaire</span>
                        </button>
                    </div>
                )}

                {/* Sélection du sport compacte */}
                {practicesSport === true && !selectedSport && (
                    <div className="space-y-4">
                        <Label className="text-lg font-bold block px-1">
                            Quel sport pratiquez-vous ?
                        </Label>
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {relevantSports.map(sport => (
                                <button
                                    key={sport.id}
                                    onClick={() => handleSportSelection(sport.id)}
                                    className="flex items-center gap-3 p-3 bg-card hover:bg-primary/5 border border-border/50 hover:border-primary/40 rounded-xl transition-all duration-200 text-left group overflow-hidden"
                                >
                                    <div className="flex-shrink-0 size-8 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center text-primary transition-colors">
                                        <Activity className="size-4" />
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors truncate">{sport.name}</span>
                                        <span className="text-[10px] text-muted-foreground font-arabic truncate">{sport.nameTunisian}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Questions adaptatives */}
                {selectedSport && selectedSport.adaptiveQuestions.length > 0 && (
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 pb-2 border-b">
                            <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">
                                {selectedSport.name}
                            </span>
                        </div>

                        {selectedSport.adaptiveQuestions.map(question => (
                            <div key={question.id} className="space-y-4">
                                <Label className="text-lg font-medium leading-normal block px-1">
                                    {question.question}
                                    <span className="block text-sm text-muted-foreground mt-1 font-arabic">
                                        {question.questionTunisian}
                                    </span>
                                </Label>

                                <div className="grid grid-cols-1 gap-2">
                                    {question.options.map(option => (
                                        <button
                                            key={option.id}
                                            onClick={() => handleAdaptiveAnswer(question.id, option.id)}
                                            className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 text-left ${adaptiveAnswers[question.id] === option.id
                                                ? 'bg-primary/5 border-primary ring-1 ring-primary/20'
                                                : 'bg-card border-border/60 hover:border-primary/40'
                                                }`}
                                        >
                                            <div className="flex flex-col">
                                                <span className={`font-semibold ${adaptiveAnswers[question.id] === option.id ? 'text-primary' : 'text-foreground'}`}>
                                                    {option.label}
                                                </span>
                                                <span className="text-xs text-muted-foreground mt-1 font-arabic">
                                                    {option.labelTunisian}
                                                </span>
                                            </div>
                                            {adaptiveAnswers[question.id] === option.id && (
                                                <div className="size-5 rounded-full bg-primary flex items-center justify-center">
                                                    <div className="size-2 rounded-full bg-background" />
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <Button
                            onClick={handleComplete}
                            disabled={!isComplete()}
                            className="w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20"
                        >
                            Continuer
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
