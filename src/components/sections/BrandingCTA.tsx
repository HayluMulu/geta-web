import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";

const BrandingCTA = () => {
  return (
    <>
      {/* Part 1 – Text Section */}
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
            className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto space-y-4"
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
        </div>
      </section>

      {/* Part 2 – Consultation Form */}
      <section className="relative py-20" dir="rtl">
        <div className="container max-w-xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8"
          >
            שיחת ייעוץ קצרה ללא עלות לבניית חבילת תוכן רילס
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-cosmic p-6 md:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BrandingCTA;
