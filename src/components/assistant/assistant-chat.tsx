/**
 * @fileoverview Main component for the AI assistant chat interface.
 */
"use client";

import { analyzeSymptoms } from "@/ai/flows/analyze-symptoms";
import { recordConsultation } from "@/ai/flows/record-consultation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { ChatMessage, HealthRecord } from "@/lib/types";
import {
  CircleCheck,
  LoaderCircle,
  Send,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { saveHealthRecord } from "@/services/health-record-service";
import { WelcomeMessage } from "./welcome-message";
import { ChatMessageBubble } from "./chat-message-bubble";
import { AssistantResponse } from "./assistant-response";


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

        saveHealthRecord(newRecord);

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
