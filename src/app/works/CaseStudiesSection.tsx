"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./WorksPage.module.css";
// GSAP will be dynamically imported in the effect to avoid SSR bundle costs

type CaseStudy = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Focused time management for academic work.",
    description:"Plan better, avoid overload, meet deadlines consistently.",
    image: "/images/Casestudy/Time Management/coverImage.png",
    slug: "time-management",
  },
  {
    title: "All-in-one app for cycle rentals, routes, and rides.",
    description: "Quick bike access, better utilization, less manual work.",
    image: "/images/Casestudy/GoRide/coverImage.png",
    slug: "go-ride",
  },
  {
    title: "Skip queues order snacks right from your seat.",
    description: "Faster ordering, less waiting, no interval rush.",
    image: "/images/Casestudy/Feasto/coverImage.png",
    slug: "feasto",
  },
  {
    title: "Real-time restaurant operations in one dashboard. ",
    description: "Save time, reduce chaos, make faster decisions.",
    image: "/images/Casestudy/Resturent dashboard/coverImage.png",
    slug: "restaurant-dashboard",
  },
];

function CaseCard({
  study,
  full,
  prioritize,
}: {
  study: CaseStudy;
  full?: boolean;
  prioritize?: boolean;
}) {
  const cardBody = (
    <div className={`${styles.card} ${full ? styles.full : ""}`}>
      <div className={styles.imagePlaceholder}>
        <Image
          src={study.image}
          alt={study.title}
          fill
          sizes={full ? "(max-width: 768px) 100vw, 1120px" : "(max-width: 768px) 100vw, 50vw"}
          quality={75}
          priority={!!prioritize}
          fetchPriority={prioritize ? "high" : "auto"}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3>{study.title}</h3>
        <p>{study.description}</p>
      </div>
    </div>
  );

  return (
    <Link
      href={`/casestudies/${study.slug}`}
      className={styles.caseCardLink}
      aria-label={`View case study: ${study.title}`}
    >
      {cardBody}
    </Link>
  );
}

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: any = null;
    let mounted = true;

    (async () => {
      try {
        const Gmod = (await import("gsap")).default ?? (await import("gsap"));
        const ST = (await import("gsap/ScrollTrigger")).default ?? (await import("gsap/ScrollTrigger"));
        Gmod.registerPlugin(ST);
        if (!mounted) return;

        ctx = Gmod.context(() => {
          const cards = Gmod.utils.toArray(`.${styles.card}`);

          Gmod.set(cards, {
            y: (i: number) => 140 + i * 40,
            opacity: 0,
          });

          const tl = Gmod.timeline({
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
      } catch (err) {
        console.error("GSAP failed to load for CaseStudiesSection:", err);
      }
    })();

    return () => {
      mounted = false;
      if (ctx) ctx.revert();
    };
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
      <CaseCard study={first} full prioritize />

      <div className={styles.grid}>
        {gridItems.map((study, index) => (
          <CaseCard key={index} study={study} />
        ))}
      </div>

      {lastFull && <CaseCard study={lastFull} full />}
    </section>
  );
}