import { NextRequest } from "next/server";
import { createChatModel, buildMessages } from "@/lib/chat/agent";
import type { ChatMessage } from "@/types/chat";

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Messages required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const model = createChatModel();
    const langchainMessages = buildMessages(messages);

    const stream = await model.stream(langchainMessages);

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text =
              typeof chunk.content === "string"
                ? chunk.content
                : Array.isArray(chunk.content)
                  ? chunk.content
                      .filter(
                        (c): c is { type: "text"; text: string } =>
                          typeof c === "object" && c !== null && "text" in c
                      )
                      .map((c) => c.text)
                      .join("")
                  : "";
            if (text) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ token: text })}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          const errorMessage =
            err instanceof Error ? err.message : "Stream error";
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ error: errorMessage })}\n\n`
            )
          );
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
