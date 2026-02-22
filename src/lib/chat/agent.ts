import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage, AIMessage } from "@langchain/core/messages";
import { systemPrompt } from "./prompts";
import type { ChatMessage } from "@/types/chat";

const MAX_HISTORY = 20;

export function createChatModel() {
  return new ChatOpenAI({
    modelName: "google/gemini-2.0-flash-001",
    temperature: 0.3,
    streaming: true,
    openAIApiKey: process.env.OPENROUTER_API_KEY,
    configuration: {
      baseURL: "https://openrouter.ai/api/v1",
    },
  });
}

export function buildMessages(history: ChatMessage[]) {
  const trimmed = history.slice(-MAX_HISTORY);

  return [
    new SystemMessage(systemPrompt),
    ...trimmed.map((msg) =>
      msg.role === "user"
        ? new HumanMessage(msg.content)
        : new AIMessage(msg.content)
    ),
  ];
}
