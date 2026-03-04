import { motion } from "framer-motion";

export const PortfolioTitle = () => (
  <motion.div
    className="title-container"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h2 className="title-text">
      THEY <span className="title-text-gradient">NOT</span> LIKE US
    </h2>
    <motion.div
      className="title-underline"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
      style={{ transformOrigin: "center" }}
    />
  </motion.div>
);

export default PortfolioTitle;

