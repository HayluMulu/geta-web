import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-display text-xl font-bold text-foreground">
          <span className="text-gradient-cosmic">Geta</span> Show
        </a>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground-muted hover:text-foreground transition-colors">
            אודות
          </a>
          <a href="#services" className="text-foreground-muted hover:text-foreground transition-colors">
            שירותים
          </a>
          <a href="#portfolio" className="text-foreground-muted hover:text-foreground transition-colors">
            עבודות
          </a>
          <a href="#contact" className="text-foreground-muted hover:text-foreground transition-colors">
           צור קשר
          </a>
        </nav>
        
        {/* CTA */}
        <div className="hidden md:block" />
      </div>
    </motion.header>
  );
};

export default Header;
