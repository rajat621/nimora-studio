// "use client";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useRef } from "react";
// import styles from "./about.module.css";
// import Navigation from "@/components/navigation/Navigation";
// import ProcessExpect from "@/app/process/ProcessExpect";
// import CursorReactiveBackground from "@/components/background/CursorReactiveBackground";
// import BackgroundOverlay from "@/components/background/BackgroundOverlay";
// import Testimonial from "@/components/testimonial/Testimonial";
// import CTA from "@/components/cta/CTA";
// import Footer from "@/components/footer/Footer";
// import TermsHeroBackground from "@/components/hero/TermsHeroBackground";

// const workWith = [
//   {
//     title: "Startups",
//     desc: "Design integrated AI based end to end platform",
//   },
//   {
//     title: "Product Teams",
//     desc: "Improve existing products with better UX and strategy",
//   },
//   {
//     title: "Growing Companies",
//     desc: "Scale products with clear product direction",
//   },
// ];

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutPage() {
//   const sectionRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     const ctx = gsap.context(() => {

//       // ✅ TYPE-SAFE (fixes TS error)
//       const allLines = gsap.utils.toArray<HTMLElement>(
//         `.${styles.heroContainer} .${styles.revealInner}`
//       );

//       // 🔹 Split hero + description1
//       const heroLines = allLines.slice(0, -1);
//       const descLine = allLines[allLines.length - 1];

//       // ✅ Hide all initially
//       gsap.set(allLines, { y: "100%" });

//       // ── HERO ANIMATION (same as services) ──
//       gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play reverse play reverse",
//         },
//       }).to(heroLines, {
//         y: "0%",
//         stagger: 0.15,
//         duration: 0.8,
//         ease: "power3.out",
//       });

//       // ── DESCRIPTION1 (trigger on scroll only) ──
// gsap.to(descLine, {
//   y: "0%",
//   duration: 0.8,
//   ease: "power3.out",
//   scrollTrigger: {
//     trigger: descLine,
//     start: "top 118%",   // ✅ instant trigger on scroll
//     toggleActions: "play reverse play reverse",
//   },
// });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <main className={styles.page}>
//       <Navigation />
//       <TermsHeroBackground />

//       {/* HERO */}
//       <section ref={sectionRef} className={styles.heroWrapper}>
//         <div className={styles.heroContainer}>

//           <span className={`${styles.eyebrow} ${styles.revealLine}`}>
//             <span className={styles.revealInner}>ABOUT US</span>
//           </span>

//           <h1 className={styles.heading}>
//             <span className={styles.revealLine}>
//               <span className={styles.revealInner}>FROM IDEAS TO</span>
//             </span>

//             <span className={`${styles.secondLine} ${styles.revealLine}`}>
//               <span className={styles.revealInner}>
//                 EXECUTION WITHOUT
//               </span>
//             </span>

//             <span className={`${styles.thirdLine} ${styles.revealLine}`}>
//               <span className={styles.revealInner}>
//                 GUESSWORK
//               </span>
//             </span>
//           </h1>

//           {/* description */}
//           <p className={`${styles.description} ${styles.revealLine}`}>
//             <span className={styles.revealInner}>
//               We help teams make better product decisions by asking the right questions,
//               designing with purpose, and building what truly matters.
//             </span>
//           </p>

//           {/* ✅ SCROLL-TRIGGERED ONLY */}
//           {/* <p className={`${styles.description1} ${styles.revealLine}`}>
//             <span className={styles.revealInner}>
//               Our work sits at the intersection of business goals, user needs, and 
//               technology. By bringing these perspectives together, we help teams move 
//               from uncertainty to clarity so better decisions can be made and better products can be built.
//             </span>
//           </p> */}

//         </div>
//       </section>

//       {/* VIDEO */}
//       <section className={styles.videoSection}>
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className={styles.video}
          
//         >
//         <source src="/videos/hero.mp4" type="video/mp4" />
//         </video>
//       </section>
//          <CursorReactiveBackground>
//            <BackgroundOverlay />
//          </CursorReactiveBackground>
//       {/* PROCESS EXPECT */}
//       <ProcessExpect />

//       {/* WHO WE WORK WITH */}
//       <section className={styles.workSection}>
//         <div className={styles.container}>
//           <h2 className={styles.sectionTitle}>
//             <em>Who</em> We Work<br />With
//           </h2>
          
//           <div className={styles.rightColumn}>
//             <p className={styles.descriptionText}>
//               We partner with teams at different stages each with different challenges, but a shared need for clarity, usability, and growth.
//             </p>
            
//             <div className={styles.cards}>
//               {workWith.map((item, i) => (
//                 <div key={i} className={styles.card}>
//                   <div className={styles.cardIcon}>🎓</div>
//                   <div className={styles.cardContent}>
//                     <h4>{item.title}</h4>
//                     <p>{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIAL */}
//       <section className={styles.testimonialSection}>
//         <div className={styles.container}>
//           <Testimonial />
//         </div>
//       </section>

//       <CTA />
//       <Footer />
//     </main>
//   );
// }

"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./about.module.css";
import Navigation from "@/components/navigation/Navigation";
import ProcessExpect from "@/app/process/ProcessExpect";
import CursorReactiveBackground from "@/components/background/CursorReactiveBackground";
import BackgroundOverlay from "@/components/background/BackgroundOverlay";
import Testimonial from "@/components/testimonial/Testimonial";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import TermsHeroBackground from "@/components/hero/TermsHeroBackground";
import {
  Rocket,
  TrendingUp,
  Layers3,
  Building2,
} from "lucide-react";
// const workWith = [
//   {
//     title: "Startups & Early-Stage Teams",
//     desc: "Turning ideas into structured, launch-ready products with a clear direction from day one.",
//   },
//   {
//     title: "Growing Product Teams",
//     desc: "Improving existing products, refining user experience, and preparing systems to scale.",
//   },
//   {
//     title: "SaaS & B2B Platforms",
//     desc: "Designing complex workflows and interfaces that are intuitive, efficient, and easy to adopt.",
//   },
//   {
//     title: "Businesses & Enterprises",
//     desc: "Simplifying internal tools and large systems to improve usability, efficiency, and consistency.",
//   },
// ];
const workWith = [
  {
    title: "Startups & Early-Stage Teams",
    desc: "Turning ideas into structured, launch-ready products with a clear direction from day one.",
    icon: <Rocket size={26} strokeWidth={1.8} color="#2d6158" />,

  },
  {
    title: "Growing Product Teams",
    desc: "Improving existing products, refining user experience, and preparing systems to scale.",
    icon: <TrendingUp size={26} strokeWidth={1.8} color="#2d6158" />,

  },
  {
    title: "SaaS & B2B Platforms",
    desc: "Designing complex workflows and interfaces that are intuitive, efficient, and easy to adopt.",
    icon: <Layers3 size={26} strokeWidth={1.8} color="#2d6158" />,

  },
  {
    title: "Businesses & Enterprises",
    desc: "Simplifying internal tools and large systems to improve usability, efficiency, and consistency.",
    icon: <Building2 size={26} strokeWidth={1.8} color="#2d6158" />,
  },
];
gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {

      // ✅ TYPE-SAFE (fixes TS error)
      const allLines = gsap.utils.toArray<HTMLElement>(
        `.${styles.heroContainer} .${styles.revealInner}`
      );

      // 🔹 Split hero + description1
      const heroLines = allLines.slice(0, -1);
      const descLine = allLines[allLines.length - 1];

      // ✅ Hide all initially
      gsap.set(allLines, { y: "100%" });

      // ── HERO ANIMATION (same as services) ──
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }).to(heroLines, {
        y: "0%",
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      // ── DESCRIPTION1 (trigger on scroll only) ──
gsap.to(descLine, {
  y: "0%",
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: descLine,
    start: "top 118%",   // ✅ instant trigger on scroll
    toggleActions: "play reverse play reverse",
  },
});

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.page}>
      <Navigation />
      <TermsHeroBackground />

      {/* HERO */}
      <section ref={sectionRef} className={styles.heroWrapper}>
        <div className={styles.heroContainer}>

          <span className={`${styles.eyebrow} ${styles.revealLine}`}>
            <span className={styles.revealInner}>ABOUT US</span>
          </span>

          <h1 className={styles.heading}>
            <span className={styles.revealLine}>
              <span className={styles.revealInner}>FROM IDEAS TO</span>
            </span>

            <span className={`${styles.secondLine} ${styles.revealLine}`}>
              <span className={styles.revealInner}>
                EXECUTION WITHOUT
              </span>
            </span>

            <span className={`${styles.thirdLine} ${styles.revealLine}`}>
              <span className={styles.revealInner}>
                GUESSWORK
              </span>
            </span>
          </h1>

          {/* description */}
          <p className={`${styles.description} ${styles.revealLine}`}>
            <span className={styles.revealInner}>
              We help teams make better product decisions by asking the right questions,
              designing with purpose, and building what truly matters.
            </span>
          </p>

          {/* ✅ SCROLL-TRIGGERED ONLY */}
          {/* <p className={`${styles.description1} ${styles.revealLine}`}>
            <span className={styles.revealInner}>
              Our work sits at the intersection of business goals, user needs, and 
              technology. By bringing these perspectives together, we help teams move 
              from uncertainty to clarity so better decisions can be made and better products can be built.
            </span>
          </p> */}

        </div>
      </section>

      {/* VIDEO */}
      <section className={styles.videoSection}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
          
        >
        <source src="/videos/about.mp4" type="video/mp4" />
        </video>
      </section>
         <CursorReactiveBackground>
           <BackgroundOverlay />
         </CursorReactiveBackground>
      {/* PROCESS EXPECT */}
      <ProcessExpect />

      {/* WHO WE WORK WITH */}
<section className={styles.workSection}>
  <div className={styles.container}>

    {/* Two-column header */}
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>
        <em>Who</em> We Work <br /> With
      </h2>
      <p className={styles.sectionDesc}>
        We partner with teams at different stages — each with different
        challenges, but a shared need for clarity, usability, and growth.
      </p>
    </div>

    {/* 2×2 card grid */}
    <div className={styles.cards}>
      {workWith.map((item, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.iconBox}>
  {item.icon}
</div>
          {/* <div className={styles.iconBox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L1 9l11 6 11-6-11-6z" stroke="#2d6158"
                strokeWidth="1.8" strokeLinejoin="round"/>
              <path d="M5 11.5V17c0 0 3 3 7 3s7-3 7-3v-5.5"
                stroke="#2d6158" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div> */}
          <h4 className={styles.cardTitle}>{item.title}</h4>
          <p className={styles.cardDesc}>{item.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* TESTIMONIAL */}
      <section className={styles.testimonialSection}>
        <div className={styles.container}>
          <Testimonial />
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
