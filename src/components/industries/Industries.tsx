"use client";

import { useEffect, useRef } from "react";
import styles from "./Industries.module.css";
import IndustryCard from "./IndustryCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Industry = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: "saas",
    eyebrow: "SaaS & B2B Products",
    title:
      "We design scalable SaaS products that improve adoption, retention, and productivity.",
    description:
      "Our UX focuses on onboarding, workflows, and dashboards that teams can use efficiently.",
    image: "/images/industries/image_1.png",
  },
  {
    id: "fintech",
    eyebrow: "Fintech & Trust-Driven Platforms",
    title:
      "We design secure, intuitive financial experiences that build trust and confidence.",
    description:
      "From dashboards to transaction flows, we simplify complex financial data into clear user journeys.",
    image: "/images/industries/image_2.png",
  },
  {
    id: "ai",
    eyebrow: "AI-Enabled Tools",
    title:
      "We design AI products that feel human, transparent, and usable at scale.",
    description:
      "We turn complex AI systems into interfaces users can understand and trust.",
    image: "/images/industries/image_3.png",
  },
  {
    id: "edtech",
    eyebrow: "EdTech",
    title:
      "We create engaging learning experiences that are easy to use and scale.",
    description:
      "Our designs help learners stay focused and educators deliver value without friction.",
    image: "/images/industries/image_4.png",
  },
  {
    id: "healthcare",
    eyebrow: "Healthcare",
    title:
      "We design user-friendly healthcare interfaces that prioritize clarity and accessibility.",
    description:
      "From patient portals to admin dashboards, we reduce cognitive load and errors.",
    image: "/images/industries/image_5.png",
  },
  {
    id: "ecommerce",
    eyebrow: "E-commerce",
    title:
      "We design conversion-focused shopping experiences that feel effortless.",
    description:
      "Every interaction is optimized for speed, clarity, and trust.",
    image: "/images/industries/image_6.png",
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    // =========================
    // HEADING + DESCRIPTION ANIMATION
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
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4" // 👈 starts slightly before heading finishes
    );

    // =========================
    // HORIZONTAL SCROLL LOGIC (UNCHANGED)
    // =========================

    const containerWidth = 890;

    const getContainerOffset = () => {
      return (window.innerWidth - containerWidth) / 2;
    };

    const handleResize = () => {
      const scrollDistance =
        track.scrollWidth - containerWidth;

      section.style.height =
        scrollDistance + window.innerHeight + "px";
    };

    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;

      const containerOffset = getContainerOffset();

      const scrollDistance =
        track.scrollWidth - containerWidth;

      const start = sectionTop;
      const end = sectionTop + scrollDistance;

      const progress = Math.min(
        Math.max((scrollY - start) / (end - start), 0),
        1
      );

      const translateX =
        containerOffset - scrollDistance * progress;

      track.style.transform = `translate3d(${translateX}px, 0, 0)`;
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", () => {
      handleResize();
      handleScroll();
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.industries} ref={sectionRef}>
      <div className={styles.header}>
        <h2 className={styles.heading} ref={headingRef}>
          <span className={styles.headingItalic}>Industries</span>{" "}
          <span className={styles.headingNormal}>We Serve</span>
        </h2>

        <p className={styles.description1} ref={descriptionRef}>
          We don’t specialise in industries we specialise in product problems.
          We work most closely in domains where clarity, trust, and usability
          matter most.
        </p>
      </div>

      <div className={styles.sticky}>
        <div className={styles.track} ref={trackRef}>
          {INDUSTRIES.map((industry) => (
            <IndustryCard
              key={industry.id}
              eyebrow={industry.eyebrow}
              title={industry.title}
              description={industry.description}
              image={industry.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
