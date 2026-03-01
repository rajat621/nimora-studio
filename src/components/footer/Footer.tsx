// import styles from "./Footer.module.css";

// export default function Footer() {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.container}>
//         {/* ================= Top Section ================= */}
//         <div className={styles.top}>
//           {/* Logo Section */}
//           <div className={styles.logoSection}>
//             <div className={styles.logoRow}>
//               <div className={styles.logoIcon} />
//               <span className={styles.brandName}>Nimora Studio</span>
//             </div>

//             <p className={styles.description}>
//               Designing digital experiences that work. We help businesses build
//               clear, scalable products through strategy, design, and engineering.
//             </p>

//             <button className={styles.cta}>
//               Clarify your product →
//             </button>
//           </div>

//           {/* Links Section */}
//           <div className={styles.linksSection}>
//             {/* Quick Links */}
//             <div className={styles.column}>
//               <h4>Quick Links</h4>
//               <ul>
//                 <li>Home</li>
//                 <li>Services</li>
//                 <li>Process</li>
//                 <li>Works</li>
//                 <li>Clients</li>
//                 <li>About Us</li>
//               </ul>
//             </div>

//             {/* Services */}
//             <div className={styles.column}>
//               <h4>Services</h4>
//               <ul>
//                 <li>UX Strategy</li>
//                 <li>Brand Experience</li>
//                 <li>Product Design</li>
//                 <li>Product Development</li>
//                 <li>Go-Live Support</li>
//               </ul>
//             </div>

//             {/* Company */}
//             <div className={styles.column}>
//               <h4>Company</h4>

//               {/* Social icons */}
//               <div className={styles.socials}>
//                 <div className={styles.socialIcon}>in</div>
//                 <div className={styles.socialIcon}>◎</div>
//                 <div className={styles.socialIcon}>𝕏</div>
//                 <div className={styles.socialIcon}>✈</div>
//               </div>

//               {/* Write to us */}
//               <div className={styles.writeToUs}>
//                 <h4>Write to us</h4>
//                 <p>Info@nimorastudios.com</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= Bottom Bar ================= */}
//         <div className={styles.bottomBar}>
//           <span>
//             Copyright © 2026, Nimorastudios. All Rights Reserved.
//           </span>

//           <div className={styles.bottomLinks}>
//             <span>Terms of Use</span>
//             <span>Privacy Policy</span>
//             <span>Support</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
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
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Process</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Clients</a></li>
                <li><a href="#">About Us</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Services</h4>
              <ul>
                <li><a href="#">UX Strategy</a></li>
                <li><a href="#">Brand Experience</a></li>
                <li><a href="#">Product Design</a></li>
                <li><a href="#">Product Development</a></li>
                <li><a href="#">Go-Live Support</a></li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4>Company</h4>

              <div className={styles.socials}>
                <div className={styles.socialIcon}>
                  <Image src="/Icons/linkedin.svg" alt="LinkedIn" width={18} height={18} />
                </div>
                <div className={styles.socialIcon}>
                  <Image src="/Icons/instagram.svg" alt="Instagram" width={18} height={18} />
                </div>
                <div className={styles.socialIcon}>
                  <Image src="/Icons/x.svg" alt="X" width={18} height={18} />
                </div>
                <div className={styles.socialIcon}>
                  <Image src="/Icons/dribble.svg" alt="Dribbble" width={18} height={18} />
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
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}