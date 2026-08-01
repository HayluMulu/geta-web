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

export { GA_MEASUREMENT_ID };
