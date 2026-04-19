
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./WorkSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

// Sample case study data with full structure
const caseStudiesData = [
  {
    slug: "time-management",
    tag: "EduTech",
    title: "Focused time management for academic work.",
    description: "Plan better, avoid overload, meet deadlines consistently.",
    image: "images/Casestudy/Time Management/coverImage2.png",
  },
  {
    slug: "go-ride",
    tag: "E-Commerce / Mobility",
    title: "All-in-one app for cycle rentals, routes, and rides.",
    description: "Quick bike access, better utilization, less manual work.",
    image: "images/Casestudy/GoRide/coverImage1.png",
  },
  {
    slug: "feasto",
    tag: "Entertainment / Cinema",
    title: "Skip queues order snacks right from your seat.",
    description: "Faster ordering, less waiting, no interval rush.",
    image: "images/Casestudy/Feasto/coverImage4.png",
  },
   {
    slug: "resturent-dashboard",
    tag: "Saas / Operations",
    title: "Real-time restaurant operations in one dashboard.",
    description: "Save time, reduce chaos, make faster decisions.",
    image: "images/Casestudy/Resturent Dashboard/coverImage3.png",
  },
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const cardImageRef = useRef<HTMLDivElement | null>(null);
  const cardContentRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentCase = caseStudiesData[currentIndex];
  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === caseStudiesData.length - 1;

  const handlePrevious = () => {
    if (isAnimating || isFirstCard) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
    animateSlide("right");
  };

  const handleNext = () => {
    if (isAnimating || isLastCard) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
    animateSlide("left");
  };

  const animateSlide = (direction: "left" | "right") => {
    const fromX = direction === "left" ? 100 : -100;

    // Fade out current
    gsap.to([cardImageRef.current, cardContentRef.current], {
      opacity: 0,
      x: -fromX * 10,
      duration: 0.4,
      ease: "power2.inOut",
    });

    // Fade in new after brief delay
    setTimeout(() => {
      gsap.fromTo(
        [cardImageRef.current, cardContentRef.current],
        {
          opacity: 0,
          x: fromX * 10,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            setIsAnimating(false);
          },
        }
      );
    }, 100);
  };

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
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Initial card animation
      gsap.fromTo(
        [cardImageRef.current, cardContentRef.current],
        {
          y: 140,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reset",
          },
        }
      );
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

        {/* Carousel Section */}
        <div className={styles.carouselSection}>
          {/* Navigation Arrows - Above Card */}
          <div className={styles.navigationArrows}>
            <IconButton
              onClick={handlePrevious}
              disabled={isFirstCard}
              className={styles.arrowButton}
              sx={{
                width: 40,
                height: 40,
                padding: 0,
                color: "#1E4944",
                border: `1px solid #1E4944`,
                transition: "all 0.3s ease",
                "&:hover:not(:disabled)": {
                  backgroundColor: "rgba(30, 73, 68, 0.08)",
                },
                "&.Mui-disabled": {
                  opacity: 0.5,
                  color: "#1E4944",
                  borderColor: "#1E4944",
                  cursor: "not-allowed",
                },
                opacity: isFirstCard ? 0.5 : 1,
              }}
            >
              <ChevronLeft fontSize="small" />
            </IconButton>

            <IconButton
              onClick={handleNext}
              disabled={isLastCard}
              className={styles.arrowButton}
              sx={{
                width: 40,
                height: 40,
                padding: 0,
                color: "#1E4944",
                border: `1px solid #1E4944`,
                transition: "all 0.3s ease",
                "&:hover:not(:disabled)": {
                  backgroundColor: "rgba(30, 73, 68, 0.08)",
                },
                "&.Mui-disabled": {
                  opacity: 0.5,
                  color: "#1E4944",
                  borderColor: "#1E4944",
                  cursor: "not-allowed",
                },
                opacity: isLastCard ? 0.5 : 1,
              }}
            >
              <ChevronRight fontSize="small" />
            </IconButton>
          </div>

          {/* Card Display */}
          <div className={styles.workCard}>
            <div className={styles.workCardImage} ref={cardImageRef}>
              <img
                src={currentCase.image}
                alt={currentCase.title}
                className={styles.workCardImageTag}
              />
            </div>

            <div className={styles.workCardContent} ref={cardContentRef}>
              <span className={styles.workCardTag}>{currentCase.tag}</span>
              <h3 className={styles.workCardTitle}>{currentCase.title}</h3>
              <p className={styles.workCardDescription}>
                {currentCase.description}
              </p>

              <Link
                href={`/casestudies/${currentCase.slug}`}
                className={styles.workCardButton}
              >
                View Case Study
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <Link href="/works">
            <button className={styles.primaryBtn}>See our work</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
