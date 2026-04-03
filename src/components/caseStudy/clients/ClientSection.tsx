import styles from "./Clients.module.css";

export default function Clients() {
  return (
    <section className={styles.clients}>
      {/* ===== Heading Section ===== */}
      <div className={styles.header}>
        <h2 className={styles.heading}>
          <span className={styles.italic}> What </span>
          <span className={styles.normal}> Our Clients </span>
          <br />
          <span className={styles.normal}> Say </span>
        </h2>
      </div>

      {/* ===== Testimonial Section ===== */}
      <div className={styles.testimonial}>
        {/* Content */}
        <div className={styles.content}>
          <p className={styles.company}>Company name</p>

          <p className={styles.review}>
            “We came in with a lot of ideas but no clear direction. The Nimora
            team helped us slow down, ask the right questions, and make decisions
            we felt confident standing behind. The clarity we gained early saved
            us months later.”
          </p>

          <div className={styles.reviewer}>
            <p className={styles.name}>Zeeshan</p>
            <p className={styles.position}>CEO - SaaS</p>
          </div>
        </div>

        {/* Image */}
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder} />
        </div>
      </div>

      {/* ===== Arrow Controls ===== */}
      <div className={styles.controls}>
        <button className={styles.arrow}>
          ←
        </button>
        <button className={styles.arrow}>
          →
        </button>
      </div>
    </section>
  );
}
