"use client";

import { Fragment } from "react";
import SectionLink from "./SectionLink";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  onNavigate?: () => void;
}

/**
 * Parse content and replace [[sectionId:Text]] with SectionLink components.
 */
function parseContent(content: string) {
  const regex = /\[\[([a-zA-Z0-9_-]+):([^\]]+)\]\]/g;
  const parts: (string | { sectionId: string; text: string })[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    parts.push({ sectionId: match[1], text: match[2] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts;
}

export default function ChatMessage({ role, content, onNavigate }: ChatMessageProps) {
  const isUser = role === "user";
  const parsed = parseContent(content);

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-[#003E77] text-white rounded-br-md"
            : "bg-slate-100 text-slate-800 rounded-bl-md"
        }`}
      >
        {parsed.map((part, i) =>
          typeof part === "string" ? (
            <Fragment key={i}>
              {part.split("\n").map((line, j, arr) => (
                <Fragment key={j}>
                  {line}
                  {j < arr.length - 1 && <br />}
                </Fragment>
              ))}
            </Fragment>
          ) : (
            <span key={i} className="block my-1">
              <SectionLink sectionId={part.sectionId} text={part.text} onNavigate={onNavigate} />
            </span>
          )
        )}
      </div>
    </div>
  );
}
