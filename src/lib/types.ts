import type { LucideIcon } from "lucide-react";
import { z } from "zod";

export const UserProfileSchema = z.object({
  age: z.union([z.number().min(0).max(120), z.literal('')]).optional().nullable(),
  sex: z.enum(["homme", "femme", "ne-specifie-pas"]).optional().nullable(),
  weight: z.union([z.number().min(0), z.literal('')]).optional().nullable(),
  medicalHistory: z.object({
    conditions: z.array(z.string()).optional(),
    other: z.string().optional(),
  }).optional().nullable(),
  allergies: z.object({
    items: z.array(z.string()).optional(),
    other: z.string().optional(),
  }).optional().nullable(),
  currentTreatments: z.object({
    medications: z.array(z.string()).optional(),
    other: z.string().optional(),
  }).optional().nullable(),
  additionalSymptoms: z.object({
    symptoms: z.array(z.string()).optional(),
    other: z.string().optional(),
  }).optional().nullable(),
});


export type UserProfile = z.infer<typeof UserProfileSchema>;

export type HealthDocument = {
  id: string; // Unique ID for localStorage key
  name: string;
  mimeType: string;
};

export type HealthRecord = {
  id: string; // Unique ID, also used for sorting (new Date().toISOString())
  date: string; // Deprecated, but kept for backward compatibility. Use ID for sorting.
  category: 'Consultation IA' | 'Bilan' | 'Ordonnance' | 'Radio' | 'Scanner' | 'IRM' | 'Échographie' | 'Autre';
  title: string;
  symptoms?: string;
  summary?: string;
  documents?: HealthDocument[];
  doctorName?: string;
  treatmentDate?: string; // ISO String
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
  descriptionTunisian?: string;
  children?: SymptomNode[];
};

export type AnalyzeSymptomsOutput = {
    diagnosisSuggestions: string[];
    clarifyingQuestions: string[];
    medicationSuggestions: string[];
    traditionalRemedies: TraditionalRemedy[];
}
