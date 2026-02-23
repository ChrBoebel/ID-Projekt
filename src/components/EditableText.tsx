"use client";

import { useRef, useCallback, useEffect, createElement } from "react";
import { useEdit } from "@/contexts/EditContext";

interface EditableTextProps {
  id: string;
  defaultContent: string;
  as?: string;
  className?: string;
  html?: boolean;
}

export default function EditableText({
  id,
  defaultContent,
  as = "span",
  className = "",
  html = false,
}: EditableTextProps) {
  const { isEditing, getContent, saveContent } = useEdit();
  const ref = useRef<HTMLElement>(null);
  const content = getContent(id, defaultContent);

  const handleBlur = useCallback(() => {
    if (!ref.current) return;
    const newContent = html
      ? ref.current.innerHTML
      : ref.current.textContent || "";
    if (newContent !== content) {
      saveContent(id, newContent, defaultContent);
    }
  }, [id, content, defaultContent, html, saveContent]);

  useEffect(() => {
    if (!ref.current || !isEditing) return;
    if (html) {
      if (ref.current.innerHTML !== content) ref.current.innerHTML = content;
    } else {
      if (ref.current.textContent !== content) ref.current.textContent = content;
    }
  }, [content, html, isEditing]);

  if (!isEditing) {
    if (html) {
      return createElement(as, {
        className,
        dangerouslySetInnerHTML: { __html: content },
      });
    }
    return createElement(as, { className }, content);
  }

  const editClasses = `${className} outline-none border border-dashed border-transparent hover:border-[#73C7D4]/50 focus:border-[#003E77] focus:bg-[#003E77]/5 rounded px-0.5 transition-colors cursor-text`.trim();

  if (html) {
    return createElement(as, {
      ref,
      className: editClasses,
      contentEditable: true,
      suppressContentEditableWarning: true,
      onBlur: handleBlur,
      dangerouslySetInnerHTML: { __html: content },
    });
  }

  return createElement(
    as,
    {
      ref,
      className: editClasses,
      contentEditable: true,
      suppressContentEditableWarning: true,
      onBlur: handleBlur,
    },
    content
  );
}
