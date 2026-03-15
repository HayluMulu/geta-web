import StarField from "@/components/ui/StarField";
import GlowOrbs from "@/components/ui/GlowOrbs";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import About from "@/components/sections/About";
import FinalCTA from "@/components/sections/FinalCTA";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

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
          {/* 2. Problem */}
          <ProblemSection />
          {/* 3. Solution */}
          <SolutionSection />
          {/* 4. Process */}
          <ProcessSection />
          {/* 5. Social Proof */}
          <SocialProofSection />
          {/* 6. About */}
          <section id="about">
            <About />
          </section>
          {/* 7. Final CTA */}
          <section id="contact">
            <FinalCTA />
          </section>
          {/* Existing sections */}
          <section id="services">
            <Services />
          </section>
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
