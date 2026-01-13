import { motion } from "framer-motion";
import { Video, Camera, Wand2, Mic } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "הפקות וידאו",
    description: "מפרסומות טלוויזיה ועד תוכן דיגיטלי — הפקה מקצועית מהרעיון ועד הגמר",
  },
  {
    icon: Camera,
    title: "צילום מקצועי",
    description: "צילום באיכות קולנועית עם ציוד מתקדם וצוות מנוסה",
  },
  {
    icon: Wand2,
    title: "עריכה ופוסט",
    description: "עריכה יצירתית, אפקטים ויזואליים וגרדינג צבע ברמה הגבוהה ביותר",
  },
  {
    icon: Mic,
    title: "הקלטות סאונד",
    description: "סאונד מקצועי, קריינות וליווי מוזיקלי מותאם אישית",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            מה אנחנו עושים
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto">
            שירותי הפקה מקצועיים שמביאים את החזון שלכם לחיים
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card-cosmic p-6 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
