"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Process.module.css";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Clarify the Problem",
    subtitle: "Make sense of what’s unclear",
    description:
      "We align stakeholders, understand users, and define the real problem before solutions or features are discussed.",
  },
  {
    id: 2,
    title: "Define Direction",
    subtitle: "Decide what actually matters",
    description:
      "We identify priorities, scope, and success criteria so teams know what to focus on and what to ignore.",
  },
  {
    id: 3,
    title: "Design & Build with Intent",
    subtitle: "Turn decisions into execution",
    description:
      "Design and development happen with clear intent, guided by earlier decisions not guesswork or trends.",
  },
  {
    id: 4,
    title: "Learn & Improve",
    subtitle: "Adapt based on real usage",
    description:
      "After launch, we observe, learn, and refine helping products evolve as users and needs change.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [fillHeight, setFillHeight] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [showFooter, setShowFooter] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [activeBg, setActiveBg] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const windowHeight = window.innerHeight;
    const sectionRect = section.getBoundingClientRect();

    /* ================= HEADER + BG TOGGLE ================= */

    const headerTrigger = sectionRect.top <= windowHeight * 0.8 &&
                          sectionRect.bottom >= windowHeight * 0.2;

    setShowHeader(headerTrigger);
    setActiveBg(headerTrigger);

    /* ================= TIMELINE HEIGHT ================= */

    const lastStep = stepRefs.current[STEPS.length - 1];
    if (lastStep) {
      const bottom = lastStep.offsetTop + lastStep.offsetHeight;
      line.style.height = `${bottom}px`;
    }

    let newFillHeight = 0;
    const active: number[] = [];

    stepRefs.current.forEach((step, index) => {
      if (!step) return;

      const rect = step.getBoundingClientRect();

      const inView =
        rect.top <= windowHeight * 0.7 &&
        rect.bottom >= windowHeight * 0.2;

      if (inView) {
        active.push(index);
        const nodeCenter = step.offsetTop + 40;
        newFillHeight = nodeCenter;
      }
    });

    /* ================= FOOTER REVEAL ================= */

    // const footerInView =
    //   sectionRect.bottom <= windowHeight * 0.95 &&
    //   sectionRect.bottom >= windowHeight * 0.2;

    // setShowFooter(footerInView);
/* ================= FORCE FULL FILL ON LAST STEP ================= */

const lastStepEl = stepRefs.current[STEPS.length - 1];
let timelineFullyFilled = false;

if (lastStepEl && line) {
  const lastRect = lastStepEl.getBoundingClientRect();

  const lastStepInView =
    lastRect.top <= windowHeight * 0.6;

  if (lastStepInView) {
    newFillHeight = line.offsetHeight; // force full fill
    timelineFullyFilled = true;
  }
}

/* ================= FOOTER REVEAL (AFTER FULL FILL) ================= */

setShowFooter(timelineFullyFilled);

    setVisibleSteps(active);
    setFillHeight(newFillHeight);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <section
      ref={sectionRef}
      className={`${styles.process} ${activeBg ? styles.activeBg : ""}`}
    >
      <div
        className={`${styles.header} ${
          showHeader ? styles.headerVisible : ""
        }`}
      >
        <span className={styles.eyebrow}>CLARITY, STEP BY STEP</span>
        <h2 className={styles.heading}>
          A clear process for making confident product decisions
        </h2>
        <p className={styles.description}>
          We bring clarity at each stage, helping teams make confident decisions
          from idea to launch.
        </p>
      </div>

      <div ref={timelineRef} className={styles.timeline}>
        <div ref={lineRef} className={styles.line}>
          <div
            className={styles.lineFill}
            style={{ height: `${fillHeight}px` }}
          />
        </div>

        {STEPS.map((step, index) => {
          const isLeft = index % 2 === 0;
          const isVisible = visibleSteps.includes(index);

          return (
            <div
              key={step.id}
              // ref={(el) => (stepRefs.current[index] = el)}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className={`${styles.step} ${
                isVisible ? styles.visible : ""
              }`}
            >
              <div className={styles.side}>
                {isLeft && (
                  <img
                    src={`/process/${step.id}.svg`}
                    className={styles.number}
                    alt=""
                  />
                )}
                {!isLeft && (
                  <div className={`${styles.content} ${styles.leftText}`}>
                    <h3>{step.title}</h3>
                    <h6>{step.subtitle}</h6>
                    <p>{step.description}</p>
                  </div>
                )}
              </div>

              <div className={styles.center}>
                <div className={styles.node}>
                  <span />
                </div>
              </div>

              <div className={styles.side}>
                {!isLeft && (
                  <img
                    src={`/process/${step.id}.svg`}
                    className={styles.number}
                    alt=""
                  />
                )}
                {isLeft && (
                  <div className={`${styles.content} ${styles.rightText}`}>
                    <h3>{step.title}</h3>
                    <h6>{step.subtitle}</h6>
                    <p>{step.description}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p
        className={`${styles.footerNote} ${
          showFooter ? styles.footerVisible : ""
        }`}
      >
        Each step reduces uncertainty so progress feels intentional,
        <br /> not reactive.
      </p>
    </section>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";
// import styles from "./Process.module.css";

// type Step = {
//   id: number;
//   title: string;
//   subtitle: string;
//   description: string;
// };

// const STEPS: Step[] = [
//   {
//     id: 1,
//     title: "Clarify the Problem",
//     subtitle: "Make sense of what’s unclear",
//     description:
//       "We align stakeholders, understand users, and define the real problem before solutions or features are discussed.",
//   },
//   {
//     id: 2,
//     title: "Define Direction",
//     subtitle: "Decide what actually matters",
//     description:
//       "We identify priorities, scope, and success criteria so teams know what to focus on and what to ignore.",
//   },
//   {
//     id: 3,
//     title: "Design & Build with Intent",
//     subtitle: "Turn decisions into execution",
//     description:
//       "Design and development happen with clear intent, guided by earlier decisions not guesswork or trends.",
//   },
//   {
//     id: 4,
//     title: "Learn & Improve",
//     subtitle: "Adapt based on real usage",
//     description:
//       "After launch, we observe, learn, and refine helping products evolve as users and needs change.",
//   },
// ];

// export default function Process() {
//   const sectionRef = useRef<HTMLElement | null>(null);
//   const [fillHeight, setFillHeight] = useState<number>(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       if (!section) return;

//       const rect = section.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const progress =
//         (windowHeight - rect.top) / (rect.height + windowHeight);

//       const clamped = Math.min(Math.max(progress, 0), 1);
//       setFillHeight(clamped * 100);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} className={styles.process}>
//       <div className={styles.header}>
//         <span className={styles.eyebrow}>CLARITY, STEP BY STEP</span>
//         <h2 className={styles.heading}>
//           A clear process for making confident product decisions
//         </h2>
//         <p className={styles.description}>
//           We bring clarity at each stage, helping teams make confident decisions
//           from idea to launch.
//         </p>
//       </div>

//       <div className={styles.timeline}>
//         <div className={styles.line}>
//           <div
//             className={styles.lineFill}
//             style={{ height: `${fillHeight}%` }}
//           />
//         </div>

//         {STEPS.map((step, index) => {
//           const isNumberLeft = index % 2 === 0;

//           return (
//             <div key={step.id} className={styles.step}>
//               {/* LEFT COLUMN */}
//               <div className={styles.colLeft}>
//                 {isNumberLeft ? (
//                   <img
//                     src={`/process/${step.id}.svg`}
//                     alt={`Step ${step.id}`}
//                     className={styles.number}
//                   />
//                 ) : (
//                   <div className={styles.content}>
//                     <h3>{step.title}</h3>
//                     <h6 className={styles.subtitle}>{step.subtitle}</h6>
//                     <p>{step.description}</p>
//                   </div>
//                 )}
//               </div>

//               {/* CENTER LINE + NODE */}
//               <div className={styles.center}>
//                 <div className={styles.node}>
//                   <span className={styles.nodeInner} />
//                 </div>
//               </div>

//               {/* RIGHT COLUMN */}
//               <div className={styles.colRight}>
//                 {isNumberLeft ? (
//                   <div className={styles.content}>
//                     <h3>{step.title}</h3>
//                     <h6 className={styles.subtitle}>{step.subtitle}</h6>
//                     <p>{step.description}</p>
//                   </div>
//                 ) : (
//                   <img
//                     src={`/process/${step.id}.svg`}
//                     alt={`Step ${step.id}`}
//                     className={styles.number}
//                   />
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <p className={styles.footerNote}>
//         Each step reduces uncertainty so progress feels intentional,<br></br> not reactive.
//       </p>
//     </section>
//   );
// }
