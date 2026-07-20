import { useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent, useReducedMotion } from "framer-motion";

/**
 * Video-editor style scrubber: a gradient progress bar at the very top
 * of the page plus a live timecode readout (HH:MM:SS:FF) driven by scroll,
 * as if the visitor is scrubbing through a film of the page.
 */
const TOTAL_SECONDS = 90; // full page scroll = 1.5 minutes of "footage"
const FPS = 24;

const formatTimecode = (progress: number) => {
  const totalFrames = Math.max(0, Math.round(progress * TOTAL_SECONDS * FPS));
  const frames = totalFrames % FPS;
  const seconds = Math.floor(totalFrames / FPS) % 60;
  const minutes = Math.floor(totalFrames / (FPS * 60)) % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `00:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
};

const ScrollTimecode = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const [timecode, setTimecode] = useState("00:00:00:00");

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setTimecode(formatTimecode(value));
  });

  return (
    <>
      {/* Scrub bar */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] z-[70] origin-left"
        style={{
          scaleX: reduceMotion ? scrollYProgress : scaleX,
          background: "var(--gradient-cosmic)",
          boxShadow: "0 0 12px hsl(var(--primary) / 0.6)",
        }}
      />

      {/* Timecode readout — desktop only */}
      <div
        aria-hidden="true"
        className="hidden md:flex fixed bottom-5 left-5 z-[70] items-center gap-2 pointer-events-none"
        dir="ltr"
      >
        <span className="timecode-chip flex items-center gap-2">
          <span className="scene-label-dot" style={{ width: 6, height: 6 }} />
          TC {timecode}
        </span>
      </div>
    </>
  );
};

export default ScrollTimecode;
