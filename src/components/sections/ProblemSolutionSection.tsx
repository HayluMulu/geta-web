import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import SceneLabel from "@/components/ui/SceneLabel";
import RevealLine from "@/components/ui/RevealLine";

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

const setSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
};

const ProblemSolutionSection = () => {
  return (
    <section className="relative py-24 px-6 section-veil">
      <div className="max-w-[1100px] mx-auto">
        <SceneLabel scene={2} label="הבעיה" />
        <RevealLine className="mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center">
            נשמע מוכר?
          </h2>
        </RevealLine>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CUT — problems */}
          <motion.div
            initial={{ opacity: 0, x: 28, rotate: 1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={setSpotlight}
            className="card-cosmic card-spotlight p-6 md:p-8 border-destructive/25"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">לא עוד...</h3>
              <span
                className="font-display text-xs tracking-[0.25em] text-destructive/80 border border-destructive/30 rounded px-2 py-1"
                dir="ltr"
              >
                CUT
              </span>
            </div>
            <ul className="space-y-4">
              {problems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-destructive/15 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-foreground-muted text-base leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ACTION — benefits */}
          <motion.div
            initial={{ opacity: 0, x: -28, rotate: -1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={setSpotlight}
            className="card-cosmic card-spotlight p-6 md:p-8 border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.08)]"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">השיטה שלי תאפשר לך</h3>
              <span
                className="font-display text-xs tracking-[0.25em] text-primary border border-primary/40 rounded px-2 py-1"
                dir="ltr"
              >
                ACTION
              </span>
            </div>
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground-muted text-base leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
