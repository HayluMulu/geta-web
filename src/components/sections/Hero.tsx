import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import ViewfinderFrame from "@/components/ui/ViewfinderFrame";
import { scrollToSection } from "@/hooks/use-scroll-to-section";

const LINE_ONE = ["הופכים", "תוכן"];
const LINE_TWO = ["למגנט", "של", "לקוחות"];

/** Entrance only — no blur filters (those force expensive paint on every word). */
const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.18 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const renderWords = (words: string[], offset: number, className: string) =>
    words.map((word, i) => (
      <motion.span
        key={word + i}
        custom={offset + i}
        variants={reduceMotion ? undefined : wordVariants}
        initial={reduceMotion ? undefined : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
        className={`inline-block ${className}`}
      >
        {word}
        {i < words.length - 1 && <span>&nbsp;</span>}
      </motion.span>
    ));

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-28 overflow-hidden">
      {/* Static ambient glow — no mouse tracking (blur + springs were starving the trail) */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[min(70vw,520px)] h-[min(70vw,520px)] rounded-full pointer-events-none opacity-35"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.28), hsl(var(--secondary) / 0.14), transparent 68%)",
        }}
      />

      <div className="relative w-full max-w-[1100px] mx-auto z-10">
        <div className="relative rounded-3xl border border-white/5 bg-background/30 px-5 py-14 md:px-16 md:py-20">
          <ViewfinderFrame live />

          <div className="absolute top-5 left-5 right-5 md:top-7 md:left-10 md:right-10 flex items-center justify-between pointer-events-none z-30">
            <span className="rec-badge" dir="ltr">
              <span className="scene-label-dot" style={{ width: 7, height: 7 }} />
              REC
            </span>
            <span
              className="hidden sm:inline font-display text-[10px] md:text-xs tracking-[0.28em] text-foreground-muted/70 uppercase"
              dir="ltr"
            >
              TAKE 01 · GETA SHOW
            </span>
          </div>

          <div className="relative z-10 text-center pt-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground-muted font-body">
                הפקות וידאו יוצאות דופן
              </span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05]">
              {renderWords(LINE_ONE, 0, "text-foreground")}
              <br />
              {renderWords(LINE_TWO, LINE_ONE.length, "text-gradient-cosmic")}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-12 font-body leading-relaxed"
            >
              הפקות וידאו בסטנדרט הגבוה ביותר. משלב הרעיון ועד לעריכה המדויקת אני
              בונה לעסק שלכם את הבמה הוויזואלית שמגיעה לו.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <MagneticButton
                variant="cosmic"
                size="lg"
                className="group h-14 px-10 text-base font-bold"
                aria-label="קבע שיחת ייעוץ חינם"
                onClick={() => scrollToSection("contact")}
              >
                קבע שיחת ייעוץ חינם
              </MagneticButton>
              <MagneticButton
                variant="cosmicOutline"
                size="lg"
                className="h-14 px-10"
                strength={0.22}
                aria-label="צפו בעבודות שלנו"
                onClick={() => scrollToSection("portfolio")}
              >
                צפו בעבודות שלנו
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-foreground-muted/60 font-display"
            dir="ltr"
          >
            SCRUB ↓
          </span>
          <motion.div
            animate={reduceMotion ? undefined : { scaleX: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-[2px] w-16 rounded-full origin-center"
            style={{ background: "var(--gradient-cosmic)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
