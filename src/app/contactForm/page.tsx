import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import ClarityHero from "./ClarityHero";
import HeroBackground from "@/components/hero/HeroBackground";
import ClarityForm from "./ClarityForm";

export default function ClarityPage() {
  return (
    
    <>
      <HeroBackground />   
      <Navigation />
      <main>

      <ClarityHero />
      <ClarityForm />

      <Footer />
      </main>
    </>
  );
}