
// "use client";

// import React from "react";
// import styles from "./caseStudies.module.css";

// // ─────────────────────────────────────────────
// //  EASY-TO-EDIT DATA
// //  Non-tech: only touch the values below.
// //  Image paths → drop files in /public/images/
// // ─────────────────────────────────────────────

// const HERO = {
//   badge: "CYCLE RENTING APP",
//   headline: "Go Rice brings cycle rentals, route discovery, and community rides –",
//   headlineAccent: "All in one app.",
//   description:
//     "Go Rice is a cycle-renting platform designed for seamlessly connecting cyclists to rental services and routes. The project transforms the way people move through cities.",
//   stats: [
//     { value: "3",     label: "Months"   },
//     { value: "1",     label: "Platform" },
//     { value: "UX/UI", label: "Design"   },
//     { value: "2023",  label: "Year"     },
//   ],
//   phoneImageFront: "/images/phone-front.png",  // ← update path
//   phoneImageBack:  "/images/phone-back.png",   // ← update path
// };

// // ─────────────────────────────────────────────
// //  PROCESS STEPS DATA
// //  Add / remove objects freely.
// //  Each item needs: id, title, description, image.
// //  The section heading is fixed in the component below.
// // ─────────────────────────────────────────────

// const PROCESS_STEPS = [
//   {
//     id:          "01",
//     title:       "DISCOVER",
//     description: "We began by conducting extensive user research to understand cyclists' pain points, existing rental app shortcomings, and unmet needs in the market. This phase included user interviews, competitor analysis, and field observation sessions.",
//     image:       "/images/discover.jpg",
//   },
//   {
//     id:          "02",
//     title:       "DEFINE",
//     description: "Using insights from discovery, we synthesised findings into clear problem statements, user personas, and journey maps. This allowed us to pinpoint the exact moments where friction occurs and set a clear design direction.",
//     image:       "/images/define.jpg",
//   },
//   {
//     id:          "03",
//     title:       "DESIGN ON",
//     description: "Iterative wireframing and high-fidelity prototyping brought the solution to life. Multiple rounds of user testing refined flows, visual hierarchy, and interaction patterns until every interaction felt intuitive.",
//     image:       "/images/design.jpg",
//   },
//   {
//     id:          "04",
//     title:       "SOLUTION FOUND",
//     description: "The final product is a seamless mobile experience that lets users rent bikes, explore curated routes, and join community rides – all within a single, beautifully crafted app.",
//     image:       "/images/solution.jpg",
//   },
// ];

// // ─────────────────────────────────────────────
// //  HERO COMPONENT
// // ─────────────────────────────────────────────

// function HeroSection() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.heroBlobA} />
//       <div className={styles.heroBlobB} />

//       <div className={styles.container}>
//         <div className={styles.heroInner}>

//           {/* Copy */}
//           <div className={styles.heroCopy}>
//             <span className={styles.heroBadge}>{HERO.badge}</span>

//             <h1 className={styles.heroHeadline}>
//               {HERO.headline}
//               <span className={styles.heroAccent}> {HERO.headlineAccent}</span>
//             </h1>

//             <p className={styles.heroDesc}>{HERO.description}</p>

//             <div className={styles.heroStats}>
//               {HERO.stats.map((s) => (
//                 <div key={s.label} className={styles.heroStat}>
//                   <span className={styles.heroStatValue}>{s.value}</span>
//                   <span className={styles.heroStatLabel}>{s.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Phone mockups */}
//           <div className={styles.heroPhones}>
//             <div className={`${styles.phoneBase} ${styles.phoneBack}`}>
//               <img src={HERO.phoneImageBack} alt="App – routes screen" />
//             </div>
//             <div className={`${styles.phoneBase} ${styles.phoneFront}`}>
//               <img src={HERO.phoneImageFront} alt="App – home screen" />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────
// //  PROCESS COMPONENT
// // ─────────────────────────────────────────────

// function ProcessSection() {
//   return (
//     <section className={styles.process}>
//       <div className={styles.container}>

//         {/* Fixed heading */}
//         <div className={styles.processHeader}>
//           <p className={styles.processEyebrow}>Our Approach</p>
//           <h2 className={styles.processHeading}>Design Process Used</h2>
//         </div>

//         <div className={styles.processSteps}>
//           {PROCESS_STEPS.map((step) => (
//             <div key={step.id} className={styles.processStep}>

//               <div className={styles.stepMedia}>
//                 <img src={step.image} alt={step.title} />
//                 <div className={styles.stepOverlay} />
//               </div>

//               <div className={styles.stepContent}>
//                 <span className={styles.stepId}>{step.id}</span>
//                 <h3 className={styles.stepTitle}>{step.title}</h3>
//                 <p className={styles.stepDesc}>{step.description}</p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────
// //  PAGE
// // ─────────────────────────────────────────────

// export default function HomePage() {
//   return (
//     <main>
//       <HeroSection />
//       <ProcessSection />
//     </main>
//   );
// }


import Hero from "@/components/caseStudy/Hero";
import IntroSection from "@/components/caseStudy/IntroSection";
import VisualsSection from "@/components/caseStudy/VisualsSection";
import ProcessSection from "@/components/caseStudy/ProcessSection";
import Branding from "@/components/caseStudy/BrandingSection";
import DesignSystemSection from "@/components/caseStudy/DesignSystemSection";
// import Testimonial from "@/components/caseStudy/Testimonial";
// import RelatedWork from "@/components/caseStudy/RelatedWork";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";



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

    </>
  );
}