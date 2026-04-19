
import Hero from "@/components/caseStudy/Hero";
import Navigation from "@/components/navigation/Navigation";
import IntroSection from "@/components/caseStudy/IntroSection";
import VisualsSection from "@/components/caseStudy/VisualsSection";
import ProcessSection from "@/components/caseStudy/ProcessSection";
import Branding from "@/components/caseStudy/BrandingSection";
import DesignSystemSection from "@/components/caseStudy/DesignSystemSection";
import Industries from "@/components/industries/Industries";
import Testimonial from "@/components/testimonial/Testimonial";
import CTA from "@/components/cta/CTA";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import Footer from "@/components/footer/Footer";



export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = caseStudies.find(
    (study) => study.slug === slug
  );

  if (!data) return notFound();

  return (
    <>
    <Navigation/>

          <main>

      <Hero data={data.hero} />
      <IntroSection data={data.intro} />
      <ProcessSection data={data.processSection} />
      <Branding data={data.brandingSection} />
      <DesignSystemSection data={data.designSystemSection} />
      <VisualsSection   data={{
    visualsSection: data.visualsSection,
    roleSection: data.roleSection,
    conclusionSection: data.conclusionSection,
  }} />
        <Testimonial /> 
        <CTA />
        {/* <Industries /> */}
</main>
      <Footer />

    </>
  );
}