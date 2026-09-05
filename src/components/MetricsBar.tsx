import { Translations } from "../lib/i18n";
import { Icon } from "./icon";

interface MetricsBarProps {
  t: Translations["metrics"];
}

export function MetricsBar({ t }: MetricsBarProps) {
  const metrics = [
    {
      value: t.yearsExp.value,
      label: t.yearsExp.label,
      icon: "medal",
    },
    {
      value: t.completedProjects.value,
      label: t.completedProjects.label,
      icon: "city",
    },
    {
      value: t.largestProject.value,
      label: t.largestProject.label,
      icon: "euro-sign",
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
              <Icon name={m.icon} className="shrink-0 text-3xl text-[#DC2626]" />
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
