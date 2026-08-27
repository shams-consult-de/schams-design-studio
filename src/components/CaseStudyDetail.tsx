import { CaseStudy } from "../data/caseStudies";
import { Language } from "../lib/i18n";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  language: Language;
  onBack: () => void;
  onBookConsultation: () => void;
}

export function CaseStudyDetail({
  caseStudy,
  language,
  onBack,
  onBookConsultation,
}: CaseStudyDetailProps) {
  const isDe = language === "de";

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Back Navigation & Google Link */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{isDe ? "Zurück zur Übersicht" : "Back to Overview"}</span>
          </button>

          <a
            href={caseStudy.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-xs font-bold text-zinc-900 transition-colors"
          >
            <span className="text-[#DC2626]">★★★★★ 5.0</span>
            <span>{isDe ? "Original auf Google ansehen" : "View Original on Google"}</span>
            <span className="text-zinc-400">↗</span>
          </a>
        </div>

        {/* Top Referral Quote Banner on Every Case Study Page */}
        <div className="bg-[#111111] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-zinc-800">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DC2626] block">
              {isDe ? "VERTRAUEN & WEITEREMPFEHLUNG" : "TRUST & REFERRALS"}
            </span>
            <p className="font-sans text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
              {isDe
                ? "„Wir sind stolz darauf, dass der Großteil unserer Aufträge aus Weiterempfehlungen entsteht.“"
                : "“We're proud that most of our work comes from referrals.”"}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <img
              src="/images/team/shams-majeed-main-image.png"
              alt="Dipl.-Ing. Majeed Shams"
              className="h-11 w-11 rounded-full object-cover object-top border border-[#DC2626]"
            />
            <div className="text-left">
              <span className="text-xs font-bold text-white block leading-tight">
                Dipl.-Ing. Majeed Shams
              </span>
              <span className="text-[10px] text-zinc-400 block font-light">
                {isDe ? "Architekt · Stadtplaner · Inhaber" : "Architect · Urban Planner · Founder"}
              </span>
            </div>
          </div>
        </div>

        {/* Header Block of Case Study */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {caseStudy.badges[language].map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-800"
              >
                <span className="text-[#DC2626]">✓</span>
                <span>{badge}</span>
              </span>
            ))}
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            {caseStudy.projectTitle[language]}
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
            {caseStudy.subtitle[language]}
          </p>

          {/* Quick Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs">
            <div>
              <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                {isDe ? "Rezensent / Auftraggeber" : "Reviewer / Client"}
              </span>
              <strong className="text-zinc-900 block font-semibold mt-0.5">
                {caseStudy.reviewerName} {caseStudy.reviewerBadge && `(${caseStudy.reviewerBadge})`}
              </strong>
            </div>

            <div>
              <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                {isDe ? "Leistungsbereich" : "Service Area"}
              </span>
              <span className="text-zinc-900 block font-medium mt-0.5">
                {caseStudy.projectType[language]}
              </span>
            </div>

            {caseStudy.legalBasis && (
              <div>
                <span className="text-zinc-400 uppercase tracking-wider block text-[10px] font-bold">
                  {isDe ? "Rechtsgrundlage" : "Legal Basis"}
                </span>
                <span className="text-zinc-900 block font-medium mt-0.5">
                  {caseStudy.legalBasis}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Authentic Google Review Card */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-10 border border-zinc-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white text-sm border border-zinc-700">
                {caseStudy.reviewerName.charAt(0)}
              </div>
              <div>
                <strong className="text-white text-sm block font-bold">
                  {caseStudy.reviewerName}
                </strong>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="text-[#DC2626] font-bold">★★★★★</span>
                  {caseStudy.reviewerBadge && <span>• {caseStudy.reviewerBadge}</span>}
                </div>
              </div>
            </div>

            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
              Google Verified Review
            </span>
          </div>

          <blockquote className="font-sans text-base sm:text-lg text-zinc-100 font-light leading-relaxed italic border-l-2 border-[#DC2626] pl-5">
            „{caseStudy.reviewText}“
          </blockquote>

          {/* Owner Response from Dipl.-Ing. Majeed Shams */}
          {caseStudy.ownerResponse && (
            <div className="bg-[#1a1b1f] p-5 rounded-xl border border-zinc-800 space-y-2 mt-4">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
                <span>
                  {isDe
                    ? "Antwort des Gründers"
                    : "Response from Founder"}
                </span>
              </div>
              <p className="text-xs text-zinc-300 font-light leading-relaxed">
                {caseStudy.ownerResponse}
              </p>
            </div>
          )}
        </div>

        {/* Factual Narrative: Challenge, Solution & Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* 1. Challenge */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
              01. {isDe ? "Ausgangslage" : "The Challenge"}
            </span>
            <h3 className="font-sans text-base font-bold text-zinc-900">
              {isDe ? "Die Problemstellung" : "The Problem"}
            </h3>
            <p className="text-xs text-zinc-600 font-light leading-relaxed">
              {caseStudy.challenge[language]}
            </p>
          </div>

          {/* 2. Solution */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
              02. {isDe ? "Lösungsweg" : "The Solution"}
            </span>
            <h3 className="font-sans text-base font-bold text-zinc-900">
              {isDe ? "Architektur & Baurecht" : "Approach Taken"}
            </h3>
            <p className="text-xs text-zinc-600 font-light leading-relaxed">
              {caseStudy.solution[language]}
            </p>
          </div>

          {/* 3. Outcome */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block">
              03. {isDe ? "Ergebnis" : "The Outcome"}
            </span>
            <h3 className="font-sans text-base font-bold text-zinc-900">
              {isDe ? "Behördlicher Erfolg" : "Approved Result"}
            </h3>
            <p className="text-xs text-zinc-600 font-light leading-relaxed">
              {caseStudy.outcome[language]}
            </p>
          </div>
        </div>

        {/* Consultation Call to Action */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-12 text-center space-y-5 shadow-2xl">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
            {isDe
              ? "Haben Sie ein ähnliches Bau- oder Genehmigungsvorhaben?"
              : "Do You Have a Similar Planning or Permitting Project?"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
            {isDe
              ? "Lassen Sie Ihr Vorhaben unverbindlich baurechtlich und architektonisch von unserem Büroinhaber prüfen."
              : "Have your project evaluated from a regulatory and architectural standpoint by our founder & principal architect."}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={onBookConsultation}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              {isDe ? "Erstgespräch vereinbaren →" : "Book Consultation →"}
            </button>
            <button
              type="button"
              onClick={onBack}
              className="bg-transparent border border-zinc-600 hover:border-white text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              {isDe ? "Zur Übersicht" : "Back to Overview"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
