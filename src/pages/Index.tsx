import StarField from "@/components/ui/StarField";
import GlowOrbs from "@/components/ui/GlowOrbs";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import BrandingCTA from "@/components/sections/BrandingCTA";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import ProcessSection from "@/components/sections/ProcessSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background Effects */}
      <StarField />
      <GlowOrbs />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <BrandingCTA />
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <Portfolio />
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
