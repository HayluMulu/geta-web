import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";

const PostProblemCTA = () => {
  return (
    <section className="relative py-20" dir="rtl">
      <div className="container max-w-2xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10"
        >
          אז יאללה תשאירו פרטים ונתחיל להפיק לך את מה שאתה צריך
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-cosmic p-6 md:p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default PostProblemCTA;
