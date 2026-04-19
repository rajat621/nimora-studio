"use client";
import Link from "next/link";
import styles from "./Process.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Processdescription() {

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src="/logo_N.svg"
            width={64}
            height={64}
            alt="Website logo"
            className={styles.logo}
          />
                  </div>
          <div>
            <p className={styles.copyLine}>
              Clients are involved throughout the process through <span style={{ color: '#316960' }}>regular reviews, demos,</span> and <span style={{ color: '#316960' }}>feedback sessions.</span>
            </p>
            <p className={styles.copyLineSecond}>
              This ensures<span style={{ color: '#316960' }}> transparency, alignment,</span> and <span style={{ color: '#316960' }}>better decision-making</span> at every stage.
            </p>
          </div>
        {/* </div> */}

        <div className={styles.actions}>
          <Link href="/contactForm" className={styles.primaryBtn}>
            Clarify your product
            <ArrowForwardIcon className={styles.arrowIcon} />
          </Link>
          <Link href="/process" className={styles.secondaryBtn}>
            See how we work
          </Link>
        </div>
      </div>
    </div>
  );
}

