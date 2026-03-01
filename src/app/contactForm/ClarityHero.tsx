"use client";

import styles from "./ClarityConversation.module.css";

export default function ClarityHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={`${styles.eyebrow} ${styles.fadeUp} ${styles.delay1}`}>
          CLARITY CONVERSATION
        </p>

        <h1 className={`${styles.heading} ${styles.fadeUp} ${styles.delay2}`}>
          Get clarity on what to
          <br />
          build next
        </h1>

        <p className={`${styles.description} ${styles.fadeUp} ${styles.delay3}`}>
          This isn’t a sales pitch.
          <br />
          It’s a short, focused conversation to help you make sense of
          where you are and decide what to do next.
        </p>
      </div>
    </section>
  );
}