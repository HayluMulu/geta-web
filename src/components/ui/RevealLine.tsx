import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealLineProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Clip-path reveal — text unmasks upward like a wipe transition. */
const RevealLine = ({ children, className, delay = 0 }: RevealLineProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        initial={reduceMotion ? { opacity: 0 } : { y: "110%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealLine;
