import { Translations } from "../lib/i18n";
import { Icon } from "./icon";

interface ProcessSectionProps {
  t: Translations["process"];
}

export function ProcessSection({ t }: ProcessSectionProps) {
  const icons = ["comment-dots", "chart-column", "ruler-combined", "circle-check", "helmet-safety", "flag-checkered"];

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
                  <Icon name={icons[idx] ?? "circle-check"} className="text-xl text-white" />
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
