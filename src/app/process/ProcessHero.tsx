"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Process.module.css";

export default function ProcessHero() {
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
        <span className={styles.eyebrow}>HOW WE HELP</span>

        <h1 className={styles.heading}>
          CLEAR PROCESSES
          <span className={styles.secondLine}>
            FOR EVERY STAGE OF
          </span>
          <span className={styles.thirdLine}>
            PRODUCT BUILDING
          </span>
        </h1>

        <p className={styles.description}>
          Building a product comes with uncertainty at every stage.
          Our processes reduce risk, clarify decisions, and help teams
          move forward with confidence.
        </p>
      </div>
    </section>
  );
}