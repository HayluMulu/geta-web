import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";

const BrandingCTA = () => {
  return (
    <section className="relative py-20 px-6">
      {/* Part 1 – Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1100px] mx-auto text-center mb-20"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
          רוצה למתג את העסק שלך ברמה גבוהה יותר?
        </h2>
        <div className="text-foreground-muted text-lg md:text-xl leading-relaxed space-y-4">
          <p>
            ואם אתה כבר פה הבנת שתוכן ברמה השבועית אתה חייב להעלות.
          </p>
          <p>
            נכון שאפשר לצלם סרטון מהטלפון ולערוך אותו בקאפקט או אפליקציה אחרת — ואין בעיה עם זה אם זאת הרמה שמתאימה לך.
          </p>
          <p>
            אבל אם החלטת למתג את העסק שלך מעל המתחרים וליצור סרטונים חלקים, איכותיים ומדויקים —
          </p>
          <p className="text-foreground font-semibold">
            כנראה שאנחנו הפתרון שחיפשת.
          </p>
        </div>
      </motion.div>

      {/* Part 2 – Consultation Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          שיחת ייעוץ קצרה ללא עלות לבניית חבילת תוכן רילס
        </h3>
        <div className="card-cosmic p-6 md:p-8">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};

export default BrandingCTA;
