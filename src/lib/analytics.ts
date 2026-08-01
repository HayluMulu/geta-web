type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Public GA4 Measurement ID (also hard-coded in index.html for Netlify). */
const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || "G-YS07DJEEEC";

const isDev = import.meta.env.DEV;

/**
 * Ensures gtag exists. Prefer the snippet in index.html (production/Netlify).
 * Falls back to injecting the script if HTML tag is missing.
 */
export const initAnalytics = () => {
  if (!GA_MEASUREMENT_ID) return;

  if (isDev) {
    console.info("[analytics] GA4 ready (dev — events log to console only)", {
      measurementId: GA_MEASUREMENT_ID,
    });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }

  // HTML already loaded gtag — nothing else to do
  if (document.getElementById("ga4-gtag") || document.querySelector(`script[src*="gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
    return;
  }

  // Fallback inject (e.g. if index.html snippet was stripped)
  const script = document.createElement("script");
  script.id = "ga4-gtag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  // Fallback path: let gtag send the first page view itself
  window.gtag("config", GA_MEASUREMENT_ID);
};

/** Track a virtual page view (SPA route changes after first load). */
export const trackPageView = (path: string, title?: string) => {
  const pagePath = path || "/";
  const pageTitle = title || document.title;

  if (isDev) {
    console.info("[analytics:page_view]", { page_path: pagePath, page_title: pageTitle });
    return;
  }

  if (!GA_MEASUREMENT_ID || !window.gtag) return;

  window.gtag("event", "page_view", {
    send_to: GA_MEASUREMENT_ID,
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
  });
};

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (isDev) {
    console.info("[analytics:event]", eventName, params);
    return;
  }

  if (!GA_MEASUREMENT_ID || !window.gtag) return;

  window.gtag("event", eventName, {
    send_to: GA_MEASUREMENT_ID,
    ...params,
  });
};

const LAST_CTA_KEY = "geta_last_cta";

type LastCta = {
  cta_location: string;
  cta_label: string;
};

/** Remember the last CTA click in this tab (used when a lead form submits). */
export const rememberCta = (cta_location: string, cta_label: string) => {
  try {
    const payload: LastCta = { cta_location, cta_label };
    sessionStorage.setItem(LAST_CTA_KEY, JSON.stringify(payload));
  } catch {
    // private mode / blocked storage — attribution is best-effort
  }
};

export const getLastCta = (): LastCta | null => {
  try {
    const raw = sessionStorage.getItem(LAST_CTA_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as LastCta;
    if (!parsed?.cta_location) return null;
    return parsed;
  } catch {
    return null;
  }
};

/** CTA click + store attribution for later generate_lead. */
export const trackCtaClick = (cta_location: string, cta_label: string) => {
  rememberCta(cta_location, cta_label);
  trackEvent("cta_click", { cta_location, cta_label });
};

type ContactChannel = "whatsapp" | "instagram" | "email";

/** Outbound contact channel click (sticky WA, contact cards, footer). */
export const trackContactClick = (channel: ContactChannel, link_location: string) => {
  rememberCta(link_location, channel);
  trackEvent("contact_click", { channel, link_location });
  // Keep dedicated WhatsApp event for existing GA reports / conversions
  if (channel === "whatsapp") {
    trackEvent("whatsapp_click", { link_location });
  }
};

export { GA_MEASUREMENT_ID };
