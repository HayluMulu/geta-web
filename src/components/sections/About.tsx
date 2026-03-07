import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side - Positioned first on Mobile, but we can swap on Desktop if you want */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1">
            {/* Changed aspect ratio to 1/1 (Square) or 4/3 to keep it shorter */}
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10">
              <img
                src="assets/geta_profile.jpg" // כאן תשים את התמונה של אלי כשתהיה לך
                alt="אלי גטה"
                className="w-full h-full object-cover"
              />
              {/* Cosmic Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Decorative Cosmic Elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-32 h-32 bg-primary/20 blur-[80px] rounded-full" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 blur-[80px] rounded-full" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-right dir-rtl order-1 lg:order-2">
            <div className="space-y-2">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
                קוראים לי אלי גטה
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full" />{" "}
              {/* Accent line */}
            </div>

            <div className="space-y-4">
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                ואם הגעתם לכאן, אתם כבר מבינים שסרטון טיקטוק אקראי פעם ב... לא
                באמת מביא לקוחות.
              </p>
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                רוב בעלי העסקים שאני פוגש משקיעים שעות בעריכה בטלפון, מעלים
                לרשתות ומחכים. הם מחכים ללקוחות אבל מקבלים בעיקר לייקים מהמשפחה.
              </p>
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                ב-<span className="text-gradient-cosmic">Geta</span> Show אני
                עובד אחרת.
              </p>
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                אני לא רק מצלם סרטון, אני בונה לכם נכס ויזואלי. שילוב של צילום
                חד, עריכה מקצועית ומבנה שיווקי חכם שגורם לאנשים לעצור, להקשיב
                ולהבין למה דווקא אתם.
              </p>
              <p className="text-primary text-lg md:text-xl font-semibold border-r-4 border-primary pr-4">
                הופך את התוכן שלכם לכלי שמביא לקוחות, ולא רק צפיות.{" "}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;