"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./BackgroundOverlay.module.css";
import { ArrowRight } from "lucide-react";

export default function BackgroundOverlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Image
            src="/logo_N.svg"
            width={64}
            height={64}
            alt="Website logo"
            className={styles.logo}
          />
                  </div>
          <div>
            <p className={styles.copyLine}>
              We’re a <span style={{ color: '#316960' }}>digital design studio</span> driven by a deep passion for technology and human-centered design.
            </p>
            <p className={styles.copyLineSecond}>
              We craft <span style={{ color: '#316960' }}>high-impact websites, intuitive interfaces, and mobile experiences</span> that <span style={{ color: '#316960' }}>redefine</span> how <span style={{ color: '#316960' }}>people interact</span> with the <span style={{ color: '#316960' }}>digital world</span>.
            </p>
          </div>
        {/* </div> */}

        <div className={styles.actions}>
          <Link href="/contactForm" className={styles.primaryBtn}>
            Clarify your product
            <ArrowRight className={styles.arrowIcon} size={20} />
          </Link>
          <Link href="/process" className={styles.secondaryBtn}>
            See how we work
          </Link>
        </div>
      </div>
    </div>
  );
}
