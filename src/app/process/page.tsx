import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import ProcessHero from "./ProcessHero";
import Industries from "@/components/industries/Industries";
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
          <Processdescription /> {/* New section for process description */}
        <ProcessExpect /> {/* New section for "What You Can Expect" */}
                <Industries />
                <Testimonial /> 
                <CTA />
      </main>

      <Footer />
    </> 
  );
}