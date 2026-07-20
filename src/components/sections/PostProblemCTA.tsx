import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";
import RevealLine from "@/components/ui/RevealLine";

const setSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
};

const PostProblemCTA = () => {
  return (
    <section className="relative py-20" dir="rtl">
      <div className="container max-w-2xl mx-auto px-6">
        <RevealLine className="mb-10">
          <p className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
            אז יאללה תשאירו פרטים ונתחיל להפיק לכם את מה שאתם צריכים
          </p>
        </RevealLine>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onMouseMove={setSpotlight}
          className="card-cosmic card-spotlight p-6 md:p-8 border-primary/15"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default PostProblemCTA;
