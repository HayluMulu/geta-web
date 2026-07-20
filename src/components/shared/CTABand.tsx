import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { scrollToSection } from "@/hooks/use-scroll-to-section";
import { trackEvent } from "@/lib/analytics";

type CTABandProps = {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  /** Identifies where on the page this CTA lives, for analytics */
  location: string;
  trustLine?: string;
};

const CTABand = ({ title, subtitle, buttonLabel, location, trustLine }: CTABandProps) => {
  const reduceMotion = useReducedMotion();

  const handleClick = () => {
    trackEvent("cta_click", { cta_location: location, cta_label: buttonLabel });
    scrollToSection("contact");
  };

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="aurora-ring max-w-2xl mx-auto"
    >
      <div className="aurora-ring-inner px-6 py-10 md:px-12 md:py-12 text-center">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-24 h-48 pointer-events-none"
          style={{ background: "var(--gradient-glow)" }}
        />

        <motion.h3
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3"
        >
          {title}
        </motion.h3>

        {subtitle && (
          <motion.p
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
            className="text-foreground-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col items-center gap-3"
        >
          <MagneticButton
            variant="cosmic"
            size="lg"
            className="group h-14 px-10 text-lg font-bold"
            onClick={handleClick}
            aria-label={buttonLabel}
          >
            {buttonLabel}
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          </MagneticButton>

          {trustLine && (
            <span className="text-sm text-foreground-muted/80">{trustLine}</span>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CTABand;
