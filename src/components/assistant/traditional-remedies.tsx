'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Info, XCircle } from "lucide-react";
import type { TraditionalRemedy } from "@/lib/types";

interface TraditionalRemediesProps {
  remedies: TraditionalRemedy[];
  className?: string;
}

export function TraditionalRemedies({ remedies, className }: TraditionalRemediesProps) {
  if (!remedies || remedies.length === 0) {
    return null;
  }

  const statusIcons = {
    approved: { icon: CheckCircle2, className: 'text-green-500' },
    not_recommended: { icon: XCircle, className: 'text-red-500' },
    neutral: { icon: Info, className: 'text-blue-500' }
  };

  return (
    <div className={className}>
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span className="text-amber-600">🧪</span> Remèdes Traditionnels
      </h3>
      
      <div className="grid gap-4 md:grid-cols-2">
        {remedies.map((remedy, index) => {
          const StatusIcon = statusIcons[remedy.status].icon;
          
          return (
            <Card key={index} className="border-l-4 border-amber-500">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{remedy.remedyName}</CardTitle>
                  <StatusIcon className={`${statusIcons[remedy.status].className} h-5 w-5`} />
                </div>
                <Badge 
                  variant="outline" 
                  className={`mt-1 w-fit ${
                    remedy.status === 'approved' ? 'bg-green-50 text-green-700 border-green-200' :
                    remedy.status === 'not_recommended' ? 'bg-red-50 text-red-700 border-red-200' :
                    'bg-blue-50 text-blue-700 border-blue-200'
                  }`}
                >
                  {remedy.status === 'approved' ? 'Recommandé' : 
                   remedy.status === 'not_recommended' ? 'Déconseillé' : 'Informatif'}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">Description</h4>
                  <p className="text-sm">{remedy.description}</p>
                </div>

                {remedy.benefits && remedy.benefits.length > 0 && (
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Bénéfices</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {remedy.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">Préparation</h4>
                  <p className="text-sm whitespace-pre-line">{remedy.preparation}</p>
                </div>

                {remedy.precautions && remedy.precautions.length > 0 && (
                  <div className="bg-amber-50 p-3 rounded-md border border-amber-100">
                    <h4 className="font-medium text-sm text-amber-800 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      Précautions
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-amber-700 mt-1">
                      {remedy.precautions.map((precaution, i) => (
                        <li key={i}>{precaution}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="text-xs text-muted-foreground italic">
                  <p className="font-medium">Note :</p>
                  <p>{remedy.justification}</p>
                  {remedy.scientificEvidence && (
                    <p className="mt-1">
                      <span className="font-medium">Sources :</span> {remedy.scientificEvidence}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
