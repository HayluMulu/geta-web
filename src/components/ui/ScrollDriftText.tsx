import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type ScrollDriftTextProps = {
  text: string;
  /** Drift direction multiplier — negative = opposite scroll */
  speed?: number;
  className?: string;
};

/**
 * Giant ghost typography that drifts against scroll —
 * like titles sliding on a timeline while you scrub.
 */
const ScrollDriftText = ({ text, speed = -0.35, className = "" }: ScrollDriftTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none select-none ${className}`}
    >
      <motion.p
        style={reduceMotion ? undefined : { x }}
        className="whitespace-nowrap font-display font-black text-[18vw] md:text-[12vw] leading-none tracking-tight text-outline-cosmic opacity-40"
        dir="ltr"
      >
        {text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}
      </motion.p>
    </div>
  );
};

export default ScrollDriftText;
