import { projects } from "./portfolio.data";

export const CLOUD_NAME = "dxpibmie3";

export const CARD_WIDTH = 280;
export const GAP = 20;
export const STEP = CARD_WIDTH + GAP;

// The animation translates by exactly one full set width so the loop is seamless
export const SCROLL_SECONDS_PER_PROJECT = 3;
export const MARQUEE_DURATION = projects.length * SCROLL_SECONDS_PER_PROJECT; // seconds

