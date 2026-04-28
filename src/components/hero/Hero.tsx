"use client";

import { useEffect, useRef, useState } from "react";
// Load GSAP dynamically inside client-only effects to avoid SSR bloat
import Container from "@/components/shared/Container";
import styles from "./Hero.module.css";
import VideoBlock from "./VideoBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// GSAP will be imported dynamically inside effects

export default function Hero() {
  const heroRef    = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const videoRef   = useRef<HTMLDivElement | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const gsapRef = useRef<any | null>(null);

  useEffect(() => {
    const onResize = () => {
      setIsMobileView(window.innerWidth <= 412);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (isMobileView) return;
    if (!heroRef.current || !videoRef.current || !contentRef.current) return;

    let ctx: any = null;
    let mounted = true;

    (async () => {
      try {
        const Gmod = (await import("gsap")).default ?? (await import("gsap"));
        const ST = (await import("gsap/ScrollTrigger")).default ?? (await import("gsap/ScrollTrigger"));
        Gmod.registerPlugin(ST);
        if (!mounted) return;
        gsapRef.current = Gmod;

        const VIDEO_W = 140;
        const VIDEO_H = 90;
        const SIDE_SPACING = 14;
        const SPLIT_X = (VIDEO_W + SIDE_SPACING * 2) / 2;

        ctx = Gmod.context(() => {
          Gmod.fromTo(
            `.${styles.line}`,
            { y: "100%" },
            {
              y: "0%",
              duration: 1.2,
              ease: "power4.out",
              stagger: 0.25,
            }
          );

          const splitTl = Gmod.timeline({ delay: 1.35 });

          splitTl
            .add(() => {
              const hero = heroRef.current!;
              const leftEl = hero.querySelector<HTMLElement>(`.${styles.textLeft}`)!;
              const rightEl = hero.querySelector<HTMLElement>(`.${styles.textRight}`)!;
              const vid = videoRef.current!;

              const heroRect = hero.getBoundingClientRect();
              const leftRect = leftEl.getBoundingClientRect();
              const rightRect = rightEl.getBoundingClientRect();

              const pillCX = (leftRect.right + rightRect.left) / 2 - heroRect.left;
              const pillCY = (leftRect.top + leftRect.bottom) / 2 - heroRect.top;

              Gmod.set(vid, {
                left: pillCX - VIDEO_W / 2,
                top: pillCY - VIDEO_H / 2,
                width: VIDEO_W,
                height: VIDEO_H,
                opacity: 1,
                scaleX: 0,
                transformOrigin: "center center",
              });
            }, 0)

            .to(`.${styles.textLeft}`, {
              x: -SPLIT_X,
              duration: 0.85,
              ease: "power3.inOut",
            }, 0)

            .to(`.${styles.textRight}`, {
              x: SPLIT_X,
              duration: 0.85,
              ease: "power3.inOut",
            }, 0)

            .to(videoRef.current, {
              scaleX: 1,
              duration: 0.85,
              ease: "power3.inOut",
            }, 0);

          const scrollTl = Gmod.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "+=250%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          scrollTl
            .to(contentRef.current, {
              y: -200,
              opacity: 0,
              ease: "none",
            }, 0)

            .to(videoRef.current, {
              left: 0,
              top: () => (window.innerHeight - 540) / 2,
              width: () => window.innerWidth,
              height: 540,
              ease: "none",
            }, 0);
        }, heroRef);
      } catch (err) {
        console.error("GSAP failed to load for Hero:", err);
      }
    })();

    return () => {
      mounted = false;
      if (gsapRef.current && gsapRef.current.context) {
        try {
          // revert last context if present
          gsapRef.current.context(() => {}, heroRef).revert?.();
        } catch (e) {
          // ignore
        }
      }
    };
  }, [isMobileView]);

  return (
    <section ref={heroRef} className={styles.hero}>
      {isMobileView ? (
        <>
          <Container>
            <div ref={contentRef} className={`${styles.content} ${styles.mobileContent}`}>

              <h1 className={styles.title}>

                {/* Line 1 */}
                <span className={styles.lineMask}>
                  <span className={styles.line}>
                    <span className={styles.textFrom}>FROM</span>{" "}
                    <span className={styles.textComplex}>COMPLEX</span>
                  </span>
                </span>

                {/* Line 2 */}
                <span className={styles.lineMask}>
                  <span className={styles.line}>
                    <span className={styles.splitWrapper}>
                      <span className={styles.textLeft}>IDEAS TO</span>
                      <span className={styles.textRight}>CLEAR</span>
                    </span>
                  </span>
                </span>

                {/* Line 3 */}
                <span className={styles.lineMask}>
                  <span className={styles.line}>
                    <span className={styles.textDirection}>DIRECTION</span>
                  </span>
                </span>

              </h1>

              <p className={styles.subtitle}>
                Unclear ideas lead to wasted time and wrong decisions.
                <br />
                We help teams define what to build and move forward with confidence.
              </p>

              <div className={styles.actions}>
                <Link href="/contactForm" className={styles.primaryBtn}>
                  <span>Clarify your product</span>
                  <ArrowRight className={styles.primaryArrow} size={20} />
                </Link>

                <Link href="/process" className={styles.secondaryBtn}>
                  See how we work
                </Link>
              </div>
            </div>
          </Container>

          <div ref={videoRef} className={`${styles.videoWrapper} ${styles.videoWrapperMobile}`}>
            <VideoBlock />
          </div>
        </>
      ) : (
        <>
          {/* VIDEO */}
          <div ref={videoRef} className={styles.videoWrapper}>
            <VideoBlock />
          </div>

          <Container>
            <div ref={contentRef} className={styles.content}>

              <h1 className={styles.title}>

            {/* Line 1 */}
            <span className={styles.lineMask}>
              <span className={styles.line}>
                <span className={styles.textFrom}>FROM</span>{" "}
                <span className={styles.textComplex}>COMPLEX</span>
              </span>
            </span>

            {/* Line 2 */}
            <span className={styles.lineMask}>
              <span className={styles.line}>
                <span className={styles.splitWrapper}>
                  <span className={styles.textLeft}>IDEAS TO</span>
                  <span className={styles.textRight}>CLEAR</span>
                </span>
              </span>
            </span>

            {/* Line 3 */}
            <span className={styles.lineMask}>
              <span className={styles.line}>
                <span className={styles.textDirection}>DIRECTION</span>
              </span>
            </span>

          </h1>

          <p className={styles.subtitle}>
            Unclear ideas lead to wasted time and wrong decisions.
            <br />
            We help teams define what to build and move forward with confidence.
          </p>

              <div className={styles.actions}>
                <Link href="/contactForm" className={styles.primaryBtn}>
                  <span>Clarify your product</span>
                  <ArrowRight className={styles.primaryArrow} size={20} />
                </Link>

                <Link href="/process" className={styles.secondaryBtn}>
                  See how we work
                </Link>
              </div>
            </div>
          </Container>
        </>
      )}
    </section>
  );
}


// import Container from "@/components/shared/Container";
// import styles from "./Hero.module.css";

// export default function Hero() {
//   return (
//     <section className={styles.hero}>
//       <Container>
//         <div className={styles.content}>
//           <h1 className={styles.title}>
//             <span className={styles.textFrom}>FROM </span>
//             <span className={styles.textComplex}>COMPLEX</span>

//             <span className={styles.middleWrapper}>
//               <span className={styles.textIdeas}>IDEAS</span>
//               <span className={styles.textTo}>TO</span>
//               <span className={styles.block} aria-hidden />
//               <span className={styles.textClear}>CLEAR</span>
//             </span>

//             <span className={styles.textDirection}>DIRECTION</span>
//           </h1>

//           <p className={styles.subtitle}>
//             <span className={styles.subtitleLineOne}>
//               Unclear ideas lead to wasted time and wrong decisions.
//             </span>
//             <br />
//             <span className={styles.subtitleLineTwo}>
//               We help teams define what to build and move forward with confidence.
//             </span>
//           </p>

//           <div className={styles.actions}>
//             <button className={styles.primaryBtn}>
//               <span className={styles.primaryText}>
//                 Clarify your product →
//               </span>
//             </button>

//             <button className={styles.secondaryBtn}>
//               <span className={styles.secondaryText}>
//                 See how we work
//               </span>
//             </button>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Container from "@/components/shared/Container";
// import styles from "./Hero.module.css";
// import VideoBlock from "./VideoBlock";

// import { useScroll } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const heroRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

// useEffect(() => {
//   if (!heroRef.current) return;

//   const ctx = gsap.context(() => {

//     const tl = gsap.timeline();

//         const video = `.${styles.videoWrapper}`;
//     const text = `.${styles.content}`;

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top top",
//         end: "+=150%",
//         scrub: true,
//         pin: video,
//         pinSpacing: false,
//       }
//     })
//     .to(text, {
//       y: -200,
//       opacity: 0,
//       ease: "none"
//     }, 0)
//     .to(video, {
//       width: "100vw",
//       height: "100vh",
//       ease: "none"
//     }, 0);
//     /* -------------------------
//        PHASE 1 — Vertical Reveal
//     -------------------------- */

//     tl.fromTo(
//       `.${styles.line}`,
//       { y: "100%" },
//       {
//         y: "0%",
//         duration: 1.2,
//         ease: "power4.out",
//         stagger: 0.25,
//       }
//     );

//     /* -------------------------
//        PHASE 2 — Split + Video Wipe
//        (starts AFTER vertical reveal)
//     -------------------------- */
// tl.to(
//   `.${styles.videoBlock}`,
//   {
//     width: 140,
//     duration: 1.9,
//     ease: "power3.out",
//   },
//   "+=0.5"
// );


//   }, heroRef);

//   return () => ctx.revert();
// }, []);


//   return (
//     <section ref={heroRef} className={styles.hero}>
//       <Container>
//         <div className={styles.content}>

//           <h1 className={styles.title}>

//             {/* Line 1 */}
//             <span className={styles.lineMask}>
//               <span className={styles.line}>
//                 <span className={styles.textFrom}>FROM</span>
//                 <span className={styles.textComplex}>COMPLEX</span>
//               </span>
//             </span>

// {/* Line 2 */}
// <span className={styles.lineMask}>
//   <span className={styles.line}>
//     <span className={styles.splitWrapper}>

// <span className={styles.textLeft}>
//   <span className={styles.textIdeas}>IDEAS</span>
//   <span className={styles.wordSpace}> </span>
//   <span className={styles.textTo}>TO</span>
//     <span className={styles.wordSpace}> </span>

// </span>


//       {/* <span className={styles.block} aria-hidden /> */}
// <div className={styles.videoWrapper}>
//   <VideoBlock scrollYProgress={scrollYProgress} />
// </div>

//       <span className={styles.textRight}>
        
//         <span className={styles.textClear}>CLEAR</span>
//       </span>

//     </span>
//   </span>
// </span>

//             {/* Line 3 */}
//             <span className={styles.lineMask}>
//               <span className={styles.line}>
//                 <span className={styles.textDirection}>DIRECTION</span>
//               </span>
//             </span>

//           </h1>

//           <p className={styles.subtitle}>
//             Unclear ideas lead to wasted time and wrong decisions.
//             <br />
//             We help teams define what to build and move forward with confidence.
//           </p>

//           <div className={styles.actions}>
//             <button className={styles.primaryBtn}>
//               Clarify your product →
//             </button>

//             <button className={styles.secondaryBtn}>
//               See how we work
//             </button>
//           </div>

//         </div>
//       </Container>
//     </section>
//   );
// }
