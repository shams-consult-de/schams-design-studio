import { useEffect } from "react";
import { Icon } from "./Icon";
import { CONTACT } from "../lib/contact";
import { Language } from "../lib/i18n";

export type LegalModalType = "impressum" | "datenschutz" | "barrierefreiheit" | "widerruf" | null;

interface LegalModalProps {
  type: LegalModalType;
  language?: Language;
  onClose: () => void;
}

export function LegalModal({ type, language = "de", onClose }: LegalModalProps) {
  const isDe = language === "de";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (type) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const modalTitles: Record<string, { de: string; en: string }> = {
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
      en: "Right of Withdrawal (Cancellation Policy)",
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white text-zinc-900 w-full max-w-3xl max-h-[88vh] rounded-3xl shadow-2xl border border-zinc-200 flex flex-col overflow-hidden animate-scaleUp"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
              {isDe ? "Rechtliche Hinweise & Transparenz" : "Legal Notice & Transparency"}
            </span>
            <h3 className="font-sans text-2xl font-bold text-zinc-900 mt-0.5">
              {type && modalTitles[type] ? modalTitles[type][language] : ""}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-10 w-10 rounded-full bg-zinc-200/80 hover:bg-zinc-300 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
            aria-label={isDe ? "Schließen" : "Close"}
          >
            <Icon name="xmark" className="text-lg" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-zinc-700 leading-relaxed font-light">
          {/* ============================================================= */}
          {/* 1. IMPRESSUM / LEGAL NOTICE                                   */}
          {/* ============================================================= */}
          {type === "impressum" && (
            <>
              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "Angaben gemäß § 5 TMG" : "Information pursuant to § 5 German Telemedia Act (TMG)"}
                </h4>
                <p>
                  <strong>{CONTACT.legalName}</strong><br />
                  {isDe ? "Inhaber" : "Managing Principal"}: {CONTACT.founder}<br />
                  {isDe ? "Freier Architekt & Stadtplaner" : "Independent Architect & Urban Planner"}<br />
                  Carl-von-Noorden-Platz 5<br />
                  60596 Frankfurt am Main<br />
                  {isDe ? "Deutschland" : "Germany"}
                </p>
                <p className="mt-2 text-zinc-600">
                  {isDe ? "Zweigstelle" : "Branch Office"}: Carl-Zeiss-Str. 43, 63322 Rödermark
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "Kontakt" : "Contact"}
                </h4>
                <p>
                  {isDe ? "Telefon Frankfurt" : "Phone Frankfurt"}: {CONTACT.phoneFrankfurt}<br />
                  {isDe ? "Telefon Rödermark" : "Phone Rödermark"}: {CONTACT.phoneRoedermark}<br />
                  E-Mail: <a href={`mailto:${CONTACT.email}`} className="text-[#DC2626] underline font-medium">{CONTACT.email}</a><br />
                  Web: <a href="https://shams-consult.de" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] underline font-medium">https://shams-consult.de</a>
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "Berufsbezeichnung & Kammerzugehörigkeit" : "Professional Title & Chamber Registration"}
                </h4>
                <p>
                  {isDe ? "Gesetzliche Berufsbezeichnung" : "Statutory Professional Title"}: <strong>{isDe ? "Freier Architekt und Stadtplaner" : "Independent Architect and Urban Planner"}</strong> ({isDe ? "verliehen in der Bundesrepublik Deutschland" : "awarded in the Federal Republic of Germany"}).<br />
                  {isDe ? "Zuständige Kammer" : "Competent Chamber"}: <strong>Architekten- und Stadtplanerkammer Hessen (AKH)</strong><br />
                  Bierstadter Straße 2, 65189 Wiesbaden<br />
                  <strong>{isDe ? "Mitgliedsnummer AKH" : "AKH Registration Number"}: 21886</strong>
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "Berufsrechtliche Regelungen" : "Professional Regulations"}
                </h4>
                <p>
                  {isDe
                    ? "Es gelten folgende berufsrechtliche Gesetze und Verordnungen:"
                    : "The practice is governed by the following German professional codes and laws:"}
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Hessisches Architekten- und Stadtplanergesetz (HASG)</li>
                  <li>Satzung der Architekten- und Stadtplanerkammer Hessen</li>
                  <li>Honorarordnung für Architekten und Ingenieure (HOAI)</li>
                </ul>
                <p className="mt-2 text-zinc-600">
                  {isDe ? "Die Regelungen sind einsehbar unter:" : "The regulations can be inspected at:"}{" "}
                  <a href="https://www.akh.de" target="_blank" rel="noopener noreferrer" className="text-[#DC2626] underline font-medium">
                    www.akh.de
                  </a>
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "Berufshaftpflichtversicherung" : "Professional Indemnity Insurance"}
                </h4>
                <p>
                  {isDe
                    ? "Es besteht eine gesetzeskonforme Berufshaftpflichtversicherung für Personen-, Sach- und Vermögensschäden im gesamten Geltungsbereich der Bundesrepublik Deutschland."
                    : "A comprehensive statutory professional liability insurance policy covers personal injury, property damage, and financial losses throughout the Federal Republic of Germany."}
                </p>
              </div>
            </>
          )}

          {/* ============================================================= */}
          {/* 2. DATENSCHUTZ / PRIVACY POLICY                               */}
          {/* ============================================================= */}
          {type === "datenschutz" && (
            <>
              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "1. Datenschutz auf einen Blick" : "1. Privacy at a Glance"}
                </h4>
                <p>
                  {isDe
                    ? "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (EU-DSGVO) sowie dieser Datenschutzerklärung."
                    : "We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations (EU GDPR) and this Privacy Policy."}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "2. Verantwortliche Stelle" : "2. Data Controller"}
                </h4>
                <p>
                  <strong>{CONTACT.legalName}</strong><br />
                  {isDe ? "Inhaber" : "Managing Principal"}: {CONTACT.founder}<br />
                  Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main<br />
                  E-Mail: <a href={`mailto:${CONTACT.email}`} className="text-[#DC2626] underline font-medium">{CONTACT.email}</a>
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "3. Datenerfassung & Kontaktanfragen" : "3. Data Collection & Direct Inquiries"}
                </h4>
                <p>
                  {isDe
                    ? "Wenn Sie uns per E-Mail, WhatsApp oder über unsere Microsoft 365 Terminbuchung kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse, Telefonnummer, Vorhabendetails) zur Bearbeitung der Anfrage und für etwaige Folgefragen verarbeitet. Wir geben diese Daten niemals ohne Ihre ausdrückliche Einwilligung weiter."
                    : "When you contact us by email, WhatsApp, or via our Microsoft 365 calendar scheduling platform, your submitted information (name, email address, phone number, project details) is processed solely for scheduling and answering your inquiry. We never share your data with third parties without your explicit consent."}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "4. Hosting & Server-Log-Dateien" : "4. Hosting & Server Log Files"}
                </h4>
                <p>
                  {isDe
                    ? "Diese Website wird als performante Webpräsenz bei IONOS SE (Elgendorfer Str. 57, 56410 Montabaur) gehostet. Beim Aufruf der Seiten werden durch den Webserver technisch notwendige Server-Log-Files (Browsertyp, Betriebssystem, Referrer URL, Hostname, Uhrzeit, IP-Adresse) erhoben, um die Betriebssicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO)."
                    : "This website is hosted by IONOS SE (Elgendorfer Str. 57, 56410 Montabaur, Germany). When visiting our pages, the web server automatically collects technically necessary server log files (browser type, operating system, referrer URL, hostname, time of request, IP address) to guarantee operational security (Art. 6 para. 1 lit. f GDPR)."}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "5. Ihre gesetzlichen Betroffenenrechte" : "5. Your Statutory Rights"}
                </h4>
                <p>
                  {isDe
                    ? "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten (Art. 15-21 DSGVO)."
                    : "You have the right at any time to obtain free information about your stored personal data, its origin and recipients, and the purpose of data processing, as well as the right to rectification, restriction, or erasure of this data (Articles 15–21 GDPR)."}
                </p>
              </div>
            </>
          )}

          {/* ============================================================= */}
          {/* 3. BARRIEREFREIHEIT / ACCESSIBILITY                           */}
          {/* ============================================================= */}
          {type === "barrierefreiheit" && (
            <>
              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "Erklärung zur Barrierefreiheit" : "Accessibility Statement"}
                </h4>
                <p>
                  {isDe
                    ? "Shams Consult ist bestrebt, seinen Webauftritt im Einklang mit den Bestimmungen des Behindertengleichstellungsgesetzes (BGG) sowie der Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) zur Umsetzung der Richtlinie (EU) 2016/2102 barrierefrei zugänglich zu machen."
                    : "Shams Consult is dedicated to ensuring digital accessibility for people with disabilities, in compliance with the German Act on Equal Opportunities for Persons with Disabilities (BGG), BITV 2.0, and EU Directive 2016/2102."}
                </p>
                <p className="mt-2 text-zinc-600">
                  {isDe
                    ? "Diese Website wurde unter Berücksichtigung von semantischem HTML5, skalierbaren Schriftgrößen, kontrastreichen Farbverhältnissen (WCAG 2.1 AA) und barrierefreier Tastaturnavigation gestaltet."
                    : "This web platform was designed adhering to semantic HTML5 standards, responsive scalable typography, high-contrast color ratios (WCAG 2.1 AA standards), and seamless keyboard navigation."}
                </p>
              </div>
            </>
          )}

          {/* ============================================================= */}
          {/* 4. WIDERRUF / RIGHT OF WITHDRAWAL                             */}
          {/* ============================================================= */}
          {type === "widerruf" && (
            <>
              <div>
                <h4 className="font-bold text-zinc-900 text-base mb-1">
                  {isDe ? "Widerrufsbelehrung für Verbraucher" : "Statutory Right of Withdrawal for Consumers"}
                </h4>
                <p>
                  {isDe
                    ? "Als Verbraucher haben Sie das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses."
                    : "As a consumer, you have the right to withdraw from this contract within fourteen days without giving any reason. The withdrawal period is fourteen days from the date of contract conclusion."}
                </p>
                <p className="mt-2 text-zinc-600">
                  {isDe
                    ? `Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (${CONTACT.legalName}, Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main, E-Mail: ${CONTACT.email}) mittels einer eindeutigen Erklärung über Ihren Entschluss informieren.`
                    : `To exercise your right of withdrawal, you must notify us (${CONTACT.legalName}, Carl-von-Noorden-Platz 5, 60596 Frankfurt am Main, Germany, Email: ${CONTACT.email}) by means of a clear statement regarding your decision.`}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-100 border-t border-zinc-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            {isDe ? "Schließen" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
