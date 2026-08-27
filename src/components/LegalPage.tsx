import { CONTACT } from "../lib/contact";
import { Language } from "../lib/i18n";
import { Icon } from "./Icon";

export type LegalPageType = "impressum" | "datenschutz" | "barrierefreiheit" | "widerruf";

interface LegalPageProps {
  type: LegalPageType;
  language?: Language;
  onNavigateHome: () => void;
}

export function LegalPage({ type, language = "de", onNavigateHome }: LegalPageProps) {
  const isDe = language === "de";

  const titles: Record<LegalPageType, { de: string; en: string }> = {
    impressum: {
      de: "Impressum",
      en: "Legal Notice (Impressum)",
    },
    datenschutz: {
      de: "Datenschutzerklärung",
      en: "Privacy Policy",
    },
    barrierefreiheit: {
      de: "Erklärung zur Barrierefreiheit",
      en: "Accessibility Statement",
    },
    widerruf: {
      de: "Widerrufsbelehrung für Verbraucher",
      en: "Statutory Right of Withdrawal",
    },
  };

  return (
    <article className="min-h-screen bg-[#0C0D0E] text-white pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-400">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateHome();
            }}
            className="hover:text-white transition-colors"
          >
            {isDe ? "Startseite" : "Home"}
          </a>
          <span>/</span>
          <span className="text-zinc-200 font-medium">
            {titles[type][language]}
          </span>
        </nav>

        {/* Page Header */}
        <header className="space-y-3 border-b border-white/10 pb-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#DC2626]">
            <Icon name="shield-check" />
            <span>{isDe ? "Rechtliche Hinweise & Transparenz" : "Legal Notice & Transparency"}</span>
          </span>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {titles[type][language]}
          </h1>

          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl">
            {isDe
              ? "Rechtliche Angaben, berufsrechtliche Grundlagen und Datenschutzhinweise von Architekturbüro Shams Consult."
              : "Official statutory disclosures, professional chamber details, and data privacy policies of Shams Consult."}
          </p>
        </header>

        {/* Main Content Body */}
        <div className="bg-[#151619] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
          {/* ============================================================= */}
          {/* 1. IMPRESSUM / LEGAL NOTICE                                   */}
          {/* ============================================================= */}
          {type === "impressum" && (
            <div className="space-y-8">
              <section className="space-y-2">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "Angaben gemäß § 5 TMG" : "Information pursuant to § 5 German Telemedia Act (TMG)"}
                </h2>
                <p>
                  <strong className="text-white font-semibold">{CONTACT.legalName}</strong><br />
                  {isDe ? "Inhaber" : "Managing Principal"}: {CONTACT.founder}<br />
                  {isDe ? "Freier Architekt & Stadtplaner" : "Independent Architect & Urban Planner"}<br />
                  Carl-von-Noorden-Platz 5<br />
                  60596 Frankfurt am Main<br />
                  {isDe ? "Deutschland" : "Germany"}
                </p>
                <p className="text-zinc-400 pt-1">
                  {isDe ? "Zweigstelle" : "Branch Office"}: Carl-Zeiss-Str. 43, 63322 Rödermark
                </p>
              </section>

              <section className="space-y-2 border-t border-white/10 pt-6">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "Kontakt" : "Contact"}
                </h2>
                <p>
                  {isDe ? "Telefon Frankfurt" : "Phone Frankfurt"}: {CONTACT.phoneFrankfurt}<br />
                  {isDe ? "Telefon Rödermark" : "Phone Rödermark"}: {CONTACT.phoneRoedermark}<br />
                  E-Mail: <a href={`mailto:${CONTACT.email}`} className="text-[#DC2626] underline font-medium">{CONTACT.email}</a><br />
                  Web: <a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] underline font-medium">https://shams-consult.de</a>
                </p>
              </section>

              <section className="space-y-2 border-t border-white/10 pt-6">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "Berufsbezeichnung & Kammerzugehörigkeit" : "Professional Title & Chamber Registration"}
                </h2>
                <p>
                  {isDe ? "Gesetzliche Berufsbezeichnung" : "Statutory Professional Title"}: <strong className="text-white font-semibold">{isDe ? "Freier Architekt und Stadtplaner" : "Independent Architect and Urban Planner"}</strong> ({isDe ? "verliehen in der Bundesrepublik Deutschland" : "awarded in the Federal Republic of Germany"}).<br />
                  {isDe ? "Zuständige Aufsichtsbehörde / Kammer" : "Competent Supervisory Authority / Chamber"}: <strong className="text-white font-semibold">Architekten- und Stadtplanerkammer Hessen (AKH)</strong><br />
                  Bierstadter Straße 2, 65189 Wiesbaden<br />
                  <strong className="text-white font-semibold">{isDe ? "Mitgliedsnummer AKH" : "AKH Registration Number"}: 21886</strong>
                </p>
              </section>

              <section className="space-y-2 border-t border-white/10 pt-6">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "Berufsrechtliche Regelungen" : "Professional Regulations"}
                </h2>
                <p>
                  {isDe
                    ? "Es gelten folgende berufsrechtliche Gesetze und Satzungsregelungen:"
                    : "The practice is governed by the following German professional codes and laws:"}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-300">
                  <li>Hessisches Architekten- und Stadtplanergesetz (HASG)</li>
                  <li>Satzung der Architekten- und Stadtplanerkammer Hessen</li>
                  <li>Honorarordnung für Architekten und Ingenieure (HOAI)</li>
                </ul>
                <p className="pt-1 text-zinc-400">
                  {isDe ? "Die Regelungen sind einsehbar unter:" : "The regulations can be inspected at:"}{" "}
                  <a href="https://www.akh.de" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] underline font-medium">
                    www.akh.de
                  </a>
                </p>
              </section>

              <section className="space-y-2 border-t border-white/10 pt-6">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "Berufshaftpflichtversicherung" : "Professional Indemnity Insurance"}
                </h2>
                <p>
                  {isDe
                    ? "Es besteht eine gesetzeskonforme Berufshaftpflichtversicherung für Personen-, Sach- und Vermögensschäden im gesamten Geltungsbereich der Bundesrepublik Deutschland."
                    : "A comprehensive statutory professional liability insurance policy covers personal injury, property damage, and financial losses throughout the Federal Republic of Germany."}
                </p>
              </section>
            </div>
          )}

          {/* ============================================================= */}
          {/* 2. DATENSCHUTZ / PRIVACY POLICY                               */}
          {/* ============================================================= */}
          {type === "datenschutz" && (
            <div className="space-y-8">
              <section className="space-y-2">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "1. Datenschutz auf einen Blick" : "1. Privacy at a Glance"}
                </h2>
                <p>
                  {isDe
                    ? "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (EU-DSGVO) sowie dieser Datenschutzerklärung."
                    : "We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations (EU GDPR) and this Privacy Policy."}
                </p>
              </section>

              <section className="space-y-2 border-t border-white/10 pt-6">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "2. Verantwortliche Stelle" : "2. Data Controller"}
                </h2>
                <p>
                  <strong className="text-white font-semibold">{CONTACT.legalName}</strong><br />
                  {isDe ? "Inhaber" : "Managing Principal"}: {CONTACT.founder}<br />
                  Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main<br />
                  E-Mail: <a href={`mailto:${CONTACT.email}`} className="text-[#DC2626] underline font-medium">{CONTACT.email}</a>
                </p>
              </section>

              <section className="space-y-2 border-t border-white/10 pt-6">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "3. Datenerfassung & Kontaktanfragen" : "3. Data Collection & Direct Inquiries"}
                </h2>
                <p>
                  {isDe
                    ? "Wenn Sie uns per E-Mail, WhatsApp oder über unsere Microsoft 365 Terminbuchung kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse, Telefonnummer, Vorhabendetails) zur Bearbeitung der Anfrage und für etwaige Folgefragen verarbeitet. Wir geben diese Daten niemals ohne Ihre ausdrückliche Einwilligung weiter."
                    : "When you contact us by email, WhatsApp, or via our Microsoft 365 calendar scheduling platform, your submitted information (name, email address, phone number, project details) is processed solely for scheduling and answering your inquiry. We never share your data with third parties without your explicit consent."}
                </p>
              </section>

              <section className="space-y-2 border-t border-white/10 pt-6">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "4. Hosting & Server-Log-Dateien" : "4. Hosting & Server Log Files"}
                </h2>
                <p>
                  {isDe
                    ? "Diese Website wird als performante Webpräsenz bei IONOS SE (Elgendorfer Str. 57, 56410 Montabaur) gehostet. Beim Aufruf der Seiten werden durch den Webserver technisch notwendige Server-Log-Files (Browsertyp, Betriebssystem, Referrer URL, Hostname, Uhrzeit, IP-Adresse) erhoben, um die Betriebssicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO)."
                    : "This website is hosted by IONOS SE (Elgendorfer Str. 57, 56410 Montabaur, Germany). When visiting our pages, the web server automatically collects technically necessary server log files (browser type, operating system, referrer URL, hostname, time of request, IP address) to guarantee operational security (Art. 6 para. 1 lit. f GDPR)."}
                </p>
              </section>

              <section className="space-y-2 border-t border-white/10 pt-6">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "5. Ihre gesetzlichen Betroffenenrechte" : "5. Your Statutory Rights"}
                </h2>
                <p>
                  {isDe
                    ? "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten (Art. 15-21 DSGVO)."
                    : "You have the right at any time to obtain free information about your stored personal data, its origin and recipients, and the purpose of data processing, as well as the right to rectification, restriction, or erasure of this data (Articles 15–21 GDPR)."}
                </p>
              </section>
            </div>
          )}

          {/* ============================================================= */}
          {/* 3. BARRIEREFREIHEIT / ACCESSIBILITY                           */}
          {/* ============================================================= */}
          {type === "barrierefreiheit" && (
            <div className="space-y-8">
              <section className="space-y-2">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "Erklärung zur Barrierefreiheit" : "Accessibility Statement"}
                </h2>
                <p>
                  {isDe
                    ? "Shams Consult ist bestrebt, seinen Webauftritt im Einklang mit den Bestimmungen des Behindertengleichstellungsgesetzes (BGG) sowie der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) zur Umsetzung der Richtlinie (EU) 2016/2102 barrierefrei zugänglich zu machen."
                    : "Shams Consult is dedicated to ensuring digital accessibility for people with disabilities, in compliance with the German Act on Equal Opportunities for Persons with Disabilities (BGG), BITV 2.0, and EU Directive 2016/2102."}
                </p>
                <p className="text-zinc-400 pt-2">
                  {isDe
                    ? "Diese Website wurde unter Berücksichtigung von semantischem HTML5, skalierbaren Schriftgrößen, kontrastreichen Farbverhältnissen (WCAG 2.1 AA) und barrierefreier Tastaturnavigation gestaltet."
                    : "This web platform was designed adhering to semantic HTML5 standards, responsive scalable typography, high-contrast color ratios (WCAG 2.1 AA standards), and seamless keyboard navigation."}
                </p>
              </section>
            </div>
          )}

          {/* ============================================================= */}
          {/* 4. WIDERRUF / RIGHT OF WITHDRAWAL                             */}
          {/* ============================================================= */}
          {type === "widerruf" && (
            <div className="space-y-8">
              <section className="space-y-2">
                <h2 className="font-bold text-white text-base sm:text-lg">
                  {isDe ? "Widerrufsbelehrung für Verbraucher" : "Statutory Right of Withdrawal for Consumers"}
                </h2>
                <p>
                  {isDe
                    ? "Als Verbraucher haben Sie das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses."
                    : "As a consumer, you have the right to withdraw from this contract within fourteen days without giving any reason. The withdrawal period is fourteen days from the date of contract conclusion."}
                </p>
                <p className="text-zinc-400 pt-2">
                  {isDe
                    ? `Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (${CONTACT.legalName}, Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main, E-Mail: ${CONTACT.email}) mittels einer eindeutigen Erklärung über Ihren Entschluss informieren.`
                    : `To exercise your right of withdrawal, you must notify us (${CONTACT.legalName}, Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main, Germany, Email: ${CONTACT.email}) by means of a clear statement regarding your decision.`}
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Back to Home Action Button */}
        <div className="pt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            <span>←</span>
            <span>{isDe ? "Zurück zur Startseite" : "Back to Home"}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
