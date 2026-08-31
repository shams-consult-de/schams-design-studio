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

let isInitialized = false;

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
  if (typeof window === "undefined" || isInitialized) return;

  // Unset GA disable flag
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;

  // Prepare dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true,
  });

  // Inject Google Tag Manager script
  const existingScript = document.getElementById("google-analytics-script");
  if (!existingScript) {
    const script = document.createElement("script");
    script.id = "google-analytics-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  isInitialized = true;
}

export function disableGA4(): void {
  if (typeof window === "undefined") return;
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
}

export function setConsent(consent: CookieConsent): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  } catch {
    // LocalStorage quota or access issue
  }

  if (consent === "all") {
    initGA4();
  } else {
    disableGA4();
  }

  window.dispatchEvent(new CustomEvent("shams_consent_changed", { detail: consent }));
}

export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("shams_open_cookie_settings"));
}

export function trackPageView(path: string, title?: string): void {
  if (typeof window === "undefined" || getConsent() !== "all") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  }
}
