'use client';

import { Badge } from "@/components/ui/badge";
import type { PreciseMedication } from "@/lib/types";

interface MedicationCardProps {
  medication: PreciseMedication;
}

export function MedicationCard({ medication }: MedicationCardProps) {
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'analgesic':
        return 'bg-blue-100 text-blue-800';
      case 'anti_inflammatory':
        return 'bg-purple-100 text-purple-800';
      case 'antibiotic':
        return 'bg-red-100 text-red-800';
      case 'antihistamine':
        return 'bg-green-100 text-green-800';
      case 'antipyretic':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'prescription':
        return { label: 'Sur ordonnance', color: 'bg-red-100 text-red-800' };
      case 'otc':
        return { label: 'Sans ordonnance', color: 'bg-green-100 text-green-800' };
      case 'natural':
        return { label: 'Naturel', color: 'bg-amber-100 text-amber-800' };
      default:
        return { label: 'Autre', color: 'bg-gray-100 text-gray-800' };
    }
  };

  const typeInfo = getTypeLabel(medication.type);

  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-lg">{medication.name}</h4>
          <p className="text-sm text-muted-foreground">{medication.genericName}</p>
        </div>
        <div className="flex gap-2">
          <Badge className={getCategoryColor(medication.category)}>
            {medication.category.replace('_', ' ')}
          </Badge>
          <Badge className={typeInfo.color}>
            {typeInfo.label}
          </Badge>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Posologie:</span>
          <span className="text-sm">
            {medication.dosage} - {medication.frequency} pendant {medication.duration}
          </span>
        </div>

        <p className="text-sm">{medication.description}</p>

        {medication.sideEffects.length > 0 && (
          <div>
            <div className="text-sm font-medium mt-2">Effets secondaires possibles:</div>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              {medication.sideEffects.map((effect, i) => (
                <li key={i}>{effect}</li>
              ))}
            </ul>
          </div>
        )}

        {medication.contraindications.length > 0 && (
          <div>
            <div className="text-sm font-medium mt-2 text-red-600">Contre-indications:</div>
            <ul className="list-disc pl-5 text-sm text-red-700">
              {medication.contraindications.map((contra, i) => (
                <li key={i}>{contra}</li>
              ))}
            </ul>
          </div>
        )}

        {medication.interactions.length > 0 && (
          <div>
            <div className="text-sm font-medium mt-2 text-amber-600">Interactions médicamenteuses:</div>
            <ul className="list-disc pl-5 text-sm text-amber-700">
              {medication.interactions.map((interaction, i) => (
                <li key={i}>{interaction}</li>
              ))}
            </ul>
          </div>
        )}

        {medication.notes && (
          <div className="mt-2 p-2 bg-blue-50 text-blue-800 text-sm rounded">
            <span className="font-medium">Note importante:</span> {medication.notes}
          </div>
        )}
      </div>
    </div>
  );
}
