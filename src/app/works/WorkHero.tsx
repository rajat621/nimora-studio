"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Work.module.css";

export default function WorkHero() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.heroWrapper} ${
        isVisible ? styles.animate : ""
      }`}
    >
      <div className={styles.heroContainer}>
        <span className={styles.eyebrow}>CASE HIGHLIGHTS</span>

        <h1 className={styles.heading}>
          FROM UNCLEAR
          <span className={styles.secondLine}>
            IDEAS TO CONFIDENT
          </span>
          <span className={styles.thirdLine}>
            PRODUCT DECISIONS
          </span>
        </h1>

        <p className={styles.description}>
      Each project started with uncertainty. We helped teams make sense of the problem 
      and move forward with clarity.
        </p>
      </div>
    </section>
  );
}