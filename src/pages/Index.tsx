import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import VisualBreak from "@/components/landing/VisualBreak";
import Commitments from "@/components/landing/Commitments";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import Trust from "@/components/landing/Trust";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <VisualBreak />
      <Commitments />
      <Services />
      <Process />
      <Trust />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
