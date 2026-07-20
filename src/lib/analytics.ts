type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const isDev = import.meta.env.DEV;

export const initAnalytics = () => {
  if (isDev) {
    console.info("[analytics] GA4 dev mode enabled", {
      measurementId: GA_MEASUREMENT_ID || "not configured",
    });
    return;
  }

  if (!GA_MEASUREMENT_ID || window.gtag) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
};

export const trackEvent = (eventName: string, params: AnalyticsParams = {}) => {
  if (isDev) {
    console.info("[analytics:event]", eventName, params);
    return;
  }

  if (!GA_MEASUREMENT_ID || !window.gtag) return;

  window.gtag("event", eventName, params);
};
