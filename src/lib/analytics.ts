type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Public GA4 Measurement ID (safe to ship to the client). */
const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || "G-YS07DJEEEC";

const isDev = import.meta.env.DEV;

const ensureGtag = () => {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }
};

/**
 * Loads the official Google tag (gtag.js) once and configures GA4.
 * Automatic page_view is disabled so React Router can own SPA navigation.
 */
export const initAnalytics = () => {
  if (!GA_MEASUREMENT_ID) return;

  if (isDev) {
    console.info("[analytics] GA4 ready (dev — events log to console only)", {
      measurementId: GA_MEASUREMENT_ID,
    });
    return;
  }

  if (document.getElementById("ga4-gtag")) return;

  ensureGtag();

  const script = document.createElement("script");
  script.id = "ga4-gtag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag!("js", new Date());
  window.gtag!("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
  });
};

/** Track a virtual page view (SPA route changes). */
export const trackPageView = (path: string, title?: string) => {
  const pagePath = path || "/";
  const pageTitle = title || document.title;

  if (isDev) {
    console.info("[analytics:page_view]", { page_path: pagePath, page_title: pageTitle });
    return;
  }

  if (!GA_MEASUREMENT_ID || !window.gtag) return;

  window.gtag("event", "page_view", {
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

  window.gtag("event", eventName, params);
};

export { GA_MEASUREMENT_ID };
