import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import { scrollToSection } from "@/hooks/use-scroll-to-section";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="container relative z-10 text-center">
        {/* Subtle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground-muted font-body">
            הפקות וידאו יוצאות דופן
          </span>
        </motion.div>
        
        {/* Main Heading - Clear hierarchy */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">הופכים תוכן</span>
          <br />
          <span className="text-gradient-cosmic">למגנט של לקוחות</span>
        </motion.h1>
        
        {/* Subheading - Muted, supportive */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >הפקות וידאו בסטנדרט הגבוה ביותר. משלב הרעיון ועד לתוצאה הסופית – אנחנו דואגים שהסיפור שלכם יקבל את הבמה (והתוצאות) שמגיעות לו.
        </motion.p>
        
        {/* CTAs - Clear primary and secondary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="cosmic" size="lg" className="group" onClick={() => scrollToSection('portfolio')}>
            תראו מה עשינו
          </Button>
          <Button variant="cosmicOutline" size="lg" onClick={() => scrollToSection('contact')}>
            דברו איתנו
          </Button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-foreground-muted/30 flex justify-center pt-2"
          >
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
