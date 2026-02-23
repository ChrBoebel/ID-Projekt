"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

interface EditContextType {
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  overrides: Record<string, string>;
  isSaving: boolean;
  error: string | null;
  getContent: (id: string, defaultContent: string) => string;
  saveContent: (
    id: string,
    content: string,
    defaultContent: string
  ) => Promise<void>;
}

const EditContext = createContext<EditContextType | null>(null);

export function useEdit() {
  const ctx = useContext(EditContext);
  if (!ctx) throw new Error("useEdit must be used within EditProvider");
  return ctx;
}

export function EditProvider({ children }: { children: ReactNode }) {
  const [isEditing, setIsEditing] = useState(false);
  const [overrides, setOverrides] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => setOverrides(data))
      .catch(() => {});
  }, []);

  const getContent = useCallback(
    (id: string, defaultContent: string) => {
      return overrides[id] ?? defaultContent;
    },
    [overrides]
  );

  const saveContent = useCallback(
    async (id: string, content: string, defaultContent: string) => {
      setIsSaving(true);
      setError(null);
      try {
        const newOverrides = { ...overrides };
        if (content === defaultContent) {
          delete newOverrides[id];
        } else {
          newOverrides[id] = content;
        }
        const res = await fetch("/api/content", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newOverrides),
        });
        if (!res.ok) throw new Error("Save failed");
        setOverrides(newOverrides);
      } catch {
        setError("Speichern fehlgeschlagen");
      } finally {
        setIsSaving(false);
      }
    },
    [overrides]
  );

  return (
    <EditContext.Provider
      value={{
        isEditing,
        setIsEditing,
        overrides,
        isSaving,
        error,
        getContent,
        saveContent,
      }}
    >
      {children}
    </EditContext.Provider>
  );
}
