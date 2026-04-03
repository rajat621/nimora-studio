import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import HeroBackground from "@/components/hero/HeroBackground";
import WorkHero from "./WorkHero";
import CaseStudiesSection from "./CaseStudiesSection";
import Industries from "@/components/industries/Industries";
import Testimonial from "@/components/testimonial/Testimonial";
import CTA from "@/components/cta/CTA";

export default function WorkPage() {
  return (
    <>
      <HeroBackground />
      <Navigation />

      <main>
        <WorkHero />
        <CaseStudiesSection />
        <Industries />
        <Testimonial /> 
        <CTA />
      </main>

      <Footer />
    </>
  );
}