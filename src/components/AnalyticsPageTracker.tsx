import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/**
 * Sends a GA4 page_view on React Router navigations.
 * Skips the first mount — index.html already sent that page view via gtag config.
 */
const AnalyticsPageTracker = () => {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    const path = `${location.pathname}${location.search}${location.hash}`;
    trackPageView(path);
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default AnalyticsPageTracker;
