// import styles from "./ServicesHero.module.css";

// export default function ServicesHero() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.container}>
//         <span className={styles.eyebrow}>HOW WE HELP</span>

// <h1 className={styles.heading}>
//   CLEAR DIRECTION
//   <br />
//   <span>
//     <span className={styles.blackText}>FROM</span> IDEA{" "}
//     <span className={styles.blackText}>TO</span> LAUNCH
//   </span>
// </h1>


//         <p className={styles.description}>
//           Each service supports a different stage of the 
//           product journey all focused on reducing uncertainty and improving decision-making.
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./ServicesHero.module.css";

export default function ServicesHero() {
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
          CLEAR DIRECTION
          <span className={styles.secondLine}>
            <span className={styles.blackText}>FROM</span>{" "}
            <span className={styles.greenText}>IDEA</span>{" "}
            <span className={styles.blackText}>TO</span>{" "}
            <span className={styles.greenText}>LAUNCH</span>
          </span>
        </h1>

        <p className={styles.description}>
          Each service supports a different stage of the product journey all
          focused on reducing uncertainty and improving decision-making.
        </p>
      </div>
    </section>
  );
}
