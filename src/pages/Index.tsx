import StarField from "@/components/ui/StarField";
import GlowOrbs from "@/components/ui/GlowOrbs";
import ScrollTimecode from "@/components/ui/ScrollTimecode";
import CursorTrail from "@/components/ui/CursorTrail";
import MarqueeBand from "@/components/ui/MarqueeBand";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import BrandingCTA from "@/components/sections/BrandingCTA";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import PostProblemCTA from "@/components/sections/PostProblemCTA";
import ProcessSection from "@/components/sections/ProcessSection";
import About from "@/components/sections/About";
import FAQSection from "@/components/sections/FAQSection";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <StarField />
      <GlowOrbs />
      <ScrollTimecode />
      <CursorTrail />
      <div className="film-grain" aria-hidden="true" />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <MarqueeBand words={["צילום", "עריכה", "מיתוג", "תוכן", "סטוריטלינג", "הפקה"]} />
          <BrandingCTA />
          <ProblemSolutionSection />
          <PostProblemCTA />
          <ProcessSection />
          <Portfolio />
          <section id="about">
            <About />
          </section>
          <FAQSection />
          <MarqueeBand
            words={["ACTION", "יצירתיות", "CUT", "דיוק", "PLAY", "תוצאות"]}
            tilt={1.5}
          />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default Index;
