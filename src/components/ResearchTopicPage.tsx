import { Language, Translations } from "../lib/i18n";
import { OpenThesisTopic, openThesesData } from "../lib/openTheses";
import { FrankfurtUasLogo } from "./FrankfurtUasLogo";
import { Icon } from "./icon";

interface ResearchTopicPageProps {
  topic: OpenThesisTopic;
  t: Translations["researchTopicPage"];
  language: Language;
  onBack: () => void;
  onNavigateTopic: (slug: string) => void;
}

export function ResearchTopicPage({
  topic,
  t,
  language,
  onBack,
  onNavigateTopic,
}: ResearchTopicPageProps) {
  const allTopics = openThesesData[language];
  const otherTopics = allTopics.filter((tItem) => tItem.id !== topic.id);

  const emailBody = `${t.emailGreeting}\n\n${t.emailBodyInterest} "${topic.title}" (${topic.number}).\n\n${t.emailBodyAttachment}\n\n${t.emailBodyMeeting}\n\n${t.emailClosing}\n`;

  const mailtoHref = `mailto:${topic.applicationEmail}?subject=${encodeURIComponent(
    topic.applicationSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ResearchProject",
        name: topic.title,
        headline: topic.subtitle,
        description: topic.teaser,
        url: `https://shams-consult.de${language === "en" ? `/en/research/${topic.slug}` : `/forschung/${topic.slug}`}`,
        funder: {
          "@type": "EducationalOrganization",
          name: "Frankfurt University of Applied Sciences",
          alternateName: "Frankfurt UAS",
          department: "Fachbereich 1: Architektur, Bauingenieurwesen, Geomatik",
        },
        provider: {
          "@type": "ProfessionalService",
          name: "Shams Consult — Architektur & Stadtplanung",
          url: "https://shams-consult.de",
          founder: {
            "@type": "Person",
            name: "Dipl.-Ing. (FH) Majeed Shams M.Eng.",
            jobTitle: "Architekt, Stadtplaner & Dozent",
          },
        },
        educationalCredentialAwarded: topic.degrees,
        about: topic.disciplines.map((d) => ({
          "@type": "Thing",
          name: d,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <article className="min-h-screen bg-[#FFFFFF] text-zinc-900 pt-28 pb-28 md:pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Navigation */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#DC2626] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{t.backToHub}</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              {t.departmentLabel}
            </span>
            <FrankfurtUasLogo className="h-6 w-auto" variant="dark" />
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-[#DC2626] text-white text-xs font-extrabold uppercase tracking-wider">
              {topic.number}
            </span>
            <span className="px-3 py-1 rounded-md bg-zinc-100 text-zinc-800 text-xs font-mono font-medium">
              {topic.degrees}
            </span>
            {topic.disciplines.map((d) => (
              <span
                key={d}
                className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs font-mono"
              >
                {d}
              </span>
            ))}
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.15]">
            {topic.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            {topic.subtitle}
          </p>

          <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-700 text-sm leading-relaxed">
            <span className="font-bold text-zinc-950 block mb-1">
              {t.overviewLabel}
            </span>
            {topic.teaser}
          </div>
        </div>

        {/* Real Case Study Banner */}
        <section className="p-6 rounded-2xl bg-zinc-950 text-white border border-zinc-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#DC2626]">
            <span>🏗️</span>
            <span>{t.caseStudyBadge}</span>
          </div>
          <h2 className="font-sans text-lg sm:text-xl font-bold text-white">
            {topic.pilotProject.title}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            {topic.pilotProject.description}
          </p>
        </section>

        {/* Key Facts / Statistics Bar */}
        <section className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block">
            {t.factsHeading}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {topic.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs space-y-1"
              >
                <div className="font-sans text-xl sm:text-2xl font-extrabold text-[#DC2626]">
                  {stat.value}
                </div>
                <div className="text-[11px] text-zinc-600 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem Statement */}
        <section className="space-y-4">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2">
            <span className="w-2 h-6 bg-[#DC2626] rounded-full inline-block" />
            <span>{t.problemHeading}</span>
          </h2>
          <div className="space-y-3 text-sm text-zinc-700 leading-relaxed font-light">
            {topic.problemStatement.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Objectives */}
        <section className="space-y-4">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2">
            <span className="w-2 h-6 bg-[#DC2626] rounded-full inline-block" />
            <span>{t.objectivesHeading}</span>
          </h2>
          <div className="space-y-2.5">
            {topic.objectives.map((obj, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-zinc-950 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="text-sm text-zinc-800 leading-snug font-normal">{obj}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Research Questions */}
        <section className="space-y-4">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2">
            <span className="w-2 h-6 bg-[#DC2626] rounded-full inline-block" />
            <span>{t.researchQuestionsHeading}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.researchQuestions.map((q, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#DC2626]">
                    0{i + 1} · {q.title}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  {q.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Framework & Supervision */}
        <section className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              {t.frameworkBadge}
            </span>
            <h3 className="font-sans text-lg font-bold text-zinc-950">
              {t.frameworkHeading}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {topic.framework.map((f, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-700 flex items-start gap-2.5"
              >
                <span className="text-zinc-400 font-mono">▪</span>
                <span className="leading-snug">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="space-y-2 border-t border-zinc-200 pt-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 block">
            {t.sourcesHeading}
          </span>
          <ul className="space-y-1 text-xs text-zinc-500 font-light list-disc list-inside">
            {topic.sources.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>

        {/* Student FAQ & Objections Resolution */}
        <section className="space-y-4 pt-2">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              {t.faqBadge}
            </span>
            <h3 className="font-sans text-xl font-bold text-zinc-950">
              {t.faqHeading}
            </h3>
            <p className="text-xs text-zinc-600 font-light">
              {t.faqSubtitle}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {t.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-zinc-200 rounded-xl bg-zinc-50/60 open:bg-white transition-all duration-200"
              >
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none font-sans font-semibold text-xs sm:text-sm text-zinc-900 group-open:text-[#DC2626]">
                  <span>{faq.question}</span>
                  <span className="ml-3 shrink-0 text-zinc-400 group-open:rotate-180 transition-transform duration-200 text-xs">
                    ▼
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-1 text-xs text-zinc-600 leading-relaxed font-light border-t border-zinc-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Desktop CTA Banner */}
        <section className="p-8 rounded-2xl bg-zinc-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              {t.ctaBadge}
            </span>
            <h3 className="font-sans text-xl font-bold text-white">
              {t.ctaTitle}
            </h3>
            <p className="text-xs text-zinc-300 font-light max-w-lg">
              {t.ctaDescription}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <span className="text-[#DC2626]">✓</span>
                <span>{t.trustMentor}</span>
              </span>
              <span className="text-zinc-600">·</span>
              <span className="flex items-center gap-1">
                <span className="text-[#DC2626]">✓</span>
                <span>{t.trustData}</span>
              </span>
              <span className="text-zinc-600">·</span>
              <span className="flex items-center gap-1">
                <span className="text-[#DC2626]">✓</span>
                <span>{t.trustCredit}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={topic.pdfDownloadUrl}
              download={topic.pdfFileName}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-white/20"
            >
              <Icon name="file-pdf" className="text-sm" />
              <span>{t.pdfFlyerButton}</span>
            </a>

            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-md cursor-pointer"
            >
              <span>{t.applyEmailButton}</span>
              <span>→</span>
            </a>
          </div>
        </section>

        {/* Other Open Topics */}
        {otherTopics.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-zinc-200">
            <h3 className="font-sans text-base font-bold text-zinc-950">
              {t.otherTopicsHeading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherTopics.map((other) => (
                <div
                  key={other.id}
                  onClick={() => onNavigateTopic(other.slug)}
                  className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-[#DC2626] transition-all cursor-pointer group space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#DC2626]">
                      {other.number}
                    </span>
                    <span className="text-xs text-zinc-400 group-hover:text-[#DC2626] transition-colors">
                      →
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-bold text-zinc-900 group-hover:text-[#DC2626] transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-xs text-zinc-600 line-clamp-2 font-light">
                    {other.teaser}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Science-backed UX: Mobile Sticky Action Bar at the bottom (Thumb Zone) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-zinc-200 p-3 shadow-2xl flex items-center gap-2">
        <a
          href={topic.pdfDownloadUrl}
          download={topic.pdfFileName}
          className="flex-1 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-zinc-300 min-h-[48px]"
        >
          <Icon name="file-pdf" className="text-sm text-[#DC2626]" />
          <span>{t.pdfFlyerButton}</span>
        </a>

        <a
          href={mailtoHref}
          className="flex-[2] py-3 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm min-h-[48px]"
        >
          <span>{t.mobileApplyButton}</span>
          <span>→</span>
        </a>
      </div>
    </article>
  );
}
