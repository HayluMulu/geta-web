import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";

const FinalCTA = () => {
  return (
    <section className="relative py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          שיחת ייעוץ קצרה ללא עלות לבניית חבילת תוכן רילס
        </h2>
        <div className="card-cosmic p-6 md:p-8">
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
