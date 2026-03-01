// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import styles from "./Navigation.module.css";

// export default function Navigation() {
//   return (
//     <header className={styles.nav}>
//       <div className={styles.inner}>
//         {/* LEFT — LOGO */}
//         <Link href="/" className={styles.logo} aria-label="Nimora Studio home">
//           <Image
//             src="/NIMORA_LOGO.svg"
//             alt="Nimora Studio logo"
//             width={160}
//             height={40}
//             priority
//           />
//         </Link>

//         {/* CENTER — MENU */}
//         <nav className={styles.menu} aria-label="Primary navigation">
//           <Link href="#services" className={styles.menuLink}>Service</Link>
//           <Link href="#process" className={styles.menuLink}>Process</Link>
//           <Link href="#works" className={styles.menuLink}>Works</Link>
//           <Link href="#about" className={styles.menuLink}>About Us</Link>
//         </nav>

//         {/* RIGHT — CTA */}
//         <Link href="/contact" className={styles.cta}>
//           <span>Let’s Talk</span>
//           <span aria-hidden>→</span>
//         </Link>
//       </div>
//     </header>
//   );
// }

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import styles from "./Navigation.module.css";

// export default function Navigation() {
//   const [active, setActive] = useState<string>("");
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const nav = document.querySelector("header");
//       const darkSections = document.querySelectorAll(".nav-dark");

//       if (!nav) return;

//       const navRect = nav.getBoundingClientRect();
//       let darkDetected = false;

//       darkSections.forEach((section) => {
//         const rect = section.getBoundingClientRect();

//         const overlapping =
//           rect.top <= navRect.bottom &&
//           rect.bottom >= navRect.top;

//         if (overlapping) {
//           darkDetected = true;
//         }
//       });

//       setIsDark(darkDetected);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`${styles.nav} ${isDark ? styles.dark : ""}`}>
//       <div className={styles.inner}>

//         {/* LOGO */}
//         <Link href="/" className={styles.logo}>
//           <Image
//             src={isDark ? "logo_dark.svg" : "/NIMORA_LOGO.svg"}
//             alt="Nimora Studio logo"
//             width={160}
//             height={40}
//             priority
//           />
//         </Link>

//         {/* MENU */}
//         <nav className={styles.menu}>
//           {[
//             { label: "Service", href: "/services" },
//             { label: "Process", href: "#process" },
//             { label: "Works", href: "#works" },
//             { label: "About Us", href: "#about" },
//           ].map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               onClick={() => setActive(item.href)}
//               className={`${styles.menuLink} ${
//                 active === item.href ? styles.active : ""
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         {/* CTA */}
//         <Link href="/contact" className={styles.cta}>
//           <span>Let’s Talk</span>
//           <span aria-hidden>→</span>
//         </Link>
//       </div>
//     </header>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Navigation() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("header");
      const darkSections = document.querySelectorAll(".nav-dark");

      if (!nav) return;

      const navRect = nav.getBoundingClientRect();
      let darkDetected = false;

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        const overlapping =
          rect.top <= navRect.bottom &&
          rect.bottom >= navRect.top;

        if (overlapping) {
          darkDetected = true;
        }
      });

      setIsDark(darkDetected);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Service", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Work", href: "/work" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <header className={`${styles.nav} ${isDark ? styles.dark : ""}`}>
      <div className={styles.inner}>
        
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <Image
            src={isDark ? "/logo_dark.svg" : "/NIMORA_LOGO.svg"}
            alt="Nimora Studio logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* MENU */}
        <nav className={styles.menu}>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.menuLink} ${
                  isActive ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
<Link href="/contactForm" className={styles.cta}>
  <span>Let’s Talk</span>
  <ArrowForwardIcon className={styles.ctaArrow} />
</Link>

      </div>
    </header>
  );
}
