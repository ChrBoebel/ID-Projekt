"use client";

import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && value.trim()) {
        onSend();
      }
    }
  };

  return (
    <div className="flex items-end gap-2 p-3 border-t border-slate-200 bg-white max-sm:pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Frage zur Anleitung stellen..."
        disabled={disabled}
        rows={1}
        className="flex-1 resize-none border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#003E77] focus:ring-1 focus:ring-[#003E77]/20 disabled:opacity-50 max-h-24"
      />
      <button
        onClick={onSend}
        disabled={disabled || !value.trim()}
        className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-[#003E77] text-white hover:bg-[#004A99] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
}
