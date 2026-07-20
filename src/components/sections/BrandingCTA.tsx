import { motion } from "framer-motion";
import CTABand from "@/components/shared/CTABand";
import ScrollDriftText from "@/components/ui/ScrollDriftText";
import RevealLine from "@/components/ui/RevealLine";

const BrandingCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden" dir="rtl">
      <ScrollDriftText text="BRAND · STORY · SHOW ·" speed={-0.4} />

      <div className="container max-w-[1100px] mx-auto px-6 text-center relative z-10">
        <RevealLine className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            רוצה למתג את העסק שלך ברמה גבוהה יותר?
          </h2>
        </RevealLine>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-muted-primary text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-4"
        >
          <p>ואם אתה כבר פה הבנת שתוכן ברמה השבועית אתה חייב להעלות.</p>
          <p>
            נכון שאפשר לצלם סרטון מהטלפון ולערוך אותו בקאפקט או אפליקציה אחרת —
            ואין בעיה עם זה אם זאת הרמה שמתאימה לך.
          </p>
          <p>
            אבל אם החלטת למתג את העסק שלך מעל המתחרים וליצור סרטונים חלקים,
            איכותיים ומדויקים —
          </p>
          <p className="text-foreground font-semibold text-gradient-cosmic inline-block">
            כנראה שאנחנו הפתרון שחיפשת.
          </p>
        </motion.div>

        <div className="mt-12">
          <CTABand
            title="מוכנים לקחת את המיתוג צעד קדימה?"
            buttonLabel="השאירו פרטים ונחזור אליכם"
            location="branding_section"
            trustLine="חוזרים אליך בהקדם"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandingCTA;
