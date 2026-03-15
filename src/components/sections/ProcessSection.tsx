import { motion } from "framer-motion";
import { ClipboardList, Users, Camera, Film } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";

const steps = [
  {
    icon: ClipboardList,
    title: "שאלון אפיון",
    description: "נפצח ביחד את הקהל, המטרה והמסר שלך",
  },
  {
    icon: Users,
    title: "הבנת קהל היעד",
    description: "נגדיר בדיוק למי אנחנו מדברים ומה הוא צריך לשמוע",
  },
  {
    icon: Camera,
    title: "צילום מקצועי",
    description: "תסריט מדויק, צילום מותאם ומקצועי לכל סרטון",
  },
  {
    icon: Film,
    title: "עריכה והפקה ברמה גבוהה",
    description: "עריכה עם תוכנות מקצועיות ותוצאה סופית חלקה ואיכותית",
  },
];

const ProcessSection = () => {
  return (
    <>
      {/* Section 1 – Process Explanation */}
      <section className="relative py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1100px] mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-10">
            איך זה עובד?
          </h2>
          <div className="text-foreground-muted text-lg md:text-xl leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p className="text-foreground font-semibold text-xl md:text-2xl">
              אז מה קורה בתכל׳ס?
            </p>
            <p>שאלון אפיון שבו נפצח למי אנחנו רוצים לדבר.</p>
            <p>
              אחרי שנבין מי הלקוח האידאלי, נבין מה המטרה – תובנה, הצעה או פנייה
              לפעולה.
            </p>
            <p>
              כאשר זה ברור, אפשר להכין סרטון שמותאם בדיוק למטרה (אפילו אם זה
              ממומן).
            </p>
            <p className="text-foreground font-medium">
              כי זה כל הקסם – לדעת למי אנחנו מדברים ומה המסר.
            </p>
            <p>
              ומשם אנחנו נכנסים לעבודה: תיאום תסריטים, צילום מקצועי ומדויק,
              ועריכה מהרמות הגבוהות ביותר עם תוכנות מחשב מקצועיות.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 2 – Process Steps Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-cosmic p-6 text-center flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {step.description}
                </p>
                <span className="text-primary/40 font-display text-4xl font-bold absolute top-3 left-4 select-none">
                  {index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 – Consultation Form */}
      <section className="relative py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            שיחת ייעוץ קצרה ללא עלות
          </h3>
          <div className="card-cosmic p-6 md:p-8">
            <ContactForm />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ProcessSection;
