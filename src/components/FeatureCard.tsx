import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="feature-card group bg-white rounded-lg sm:rounded-xl border border-slate-100 p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-[#73C7D4]/10 to-transparent rounded-bl-full -mr-8 sm:-mr-12 -mt-8 sm:-mt-12 transition-transform group-hover:scale-150"></div>

      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 text-[#003E77] group-hover:bg-[#003E77] group-hover:text-[#73C7D4] transition-colors relative z-10 shadow-sm">
        {icon}
      </div>
      <h4 className="font-light font-heading text-[#003E77] text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 relative z-10 group-hover:translate-x-1 transition-transform">{title}</h4>
      <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed relative z-10">{description}</p>
    </div>
  );
}

interface FeatureGridProps {
  children: React.ReactNode;
}

export function FeatureGrid({ children }: FeatureGridProps) {
  return (
    <div className="feature-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-4 sm:my-6">
      {children}
    </div>
  );
}
