import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import ProcessHero from "./ProcessHero";
import Industries from "@/components/industries/Industries";
import CursorReactiveBackground from "@/components/background/CursorReactiveBackground";
import Testimonial from "@/components/testimonial/Testimonial";
import CTA from "@/components/cta/CTA";
import ProcessFlow from "./ProcessFlow";
import ProcessExpect from "./ProcessExpect";
import Processdescription from "./Processdescription";

export default function ProcessPage() {
  return (
    <>
      <HeroBackground />
      <Navigation />

      <main>
        <ProcessHero />
        <ProcessFlow />
        <CursorReactiveBackground>
        <Processdescription /> 
        </CursorReactiveBackground>
        <ProcessExpect /> 
        <Industries />
        <Testimonial /> 
        <CTA />
      </main>

      <Footer />
    </> 
  );
}