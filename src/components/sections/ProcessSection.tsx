import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { ClipboardList, Users, Camera, Film } from "lucide-react";
import SceneLabel from "@/components/ui/SceneLabel";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);

  // Scroll-drawn line only on desktop — skips spring work on mobile
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 45%"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <SceneLabel scene={3} label="התהליך" />
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-16"
        >
          איך זה עובד?
        </motion.h2>

        <div ref={timelineRef} className="relative">
          {!isMobile && (
            <>
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-primary/0 via-primary/15 to-primary/0" />
              <motion.div
                aria-hidden="true"
                className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] origin-top rounded-full"
                style={{
                  scaleY: lineProgress,
                  background:
                    "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))",
                  boxShadow: "0 0 14px hsl(var(--primary) / 0.5)",
                }}
              />
            </>
          )}

          <div className="flex flex-col gap-10 md:gap-16">
            {isMobile
              ? steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.2) }}
                    className="flex flex-col items-center gap-4"
                  >
                    <span className="font-display text-5xl font-bold text-gradient-cosmic select-none">
                      {index + 1}
                    </span>
                    <div className="card-cosmic p-6 w-full text-center flex flex-col items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                      <p className="text-foreground-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))
              : steps.map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div key={step.title} className="relative">
                      <motion.div
                        initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: "spring", stiffness: 280, damping: 18 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary)/0.7)] ring-4 ring-primary/15"
                      />

                      <div className="grid grid-cols-[1fr_60px_1fr] items-center gap-4">
                        <div className="flex justify-end">
                          {isEven ? (
                            <motion.div
                              initial={reduceMotion ? false : { opacity: 0, x: 40 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, amount: 0.4 }}
                              transition={{ duration: 0.45 }}
                              className="card-cosmic p-6 max-w-md w-full flex items-start gap-5 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.3)] transition-all duration-300"
                            >
                              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                <step.icon className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-foreground mb-1">
                                  {step.title}
                                </h3>
                                <p className="text-foreground-muted text-sm leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </motion.div>
                          ) : (
                            <motion.span
                              initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.4 }}
                              transition={{ duration: 0.4 }}
                              className="font-display text-7xl font-bold text-gradient-cosmic select-none"
                            >
                              {index + 1}
                            </motion.span>
                          )}
                        </div>

                        <div />

                        <div className="flex justify-start">
                          {isEven ? (
                            <motion.span
                              initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, amount: 0.4 }}
                              transition={{ duration: 0.4 }}
                              className="font-display text-7xl font-bold text-gradient-cosmic select-none"
                            >
                              {index + 1}
                            </motion.span>
                          ) : (
                            <motion.div
                              initial={reduceMotion ? false : { opacity: 0, x: -40 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, amount: 0.4 }}
                              transition={{ duration: 0.45 }}
                              className="card-cosmic p-6 max-w-md w-full flex items-start gap-5 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.3)] transition-all duration-300"
                            >
                              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                <step.icon className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold text-foreground mb-1">
                                  {step.title}
                                </h3>
                                <p className="text-foreground-muted text-sm leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
