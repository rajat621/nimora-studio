"use client";

import Image from "next/image";
import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";
import styles from "./ProcessFlow.module.css";

// ---------------------------------------------------------------------------
// Data — UNCHANGED
// ---------------------------------------------------------------------------

const agileSteps = [
  {
    number: "1",
    title: "Discover",
    description:
      "Discover helps us align business goals, user needs, and market insights to define the right problem and set a clear direction from day one.",
    cards: [
      { title: "Business Goals", text: "We clarify business priorities, constraints, and success criteria. This ensures the product direction supports growth, value creation, and long-term goals." },
      { title: "User Insights", text: "We identify key user groups and uncover their expectations, challenges, and behaviors. These insights guide decisions that improve adoption and usability." },
      { title: "Market Research", text: "We evaluate the competitive landscape and industry trends. This helps define positioning, opportunities, and a clear path forward." },
    ],
    expect: "We create a shared understanding of the problem, align on vision and direction, and define clear goals before moving into design.",
  },
  {
    number: "2",
    title: "Design",
    description:
      "Design transforms insights into intuitive experiences through clear structure, prototyping, and continuous refinement ensuring usability and business alignment before build begins.",
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
    number: "3",
    title: "Build",
    description:
      "Build turns approved designs into scalable, working products through focused development and continuous alignment.",
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
    number: "4",
    title: "Test & Refine",
    description:
      "Test & Refine validates the product through real feedback and continuous improvement ensuring quality, usability, and launch readiness.",
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
    number: "1",
    title: "Build",
    description:
      "Build focuses on turning designs into reliable, scalable functionality through focused execution and continuous alignment.",
    cards: [
      { title: "Idea Alignment Session", text: "A focused session to align on the core idea, goals, and priorities. This ensures everyone is aligned on what needs to be built and what can wait." },
      { title: "MVP Validation Prototypes", text: "Creating quick, testable prototypes of key flows and features. This helps validate assumptions early and reduces risk before development begins." },
      { title: "Accelerated Development", text: "Building essential features using a lean, efficient approach. This allows us to move quickly while maintaining quality and stability." },
    ],
    expect: "We create a shared understanding of the problem, align on vision and direction, and define clear goals before moving into design.",
  },
  {
    number: "2",
    title: "Launch",
    description:
      "Launch ensures a smooth, confident release and early validation through real user feedback.",
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

// ---------------------------------------------------------------------------
// Constants — UNCHANGED except TOGGLE_CARD_GAP added
// ---------------------------------------------------------------------------

const SLIDE_PX    = 700;
const HOLD_PX     = 300;   // more reading time per card
const BODY_DELAY  = 180;
// Extra scroll buffer after the LAST card so Growing tab doesn't switch
// before the user has finished reading. This creates a deliberate pause.
const LAST_CARD_EXTRA_HOLD = 0; // ~2.2s of reading time after expect section is visible
// Fixed gap between toggle bottom and card top (matches intro↔toggle gap)
const TOGGLE_CARD_GAP = 40;



// ---------------------------------------------------------------------------
// Helpers — UNCHANGED
// ---------------------------------------------------------------------------

function calcOverflow(
  bodyEl: HTMLDivElement,
  headerEl: HTMLDivElement,
  vh: number,
  toggleHeight: number
): number {
  const headerHeight = headerEl.offsetHeight;
  const topOffset    = toggleHeight + headerHeight;
  const bottomLimit  = vh - 40;

  const expectEl = bodyEl.querySelector(
    `.${styles.expect}`
  ) as HTMLElement | null;
  if (!expectEl) return 0;

  return Math.max(topOffset + expectEl.offsetTop - bottomLimit, 0);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ProcessFlow() {
  const [activeTab, setActiveTab] = useState<TabKey>("agile");

  const intro = introContent[activeTab];
  const steps = activeTab === "agile" ? agileSteps : growingSteps;

  // ── Refs — UNCHANGED ──────────────────────────────────────────────────────
  const outerRef   = useRef<HTMLDivElement | null>(null);
  const stickyRef  = useRef<HTMLDivElement | null>(null);
  const toggleRef  = useRef<HTMLDivElement | null>(null);
  const introRef   = useRef<HTMLDivElement | null>(null);

  const panelEls   = useRef<(HTMLDivElement | null)[]>([]);
  const headerEls  = useRef<(HTMLDivElement | null)[]>([]);
  const bodyEls    = useRef<(HTMLDivElement | null)[]>([]);
  const cardEls    = useRef<(HTMLDivElement | null)[][]>([]);

  const animatedScroll  = useRef<number[]>([]);
  // Ref mirror of activeTab so tick() can read the current tab synchronously
  // without waiting for React to commit the next render.
  const activeTabRef    = useRef<TabKey>("agile");
  // When true, tick() skips all panel animation — used during tab switches
  // to prevent intermediate scroll positions from flashing old card states.
  const isTabSwitching  = useRef(false);

  const [navH, setNavH]       = useState(0);
  const [toggleH, setToggleH] = useState(0);

  const budgetCache = useRef<Record<TabKey, number>>({ agile: 0, growing: 0 });

  // ── All hooks — UNCHANGED ─────────────────────────────────────────────────
  // Keep ref in sync with state — runs synchronously before paint
  useLayoutEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

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

  const computeHeight = useCallback(() => {
    const sticky  = stickyRef.current;
    const introEl = introRef.current;
    const toggle  = toggleRef.current;
    if (!sticky || !introEl || !toggle) return;

    const vh           = sticky.offsetHeight;
    const introH       = introEl.offsetHeight;
    const toggleHeight = toggle.offsetHeight;

    let renderedBudget = introH;
    const totalPanels = panelEls.current.filter(Boolean).length;
    panelEls.current.forEach((_, i) => {
      const bodyEl   = bodyEls.current[i];
      const headerEl = headerEls.current[i];
      if (!bodyEl || !headerEl) return;
      const overflow = calcOverflow(bodyEl, headerEl, vh, toggleHeight);
      const isLast = i === totalPanels - 1;
      renderedBudget += SLIDE_PX + overflow + HOLD_PX + (isLast ? LAST_CARD_EXTRA_HOLD : 0);
    });
    // Add an extra hold after the last step so the tab doesn't switch
    // immediately when the last card's body scroll finishes.
    renderedBudget += HOLD_PX * 2;
    budgetCache.current[activeTab] = renderedBudget;

    const otherTab: TabKey = activeTab === "agile" ? "growing" : "agile";
    if (budgetCache.current[otherTab] === 0) {
      const otherSteps = otherTab === "agile" ? agileSteps : growingSteps;
      budgetCache.current[otherTab] =
        introH + otherSteps.length * (SLIDE_PX + HOLD_PX + 200);
    }

    const totalScrollable =
      budgetCache.current.agile + budgetCache.current.growing;

    if (outerRef.current) {
      outerRef.current.style.height = `${vh + totalScrollable}px`;
    }
  }, [activeTab]);

  const tick = useCallback(() => {
    // While a tab switch is in progress, don't animate panels.
    // The switch handler will re-enable this once the scroll settles.
    if (isTabSwitching.current) return;

    const outer   = outerRef.current;
    const sticky  = stickyRef.current;
    const introEl = introRef.current;
    const toggle  = toggleRef.current;
    if (!outer || !sticky || !introEl || !toggle) return;

    const scrollY  = window.scrollY;
    const outerTop = outer.getBoundingClientRect().top + scrollY;
    const scrolled = Math.max(0, scrollY - outerTop);

    const vh           = sticky.offsetHeight;
    const toggleHeight = toggle.offsetHeight;
    const agileBudget  = budgetCache.current.agile;

    const desiredTab: TabKey =
      agileBudget > 0 && scrolled >= agileBudget ? "growing" : "agile";

    // Read the ref — always reflects the latest committed tab synchronously
    const currentTab = activeTabRef.current;

    if (desiredTab !== currentTab) {
      // Reset all panels to hidden BEFORE React re-renders the new tab's DOM.
      // This prevents the previous tab's last-card state from flashing.
      panelEls.current.forEach((panel) => {
        if (panel) panel.style.transform = "translateY(100%)";
      });
      bodyEls.current.forEach((body) => {
        if (body) body.style.transform = "translateY(0)";
      });
      animatedScroll.current = [];
      // Update both ref and state together
      activeTabRef.current = desiredTab;
      setActiveTab(desiredTab);
      return;
    }

    const tabOffset     = currentTab === "agile" ? 0 : agileBudget;
    const localScrolled = scrolled - tabOffset;
    const introH        = introEl.offsetHeight;

    let cursor = localScrolled - introH;

    panelEls.current.forEach((panel, i) => {
      if (!panel) return;

      const bodyEl   = bodyEls.current[i];
      const headerEl = headerEls.current[i];
      if (!bodyEl || !headerEl) return;

      const overflow   = calcOverflow(bodyEl, headerEl, vh, toggleHeight);
      const isLastPanel = i === panelEls.current.filter(Boolean).length - 1;
      const stepBudget = SLIDE_PX + overflow + HOLD_PX + (isLastPanel ? LAST_CARD_EXTRA_HOLD : 0);

      if (cursor <= 0) {
        panel.style.transform  = "translateY(100%)";
        bodyEl.style.transform = "translateY(0)";
        animatedScroll.current[i] = 0;
        cursor -= stepBudget;
        return;
      }

      if (cursor >= stepBudget) {
        panel.style.transform  = "translateY(0)";
        bodyEl.style.transform = `translateY(-${overflow}px)`;
        animatedScroll.current[i] = overflow;
        cursor -= stepBudget;
        return;
      }

      const slideProgress = Math.min(cursor / SLIDE_PX, 1);
      panel.style.transform = `translateY(${(1 - slideProgress) * 100}%)`;

      if (slideProgress >= 1) {
        const delayedCursor = Math.max(0, cursor - SLIDE_PX - BODY_DELAY);
        const target  = Math.min(delayedCursor, overflow);
        const current = animatedScroll.current[i] ?? 0;
        animatedScroll.current[i] = current + (target - current) * 0.14;
        bodyEl.style.transform = `translateY(-${animatedScroll.current[i]}px)`;
      }

      cursor -= stepBudget;
    });
  }, [activeTab]);

  useEffect(() => {
    const onScroll = () => requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => window.removeEventListener("scroll", onScroll);
  }, [tick, activeTab]);

  useEffect(() => {
    const t = setTimeout(computeHeight, 0);
    window.addEventListener("resize", computeHeight);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", computeHeight);
    };
  }, [computeHeight, activeTab]);

  const handleTabClick = useCallback(
    (tab: TabKey) => {
      // Use ref — not state — so this works on single click without stale closure
      if (tab === activeTabRef.current) return;
      const outer = outerRef.current;
      if (!outer) return;

      // 1. Freeze tick() so no intermediate scroll events animate old panels
      isTabSwitching.current = true;

      // 2. Update ref synchronously FIRST — tick() reads this, not state
      activeTabRef.current = tab;

      // 3. Hide all panels and reset body offsets on the current DOM
      panelEls.current.forEach((panel) => {
        if (panel) panel.style.transform = "translateY(100%)";
      });
      bodyEls.current.forEach((body) => {
        if (body) body.style.transform = "translateY(0)";
      });
      animatedScroll.current = [];

      // 4. If budgetCache.agile is still 0 (user clicked before computeHeight ran),
      //    measure it inline right now so the scroll target is always correct.
      if (budgetCache.current.agile === 0) {
        const sticky  = stickyRef.current;
        const introEl = introRef.current;
        const toggle  = toggleRef.current;
        if (sticky && introEl && toggle) {
          const vh           = sticky.offsetHeight;
          const introH       = introEl.offsetHeight;
          const toggleHeight = toggle.offsetHeight;
          let budget = introH;
          panelEls.current.forEach((_, i) => {
            const bEl = bodyEls.current[i];
            const hEl = headerEls.current[i];
            if (!bEl || !hEl) return;
            const overflow = calcOverflow(bEl, hEl, vh, toggleHeight);
            const isLastInline = i === panelEls.current.filter(Boolean).length - 1;
            budget += SLIDE_PX + overflow + HOLD_PX + (isLastInline ? LAST_CARD_EXTRA_HOLD : 0);
          });
          budget += HOLD_PX * 2; // extra pause after last card before tab switch
          budgetCache.current.agile = budget;
          // Also seed growing estimate and update outer height
          if (budgetCache.current.growing === 0) {
            const introH2 = introEl.offsetHeight;
            budgetCache.current.growing =
              introH2 + growingSteps.length * (SLIDE_PX + HOLD_PX + 200);
          }
          if (outerRef.current) {
            const total = budgetCache.current.agile + budgetCache.current.growing;
            outerRef.current.style.height = `${sticky.offsetHeight + total}px`;
          }
        }
      }

      // 5. Compute target scroll and jump instantly
      const outerTop = outer.getBoundingClientRect().top + window.scrollY;
      const targetY  = tab === "growing"
        ? outerTop + budgetCache.current.agile
        : outerTop;
      window.scrollTo({ top: targetY });

      // 6. Flip React state — triggers re-render with new tab's intro + panels
      setActiveTab(tab);

      // 7. Re-enable tick() after two rAF cycles:
      //    frame 1 → React commits new DOM
      //    frame 2 → browser settles final scroll position
      //    After that tick() runs normally on the correct DOM at localScrolled=0
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isTabSwitching.current = false;
        });
      });
    },
    [] // no deps — reads everything via refs, never stale
  );

  // ── Render ────────────────────────────────────────────────────────────────
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
        {/* ── Toggle — UNCHANGED ───────────────────────────────────────── */}
        <div
          ref={toggleRef}
          className={styles.toggleWrapper}
          style={{ position: "relative", zIndex: 50, paddingTop: navH }}
        >
          <div className={styles.toggle}>
            <button
              className={`${styles.pill} ${activeTab === "agile" ? styles.active : ""}`}
              onClick={() => handleTabClick("agile")}
            >
              Agile Process
            </button>
            <button
              className={`${styles.pill} ${activeTab === "growing" ? styles.active : ""}`}
              onClick={() => handleTabClick("growing")}
            >
              From Idea to Launch
            </button>
          </div>
        </div>

        {/* ── Intro — UNCHANGED ────────────────────────────────────────── */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className={styles.container}>
            <div ref={introRef} className={styles.introBox}>
              <span className={styles.sectionTopLabel}>{intro.label}</span>
              <h2 className={styles.mainHeading}>
                {intro.heading.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </h2>
              <p className={styles.subDescription}>{intro.desc}</p>
            </div>
          </div>
        </div>

        {/* ── Step panels ──────────────────────────────────────────────── */}
        {steps.map((step, i) => {
          if (!cardEls.current[i]) cardEls.current[i] = [];
          return (
            <div
              key={`${activeTab}-step-${i}`}
              ref={(el) => { panelEls.current[i] = el; }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                minHeight: "100%",
                background: "#fff",
                transform: "translateY(100%)",
                willChange: "transform",
                zIndex: 10 + i,
                overflow: "hidden",
              }}
            >
              {/* ── Step header ─────────────────────────────────────── */}
              <div
                ref={(el) => { headerEls.current[i] = el; }}
                className={styles.container}
                style={{
                  position: "relative",
                  zIndex: 2,
                  background: "#fff",
                  // navH + toggleH = top of content area; + TOGGLE_CARD_GAP = 40px breathing room
                  paddingTop: navH + toggleH + TOGGLE_CARD_GAP,
                }}
              >
                <div className={styles.stepStrip}>
                  {/* SVG icon (50×54) + title — gap: 8px */}
                  <div className={styles.leftBlock}>
                    <Image
                      src={`/process/${step.number}.svg`}
                      alt={`Step ${step.number}`}
                      width={50}
                      height={54}
                      style={{ flexShrink: 0, display: "block" }}
                    />
                    <h3 className={styles.bigTitle}>{step.title}</h3>
                  </div>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>

              {/* ── Body ────────────────────────────────────────────── */}
              <div
                ref={(el) => { bodyEls.current[i] = el; }}
                className={styles.container}
                style={{
                  position: "relative",
                  zIndex: 1,
                  willChange: "transform",
                }}
              >
                <div className={styles.stepBody}>
                  {/* "What We Do" label — gap to cards: 16px (via CSS) */}
                  <span className={styles.label}>What We Do</span>

                  {/* Cards grid — gap 24px both axes (via CSS) */}
                  <div className={styles.cardGrid}>
                    {step.cards.map((card, ci) => (
                      <div
                        key={ci}
                        ref={(el) => { cardEls.current[i][ci] = el; }}
                        className={styles.card}
                        style={{ willChange: "transform, opacity" }}
                      >
                        <h4>{card.title}</h4>
                        <p>{card.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* "What You Can Expect" — gap from cards: 40px (via CSS) */}
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