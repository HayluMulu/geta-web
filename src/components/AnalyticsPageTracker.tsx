import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/**
 * Sends a GA4 page_view on every React Router location change,
 * including the initial load.
 */
const AnalyticsPageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const path = `${location.pathname}${location.search}${location.hash}`;
    trackPageView(path);
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default AnalyticsPageTracker;
