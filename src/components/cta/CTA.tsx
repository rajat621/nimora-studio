"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./CTA.module.css";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.ctaSection} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.ctaBox}>
        <h2 className={styles.heading}>
          Get clarity before you build
        </h2>

        <p className={styles.description}>
          Whether you’re shaping an idea, refining a product, or planning what’s
          next we’ll help you make sense of the mess and decide the right way
          forward.
        </p>

        <Link href="/contactForm" className={styles.ctaButton}>
          <span>Get product clarity</span>
          <ArrowRight className={styles.arrowIcon} size={20} />
        </Link>
      </div>
    </section>
  );
}
// "use client";
// import { useEffect, useRef, useState } from "react";
// import styles from "./CTA.module.css";

// export default function CTA() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

// useEffect(() => {
//   const observer = new IntersectionObserver(
//     ([entry]) => {
//       if (entry.isIntersecting) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     },
//     {
//       threshold: 0.3,
//     }
//   );

//   const currentRef = sectionRef.current;

//   if (currentRef) {
//     observer.observe(currentRef);
//   }

//   return () => {
//     if (currentRef) observer.unobserve(currentRef);
//   };
// }, []);


//   return (
//     <section
//       ref={sectionRef}
//       className={` ${styles.ctaSection} ${
//         isVisible ? styles.visible : styles.hidden
//       }` }
//     >
//       <div className={styles.ctaBox}>
//         <h2 className={styles.heading}>
//           Get clarity before you build
//         </h2>

//         <p className={styles.description}>
//           Whether you’re shaping an idea, refining a product, or planning what’s
//           next we’ll help you make sense of the mess and decide the right way
//           forward.
//         </p>

//         <button className={styles.ctaButton}>
//           <span>Get product clarity</span>
//           <span className={styles.arrow}>→</span>
//         </button>
//       </div>
//     </section>
//   );
// }
