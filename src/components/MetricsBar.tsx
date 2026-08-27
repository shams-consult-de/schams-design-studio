import { Translations } from "../lib/i18n";

interface MetricsBarProps {
  t: Translations["metrics"];
}

export function MetricsBar({ t }: MetricsBarProps) {
  const metrics = [
    {
      value: t.yearsExp.value,
      label: t.yearsExp.label,
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 sm:h-8 sm:w-8 text-[#DC2626]" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="12" r="8" />
          <path d="M12 18L10 28L16 25L22 28L20 18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      value: t.completedProjects.value,
      label: t.completedProjects.label,
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 sm:h-8 sm:w-8 text-[#DC2626]" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="8" width="12" height="20" rx="1" />
          <rect x="18" y="4" width="8" height="24" rx="1" />
          <path d="M9 13H11M9 18H11M9 23H11M21 9H23M21 14H23M21 19H23M21 24H23" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      value: t.largestProject.value,
      label: t.largestProject.label,
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 sm:h-8 sm:w-8 text-[#DC2626]" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="16" r="11" />
          <path d="M21 11.5C19.8 10.5 17.5 10 15.5 10.5C12.5 11.5 11 14 11 16C11 18 12.5 20.5 15.5 21.5C17.5 22 19.8 21.5 21 20.5" strokeLinecap="round" />
          <path d="M9.5 14.5H18.5M9.5 17.5H18.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#0f1012] text-white py-8 sm:py-10 lg:py-12 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-0 sm:divide-x sm:divide-white/10">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 sm:gap-4 px-2 sm:px-6 lg:px-8 first:pl-0 last:pr-0 justify-start sm:justify-center"
            >
              <div className="shrink-0">{m.icon}</div>
              <div>
                <p className="font-sans text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-none">
                  {m.value}
                </p>
                <p className="text-[11px] sm:text-xs text-zinc-400 font-light mt-1 sm:mt-1.5 leading-snug">
                  {m.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
