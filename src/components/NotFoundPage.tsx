import { Translations } from "../lib/i18n";

interface NotFoundPageProps {
  t: Translations["notFound"];
  requestedPath: string;
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateAbout: () => void;
  onBookConsultation: () => void;
}

export function NotFoundPage({
  t,
  requestedPath,
  onNavigateHome,
  onNavigateProjects,
  onNavigateAbout,
  onBookConsultation,
}: NotFoundPageProps) {
  return (
    <article className="min-h-[80vh] flex items-center justify-center bg-white text-zinc-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200">
          <span className="h-2 w-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#DC2626]">
            {t.badge}
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight">
            {t.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 font-light max-w-lg mx-auto leading-relaxed">
            {t.message}
          </p>
        </div>

        {/* Display problematic path for transparent context */}
        {requestedPath && requestedPath !== "/" && (
          <div className="inline-block px-4 py-2 rounded-xl bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-600 max-w-full truncate">
            <span className="text-zinc-400 mr-2">{t.requestedPathLabel}</span>
            <span className="font-semibold text-zinc-800">{requestedPath}</span>
          </div>
        )}

        {/* Science-backed UX Recovery Grid (Fitts's Law large touch targets) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-lg mx-auto">
          <button
            type="button"
            onClick={onNavigateHome}
            className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>←</span>
            <span>{t.backHome}</span>
          </button>

          <button
            type="button"
            onClick={onNavigateProjects}
            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{t.exploreProjects}</span>
            <span>→</span>
          </button>

          <button
            type="button"
            onClick={onNavigateAbout}
            className="w-full bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            {t.aboutUs}
          </button>

          <button
            type="button"
            onClick={onBookConsultation}
            className="w-full bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-800 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            {t.contactUs}
          </button>
        </div>

        {/* Direct Contact Reassurance */}
        <div className="pt-6 border-t border-zinc-200 max-w-md mx-auto space-y-2 text-xs text-zinc-500">
          <p>{t.needAssistance}</p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono font-medium text-zinc-700">
            <a href="tel:+4960748056262" className="hover:text-[#DC2626] transition-colors">
              📞 +49 (0) 6074 8056262
            </a>
            <span>·</span>
            <a href="mailto:info@shams-consult.de" className="hover:text-[#DC2626] transition-colors">
              ✉️ info@shams-consult.de
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
