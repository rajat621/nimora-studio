
"use client";

import { useEffect, useRef } from "react";
import styles from "./WorkSection.module.css";
import WorkCard from "./WorkCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // =========================
      // INTRO TIMELINE (Heading → Description)
      // =========================
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      introTl.fromTo(
        headingRef.current,
        {
          y: 80,
          opacity: 0,
          clipPath: "inset(0 0 100% 0)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          ease: "power3.out",
        }
      );

introTl.fromTo(
  descriptionRef.current,
  {
    y: 50,
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
  },
  {
    y: 0,
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    duration: 0.8, // 👈 slightly faster
    ease: "power3.out",
  },
  "-=0.4" // 👈 starts before heading fully finishes
);


      // =========================
      // CARDS – WAVE ARRIVAL
      // =========================
      const cards = gsap.utils.toArray(`.${styles.workCard}`);

      gsap.set(cards, {
        y: (i) => 140 + i * 40,
        opacity: 0,
      });

      const cardsTl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.workCards}`,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      cards.forEach((card: any, index: number) => {
        cardsTl.to(
          card,
          {
            y: 0,
            opacity: 1,
            duration: 1 + index * 0.2,
            ease: "power3.out",
          },
          0
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.work} ref={sectionRef}>
      <div className={styles.container}>
        
        <div className={styles.workIntro}>
          <h2 className={styles.workHeading} ref={headingRef}>
            <span className={styles.headingItalic}>Our</span>{" "}
            <span className={styles.headingNormal}>Latest</span>
            <br />
            <span className={styles.headingBold}>Work</span>
          </h2>

          <div className={styles.workDescription} ref={descriptionRef}>
            <p>
              Explore projects where strategy, design, and execution come together to
              solve real problems.
            </p>

            <p>
              We have partnered with teams to bring structure to complex ideas, improve
              usability, and build digital products that users understand and businesses
              can grow with.
            </p>
          </div>
        </div>

        <div className={styles.workCards}>
          <WorkCard
            image="/images/work/work-1.jpg"
            title="A real time data analytical dashboard"
            description="Design integrated AI based end to end platform"
          />
          <WorkCard
            image="/images/work/work-2.jpg"
            title="A real time data analytical dashboard"
            description="Design integrated AI based end to end platform"
          />
          <WorkCard
            image="/images/work/work-3.jpg"
            title="A real time data analytical dashboard"
            description="Design integrated AI based end to end platform"
          />
        </div>

        <div className={styles.cta}>
          <button className={styles.primaryBtn}>
            See how we work
          </button>
        </div>

      </div>
    </section>
  );
}
