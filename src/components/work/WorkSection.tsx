
"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./WorkSection.module.css";
// Load GSAP dynamically in browser-only effects to keep SSR bundles small
import { ChevronLeft, ChevronRight } from "lucide-react";

// GSAP will be imported dynamically inside effects

// Sample case study data with full structure
const caseStudiesData = [
  {
    slug: "time-management",
    tag: "EduTech",
    title: "Focused time management for academic work.",
    description: "Plan better, avoid overload, meet deadlines consistently.",
    image: "/images/Casestudy/Time Management/coverImage2.png",
  },
  {
    slug: "go-ride",
    tag: "E-Commerce / Mobility",
    title: "All-in-one app for cycle rentals, routes, and rides.",
    description: "Quick bike access, better utilization, less manual work.",
    image: "/images/Casestudy/GoRide/coverImage1.png",
  },
  {
    slug: "feasto",
    tag: "Entertainment / Cinema",
    title: "Skip queues order snacks right from your seat.",
    description: "Faster ordering, less waiting, no interval rush.",
    image: "/images/Casestudy/Feasto/coverImage4.png",
  },
   {
    slug: "resturent-dashboard",
    tag: "Saas / Operations",
    title: "Real-time restaurant operations in one dashboard.",
    description: "Save time, reduce chaos, make faster decisions.",
    image: "/images/Casestudy/Resturent Dashboard/coverImage3.png",
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
  const gsapRef = useRef<any | null>(null);

  const currentCase = useMemo(() => caseStudiesData[currentIndex], [currentIndex]);
  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === caseStudiesData.length - 1;

  const handlePrevious = useCallback(() => {
    if (isAnimating || isFirstCard) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
    animateSlide("right");
  }, [isAnimating, isFirstCard]);

  const handleNext = useCallback(() => {
    if (isAnimating || isLastCard) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
    animateSlide("left");
  }, [isAnimating, isLastCard]);

  const animateSlide = (direction: "left" | "right") => {
    const fromX = direction === "left" ? 100 : -100;

    // Fade out current (no-op if GSAP not yet loaded)
    const G = gsapRef.current;
    if (G) {
      G.to([cardImageRef.current, cardContentRef.current], {
      opacity: 0,
      x: -fromX * 10,
      duration: 0.4,
      ease: "power2.inOut",
    });
      // Fade in new after brief delay
      setTimeout(() => {
        G.fromTo(
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
    } else {
      // Fallback: quickly reset animation state if GSAP not available
      setTimeout(() => setIsAnimating(false), 200);
    }
  };

  useEffect(() => {
    let ctx: any = null;
    let mounted = true;

    (async () => {
      try {
        const Gmod = (await import("gsap")).default ?? (await import("gsap"));
        const ST = (await import("gsap/ScrollTrigger")).default ?? (await import("gsap/ScrollTrigger"));
        Gmod.registerPlugin(ST);
        if (!mounted) return;
        gsapRef.current = Gmod;

        ctx = Gmod.context(() => {
          const introTl = Gmod.timeline({
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
          Gmod.fromTo(
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
      } catch (err) {
        // animation library failed to load — fail gracefully
        console.error("GSAP failed to load:", err);
      }
    })();

    return () => {
      mounted = false;
      if (ctx) ctx.revert();
    };
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
            <button
              onClick={handlePrevious}
              disabled={isFirstCard}
              className={styles.arrowButton}
              style={{
                width: 40,
                height: 40,
                padding: 0,
                color: "#1E4944",
                border: `1px solid #1E4944`,
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
                cursor: isFirstCard ? "not-allowed" : "pointer",
                opacity: isFirstCard ? 0.5 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              disabled={isLastCard}
              className={styles.arrowButton}
              style={{
                width: 40,
                height: 40,
                padding: 0,
                color: "#1E4944",
                border: `1px solid #1E4944`,
                transition: "all 0.3s ease",
                backgroundColor: "transparent",
                cursor: isLastCard ? "not-allowed" : "pointer",
                opacity: isLastCard ? 0.5 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Card Display */}
          <div className={styles.workCard}>
            <div className={styles.workCardImage} ref={cardImageRef}>
              <Image
                src={currentCase.image}
                alt={currentCase.title}
                className={styles.workCardImageTag}
                width={800}
                height={500}
                priority={currentIndex === 0}
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
