import { config } from 'dotenv';
config();

import '@/ai/flows/record-consultation.ts';
import '@/ai/flows/analyze-symptoms.ts';
import '@/ai/flows/translate-text.ts';
import '@/ai/flows/analyze-document.ts';
