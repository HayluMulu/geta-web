import { motion } from "framer-motion";
import { ClipboardList, Users, Camera, Film } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "שאלון אפיון",
    description: "נפצח ביחד את הקהל, המטרה והמסר שלך",
  },
  {
    icon: Users,
    title: "הבנת קהל יעד",
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
    <section className="relative py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-14"
        >
          איך זה עובד?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-cosmic p-6 text-center flex flex-col items-center gap-4 relative"
            >
              <span className="text-primary/30 font-display text-4xl font-bold absolute top-3 left-4 select-none">
                {index + 1}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
