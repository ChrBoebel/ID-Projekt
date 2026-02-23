interface Step {
  title?: React.ReactNode;
  content: React.ReactNode;
  substeps?: React.ReactNode[];
}

interface StepListProps {
  steps: Step[];
  result?: React.ReactNode;
}

export default function StepList({ steps, result }: StepListProps) {
  return (
    <div className="my-6 sm:my-8">
      <ol className="space-y-4 sm:space-y-6">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-3 sm:gap-5 group">
            <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#003E77] to-[#004A99] rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold font-heading text-sm sm:text-base shadow-lg shadow-[#003E77]/20 group-hover:scale-105 transition-transform">
              {index + 1}
            </div>
            <div className="flex-1 pt-0.5 sm:pt-1.5">
              {step.title && (
                <p className="font-semibold text-[#003E77] mb-1 sm:mb-2 font-heading text-base sm:text-lg">{step.title}</p>
              )}
              <div className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.content}</div>
              {step.substeps && step.substeps.length > 0 && (
                <ul className="mt-2 sm:mt-3 ml-1 space-y-1.5 sm:space-y-2 border-l-2 border-[#73C7D4]/30 pl-3 sm:pl-4">
                  {step.substeps.map((substep, subIndex) => (
                    <li
                      key={subIndex}
                      className="flex items-start gap-2 text-gray-500 text-xs sm:text-sm leading-relaxed"
                    >
                      <span className="text-[#73C7D4] mt-0.5 font-bold">→</span>
                      {substep}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>

      {result && (
        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-[#003E77]/5 to-[#73C7D4]/10 border border-[#73C7D4]/20 rounded-lg sm:rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-2 sm:gap-3 text-[#003E77] font-bold font-heading mb-2 text-sm sm:text-base">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#73C7D4]/20 rounded-md sm:rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#003E77]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            Ergebnis
          </div>
          <div className="text-gray-600 leading-relaxed ml-8 sm:ml-11 text-sm sm:text-base">{result}</div>
        </div>
      )}
    </div>
  );
}

interface ChecklistProps {
  items: React.ReactNode[];
  title?: React.ReactNode;
}

export function Checklist({ items, title }: ChecklistProps) {
  return (
    <div className="my-4 sm:my-6">
      {title && (
        <p className="font-semibold text-slate-700 mb-3 sm:mb-4 text-sm sm:text-base">{title}</p>
      )}
      <ul className="space-y-2 sm:space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 sm:gap-4 text-slate-600 leading-relaxed group text-sm sm:text-base">
            <span className="shrink-0 w-2 h-2 bg-[#003E77] rounded-full mt-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
