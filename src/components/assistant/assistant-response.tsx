/**
 * @fileoverview Component for displaying the assistant's response in the chat.
 */
"use client";

import { useState } from "react";
import type { Remedy } from "@/lib/types";
import { commonRemedies } from "@/lib/remedies";
import { Button } from "@/components/ui/button";
import { FilePlus2, HeartPulse } from "lucide-react";
import { RemedyCard } from "./remedy-card";

interface AssistantResponseProps {
  symptoms: string;
  diagnosisSuggestions: string[];
  clarifyingQuestions: string[];
  onSaveRecord: (symptoms: string, diagnosis: string) => void;
}

export const AssistantResponse = ({
  symptoms,
  diagnosisSuggestions,
  clarifyingQuestions,
  onSaveRecord,
}: AssistantResponseProps) => {
  const [remedies, setRemedies] = useState<Remedy[] | null>(null);

  const potentialDiagnosis = diagnosisSuggestions[0] || "Unknown";

  const handleShowRemedies = () => {
    const diagnosisText = potentialDiagnosis.toLowerCase();
    const found = commonRemedies.find(item => item.keywords.some(kw => diagnosisText.includes(kw)));
    setRemedies(found ? found.remedies : []);
  };


  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold mb-2">Potential Diagnosis</h3>
        <ul className="list-disc list-inside space-y-1">
          {diagnosisSuggestions.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-2">Clarifying Questions</h3>
        <ul className="list-disc list-inside space-y-1">
          {clarifyingQuestions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </div>

      {remedies && (
         <div>
            <h3 className="font-bold mb-2">Remedy Recommendations</h3>
            <div className="grid sm:grid-cols-2 gap-2">
                {remedies.length > 0 ? remedies.map((remedy) => (
                    <RemedyCard key={remedy.title} {...remedy} />
                )) : <p>No specific remedies to suggest. Please consult a doctor.</p>}
            </div>
        </div>
      )}

      <div className="flex gap-2 pt-2 border-t">
        <Button variant="outline" size="sm" onClick={handleShowRemedies} disabled={!!remedies}>
          <HeartPulse className="mr-2 h-4 w-4" />
          Show Remedies
        </Button>
        <Button variant="outline" size="sm" onClick={() => onSaveRecord(symptoms, potentialDiagnosis)}>
          <FilePlus2 className="mr-2 h-4 w-4" />
          Save to Record
        </Button>
      </div>
      <p className="text-xs text-muted-foreground pt-2">
        Disclaimer: This is not medical advice. Consult a healthcare professional for any health concerns.
      </p>
    </div>
  );
};
