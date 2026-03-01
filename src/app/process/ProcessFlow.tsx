
// "use client";
// import { useState } from "react";
// import styles from "./ProcessFlow.module.css";

// const agileSteps = [
//   {
//     number: "1",
//     title: "Discover",
//     description: "Discover helps us align business goals, user needs, and market insights to define the right problem and set a clear direction from day one.",
//     cards: [
//       { title: "Business Goals", text: "We clarify business priorities, constraints, and success criteria. This ensures the product direction supports growth, value creation, and long-term goals." },
//       { title: "User Insights", text: "We identify key user groups and uncover their expectations, challenges, and behaviors. These insights guide decisions that improve adoption and usability." },
//       { title: "Market Research", text: "We evaluate the competitive landscape and industry trends. This helps define positioning, opportunities, and a clear path forward." },
//     ],
//     expect: "We create a shared understanding of the problem, align on vision and direction, and define clear goals before moving into design.",
//   },
//   {
//     number: "2",
//     title: "Design",
//     description: "Design transforms insights into intuitive experiences through clear structure, prototyping, and continuous refinement ensuring usability and business alignment before build begins.",
//     cards: [
//       { title: "Experience Strategy", text: "Translating business goals and user insights into clear product flows. We define user journeys that support usability, adoption, and business outcomes." },
//       { title: "Information Architecture", text: "Structuring features, content, and navigation logically. This ensures clarity, scalability, and efficient user movement across the product." },
//       { title: "Wireframing", text: "Creating low-fidelity layouts to define structure and functionality. Wireframes help validate ideas early before investing in visual design or development." },
//       { title: "Prototyping", text: "Building interactive prototypes to test flows and interactions. This allows early feedback, reduces risk, and speeds up decision-making." },
//       { title: "Interface Design", text: "Designing clean, consistent interfaces aligned with brand and usability standards. Visual systems are built to scale and support long-term product growth." },
//     ],
//     expect: "Clear, user-first designs shaped through regular reviews and real user insights ensuring solutions that truly work.",
//   },
//   {
//     number: "3",
//     title: "Build",
//     description: "Build turns approved designs into scalable, working products through focused development and continuous alignment.",
//     cards: [
//       { title: "Technical Planning", text: "Translating designs into a clear development plan. We define architecture, technology choices, and implementation priorities to reduce risk." },
//       { title: "Development", text: "Building features in structured, incremental cycles. This ensures steady progress, quality control, and alignment with product goals." },
//       { title: "Integration", text: "Connecting systems, APIs, and third-party services. We ensure smooth data flow, reliability, and functional completeness." },
//       { title: "Performance & Quality", text: "Optimizing speed, stability, and responsiveness. Quality checks ensure the product performs well under real-world conditions." },
//       { title: "Scalability Readiness", text: "Preparing the product to grow with your business. We build with future expansion, maintenance, and adaptability in mind." },
//     ],
//     expect: "By delivering features incrementally, we ensure faster progress, fewer surprises, and a strong foundation built to scale.",
//   },
//   {
//     number: "4",
//     title: "Test & Refine",
//     description: "Test & Refine validates the product through real feedback and continuous improvement ensuring quality, usability, and launch readiness.",
//     cards: [
//       { title: "Usability Testing", text: "Validating flows and interactions with real users. This helps identify friction, improve adoption, and reduce usability risks." },
//       { title: "Quality Assurance", text: "Testing functionality, performance, and edge cases. We ensure the product works reliably across devices and scenarios." },
//       { title: "Feedback Review", text: "Collecting insights from stakeholders and users. Feedback is prioritized based on impact, feasibility, and business value." },
//       { title: "Iteration & Improvement", text: "Refining features, flows, and interfaces continuously. Each iteration improves clarity, performance, and overall experience." },
//       { title: "Release Readiness", text: "Ensuring the product is stable and ready for real-world use. Final checks help reduce launch risk and support confident delivery." },
//     ],
//     expect: "Through continuous testing and refinement, we reduce usability issues and improve the product with every cycle delivering a polished experience ready for real users.",
//   },
// ];

// const growingSteps = [
//   {
//     number: "1",
//     title: "Build",
//     description: "Build focuses on turning designs into reliable, scalable functionality through focused execution and continuous alignment.",
//     cards: [
//       { title: "Idea Alignment Session", text: "A focused session to align on the core idea, goals, and priorities. This ensures everyone is aligned on what needs to be built and what can wait." },
//       { title: "MVP Validation Prototypes", text: "Creating quick, testable prototypes of key flows and features. This helps validate assumptions early and reduces risk before development begins." },
//       { title: "Accelerated Development", text: "Building essential features using a lean, efficient approach. This allows us to move quickly while maintaining quality and stability." },
//     ],
//     expect: "We create a shared understanding of the problem, align on vision and direction, and define clear goals before moving into design.",
//   },
//   {
//     number: "2",
//     title: "Launch",
//     description: "Launch ensures a smooth, confident release and early validation through real user feedback.",
//     cards: [
//       { title: "Launch Readiness Check", text: "We clarify business priorities, constraints, and success criteria. This ensures the product direction supports growth, value creation, and long-term goals." },
//       { title: "Development & Go-Live", text: "Releasing the product to production and making it accessible to users. We ensure the launch is quick, controlled, and aligned with your goals." },
//       { title: "Early Feedback Monitoring", text: "Observing real user behavior and collecting early feedback post-launch. This helps validate assumptions and identify immediate improvements." },
//     ],
//     expect: "Clear, user-first designs shaped through regular reviews and real user insights ensuring solutions that truly work.",
//   },
// ];

// const introContent = {
//   agile: {
//     label: "FOR GROWING PRODUCTS",
//     heading: ["An iterative process that adapts", "as products evolve"],
//     desc: "For teams with a live product or ongoing roadmap, we follow an iterative, collaborative process that supports continuous improvement, learning, and scale.",
//   },
//   growing: {
//     label: "FOR EARLY-STAGE TEAMS",
//     heading: ["From idea to launch without", "wasting time"],
//     desc: "This process is designed for early-stage teams who need to move fast without guessing. We focus on clarity, prioritization, and rapid execution so you can validate your idea and launch an MVP with confidence.",
//   },
// };

// type TabKey = "agile" | "growing";

// export default function ProcessFlow() {
//   const [activeTab, setActiveTab] = useState<TabKey>("agile");
  
//   // Dynamically pull the correct arrays based on the active tab
//   const steps = activeTab === "agile" ? agileSteps : growingSteps;
//   const intro = introContent[activeTab];

//   return (
//     <section id="process-flow" className={styles.wrapper}>
      
//       {/* ─── TAB TOGGLE & INTRO SECTION ─── */}
//       <div className={styles.container}>
//         <div className={styles.toggleWrapper}>
//           <div className={styles.toggle}>
//             <button
//               className={`${styles.pill} ${activeTab === "agile" ? styles.active : ""}`}
//               onClick={() => setActiveTab("agile")}
//             >
//               Agile Process
//             </button>
//             <button
//               className={`${styles.pill} ${activeTab === "growing" ? styles.active : ""}`}
//               onClick={() => setActiveTab("growing")}
//             >
//               From Idea to Launch
//             </button>
//           </div>
//         </div>

//         <div className={styles.introBox}>
//           <span className={styles.sectionTopLabel}>{intro.label}</span>
//           <h2 className={styles.mainHeading}>
//             {intro.heading.map((line, i) => (
//               <span key={i}>{line}</span>
//             ))}
//           </h2>
//           <p className={styles.subDescription}>{intro.desc}</p>
//         </div>
//       </div>

//       {/* ─── STACKING CARDS SECTION ─── */}
//       <div className={styles.stackSection}>
//         {steps.map((step, i) => (
//           // Using activeTab in the key ensures React completely mounts/unmounts the list when changing tabs
//           <div key={`${activeTab}-${i}`} className={styles.stepWrapper}>
//             <div className={styles.stickyInner}>
//               <div className={styles.container}>
                
//                 {/* HEADER (Static While Sticky) */}
//                 <div className={styles.stepStrip}>
//                   <div className={styles.leftBlock}>
//                     <img
//                       src={`/process/${step.number}.svg`}
//                       alt={step.number}
//                       className={styles.stepIcon}
//                     />
//                     <h3 className={styles.bigTitle}>{step.title}</h3>
//                   </div>
//                   <p className={styles.stepDescription}>
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* BODY */}
//                 <div className={styles.stepBody}>
//                   <span className={styles.label}>What We Do</span>

//                   <div className={styles.cardGrid}>
//                     {step.cards.map((card, ci) => (
//                       <div key={ci} className={styles.card}>
//                         <h4>{card.title}</h4>
//                         <p>{card.text}</p>
//                       </div>
//                     ))}
//                   </div>

//                   <div className={styles.expect}>
//                     <span className={styles.label}>
//                       What You Can Expect
//                     </span>
//                     <p>{step.expect}</p>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef, useLayoutEffect, useCallback } from "react";
import styles from "./ProcessFlow.module.css";

const agileSteps = [
  {
    number: "1", title: "Discover",
    description: "Discover helps us align business goals, user needs, and market insights to define the right problem and set a clear direction from day one.",
    cards: [
      { title: "Business Goals", text: "We clarify business priorities, constraints, and success criteria. This ensures the product direction supports growth, value creation, and long-term goals." },
      { title: "User Insights", text: "We identify key user groups and uncover their expectations, challenges, and behaviors. These insights guide decisions that improve adoption and usability." },
      { title: "Market Research", text: "We evaluate the competitive landscape and industry trends. This helps define positioning, opportunities, and a clear path forward." },
    ],
    expect: "We create a shared understanding of the problem, align on vision and direction, and define clear goals before moving into design.",
  },
  {
    number: "2", title: "Design",
    description: "Design transforms insights into intuitive experiences through clear structure, prototyping, and continuous refinement ensuring usability and business alignment before build begins.",
    cards: [
      { title: "Experience Strategy", text: "Translating business goals and user insights into clear product flows. We define user journeys that support usability, adoption, and business outcomes." },
      { title: "Information Architecture", text: "Structuring features, content, and navigation logically. This ensures clarity, scalability, and efficient user movement across the product." },
      { title: "Wireframing", text: "Creating low-fidelity layouts to define structure and functionality. Wireframes help validate ideas early before investing in visual design or development." },
      { title: "Prototyping", text: "Building interactive prototypes to test flows and interactions. This allows early feedback, reduces risk, and speeds up decision-making." },
      { title: "Interface Design", text: "Designing clean, consistent interfaces aligned with brand and usability standards. Visual systems are built to scale and support long-term product growth." },
    ],
    expect: "Clear, user-first designs shaped through regular reviews and real user insights ensuring solutions that truly work.",
  },
  {
    number: "3", title: "Build",
    description: "Build turns approved designs into scalable, working products through focused development and continuous alignment.",
    cards: [
      { title: "Technical Planning", text: "Translating designs into a clear development plan. We define architecture, technology choices, and implementation priorities to reduce risk." },
      { title: "Development", text: "Building features in structured, incremental cycles. This ensures steady progress, quality control, and alignment with product goals." },
      { title: "Integration", text: "Connecting systems, APIs, and third-party services. We ensure smooth data flow, reliability, and functional completeness." },
      { title: "Performance & Quality", text: "Optimizing speed, stability, and responsiveness. Quality checks ensure the product performs well under real-world conditions." },
      { title: "Scalability Readiness", text: "Preparing the product to grow with your business. We build with future expansion, maintenance, and adaptability in mind." },
    ],
    expect: "By delivering features incrementally, we ensure faster progress, fewer surprises, and a strong foundation built to scale.",
  },
  {
    number: "4", title: "Test & Refine",
    description: "Test & Refine validates the product through real feedback and continuous improvement ensuring quality, usability, and launch readiness.",
    cards: [
      { title: "Usability Testing", text: "Validating flows and interactions with real users. This helps identify friction, improve adoption, and reduce usability risks." },
      { title: "Quality Assurance", text: "Testing functionality, performance, and edge cases. We ensure the product works reliably across devices and scenarios." },
      { title: "Feedback Review", text: "Collecting insights from stakeholders and users. Feedback is prioritized based on impact, feasibility, and business value." },
      { title: "Iteration & Improvement", text: "Refining features, flows, and interfaces continuously. Each iteration improves clarity, performance, and overall experience." },
      { title: "Release Readiness", text: "Ensuring the product is stable and ready for real-world use. Final checks help reduce launch risk and support confident delivery." },
    ],
    expect: "Through continuous testing and refinement, we reduce usability issues and improve the product with every cycle delivering a polished experience ready for real users.",
  },
];

const growingSteps = [
  {
    number: "1", title: "Build",
    description: "Build focuses on turning designs into reliable, scalable functionality through focused execution and continuous alignment.",
    cards: [
      { title: "Idea Alignment Session", text: "A focused session to align on the core idea, goals, and priorities. This ensures everyone is aligned on what needs to be built and what can wait." },
      { title: "MVP Validation Prototypes", text: "Creating quick, testable prototypes of key flows and features. This helps validate assumptions early and reduces risk before development begins." },
      { title: "Accelerated Development", text: "Building essential features using a lean, efficient approach. This allows us to move quickly while maintaining quality and stability." },
    ],
    expect: "We create a shared understanding of the problem, align on vision and direction, and define clear goals before moving into design.",
  },
  {
    number: "2", title: "Launch",
    description: "Launch ensures a smooth, confident release and early validation through real user feedback.",
    cards: [
      { title: "Launch Readiness Check", text: "We clarify business priorities, constraints, and success criteria. This ensures the product direction supports growth, value creation, and long-term goals." },
      { title: "Development & Go-Live", text: "Releasing the product to production and making it accessible to users. We ensure the launch is quick, controlled, and aligned with your goals." },
      { title: "Early Feedback Monitoring", text: "Observing real user behavior and collecting early feedback post-launch. This helps validate assumptions and identify immediate improvements." },
    ],
    expect: "Clear, user-first designs shaped through regular reviews and real user insights ensuring solutions that truly work.",
  },
];

const introContent = {
  agile: {
    label: "FOR GROWING PRODUCTS",
    heading: ["An iterative process that adapts", "as products evolve"],
    desc: "For teams with a live product or ongoing roadmap, we follow an iterative, collaborative process that supports continuous improvement, learning, and scale.",
  },
  growing: {
    label: "FOR EARLY-STAGE TEAMS",
    heading: ["From idea to launch without", "wasting time"],
    desc: "This process is designed for early-stage teams who need to move fast without guessing. We focus on clarity, prioritization, and rapid execution so you can validate your idea and launch an MVP with confidence.",
  },
};



type TabKey = "agile" | "growing";

const SLIDE_PX = 400;
const HOLD_PX = 80;

export default function ProcessFlow() {
  const [activeTab, setActiveTab] = useState<TabKey>("agile");
const intro = introContent[activeTab];
const steps = activeTab === "agile" ? agileSteps : growingSteps;
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  const panelEls = useRef<(HTMLDivElement | null)[]>([]);
  const headerEls = useRef<(HTMLDivElement | null)[]>([]);
  const bodyEls = useRef<(HTMLDivElement | null)[]>([]);
  const cardEls = useRef<(HTMLDivElement | null)[][]>([]);

  // 🔥 smooth animation storage
  const animatedScroll = useRef<number[]>([]);

  const [navH, setNavH] = useState(0);
  const [toggleH, setToggleH] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const nav = document.querySelector<HTMLElement>("header, nav, [data-navbar]");
      setNavH(nav ? nav.offsetHeight : 0);
      if (toggleRef.current) setToggleH(toggleRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* ============================
     STOP WHEN EXPECT TOP HITS
     VIEWPORT - 40px
  ============================ */

  const calculateOverflow = (
    bodyEl: HTMLDivElement,
    headerEl: HTMLDivElement,
    vh: number,
    toggleHeight: number
  ) => {
    const headerHeight = headerEl.offsetHeight;
    const topOffset = toggleHeight + headerHeight;
    const bottomLimit = vh - 40;

    const expectEl = bodyEl.querySelector(`.${styles.expect}`) as HTMLElement | null;
    if (!expectEl) return 0;

    const expectTopInsideBody = expectEl.offsetTop;

    const maxScroll =
      topOffset + expectTopInsideBody - bottomLimit;

    return Math.max(maxScroll, 0);
  };

  const computeHeight = useCallback(() => {
    const sticky = stickyRef.current;
    const intro = introRef.current;
    const toggle = toggleRef.current;
    if (!sticky || !intro || !toggle) return;

    const vh = sticky.offsetHeight;
    const introH = intro.offsetHeight;
    const toggleHeight = toggle.offsetHeight;

    let stepsBudget = 0;

    panelEls.current.forEach((panel, i) => {
      if (!panel) return;
      const bodyEl = bodyEls.current[i];
      const headerEl = headerEls.current[i];
      if (!bodyEl || !headerEl) return;

      const overflow = calculateOverflow(bodyEl, headerEl, vh, toggleHeight);
      stepsBudget += SLIDE_PX + overflow + HOLD_PX;
    });

    const total = vh + introH + stepsBudget;
    if (outerRef.current) outerRef.current.style.height = `${total}px`;
  }, []);

  const tick = useCallback(() => {
    const outer = outerRef.current;
    const sticky = stickyRef.current;
    const intro = introRef.current;
    const toggle = toggleRef.current;
    if (!outer || !sticky || !intro || !toggle) return;

    const outerTop = outer.getBoundingClientRect().top + window.scrollY;
    const rawScroll = window.scrollY - outerTop;
    const scrolled = Math.max(0, rawScroll);

    const vh = sticky.offsetHeight;
    const toggleHeight = toggle.offsetHeight;
    const introH = intro.offsetHeight;

    let cursor = scrolled - introH;

    panelEls.current.forEach((panel, i) => {
      if (!panel) return;
      const bodyEl = bodyEls.current[i];
      const headerEl = headerEls.current[i];
      const cards = cardEls.current[i] ?? [];
      if (!bodyEl || !headerEl) return;

      const overflow = calculateOverflow(bodyEl, headerEl, vh, toggleHeight);
      const stepBudget = SLIDE_PX + overflow + HOLD_PX;

      if (cursor <= 0) {
        panel.style.transform = "translateY(100%)";
        bodyEl.style.transform = "translateY(0)";
        animatedScroll.current[i] = 0;
        resetCards(cards);
        cursor -= stepBudget;
        return;
      }

      if (cursor >= stepBudget) {
        panel.style.transform = "translateY(0)";
        bodyEl.style.transform = `translateY(-${overflow}px)`;
        animatedScroll.current[i] = overflow;
        cursor -= stepBudget;
        return;
      }

      const slideProgress = Math.min(cursor / SLIDE_PX, 1);
      panel.style.transform = `translateY(${(1 - slideProgress) * 100}%)`;

      if (slideProgress >= 1) {
        const target = Math.min(cursor - SLIDE_PX, overflow);

        if (animatedScroll.current[i] == null) {
          animatedScroll.current[i] = target;
        }

        // 🔥 smooth lerp
        animatedScroll.current[i] +=
          (target - animatedScroll.current[i]) * 0.08;

        const bodyScrolled = animatedScroll.current[i];

        bodyEl.style.transform = `translateY(-${bodyScrolled}px)`;

        const headerBottom =
          toggleHeight + headerEl.offsetHeight + 16;

        // 🔥 delayed smoother fade
        cards.forEach(card => {
          if (!card) return;

          const cardOffset = card.offsetTop;
          const cardTop =
            toggleHeight +
            headerEl.offsetHeight +
            cardOffset -
            bodyScrolled;

          const triggerPoint = headerBottom + 80;

          if (cardTop >= triggerPoint) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          } else {
            const behind = Math.max(0, triggerPoint - cardTop);
            const p = Math.min(behind / (card.offsetHeight * 1.4), 1);

            card.style.opacity = String(1 - p);
            card.style.transform = `translateY(-${p * 40}px)`;
          }
        });
      } else {
        bodyEl.style.transform = "translateY(0)";
        animatedScroll.current[i] = 0;
        resetCards(cards);
      }

      cursor -= stepBudget;
    });
  }, []);

  function resetCards(cards: (HTMLDivElement | null)[]) {
    cards.forEach(c => {
      if (!c) return;
      c.style.opacity = "1";
      c.style.transform = "translateY(0)";
    });
  }

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", onScroll);
  }, [tick, activeTab]);

  useEffect(() => {
    const t = setTimeout(computeHeight, 60);
    window.addEventListener("resize", computeHeight);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", computeHeight);
    };
  }, [computeHeight, activeTab]);

  return (
    <div ref={outerRef} style={{ position: "relative" }}>
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#fff",
        }}
      >

        {/* ── Toggle — always on top, sits below navbar ──────────────────── */}
        <div
          ref={toggleRef}
          className={styles.toggleWrapper}
          style={{ position: "relative", zIndex: 50, paddingTop: navH }}
        >
          <div className={styles.toggle}>
            <button
              className={`${styles.pill} ${activeTab === "agile"   ? styles.active : ""}`}
              onClick={() => setActiveTab("agile")}
            >Agile Process</button>
            <button
              className={`${styles.pill} ${activeTab === "growing" ? styles.active : ""}`}
              onClick={() => setActiveTab("growing")}
            >From Idea to Launch</button>
          </div>
        </div>

        {/* ── Intro — static layer, steps cover it ───────────────────────── */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.container}>
            <div ref={introRef} className={styles.introBox}>
              <span className={styles.sectionTopLabel}>{intro.label}</span>
              <h2 className={styles.mainHeading}>
                {intro.heading.map((line, i) => <span key={i}>{line}</span>)}
              </h2>
              <p className={styles.subDescription}>{intro.desc}</p>
            </div>
          </div>
        </div>

        {/* ── Step panels — absolutely stacked, JS drives translateY ──────── */}
        {/* All at top:0 inside stickyRef. Each starts at translateY(100%) and
            slides to translateY(0%). Later steps have higher z-index.
            overflow:hidden on stickyRef clips everything below 100vh. */}
        {steps.map((step, i) => {
          if (!cardEls.current[i]) cardEls.current[i] = [];
          return (
            <div
              key={`${activeTab}-step-${i}`}
              ref={el => { panelEls.current[i] = el; }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                // tall enough to contain all content even if it overflows
                minHeight: "100%",
                background: "#fff",
                transform: "translateY(100%)",
                willChange: "transform",
                zIndex: 10 + i,
                overflow: "hidden",
              }}
            >
              {/* Step header — offset by toggle+navbar height so it's not hidden */}
              <div
                ref={el => { headerEls.current[i] = el; }}
                className={styles.container}
                style={{ position: "relative", zIndex: 2, background: "#fff", paddingTop: navH + toggleH }}
              >
                <div className={styles.stepStrip}>
                  <div className={styles.leftBlock}>
                    <span style={{
                      fontSize: "64px",
                      fontWeight: 500,
                      color: "#2f6f63",
                      opacity: 0.55,
                      lineHeight: 1,
                      fontFamily: "var(--font-heading)",
                      flexShrink: 0,
                    }}>
                      {step.number}
                    </span>
                    <h3 className={styles.bigTitle}>{step.title}</h3>
                  </div>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>

              {/* Body — translateY'd upward by JS, cards fade individually */}
              <div
                ref={el => { bodyEls.current[i] = el; }}
                className={styles.container}
                style={{ position: "relative", zIndex: 1, willChange: "transform" }}
              >
                <div className={styles.stepBody}>
                  <span className={styles.label}>What We Do</span>
                  <div className={styles.cardGrid}>
                    {step.cards.map((card, ci) => (
                      <div
                        key={ci}
                        ref={el => { cardEls.current[i][ci] = el; }}
                        className={styles.card}
                        style={{ willChange: "transform, opacity" }}
                      >
                        <h4>{card.title}</h4>
                        <p>{card.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className={styles.expect}>
                    <span className={styles.label}>What You Can Expect</span>
                    <p>{step.expect}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> 
    </div>
  );
}