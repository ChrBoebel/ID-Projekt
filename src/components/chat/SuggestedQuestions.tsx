"use client";

interface SuggestedQuestionsProps {
  questions: string[];
  onSelect: (question: string) => void;
}

export default function SuggestedQuestions({
  questions,
  onSelect,
}: SuggestedQuestionsProps) {
  if (questions.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-end gap-2 mb-3 mt-1">
      {questions.map((question) => (
        <button
          key={question}
          onClick={() => onSelect(question)}
          className="text-xs leading-snug px-3 py-2 min-h-[44px] flex items-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-[#003E77] hover:text-[#003E77] transition-colors cursor-pointer text-left"
        >
          {question}
        </button>
      ))}
    </div>
  );
}
