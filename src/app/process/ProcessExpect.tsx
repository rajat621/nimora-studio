"use client";

import styles from "./Process.module.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

export default function ProcessExpect() {
  return (
    <section className={styles.expectSection}>
      <div className={styles.expectContainer}>
        <h2 className={styles.expectTitle}>What You Can Expect</h2>

        {/* Top Row */}
        <div className={styles.expectRowTop}>
          <div className={styles.expectItem}>
            <ChatBubbleOutlineIcon className={styles.expectIcon} />
            <p>Clear communication</p>
          </div>

          <div className={styles.expectItem}>
            <TrendingUpIcon className={styles.expectIcon} />
            <p>Regular progress updates</p>
          </div>

          <div className={styles.expectItem}>
            <VerifiedOutlinedIcon className={styles.expectIcon} />
            <p>Early visibility into outcomes</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={styles.expectRowBottom}>
          <div className={styles.expectItem}>
            <AutorenewIcon className={styles.expectIcon} />
            <p>Faster feedback cycles</p>
          </div>

          <div className={styles.expectItem}>
            <ReportProblemOutlinedIcon className={styles.expectIcon} />
            <p>Reduced risk & rework</p>
          </div>
        </div>
      </div>
    </section>
  );
}