import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import SceneLabel from "@/components/ui/SceneLabel";
import ViewfinderFrame from "@/components/ui/ViewfinderFrame";
import RevealLine from "@/components/ui/RevealLine";

const About = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(ry, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(rx, { stiffness: 120, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduceMotion || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(px * 10);
    ry.set(-py * 8);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden section-veil">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
            style={{ perspective: 900 }}
          >
            <motion.div
              ref={frameRef}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              style={
                reduceMotion
                  ? undefined
                  : { rotateX, rotateY, transformStyle: "preserve-3d" }
              }
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10"
            >
              <ViewfinderFrame live />
              <img
                src="assets/geta_profile.jpg"
                alt="אלי גטה"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 z-30">
                <span className="rec-badge" dir="ltr">
                  <span className="scene-label-dot" style={{ width: 6, height: 6 }} />
                  ON SET
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-30 flex items-end justify-between">
                <span className="font-display text-xs tracking-[0.2em] text-foreground/80" dir="ltr">
                  DIRECTOR · ELI GETA
                </span>
              </div>
            </motion.div>

            <div className="absolute -z-10 -top-10 -right-10 w-32 h-32 bg-primary/20 blur-[80px] rounded-full" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 blur-[80px] rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6 text-right dir-rtl order-1 lg:order-2"
          >
            <div className="space-y-2">
              <SceneLabel scene={5} label="מאחורי הקלעים" align="start" />
              <RevealLine>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  נעים להכיר אלי גטה
                </h2>
              </RevealLine>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 w-20 bg-gradient-to-l from-primary to-accent rounded-full origin-right"
              />
            </div>

            <div className="space-y-4">
              {[
                "ואם הגעתם לכאן, אתם כבר מבינים שסרטון טיקטוק אקראי פעם ב... לא באמת מביא לקוחות.",
                "רוב בעלי העסקים שאני פוגש משקיעים שעות בעריכה בטלפון, מעלים לרשתות ומחכים. הם מחכים ללקוחות אבל מקבלים בעיקר לייקים מהמשפחה.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="text-foreground/90 text-lg md:text-xl leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                ב-<span className="text-gradient-cosmic">Geta</span> Show אני עובד אחרת.
              </p>
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                אני לא רק מצלם סרטון, אני בונה לכם נכס ויזואלי. שילוב של צילום חד,
                עריכה מקצועית ומבנה שיווקי חכם שגורם לאנשים לעצור, להקשיב ולהבין למה
                דווקא אתם.
              </p>
              <motion.p
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary text-lg md:text-xl font-semibold border-r-4 border-primary pr-4"
              >
                הופך את התוכן שלכם לכלי שמבליט אתכם מעל המתחרים שלכם ומול הלקוחות שלכם
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
