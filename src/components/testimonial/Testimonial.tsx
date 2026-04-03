// import styles from "./Testimonial.module.css";

// import { use } from "react";

// export default function Testimonial() {
//   return (
//     <section className={styles.clients}>
//       {/* ===== Heading Section ===== */}
//       <div className={styles.header}>
//         <h2 className={styles.heading}>
//           <span className={styles.italic}> What </span>
//           <span className={styles.normal}> Our Clients </span>
//           <br />
//           <span className={styles.normal}> Say </span>
//         </h2>
//       </div>

//       {/* ===== Testimonial Section ===== */}
//       <div className={styles.testimonial}>
//         {/* Content */}
//         <div className={styles.content}>
//           <p className={styles.company}>Company name</p>

//           <p className={styles.review}>
//             “We came in with a lot of ideas but no clear direction. The Nimora
//             team helped us slow down, ask the right questions, and make decisions
//             we felt confident standing behind. The clarity we gained early saved
//             us months later.”
//           </p>

//           <div className={styles.reviewer}>
//             <p className={styles.name}>Zeeshan</p>
//             <p className={styles.position}>CEO - SaaS</p>
//           </div>
//         </div>

//         {/* Image */}
//         <div className={styles.imageWrapper}>
//           <div className={styles.imagePlaceholder} />
//         </div>
//       </div>

//       {/* ===== Arrow Controls ===== */}
//       <div className={styles.controls}>
//         <button className={styles.arrow}>
//           ←
//         </button>
//         <button className={styles.arrow}>
//           →
//         </button>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Testimonial.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export default function Testimonial() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(false);

  const testimonials = [
    {
      company: "Company name",
      review:
        "We came in with a lot of ideas but no clear direction. The Nimora team helped us slow down, ask the right questions, and make decisions we felt confident standing behind.",
      name: "Zeeshan",
      position: "CEO - SaaS",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      company: "Another Company",
      review:
        "Working with the team gave us clarity and structure. We were able to execute faster and with confidence.",
      name: "Ayesha",
      position: "Founder - Startup",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  ];

  const totalSlides = testimonials.length;

  const triggerSlideAnimation = () => {
    setAnimateSlide(false);
    setTimeout(() => {
      setAnimateSlide(true);
    }, 50);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    triggerSlideAnimation();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
    triggerSlideAnimation();
  };

  /* Auto Slideshow */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
      triggerSlideAnimation();
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  /* Scroll Reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          triggerSlideAnimation();
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.3 }
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
      className={`${styles.clients} ${visible ? styles.show : ""}`}
    >
      <div className={styles.header}>
        <h2 className={styles.heading}>
          <span className={styles.italic}> What </span>
          <span className={styles.normal}> Our Clients </span>
          <br />
          <span className={styles.normal}> Say </span>
        </h2>
      </div>

      <div className={styles.slider}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`${styles.testimonial} ${
                visible && animateSlide && index === currentIndex
                  ? styles.showSlide
                  : ""
              }`}
            >
              <div className={styles.content}>
                <p className={styles.company}>{item.company}</p>

                <p className={styles.review}>
                  “{item.review}”
                </p>

                <div className={styles.reviewer}>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.position}>{item.position}</p>
                </div>
              </div>

              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.imagePlaceholder}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className={styles.controls}> */}
<div
  className={`${styles.controls} ${
    visible  ? styles.showSlide : ""
  }`}
>


<button className={styles.arrow} onClick={prevSlide}>
  <ArrowBackIcon className={styles.arrowIcon} />
</button>

<button className={styles.arrow} onClick={nextSlide}>
  <ArrowForwardIcon className={styles.arrowIcon} />
</button>
      </div>
    </section>
  );
}
