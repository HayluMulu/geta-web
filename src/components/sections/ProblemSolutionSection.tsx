import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import SceneLabel from "@/components/ui/SceneLabel";

const problems = [
  "לא עוד יום צילום אחד בשביל סרטון בודד",
  "לא עוד טעויות בעריכות",
  "לא עוד סרטונים שלא מגיעים בזמן",
  "לא עוד חוסר זמינות",
];

const benefits = [
  "להעביר את המסר בצורה מדויקת",
  "להפיק סרטון לפי בחירה וכוונה שלך (ממומן, טיפ, סיפור)",
  "בלי הכאב ראש של להצטלם כל יום — יום צילום אחד בחודש ותוכן לחודש שלם",
  "להיראות מקצועי ומדויק מול הקהל שלך",
];

const ProblemSolutionSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SceneLabel scene={2} label="הבעיה" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-14"
        >
          נשמע מוכר?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-cosmic p-6 md:p-8 border-destructive/20"
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              לא עוד...
            </h3>
            <ul className="space-y-4">
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

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card-cosmic p-6 md:p-8 border-primary/20"
          >
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              השיטה שלי תאפשר לך
            </h3>
            <ul className="space-y-4">
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
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
