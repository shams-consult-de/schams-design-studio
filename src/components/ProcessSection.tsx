import { Translations } from "../lib/i18n";

interface ProcessSectionProps {
  t: Translations["process"];
}

export function ProcessSection({ t }: ProcessSectionProps) {
  const icons = [
    (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20V14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19L19 12L22 15L15 22L12 19Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 13L11 6L4 13L11 20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L9 9" strokeLinecap="round" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12.5L11 15L15.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 18V14C4 9.58172 7.58172 6 12 6C16.4183 6 20 9.58172 20 14V18" strokeLinecap="round" />
        <path d="M2 18H22" strokeLinecap="round" />
        <path d="M10 6V4M14 6V4" strokeLinecap="round" />
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 22V4M4 4H18L15 9L18 14H4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  ];

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#0e0f11] text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Heading */}
          <div className="lg:col-span-4 space-y-3 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626] block">
              {t.badge}
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              {t.titlePart1} <br className="hidden sm:inline" />
            </h2>
          </div>

          {/* Right: Responsive 2-col (Mobile) -> 3-col (Tablet) -> 6-col (Desktop) Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-start">
            {t.steps.map((step, idx) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center space-y-2.5 p-2"
              >
                {/* Circular Step Badge */}
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#18191d] border border-white/20 shadow-xs flex items-center justify-center hover:border-[#DC2626] transition-all">
                  {icons[idx]}
                </div>

                {/* Step Number & Label */}
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 block leading-tight">
                    {step.num}
                  </span>
                  <span className="text-xs font-medium text-zinc-200 block mt-0.5 whitespace-normal">
                    {step.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
