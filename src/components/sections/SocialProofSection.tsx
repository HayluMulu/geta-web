import { motion } from "framer-motion";
import { Play, MessageCircle, User } from "lucide-react";

const SocialProofSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-12"
        >
          מה אומרים הלקוחות?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="card-cosmic p-5 flex flex-col items-center gap-3 text-center">
            <div className="w-full aspect-video rounded-xl bg-muted flex items-center justify-center">
              <Play className="w-10 h-10 text-primary/50" />
            </div>
            <p className="text-foreground-muted text-sm">המלצת וידאו מלקוח</p>
          </div>

          <div className="card-cosmic p-5 flex flex-col items-center gap-3 text-center">
            <div className="w-full aspect-video rounded-xl bg-muted flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-[#25D366]/50" />
            </div>
            <p className="text-foreground-muted text-sm">הודעת WhatsApp מלקוח מרוצה</p>
          </div>

          <div className="card-cosmic p-5 flex flex-col items-center gap-3 text-center">
            <div className="w-full aspect-video rounded-xl bg-muted flex items-center justify-center">
              <User className="w-10 h-10 text-secondary/50" />
            </div>
            <p className="text-foreground-muted text-sm">לקוח ממליץ</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
