import type { LucideIcon } from "lucide-react";
import { z } from "zod";

export const UserProfileSchema = z.object({
  age: z.union([z.number().min(0).max(120), z.literal('')]).optional().nullable(),
  sex: z.enum(["homme", "femme", "ne-specifie-pas"]).optional().nullable(),
  weight: z.union([z.number().min(0), z.literal('')]).optional().nullable(),
  medicalHistory: z.string().optional().nullable(),
  allergies: z.string().optional().nullable(),
  currentTreatments: z.string().optional().nullable(),
  additionalSymptoms: z.string().optional().nullable(),
});

export type UserProfile = z.infer<typeof UserProfileSchema>;

export type HealthRecord = {
  id: string;
  date: string;
  symptoms: string;
  diagnosis: string;
  summary: string;
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: React.ReactNode;
};

export type Remedy = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type DiagnosisRemedies = {
  keywords: string[];
  remedies: Remedy[];
};

export type TraditionalRemedy = {
  remedyName: string;
  status: 'approved' | 'not_recommended' | 'neutral';
  justification: string;
};

export type SymptomNode = {
  id: string;
  label: string;
  icon?: LucideIcon;
  description?: string;
  children?: SymptomNode[];
};

export type AnalyzeSymptomsOutput = {
    diagnosisSuggestions: string[];
    clarifyingQuestions: string[];
    medicationSuggestions: string[];
    traditionalRemedies: TraditionalRemedy[];
}
