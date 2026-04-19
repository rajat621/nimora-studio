import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import HeroBackground from "@/components/hero/HeroBackground";
import Services from "@/components/services/Services";
import Work from "@/components/work/WorkSection";
import CursorReactiveBackground from "@/components/background/CursorReactiveBackground";
import BackgroundOverlay from "@/components/background/BackgroundOverlay";
import Industries from "@/components/industries/Industries";
import Process from "@/components/process/Process";
import Clients from "@/components/testimonial/Testimonial";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Testimonial from "@/components/testimonial/Testimonial";

export default function HomePage() {
  return (
    <>
      <HeroBackground />

      <Navigation />
      <main>
 
         <Hero />
         <Services variant="home" />
          <Work />
         <CursorReactiveBackground>
           <BackgroundOverlay />
         </CursorReactiveBackground>
         <Industries />
         <CursorReactiveBackground>
           <Process />
         </CursorReactiveBackground>
         <Testimonial />
         <CTA />
 
      </main>
 
      <Footer />
    </>
  );
}
