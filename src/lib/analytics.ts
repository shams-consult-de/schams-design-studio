export type CookieConsent = "all" | "essential";

export const GA_MEASUREMENT_ID = "G-X68PRZMTEE";
const CONSENT_STORAGE_KEY = "shams_cookie_consent_v1";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

export function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === "all" || stored === "essential") {
      return stored;
    }
  } catch {
    // In case localStorage is blocked/restricted
    return null;
  }
  return null;
}

export function initGA4(): void {
  // Initialized directly in index.html via Google tag (gtag.js)
}

export function disableGA4(): void {
  // No-op
}

export function setConsent(consent: CookieConsent): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  } catch {
    // LocalStorage quota or access issue
  }

  window.dispatchEvent(new CustomEvent("shams_consent_changed", { detail: consent }));
}

export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("shams_open_cookie_settings"));
}

export function trackPageView(path: string, title?: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  }
}
