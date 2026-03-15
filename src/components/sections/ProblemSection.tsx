import { motion } from "framer-motion";
import { X } from "lucide-react";

const problems = [
  "לא עוד יום צילום אחד בשביל סרטון בודד",
  "לא עוד טעויות בעריכות",
  "לא עוד סרטונים שלא מגיעים בזמן",
  "לא עוד חוסר זמינות",
];

const ProblemSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12"
        >
          נשמע מוכר?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <ul className="space-y-5">
            {problems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-destructive/15 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-foreground-muted text-lg leading-relaxed">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
