interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, subtitle, children, className }: SectionProps & { className?: string }) {
  return (
    <section id={id} className={`mb-16 sm:mb-24 lg:mb-32 scroll-mt-20 sm:scroll-mt-32 relative ${className}`}>
      <div className="mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-heading text-[#003E77] mb-4 sm:mb-6 tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl font-light tracking-wide max-w-3xl leading-relaxed">{subtitle}</p>
        )}
        {/* Decorative Line - now a subtle gradient pill */}
        <div className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-[#003E77] to-[#73C7D4] mt-6 sm:mt-8 rounded-full opacity-80" />
      </div>
      <div className="prose prose-base sm:prose-lg lg:prose-xl prose-slate max-w-none prose-headings:font-heading prose-headings:font-light prose-headings:text-[#003E77] prose-a:text-[#004A99] prose-p:font-light prose-p:leading-loose">
        {children}
      </div>
    </section>
  );
}

interface SubSectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export function SubSection({ id, title, children }: SubSectionProps) {
  return (
    <div id={id} className="mb-10 sm:mb-14">
      <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold font-heading text-[#003E77] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
        <span className="w-1.5 h-6 sm:h-7 bg-gradient-to-b from-[#73C7D4] to-[#003E77]/50 rounded-full shrink-0" />
        {title}
      </h3>
      <div className="pl-4 sm:pl-6 border-l-2 border-slate-100/80">
        {children}
      </div>
    </div>
  );
}
