import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { scrollToSection } from "@/hooks/use-scroll-to-section";

const LINE_ONE = ["הופכים", "תוכן"];
const LINE_TWO = ["למגנט", "של", "לקוחות"];

/** Each word racks into focus like footage — blur, slide, sharpen */
const wordVariants = {
  hidden: { opacity: 0, y: 26, filter: "blur(12px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
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
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-[1100px] mx-auto w-full relative z-10 text-center">
        {/* Subtle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground-muted font-body">
            הפקות וידאו יוצאות דופן
          </span>
        </motion.div>

        {/* Main Heading — words rack into focus like footage */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          {renderWords(LINE_ONE, 0, "text-foreground")}
          <br />
          {renderWords(LINE_TWO, LINE_ONE.length, "text-gradient-cosmic")}
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-12 font-body leading-relaxed">
          הפקות וידאו בסטנדרט הגבוה ביותר. משלב הרעיון ועד לעריכה המדויקת אני בונה לעסק שלכם את הבמה הוויזואלית שמגיעה לו.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="cosmic"
            size="lg"
            className="group"
            aria-label="קבע שיחת ייעוץ חינם"
            onClick={() => scrollToSection("contact")}>
            קבע שיחת ייעוץ חינם
          </Button>
          <Button
            variant="cosmicOutline"
            size="lg"
            aria-label="צפו בעבודות שלנו"
            onClick={() => scrollToSection("portfolio")}>
            צפו בעבודות שלנו
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-foreground-muted/30 flex justify-center pt-2">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
