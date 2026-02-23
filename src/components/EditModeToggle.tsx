"use client";

import { useEdit } from "@/contexts/EditContext";

export default function EditModeToggle() {
  const { isEditing, setIsEditing, isSaving, error } = useEdit();

  return (
    <div className="fixed bottom-6 left-6 z-50 print-hide flex items-center gap-2">
      <button
        onClick={() => setIsEditing(!isEditing)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 ${
          isEditing
            ? "bg-[#003E77] text-white"
            : "bg-white text-[#003E77] border border-slate-200"
        }`}
        title={isEditing ? "Vorschau" : "Bearbeiten"}
      >
        {isEditing ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        )}
      </button>
      {isSaving && (
        <div className="bg-white rounded-full shadow px-3 py-1.5 text-sm text-slate-500 flex items-center gap-2">
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Speichern...
        </div>
      )}
      {error && !isSaving && (
        <div className="bg-red-50 text-red-600 rounded-full shadow px-3 py-1.5 text-sm">
          {error}
        </div>
      )}
    </div>
  );
}
