import { useEffect, useState } from "react";

const STORAGE_KEY = "schams-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
      } catch {
        // ignore
      }
    };
    // Defer to idle time so we don't block initial rendering / LCP.
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    if (typeof w.requestIdleCallback === "function") w.requestIdleCallback(check);
    else setTimeout(check, 800);
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-md border border-border bg-brand-white p-5 shadow-lg md:inset-x-auto md:right-6 md:bottom-6 md:left-auto"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-md text-sm leading-relaxed text-brand-black/80">
          Diese Website verwendet ausschließlich technisch notwendige Cookies. Es
          werden keine Daten an Dritte weitergegeben.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="rounded-sm border border-border px-4 py-2 text-xs font-medium uppercase tracking-widest hover:bg-concrete"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-sm bg-brand-black px-4 py-2 text-xs font-medium uppercase tracking-widest text-brand-white hover:bg-brand-accent"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
