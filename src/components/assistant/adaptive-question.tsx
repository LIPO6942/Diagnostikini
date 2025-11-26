/**
 * @fileoverview Composant pour afficher une question de clarification adaptative
 * avec le type de réponse approprié
 */
'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import type { AdaptiveClarificationQuestion } from '@/types/clarification-types';

interface AdaptiveQuestionProps {
    question: AdaptiveClarificationQuestion;
    value: string | string[] | number | undefined;
    onChange: (value: string | string[] | number) => void;
    disabled?: boolean;
}

export function AdaptiveQuestion({ question, value, onChange, disabled }: AdaptiveQuestionProps) {
    const [sliderValue, setSliderValue] = useState<number[]>([
        typeof value === 'number' ? value : question.min || 1
    ]);

    const handleSliderChange = (newValue: number[]) => {
        setSliderValue(newValue);
        onChange(newValue[0]);
    };

    // Rendu selon le type de question
    switch (question.type) {
        case 'yes-no':
            return (
                <div className="space-y-3">
                    <Label className="text-base font-semibold">
                        {question.text}
                        {question.textTunisian && (
                            <span className="block text-sm text-muted-foreground font-normal mt-1">
                                {question.textTunisian}
                            </span>
                        )}
                    </Label>
                    <RadioGroup
                        value={value as string}
                        onValueChange={onChange}
                        disabled={disabled}
                    >
                        <div className="space-y-2">
                            {['yes', 'no', 'unsure'].map((option) => (
                                <div key={option} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50">
                                    <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                                    <Label htmlFor={`${question.id}-${option}`} className="flex-1 cursor-pointer">
                                        {option === 'yes' && 'Oui'}
                                        {option === 'no' && 'Non'}
                                        {option === 'unsure' && 'Je ne sais pas'}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </RadioGroup>
                </div>
            );

        case 'single-choice':
            return (
                <div className="space-y-3">
                    <Label className="text-base font-semibold">
                        {question.text}
                        {question.textTunisian && (
                            <span className="block text-sm text-muted-foreground font-normal mt-1">
                                {question.textTunisian}
                            </span>
                        )}
                    </Label>
                    <RadioGroup
                        value={value as string}
                        onValueChange={onChange}
                        disabled={disabled}
                    >
                        <div className="space-y-2">
                            {question.options?.map((option) => (
                                <div key={option.id} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50">
                                    <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} />
                                    <Label htmlFor={`${question.id}-${option.id}`} className="flex-1 cursor-pointer">
                                        <div>{option.label}</div>
                                        {option.labelTunisian && (
                                            <div className="text-sm text-muted-foreground">{option.labelTunisian}</div>
                                        )}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </RadioGroup>
                </div>
            );

        case 'multiple-choice':
            const selectedValues = Array.isArray(value) ? value : [];
            return (
                <div className="space-y-3">
                    <Label className="text-base font-semibold">
                        {question.text}
                        {question.textTunisian && (
                            <span className="block text-sm text-muted-foreground font-normal mt-1">
                                {question.textTunisian}
                            </span>
                        )}
                        <span className="block text-xs text-muted-foreground font-normal mt-1">
                            (Sélection multiple possible)
                        </span>
                    </Label>
                    <div className="space-y-2">
                        {question.options?.map((option) => (
                            <div key={option.id} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50">
                                <Checkbox
                                    id={`${question.id}-${option.id}`}
                                    checked={selectedValues.includes(option.id)}
                                    onCheckedChange={(checked) => {
                                        if (checked) {
                                            onChange([...selectedValues, option.id]);
                                        } else {
                                            onChange(selectedValues.filter(v => v !== option.id));
                                        }
                                    }}
                                    disabled={disabled}
                                />
                                <Label htmlFor={`${question.id}-${option.id}`} className="flex-1 cursor-pointer">
                                    <div>{option.label}</div>
                                    {option.labelTunisian && (
                                        <div className="text-sm text-muted-foreground">{option.labelTunisian}</div>
                                    )}
                                </Label>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'scale':
            const currentValue = sliderValue[0];
            return (
                <div className="space-y-4">
                    <Label className="text-base font-semibold">
                        {question.text}
                        {question.textTunisian && (
                            <span className="block text-sm text-muted-foreground font-normal mt-1">
                                {question.textTunisian}
                            </span>
                        )}
                    </Label>
                    <div className="space-y-4 px-2">
                        <Slider
                            min={question.min || 1}
                            max={question.max || 10}
                            step={1}
                            value={sliderValue}
                            onValueChange={handleSliderChange}
                            disabled={disabled}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>{question.min || 1}</span>
                            <span className="text-lg font-bold text-primary">{currentValue}</span>
                            <span>{question.max || 10}</span>
                        </div>
                        {question.min === 1 && question.max === 10 && (
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Très faible</span>
                                <span>Modéré</span>
                                <span>Très intense</span>
                            </div>
                        )}
                    </div>
                </div>
            );

        case 'numeric':
            return (
                <div className="space-y-3">
                    <Label className="text-base font-semibold">
                        {question.text}
                        {question.textTunisian && (
                            <span className="block text-sm text-muted-foreground font-normal mt-1">
                                {question.textTunisian}
                            </span>
                        )}
                    </Label>
                    <div className="flex items-center gap-2">
                        <Input
                            type="number"
                            min={question.min}
                            max={question.max}
                            value={value as number || ''}
                            onChange={(e) => onChange(e.target.value ? Number(e.target.value) : 0)}
                            disabled={disabled}
                            className="w-32"
                        />
                        {question.unit && (
                            <span className="text-sm text-muted-foreground">{question.unit}</span>
                        )}
                    </div>
                    {question.clinicalRelevance && (
                        <p className="text-xs text-muted-foreground italic">
                            ℹ️ {question.clinicalRelevance}
                        </p>
                    )}
                </div>
            );

        case 'duration':
        case 'frequency':
            return (
                <div className="space-y-3">
                    <Label className="text-base font-semibold">
                        {question.text}
                        {question.textTunisian && (
                            <span className="block text-sm text-muted-foreground font-normal mt-1">
                                {question.textTunisian}
                            </span>
                        )}
                    </Label>
                    <RadioGroup
                        value={value as string}
                        onValueChange={onChange}
                        disabled={disabled}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {question.options?.map((option) => (
                                <div key={option.id} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50">
                                    <RadioGroupItem value={option.id} id={`${question.id}-${option.id}`} />
                                    <Label htmlFor={`${question.id}-${option.id}`} className="flex-1 cursor-pointer">
                                        <div className="font-medium">{option.label}</div>
                                        {option.labelTunisian && (
                                            <div className="text-sm text-muted-foreground">{option.labelTunisian}</div>
                                        )}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </RadioGroup>
                </div>
            );

        default:
            return null;
    }
}
