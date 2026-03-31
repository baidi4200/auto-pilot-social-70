import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PlatformsSection from "@/components/PlatformsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AiComingSoonSection from "@/components/AiComingSoonSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PainPointsSection />
    <ServicesSection />
    <HowItWorksSection />
    <PlatformsSection />
    <TestimonialsSection />
    <AiComingSoonSection />
    <PricingSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
