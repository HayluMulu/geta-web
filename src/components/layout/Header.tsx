import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/hooks/use-scroll-to-section";

const navLinks = [
  { label: "אודות", id: "about" },
  { label: "עבודות", id: "portfolio" },
  { label: "FAQ", id: "FAQ" },
  { label: "צור קשר", id: "contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl border-b border-primary/15 shadow-[0_8px_32px_hsl(230_65%_7%/0.55)]"
            : "bg-background/50 backdrop-blur-md border-b border-border/20"
        }`}
      >
        <div className="max-w-[1100px] mx-auto flex items-center justify-between">
          <a
            href="/"
            className="font-display text-xl font-bold text-foreground group"
            aria-label="Geta Show דף הבית"
          >
            <span className="text-gradient-cosmic group-hover:brightness-125 transition-[filter]">
              Geta
            </span>{" "}
            Show
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="ניווט ראשי">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative px-4 py-2 text-foreground-muted hover:text-foreground transition-colors bg-transparent border-none cursor-pointer group"
              >
                {link.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 origin-center bg-gradient-to-r from-primary via-secondary to-accent transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border/30 px-6 py-6"
          >
            <nav className="flex flex-col gap-4" aria-label="ניווט מובייל">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-foreground text-lg font-medium text-right bg-transparent border-none cursor-pointer py-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
