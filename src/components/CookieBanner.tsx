import { useState, useEffect } from "react";
import { Icon } from "./icon";
import {
  getConsent,
  setConsent,
  CookieConsent,
} from "../lib/analytics";
import { Language } from "../lib/i18n";

interface CookieBannerProps {
  language?: Language;
  onOpenPrivacy?: () => void;
  onOpenImpressum?: () => void;
}

export function CookieBanner({
  language = "de",
  onOpenPrivacy,
  onOpenImpressum,
}: CookieBannerProps) {
  const isDe = language === "de";
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    const existingConsent = getConsent();
    if (!existingConsent) {
      // Small timeout for smooth entrance animation after page mount
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setAnalyticsEnabled(existingConsent === "all");
    }
  }, []);

  useEffect(() => {
    const handleOpenSettings = () => {
      const current = getConsent();
      setAnalyticsEnabled(current === "all");
      setShowDetails(true);
      setIsVisible(true);
    };

    const handleConsentChanged = (e: Event) => {
      const customEvent = e as CustomEvent<CookieConsent>;
      setAnalyticsEnabled(customEvent.detail === "all");
    };

    window.addEventListener("shams_open_cookie_settings", handleOpenSettings);
    window.addEventListener("shams_consent_changed", handleConsentChanged);
    return () => {
      window.removeEventListener("shams_open_cookie_settings", handleOpenSettings);
      window.removeEventListener("shams_consent_changed", handleConsentChanged);
    };
  }, []);

  const handleAcceptAll = () => {
    setConsent("all");
    setIsVisible(false);
    setShowDetails(false);
  };

  const handleAcceptEssential = () => {
    setConsent("essential");
    setIsVisible(false);
    setShowDetails(false);
  };

  const handleSaveCustom = () => {
    setConsent(analyticsEnabled ? "all" : "essential");
    setIsVisible(false);
    setShowDetails(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label={isDe ? "Cookie-Einwilligung" : "Cookie Consent"}
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4 md:p-6 pointer-events-none flex justify-center animate-fadeIn"
    >
      <div className="pointer-events-auto w-full max-w-2xl bg-[#121316]/95 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl text-white p-5 sm:p-6 space-y-4">
        {/* Banner Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-[#DC2626]/20 border border-[#DC2626]/40 flex items-center justify-center text-[#DC2626] shrink-0">
              <Icon name="shield-check" className="text-sm" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#DC2626]">
                {isDe ? "Datenschutz & Transparenz" : "Privacy & Transparency"}
              </span>
              <h3 className="font-sans font-bold text-base sm:text-lg text-white">
                {isDe ? "Cookie- und Datenschutzeinstellungen" : "Cookie & Privacy Settings"}
              </h3>
            </div>
          </div>

          {showDetails && (
            <button
              type="button"
              onClick={() => {
                const current = getConsent();
                if (current) {
                  setIsVisible(false);
                  setShowDetails(false);
                } else {
                  setShowDetails(false);
                }
              }}
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label={isDe ? "Schließen" : "Close"}
            >
              <Icon name="xmark" className="text-sm" />
            </button>
          )}
        </div>

        {/* Banner Description */}
        <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
          {isDe ? (
            <>
              Wir setzen technisch essenzielle Cookies ein, um die Funktionsfähigkeit dieser Website sicherzustellen. Mit Ihrer Einwilligung nutzen wir zusätzlich <strong>Google Analytics 4</strong> (mit IP-Anonymisierung), um Nutzungsstatistiken zu erheben und unsere Architekturpräsentation kontinuierlich zu optimieren. Sie können Ihre Einwilligung jederzeit widerrufen.
            </>
          ) : (
            <>
              We use strictly necessary technical cookies to ensure this website functions securely. With your consent, we also use <strong>Google Analytics 4</strong> (with IP anonymization) to analyze site usage and improve our services. You can adjust or revoke your consent at any time.
            </>
          )}
        </p>

        {/* Detailed Options Drawer */}
        {showDetails && (
          <div className="space-y-3 pt-2 border-t border-white/10 text-xs">
            {/* Essential Item */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="space-y-0.5 pr-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">
                    {isDe ? "1. Technisch essenziell" : "1. Strictly Necessary"}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {isDe ? "Immer aktiv" : "Always active"}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-light leading-tight">
                  {isDe
                    ? "Erforderlich für Navigation, Sicherheitsfeatures und Speicherung Ihrer Präferenzen."
                    : "Required for core site operation, security, and consent preference storage."}
                </p>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled={true}
                className="accent-emerald-500 h-4 w-4 rounded cursor-not-allowed opacity-80"
                aria-label={isDe ? "Technisch essenziell (aktiv)" : "Strictly necessary (active)"}
              />
            </div>

            {/* Analytics Item */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="space-y-0.5 pr-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">
                    {isDe ? "2. Google Analytics 4 (Statistik & Analyse)" : "2. Google Analytics 4 (Analytics)"}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-light leading-tight">
                  {isDe
                    ? "Anonyme statistische Auswertung zur Verbesserung von Navigation, Ladezeiten und Inhalten (G-X68PRZMTEE)."
                    : "Anonymous analytics to optimize page navigation, load performance, and architectural portfolio discovery (G-X68PRZMTEE)."}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="sr-only peer"
                  aria-label="Google Analytics 4"
                />
                <div className="w-10 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#DC2626]"></div>
              </label>
            </div>
          </div>
        )}

        {/* Action Buttons (Fitts's Law & Mobile Thumb-Zone Friendly) */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-3 text-xs text-zinc-400 justify-center sm:justify-start">
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="text-zinc-300 hover:text-white underline decoration-zinc-500 hover:decoration-white transition-colors cursor-pointer py-1"
            >
              {showDetails
                ? (isDe ? "Weniger Details" : "Fewer details")
                : (isDe ? "Einstellungen anpassen" : "Customize settings")}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-zinc-300 hover:text-white underline decoration-zinc-500 hover:decoration-white transition-colors cursor-pointer py-1"
            >
              {isDe ? "Datenschutz" : "Privacy"}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenImpressum}
              className="text-zinc-300 hover:text-white underline decoration-zinc-500 hover:decoration-white transition-colors cursor-pointer py-1"
            >
              {isDe ? "Impressum" : "Imprint"}
            </button>
          </div>

          <div className="flex items-center gap-2">
            {showDetails ? (
              <>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white font-semibold text-xs border border-white/20 transition-all cursor-pointer text-center"
                >
                  {isDe ? "Auswahl speichern" : "Save selection"}
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] active:scale-95 text-white font-bold text-xs shadow-lg shadow-red-950/40 transition-all cursor-pointer text-center"
                >
                  {isDe ? "Alle akzeptieren" : "Accept all"}
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleAcceptEssential}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-zinc-200 hover:text-white font-semibold text-xs border border-white/15 transition-all cursor-pointer text-center"
                >
                  {isDe ? "Nur essenzielle" : "Essential only"}
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] active:scale-95 text-white font-bold text-xs shadow-lg shadow-red-950/40 transition-all cursor-pointer text-center"
                >
                  {isDe ? "Alle akzeptieren" : "Accept all"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
