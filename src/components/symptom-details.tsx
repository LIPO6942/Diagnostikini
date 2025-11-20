'use client';

import type { Symptom } from '@/lib/types';

interface SymptomDetailsProps {
  symptom: Symptom;
}

export function SymptomDetails({ symptom }: SymptomDetailsProps) {
  const getSeverityColor = (severity: number): string => {
    if (severity >= 7) return 'bg-red-100 text-red-800';
    if (severity >= 4) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  const formatCategory = (category: string): string => {
    return category.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-lg">{symptom.name}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-2 py-0.5 text-xs rounded-full ${getSeverityColor(symptom.severity)}`}>
              Sévérité: {symptom.severity}/10
            </span>
            <span className="text-xs text-muted-foreground">
              Depuis {symptom.duration}
            </span>
          </div>
        </div>
        <span className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700">
          {formatCategory(symptom.category)}
        </span>
      </div>

      <div className="mt-3 grid gap-2 text-sm">
        <div className="flex">
          <span className="text-muted-foreground w-24">Fréquence:</span>
          <span className="capitalize">{symptom.frequency}</span>
        </div>
        
        <div className="flex">
          <span className="text-muted-foreground w-24">Début:</span>
          <span>
            {symptom.onset === 'sudden' ? 'Soudain' : 
             symptom.onset === 'gradual' ? 'Progressif' : 'Inconnu'}
          </span>
        </div>

        {symptom.aggravatingFactors.length > 0 && (
          <div>
            <div className="text-muted-foreground text-sm mb-1">Facteurs aggravants:</div>
            <div className="flex flex-wrap gap-1">
              {symptom.aggravatingFactors.map((factor: string, i: number) => (
                <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-800 text-xs rounded-full">
                  {factor}
                </span>
              ))}
            </div>
          </div>
        )}

        {symptom.relievingFactors.length > 0 && (
          <div>
            <div className="text-muted-foreground text-sm mb-1">Facteurs soulageants:</div>
            <div className="flex flex-wrap gap-1">
              {symptom.relievingFactors.map((factor: string, i: number) => (
                <span key={i} className="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">
                  {factor}
                </span>
              ))}
            </div>
          </div>
        )}

        {symptom.associatedSymptoms.length > 0 && (
          <div>
            <div className="text-muted-foreground text-sm mb-1">Symptômes associés:</div>
            <div className="flex flex-wrap gap-1">
              {symptom.associatedSymptoms.map((symptom: string, i: number) => (
                <span key={i} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">
                  {symptom}
                </span>
              ))}
            </div>
          </div>
        )}

        {symptom.notes && (
          <div className="mt-2 p-2 bg-amber-50 text-amber-800 text-sm rounded">
            <span className="font-medium">Notes: </span>
            {symptom.notes}
          </div>
        )}
      </div>
    </div>
  );
}
