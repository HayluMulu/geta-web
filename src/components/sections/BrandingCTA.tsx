import { motion } from "framer-motion";
import CTABand from "@/components/shared/CTABand";

const BrandingCTA = () => {
  return (
    <section className="relative py-20" dir="rtl">
      <div className="container max-w-[1100px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8"
        >
          רוצה למתג את העסק שלך ברמה גבוהה יותר?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-primary text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-4"
        >
          <p>
            ואם אתה כבר פה הבנת שתוכן ברמה השבועית אתה חייב להעלות.
          </p>
          <p>
            נכון שאפשר לצלם סרטון מהטלפון ולערוך אותו בקאפקט או אפליקציה אחרת
            — ואין בעיה עם זה אם זאת הרמה שמתאימה לך.
          </p>
          <p>
            אבל אם החלטת למתג את העסק שלך מעל המתחרים וליצור סרטונים חלקים,
            איכותיים ומדויקים —
          </p>
          <p className="text-foreground font-semibold">
            כנראה שאנחנו הפתרון שחיפשת.
          </p>
        </motion.div>

        <div className="mt-12">
          <CTABand
            title="מוכנים לקחת את המיתוג צעד קדימה?"
            buttonLabel="השאירו פרטים ונחזור אליכם"
            location="branding_section"
            trustLine="ללא התחייבות · חוזרים אליך בהקדם"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandingCTA;
