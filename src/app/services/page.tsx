// import Navigation from "@/components/navigation/Navigation";
// import ServicesHero from "./ServicesHero";
// import Services from "@/components/services/Services";
// import Industries from "@/components/industries/Industries";
// import Testimonial from "@/components/testimonial/Testimonial";
// import CTA from "@/components/cta/CTA";
// import Footer from "@/components/footer/Footer";

// export default function ServicesPage() {
//   return (
//     <>
//       <Navigation />
//       <main>
//         <ServicesHero />
//         <Services enableDarkMode={false} variant="services" />
//         <Industries />
//         <Testimonial />
//         <CTA />
//         <Footer />
//       </main>
//     </>
//   );
// }

import Navigation from "@/components/navigation/Navigation";
import HeroBackground from "@/components/hero/HeroBackground"; // 👈 ADD THIS
import ServicesHero from "./ServicesHero";
import Services from "@/components/services/Services";
import Industries from "@/components/industries/Industries";
import Testimonial from "@/components/testimonial/Testimonial";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";

export default function ServicesPage() {
  return (
    <>
      <HeroBackground />   {/* 👈 SAME POSITION AS HOMEPAGE */}
      <Navigation />
      <main>
        <ServicesHero />
        <Services enableDarkMode={false} variant="services" />
        <Industries />
        <Testimonial />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
