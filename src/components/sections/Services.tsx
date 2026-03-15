import { motion } from "framer-motion";
import { Video, Camera, Wand2, Compass } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "הפקות וידאו (התכלס)",
    description:
      "אנחנו בונים את המעטפת המלאה – מהקריאייטיב ועד לסרטון שגורם לאנשים לעצור את הגלילה.",
  },
  {
    icon: Camera,
    title: "צילום מקצועי (הסטייל)",
    description:
      "שימוש בציוד מקצועי כדי להעניק למותג שלכם מראה יוקרתי, חד ובלתי נשכח.",
  },
  {
    icon: Wand2,
    title: "עריכה ופוסט (הקסם)",
    description: "עריכה קצבית, בתוכנות מחשב מקצועיות",
  },
  {
    icon: Compass,
    title: "ליווי אסטרטגי (התוצאה)",
    description:
      ` לא רק מצלמים, אלא מוודאים שהתוכן מותאם לפלטפורמה ולקהל היעד ע"י תכנון ציפיות יחד כדי להביא תוצאות בשטח.`,
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
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          איך אנחנו גורמים לזה לקרות?
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto">
          שילוב מדויק בין אסטרטגיה שיווקית ליצירה קולנועית.
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
