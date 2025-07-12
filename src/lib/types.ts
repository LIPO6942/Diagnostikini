import type { LucideIcon } from "lucide-react";

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

export type SymptomNode = {
  id: string;
  label: string;
  icon?: LucideIcon;
  description?: string;
  children?: SymptomNode[];
};
