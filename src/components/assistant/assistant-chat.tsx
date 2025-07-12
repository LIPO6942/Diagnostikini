"use client";

import { analyzeSymptoms } from "@/ai/flows/analyze-symptoms";
import { recordConsultation } from "@/ai/flows/record-consultation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { commonRemedies } from "@/lib/remedies";
import type { ChatMessage, HealthRecord, Remedy } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Bot,
  CircleCheck,
  FilePlus2,
  HeartPulse,
  LoaderCircle,
  Send,
  Stethoscope,
  User,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { RemedyCard } from "./remedy-card";

export default function AssistantChat() {
  const { toast } = useToast();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [symptoms, setSymptoms] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSaveRecord = async (symptoms: string, diagnosis: string) => {
    try {
      const { output } = await recordConsultation({
        symptoms: symptoms,
        differentialDiagnosis: diagnosis,
        remedyRecommendations: "User was shown standard remedies for the potential condition.",
      });

      if (output) {
        const newRecord: HealthRecord = {
          id: output.recordId || new Date().toISOString(),
          date: new Date().toLocaleDateString(),
          symptoms: symptoms,
          diagnosis: diagnosis,
          summary: output.summary,
        };

        const existingRecords = JSON.parse(
          localStorage.getItem("healthRecords") || "[]"
        );
        localStorage.setItem(
          "healthRecords",
          JSON.stringify([newRecord, ...existingRecords])
        );

        toast({
          title: "Health Record Saved",
          description: "Your consultation has been saved successfully.",
          action: <CircleCheck className="text-green-500" />,
        });
      }
    } catch (error) {
      console.error("Failed to save record:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not save health record.",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: <p>{symptoms}</p>,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const { output } = await analyzeSymptoms({
        symptomsDescription: symptoms,
      });

      if (output) {
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: (
            <AssistantResponse
              symptoms={symptoms}
              diagnosisSuggestions={output.diagnosisSuggestions}
              clarifyingQuestions={output.clarifyingQuestions}
              onSaveRecord={handleSaveRecord}
            />
          ),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error("No output from AI");
      }
    } catch (error) {
      console.error("Error analyzing symptoms:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: <p>Sorry, I encountered an error. Please try again.</p>,
      };
      setMessages((prev) => [...prev, errorMessage]);
      toast({
        variant: "destructive",
        title: "AI Error",
        description:
          "The symptom analysis failed. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
      setSymptoms("");
      setTimeout(() => {
        scrollAreaRef.current?.scrollTo({
          top: scrollAreaRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)]">
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full" ref={scrollAreaRef}>
          <div className="p-4 space-y-6">
            {messages.length === 0 && (
              <WelcomeMessage />
            )}
            {messages.map((message) => (
              <ChatMessageBubble key={message.id} message={message} />
            ))}
            {isLoading && (
              <ChatMessageBubble
                message={{
                  id: "loading",
                  role: "assistant",
                  content: (
                    <div className="flex items-center gap-2">
                      <LoaderCircle className="animate-spin w-5 h-5" />
                      <span>Analyzing symptoms...</span>
                    </div>
                  ),
                }}
              />
            )}
          </div>
        </ScrollArea>
      </div>

      <div className="p-4 bg-background border-t">
        <Card>
          <CardContent className="p-2">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Describe your symptoms... (e.g., 'I have a headache and feel tired.')"
                className="flex-1 resize-none border-0 shadow-none focus-visible:ring-0"
                rows={2}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !symptoms.trim()}>
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const ChatMessageBubble = ({ message }: { message: ChatMessage }) => {
  const isAssistant = message.role === "assistant";
  return (
    <div
      className={cn(
        "flex items-start gap-3",
        !isAssistant && "justify-end"
      )}
    >
      {isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
          <Bot className="w-5 h-5" />
        </div>
      )}
      <div
        className={cn(
          "max-w-md rounded-xl px-4 py-3",
          isAssistant
            ? "bg-card border"
            : "bg-primary text-primary-foreground"
        )}
      >
        {message.content}
      </div>
      {!isAssistant && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
          <User className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};


const AssistantResponse = ({
  symptoms,
  diagnosisSuggestions,
  clarifyingQuestions,
  onSaveRecord,
}: {
  symptoms: string;
  diagnosisSuggestions: string[];
  clarifyingQuestions: string[];
  onSaveRecord: (symptoms: string, diagnosis: string) => void;
}) => {
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

const WelcomeMessage = () => (
    <Card className="p-6 text-center shadow-none border-none bg-transparent">
        <div className="mb-4 inline-flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary">
            <Stethoscope className="size-8" />
        </div>
        <h2 className="text-2xl font-headline font-bold mb-2">Welcome to Diagnostikini</h2>
        <p className="text-muted-foreground">
            Your personal AI health assistant.
            <br />
            Describe your symptoms below to get started.
        </p>
    </Card>
)
