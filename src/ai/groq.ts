import Groq from 'groq-sdk';

if (!process.env.GROQ_API_KEY) {
  // Soft warn; callers should handle missing key error when invoking
  console.warn('[groq] GROQ_API_KEY is not set. Set it in your env to enable AI features.');
}

export const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export type GroqChatModel =
  | 'llama-3.3-70b-versatile'
  | 'llama-3.3-70b-specdec'
  | 'llama-3.1-8b-instant'
  | 'llama-3.2-3b-preview'
  | 'mixtral-8x7b-32768'
  | 'gemma2-9b-it';

export const DEFAULT_GROQ_MODEL: GroqChatModel = 'llama-3.1-8b-instant';

export async function generateJson<T>(
  params: {
    system: string;
    user: string;
    schemaName: string;
    schema: Record<string, unknown>;
    model?: GroqChatModel;
    temperature?: number;
    maxTokens?: number;
    jsonStrict?: boolean;
  }
): Promise<T> {
  const {
    system,
    user,
    schemaName,
    schema,
    model = DEFAULT_GROQ_MODEL,
    temperature = 0.2,
    maxTokens = 2048,
    jsonStrict = true,
  } = params;

  const response = await groq.chat.completions.create({
    model,
    temperature,
    max_tokens: maxTokens,
    messages: [
      { role: 'system', content: `${system}\n\nYou MUST return valid JSON for the schema "${schemaName}".` },
      { role: 'user', content: user },
    ],
    response_format: jsonStrict
      ? { type: 'json_object' }
      : undefined,
  });

  const content = response.choices?.[0]?.message?.content ?? '';
  try {
    return JSON.parse(content) as T;
  } catch (e) {
    // Try to salvage JSON if model wrapped in code fences
    const match = content.match(/```(?:json)?\n([\s\S]*?)\n```/);
    if (match) {
      return JSON.parse(match[1]) as T;
    }
    throw new Error(`Invalid JSON from model: ${e instanceof Error ? e.message : String(e)}\nContent: ${content}`);
  }
}
