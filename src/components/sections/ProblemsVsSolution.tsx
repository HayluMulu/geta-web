import { motion } from "framer-motion";
import { X, Check, MessageCircle, Play, User } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

const problems = [
  "לא עוד יום צילום אחד בשביל סרטון בודד",
  "לא עוד טעויות בעריכות",
  "לא עוד סרטונים שלא מגיעים בזמן",
  "לא עוד חוסר זמינות",
];

const benefits = [
  "להעביר את המסר בצורה מדויקת",
  "להפיק סרטון לפי בחירה וכוונה שלך (ממומן, טיפ, סיפור)",
  "בלי הכאב ראש של להצטלם כל יום – יום צילום אחד בחודש ותוכן לחודש שלם",
  "להיראות מקצועי ומדויק מול הקהל שלך",
];

const ProblemsVsSolution = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-16"
        >
          למה השיטה הזאת עובדת?
        </motion.h2>

        {/* Two Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-cosmic p-6 md:p-8 border-destructive/20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              לא עוד...
            </h3>
            <ul className="space-y-5">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-destructive/15 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-foreground-muted text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card-cosmic p-6 md:p-8 border-primary/20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              השיטה שלי תאפשר לך
            </h3>
            <ul className="space-y-5">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground-muted text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Proof Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {/* Video Testimonial */}
          <div className="card-cosmic p-5 flex flex-col items-center gap-3 text-center">
            <div className="w-full aspect-video rounded-xl bg-muted flex items-center justify-center">
              <Play className="w-10 h-10 text-primary/50" />
            </div>
            <p className="text-foreground-muted text-sm">המלצת וידאו מלקוח</p>
          </div>

          {/* WhatsApp Screenshot */}
          <div className="card-cosmic p-5 flex flex-col items-center gap-3 text-center">
            <div className="w-full aspect-video rounded-xl bg-muted flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-[#25D366]/50" />
            </div>
            <p className="text-foreground-muted text-sm">הודעת WhatsApp מלקוח מרוצה</p>
          </div>

          {/* Client Photo */}
          <div className="card-cosmic p-5 flex flex-col items-center gap-3 text-center">
            <div className="w-full aspect-video rounded-xl bg-muted flex items-center justify-center">
              <User className="w-10 h-10 text-secondary/50" />
            </div>
            <p className="text-foreground-muted text-sm">לקוח ממליץ</p>
          </div>
        </motion.div>

        {/* CTA + Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            תשאיר פרטים ונתחיל להפיק לך את מה שאתה צריך
          </h3>
          <div className="card-cosmic p-6 md:p-8">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsVsSolution;
