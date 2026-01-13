import { motion } from "framer-motion";
import { Play } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "קמפיין מותג - TechFlow",
    category: "פרסומות",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "סרט תדמית - StartupX",
    category: "תדמית",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "תוכן דיגיטלי - ModernBrand",
    category: "סושיאל",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
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
            העבודות שלנו
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto">
            פרויקטים נבחרים שמציגים את הסגנון והאיכות שלנו
          </p>
        </motion.div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileHover={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Play className="w-6 h-6 text-primary mr-[-2px]" />
                </motion.div>
              </div>
              
              {/* Info */}
              <div className="absolute bottom-0 right-0 left-0 p-4">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
