import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "להעביר את המסר בצורה מדויקת",
  "להפיק סרטון לפי בחירה וכוונה שלך (ממומן, טיפ, סיפור)",
  "בלי הכאב ראש של להצטלם כל יום — יום צילום אחד בחודש ותוכן לחודש שלם",
  "להיראות מקצועי ומדויק מול הקהל שלך",
];

const SolutionSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12"
        >
          השיטה שלי תאפשר לך
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <ul className="space-y-5">
            {benefits.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
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

export default SolutionSection;
