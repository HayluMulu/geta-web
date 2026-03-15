import StarField from "@/components/ui/StarField";
import GlowOrbs from "@/components/ui/GlowOrbs";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import BrandingCTA from "@/components/sections/BrandingCTA";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import PostProblemCTA from "@/components/sections/PostProblemCTA";
import ProcessSection from "@/components/sections/ProcessSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import About from "@/components/sections/About";
import FinalCTA from "@/components/sections/FinalCTA";
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

      <div className="relative z-10">
        <Header />
        <main>
          {/* 1. Hero */}
          <Hero />
          {/* 1.5 Branding CTA + Consultation Form */}
          <BrandingCTA />
          {/* 2. Problem & Solution */}
          <ProblemSolutionSection />
          {/* 2.5 Post-Problem CTA */}
          <PostProblemCTA />
          {/* 3. Process */}
          <ProcessSection />
          {/* 4. Mid-page CTA */}
          <FinalCTA />
          {/* 5. Portfolio */}
          <Portfolio />
          {/* 6. About */}
          <section id="about">
            <About />
          </section>
          {/* 7. Social Proof */}
          <SocialProofSection />
          {/* 8. FAQ */}
          <FAQSection />
          {/* 9. Contact */}
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default Index;
