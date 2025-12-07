import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { TeamSection } from "@/components/TeamSection";
import { StartProjectSection } from "@/components/StartProjectSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <TeamSection />
      <StartProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
