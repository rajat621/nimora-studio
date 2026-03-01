// code with scroll effect in cards
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface ServicesProps {
  enableDarkMode?: boolean;
  variant?: "home" | "services";
}

export default function Services({
  enableDarkMode = true,
  variant = "home",
}: ServicesProps) {

// export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {

      // 🔥 BACKGROUND + TEXT REVEAL
const lines = gsap.utils.toArray(`.${styles.revealInner}`);

// Reset initial state
gsap.set(lines, { y: "100%" });

const revealTl = gsap.timeline({
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
    // onEnter: () => {
    //   sectionRef.current!.classList.add(styles.dark);
    // },
    // onLeaveBack: () => {
    //   sectionRef.current!.classList.remove(styles.dark);
    // },
  
  onEnter: () => {
  if (enableDarkMode) {
    sectionRef.current!.classList.add(styles.dark);
  }
},
onLeaveBack: () => {
  if (enableDarkMode) {
    sectionRef.current!.classList.remove(styles.dark);
  }
},

  },
});

revealTl.to(lines, {
  y: "0%",
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
});


      // 🔥 CARD PIN ANIMATION
      const cards = gsap.utils.toArray<HTMLElement>(
        pinRef.current!.querySelectorAll(`.${styles.card}`)
      );

      const total = cards.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=3000",
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(
              total - 1,
              Math.floor(self.progress * total)
            );
            setActiveIndex(index);
          },
        },
      });

      scrollTriggerRef.current = tl.scrollTrigger!;

      cards.forEach((card, index) => {
        if (index === 0) return;

        tl.from(card, {
          yPercent: 75,
          opacity: 0,
        });

        tl.to(
          cards[index - 1],
          {
            scale: 0.94,
            yPercent: -4,
            opacity: 0.95,
          },
          "<"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTabClick = (index: number) => {
    const st = scrollTriggerRef.current;
    if (!st) return;

    const total = 5;
    const progress = index / total;
    const target =
      st.start + (st.end - st.start) * progress;

    gsap.to(window, {
      scrollTo: target,
      duration: 0.9,
      ease: "power2.out",
    });
  };

  return (
    // <section ref={sectionRef} className={`${styles.services} nav-dark`}>
<section
  ref={sectionRef}
  className={`${styles.services}
    ${variant === "services" ? styles.servicesVariant : ""}
    ${enableDarkMode ? "" : styles.light}
    ${variant === "home" ? "nav-dark" : ""}`}
>

<div className={styles.intro}>
  {variant === "services" ? (
<h2 className={`${styles.servicesHeading} ${styles.revealLine}`}>
  <span className={styles.revealInner}>
    Our services support teams at different<br />
    stages of building a product all focused on<br />
    reducing uncertainty and helping teams<br />
    make confident decisions.
  </span>
</h2>

  ) : (
    <>
      <span className={`${styles.eyebrow} ${styles.revealLine}`}>
        <span className={styles.revealInner}>
          OUR ROLE IS TO BRING STRUCTURE TO THAT MOMENT
        </span>
      </span>

      <h2 className={`${styles.heading} ${styles.revealLine}`}>
        <span className={styles.revealInner}>
          Big ideas don’t start clear. They start confusing.
        </span>
      </h2>

      <p className={`${styles.description1} ${styles.revealLine}`}>
        <span className={styles.revealInner}>
Most products don’t fail because of bad execution. They fail because teams start 
building before they’re clear on the problem. That early confusion isn’t a weakness it’s where 
the real work begins.
        </span>
      </p>
    </>
  )}
</div>


      <div ref={pinRef} className={styles.pinSection}>
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsContainer}>
            {[
              "UX Strategy",
              "Brand Experience",
              "Product Design",
              "Product Development",
              "Go-Live Support",
            ].map((label, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(i)}
                className={`${styles.tab} ${
                  activeIndex === i ? styles.active : ""
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.cards}>          <ServiceCard
            className={styles.card}
            title="UX Strategy & Product Direction"
            description="We help teams define the right product direction and reduce early-stage risk."
            image="/images/services/Image_1.png"
            tags={[
              "Business goals",
              "Heuristic Analysis",
              "Emerging Trends",
              "User needs",
              "UI/UX Auditing",
              "AI Readiness & Experience Strategy",
              "Technical and operational constraints",
            ]}
          />

          <ServiceCard
            className={styles.card}
            title="Brand Experience & Identity"
            description="Build a brand that feels clear, consistent, and credible across digital touchpoints."
            image="/images/services/Image_2.png"
            tags={[
              "Branding Strategy & Positioning",
              "Typography, Color, & Iconography",
              "Illustration and motion Design",
              "Brand Clarity & Trust Design",
            ]}
          />

          <ServiceCard
            className={styles.card}
            title="Product Design (UX & UI)"
            description="Design usable, scalable products grounded in real user needs."
            image="/images/services/Image_3.png"
            tags={[
              "User Experience Design",
              "Interface Design",
              "Interaction Design",
              "AI-Assisted Experience Design",
              "Design Systems",
              "Prototyping and usability testing",
              "Iterative Testing",
            ]}
          />

          <ServiceCard
            className={styles.card}
            title="Product Development & Implementation"
            description="Build reliable, scalable products from validated designs."
            image="/images/services/Image_4.png"
            tags={[
              "Web and application development",
              "SaaS platform implementation",
              "Frontend and backend engineering",
              "System integration and APIs",
              "Performance and scalability planning",
              "AI Integration & Product Automation",
            ]}
          />

          <ServiceCard
            className={styles.card}
            title="Go-Live Support & Continuous Improvement"
            description="Ongoing support and improvements after launch."
            image="/images/services/Image_5.png"
            tags={[
              "Performance and Stability Monitoring",
              "Ongoing Support and Optimization",
              "Bug Fixes & Issue Resolution",
              "Security Updates and Maintenance",
              "Iterative design and UX improvements",
              "Product Insights & Optimization",
            ]}
          />
        </div>
      </div>
    </section>
  );
}




// import styles from "./Services.module.css";
// import ServiceCard from "./ServiceCard";

// export default function Services() {
//   return (
//     <section className={styles.services}>
//       <div className={styles.intro}>
//        <span className={styles.eyebrow}>
//           OUR ROLE IS TO BRING STRUCTURE TO THAT MOMENT
//        </span>

//        <h2 className={styles.heading}>
//           Big ideas don’t start clear. They start confusing.
//        </h2>

//        <p className={styles.description1}>
//           Most products don’t fail because of bad execution. They fail because teams start <br></br>
//           building before they’re clear on the problem. That early confusion isn’t a weakness it’s where <br></br>
//           the real work begins.
//        </p>

// <div className={styles.tabsWrapper}>
//   <div className={styles.tabsContainer}>
//     <button className={`${styles.tab} ${styles.active}`}>
//       UX Strategy
//     </button>

//     <button className={styles.tab}>
//       Brand Experience
//     </button>

//     <button className={styles.tab}>
//       Product Design
//     </button>

//     <button className={styles.tab}>
//       Product Development
//     </button>

//     <button className={styles.tab}>
//       Go-Live Support
//     </button>
//   </div>
// </div>
//       </div>

//    <div className={styles.cards}>
//         <ServiceCard
//           title="UX Strategy & Product Direction"
//           description="We help teams define the right product direction and reduce early-stage risk."
//           image="/images/services/strategy.jpg"
//           tags={[
//             "Business goals",
//             "Heuristic Analysis",
//             "Emerging Trends",
//             "User needs",
//             "UI/UX Auditing",
//             "AI Readiness & Experience Strategy",
//             "Technical and operational constraints",
//           ]}
//         />

//         <ServiceCard
//           title="Brand Experience & Identity"
//           description="Build a brand that feels clear, consistent, and credible across digital touchpoints."
//           image="/images/services/brand.jpg"
//           tags={[
//             "Branding Strategy & Positioning",
//             "Typography, Color, & Iconography",
//             "Illustration and motion Design",
//             "Brand Clarity & Trust Design",
//           ]}
//         />

//         <ServiceCard
//           title="Product Design (UX & UI)"
//           description="Design usable, scalable products grounded in real user needs."
//           image="/images/services/design.jpg"
//           tags={[
//             "User Experience Design",
//             "Interface Design",
//             "Interaction Design",
//             "AI-Assisted Experience Design",
//             "Design Systems",
//             "Prototyping and usability testing",
//             "Iterative Testing",
//           ]}
//         />

//         <ServiceCard
//           title="Product Development & Implementation"
//           description="Build reliable, scalable products from validated designs."
//           image="/images/services/development.jpg"
//           tags={[
//             "Web and application development",
//             "SaaS platform implementation",
//             "Frontend and backend engineering",
//             "System integration and APIs",
//             "Performance and scalability planning",
//             "AI Integration & Product Automation",
//           ]}
//         />

//         <ServiceCard
//           title="Go-Live Support & Continuous Improvement"
//           description="Ongoing support and improvements after launch."
//           image="/images/services/support.jpg"
//           tags={[
//             "Performance and Stability Monitoring",
//             "Ongoing Support and Optimization",
//             "Bug Fixes & Issue Resolution",
//             "Security Updates and Maintenance",
//             "Iterative design and UX improvements",
//             "Product Insights & Optimization",
//           ]}
//         />
//       </div>
//     </section>
//   );
// }
