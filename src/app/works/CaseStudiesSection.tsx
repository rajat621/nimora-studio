"use client";
import { useEffect, useRef } from "react";
import styles from "./WorksPage.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CaseStudy = {
  title: string;
  description: string;
  image: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Simplifying large-scale product discovery through design.",
    description:
      "BigBasket is India’s leading online grocery platform, known for fresh produce, trusted quality, and a seamless shopping experience.",
    image: "/images/industries/image_1.png",
  },
  {
    title: "Designing intuitive fintech dashboards.",
    description:
      "We improved complex transaction flows and built trust-driven financial experiences.",
    image: "/images/industries/image_2.png",
  },
  {
    title: "AI-powered analytics platform redesign.",
    description:
      "From dashboards to insights, we streamlined user workflows.",
    image: "/images/industries/image_3.png",
  },
    {
    title: "Enterprise workflow optimization.",
    description:
      "Rebuilt complex systems into simple usable flows.",
    image: "/images/industries/image_5.png",
  },
  {
    title: "Scaling SaaS onboarding experiences.",
    description:
      "Improved adoption and reduced drop-offs with better UX.",
    image: "/images/industries/image_4.png",
  },
  {
    title: "Enterprise workflow optimization.",
    description:
      "Rebuilt complex systems into simple usable flows.",
    image: "/images/industries/image_5.png",
  },
];

function CaseCard({
  study,
  full,
}: {
  study: CaseStudy;
  full?: boolean;
}) {
  return (
    <div className={`${styles.card} ${full ? styles.full : ""}`}>
      <div
        className={styles.imagePlaceholder}
        style={{
          backgroundImage: `url(${study.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className={styles.cardContent}>
        <h3>{study.title}</h3>
        <p>{study.description}</p>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const cards = gsap.utils.toArray(`.${styles.card}`);

      // Initial state (wave start position)
      gsap.set(cards, {
        y: (i) => 140 + i * 40,
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      cards.forEach((card: any, index: number) => {
        tl.to(
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

  const first = caseStudies[0];
  const remaining = caseStudies.slice(1);

  const isRemainingOdd = remaining.length % 2 !== 0;

  const gridItems = isRemainingOdd
    ? remaining.slice(0, -1)
    : remaining;

  const lastFull = isRemainingOdd
    ? remaining[remaining.length - 1]
    : null;

  return (
    <section ref={sectionRef} className={styles.caseSection}>
      <CaseCard study={first} full />

      <div className={styles.grid}>
        {gridItems.map((study, index) => (
          <CaseCard key={index} study={study} />
        ))}
      </div>

      {lastFull && <CaseCard study={lastFull} full />}
    </section>
  );
}