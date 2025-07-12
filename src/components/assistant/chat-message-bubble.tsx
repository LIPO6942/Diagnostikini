/**
 * @fileoverview Component for rendering a single chat message bubble.
 */
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/lib/types";

export const ChatMessageBubble = ({ message }: { message: ChatMessage }) => {
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
