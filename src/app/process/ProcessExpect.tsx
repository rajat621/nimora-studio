"use client";

import styles from "./Process.module.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

const topRow = [
  { icon: <ChatBubbleOutlineIcon className={styles.expectIcon} />, label: "Clear\ncommunication" },
  { icon: <TrendingUpIcon className={styles.expectIcon} />,        label: "Regular\nprogress updates" },
  { icon: <VerifiedOutlinedIcon className={styles.expectIcon} />,  label: "Early visibility\ninto outcomes" },
];

const bottomRow = [
  { icon: <AutorenewIcon className={styles.expectIcon} />,               label: "Faster\nfeedback cycles" },
  { icon: <ReportProblemOutlinedIcon className={styles.expectIcon} />,   label: "Reduced risk\n& rework" },
];

function ExpectItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className={styles.expectItem}>
      {icon}
      <p>
        {label.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < label.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
}

export default function ProcessExpect() {
  return (
    <section className={styles.expectSection}>
      <div className={styles.expectContainer}>
        <h2 className={styles.expectTitle}>
          <em>What</em> You Can Expect
        </h2>

        {/* Top Row — 3 items evenly spaced */}
        <div className={styles.expectGrid}>
          <div className={styles.expectRowTop}>
            {topRow.map((item, i) => (
              <ExpectItem key={i} icon={item.icon} label={item.label} />
            ))}
          </div>

          {/* Bottom Row — 2 items centred */}
          <div className={styles.expectRowBottom}>
            {bottomRow.map((item, i) => (
              <ExpectItem key={i} icon={item.icon} label={item.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}