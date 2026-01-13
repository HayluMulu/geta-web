const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-border">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="font-display text-lg font-bold text-foreground">
            <span className="text-gradient-cosmic">Cosmic</span> Studio
          </a>
          
          {/* Links */}
          <nav className="flex items-center gap-6">
            <a href="#services" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
              שירותים
            </a>
            <a href="#portfolio" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
              עבודות
            </a>
            <a href="#contact" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
              צור קשר
            </a>
          </nav>
          
          {/* Copyright */}
          <p className="text-sm text-foreground-muted">
            © 2026 Cosmic Studio. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
