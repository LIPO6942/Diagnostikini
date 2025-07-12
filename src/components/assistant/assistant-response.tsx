/**
 * @fileoverview Component for displaying the assistant's response in the chat.
 */
"use client";

import { useState } from "react";
import type { Remedy } from "@/lib/types";
import { commonRemedies, baseRemedies } from "@/lib/remedies";
import { Button } from "@/components/ui/button";
import { FilePlus2, HeartPulse, Pill, Languages, LoaderCircle } from "lucide-react";
import { RemedyCard } from "./remedy-card";
import { translateText } from "@/ai/flows/translate-text";

interface AssistantResponseProps {
  symptoms: string;
  diagnosisSuggestions: string[];
  clarifyingQuestions: string[];
  medicationSuggestions: string[];
  onSaveRecord: (symptoms: string, diagnosis: string) => void;
}

export const AssistantResponse = ({
  symptoms,
  diagnosisSuggestions,
  clarifyingQuestions,
  medicationSuggestions,
  onSaveRecord,
}: AssistantResponseProps) => {
  const [remedies, setRemedies] = useState<Remedy[] | null>(null);
  const [translatedContent, setTranslatedContent] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);

  const potentialDiagnosis = diagnosisSuggestions[0] || "Inconnu";

  const handleShowRemedies = () => {
    const diagnosisText = potentialDiagnosis.toLowerCase();
    const found = commonRemedies.find(item => item.keywords.some(kw => diagnosisText.includes(kw)));
    setRemedies(found ? found.remedies : baseRemedies);
  };

  const handleTranslate = async () => {
      setIsTranslating(true);
      setTranslatedContent(null);
      const contentToTranslate = `
Diagnostic Potentiel:
- ${diagnosisSuggestions.join('\n- ')}

Questions de clarification:
- ${clarifyingQuestions.join('\n- ')}

Suggestions de médicaments:
- ${medicationSuggestions.join('\n- ')}
      `;

      try {
        const result = await translateText({
            textToTranslate: contentToTranslate,
            targetLanguage: "Tunisian Arabic"
        });
        setTranslatedContent(result.translatedText);
      } catch (error) {
        console.error("Translation failed", error);
        setTranslatedContent("La traduction a échoué. Veuillez réessayer.");
      } finally {
        setIsTranslating(false);
      }
  };


  return (
    <div className="space-y-4">
      {translatedContent ? (
         <div>
            <h3 className="font-bold mb-2">Traduction (Arabe Tunisien)</h3>
            <p className="whitespace-pre-line text-sm">{translatedContent}</p>
            <Button variant="link" size="sm" className="p-0 h-auto" onClick={() => setTranslatedContent(null)}>Afficher l'original</Button>
        </div>
      ) : (
        <>
            <div>
                <h3 className="font-bold mb-2">Diagnostic potentiel</h3>
                <ul className="list-disc list-inside space-y-1">
                {diagnosisSuggestions.map((d, i) => (
                    <li key={i}>{d}</li>
                ))}
                </ul>
            </div>
            <div>
                <h3 className="font-bold mb-2">Questions de clarification</h3>
                <ul className="list-disc list-inside space-y-1">
                {clarifyingQuestions.map((q, i) => (
                    <li key={i}>{q}</li>
                ))}
                </ul>
            </div>

            {medicationSuggestions && medicationSuggestions.length > 0 && (
                <div>
                    <h3 className="font-bold mb-2 flex items-center gap-2"><Pill className="h-4 w-4" /> Suggestions de médicaments</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {medicationSuggestions.map((med, i) => (
                            <li key={i}>{med}</li>
                        ))}
                    </ul>
                    <p className="text-xs text-muted-foreground/80 mt-1">
                        Note : Ceci n'est pas une ordonnance. L'avis d'un professionnel de santé est requis.
                    </p>
                </div>
            )}
       </>
      )}


      {remedies && (
         <div>
            <h3 className="font-bold mb-2">Recommandations de remèdes</h3>
            <div className="grid sm:grid-cols-2 gap-2">
                {remedies.length > 0 ? remedies.map((remedy) => (
                    <RemedyCard key={remedy.title} {...remedy} />
                )) : <p>Aucun remède spécifique à suggérer. Veuillez consulter un médecin.</p>}
            </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 pt-2 border-t">
        <Button variant="outline" size="sm" onClick={handleShowRemedies} disabled={!!remedies}>
          <HeartPulse className="mr-2 h-4 w-4" />
          Afficher les remèdes
        </Button>
        <Button variant="outline" size="sm" onClick={() => onSaveRecord(symptoms, potentialDiagnosis)}>
          <FilePlus2 className="mr-2 h-4 w-4" />
          Sauvegarder
        </Button>
        <Button variant="outline" size="sm" onClick={handleTranslate} disabled={isTranslating || !!translatedContent}>
            {isTranslating ? <LoaderCircle className="animate-spin mr-2 h-4 w-4"/> : <Languages className="mr-2 h-4 w-4" />}
            {isTranslating ? 'Traduction...' : 'Traduire en Tunisien'}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground pt-2">
        Avis de non-responsabilité : Ceci n'est pas un avis médical. Consultez un professionnel de la santé pour tout problème de santé.
      </p>
    </div>
  );
};
