
"use client";

import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logoSection}>
            <div className={styles.logoRow}>
              <Image
                src="/NIMORA_LOGO.svg"
                alt="Nimora Studio logo"
                width={160}
                height={40}
                priority
              />
            </div>

            <p className={styles.description}>
              Designing digital experiences that work. We help businesses build
              clear, scalable products through strategy, design, and engineering.
            </p>

            {/* ✅ PERFECT CTA */}
            <Link href="/contactForm" className={styles.cta}>
              <span>Clarify your product</span>
              <ArrowForwardIcon className={styles.arrow} />
            </Link>
          </div>

          {/* Links Section */}
          <div className={styles.linksSection}>
            <div className={styles.column}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/process">Process</a></li>
                <li><a href="/works">Works</a></li>
                {/* <li><a href="/clients">Clients</a></li> */}
                <li><a href="/about">About Us</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Services</h4>
              <ul>
                <li><a href="/services/ux-strategy">UX Strategy</a></li>
                <li><a href="/services/brand-experience">Brand Experience</a></li>
                <li><a href="/services/product-design">Product Design</a></li>
                <li><a href="/services/product-development">Product Development</a></li>
                <li><a href="/services/go-live-support">Go-Live Support</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Company</h4>

              <div className={styles.socials}>
                <div className={styles.socialIcon}>
                                    <a href="https://www.linkedin.com/company/nimorastudios" target="_blank" rel="noopener noreferrer">

                  <Image src="/Icons/linkedin.svg" alt="LinkedIn" width={18} height={18} />
</a>
                </div>
                <div className={styles.socialIcon}>
                  <a href="https://www.instagram.com/nimorastudios_/" target="_blank" rel="noopener noreferrer">
                    <Image src="/Icons/instagram.svg" alt="Instagram" width={18} height={18} />
                  </a>
                </div>
                <div className={styles.socialIcon}>
                                    <a href="https://x.com/NimoraStudios" target="_blank" rel="noopener noreferrer">

                  <Image src="/Icons/x.svg" alt="X" width={18} height={18} />
                </a>
                </div>
                <div className={styles.socialIcon}>
                <a href="https://www.instagram.com/nimorastudios_/" target="_blank" rel="noopener noreferrer">
                  <Image src="/Icons/dribble.svg" alt="Dribbble" width={18} height={18} />
               </a>
                </div>
              </div>

              <div className={styles.writeToUs}>
                <h4>Write to us</h4>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=Info@nimorastudios.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.email}
                >
                  Info@nimorastudios.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>
            Copyright © 2026, Nimorastudios. All Rights Reserved.
          </span>

          <div className={styles.bottomLinks}>
            <a href="/terms">Terms of Use</a>
            <a href="/policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}