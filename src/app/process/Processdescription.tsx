import styles from "./Process.module.css";

export default function Processdescription() {
  return (
    <section className={styles.processIntroSection}>
      <div className={styles.processIntroContainer}>
        <span className={styles.processIntroText}>
          Clients are involved throughout the process <br></br>through regular reviews,
          demos, and feedback sessions. This ensures <br></br>
          transparency, alignment,and better <br></br>
          decision-making at every stage.
        </span>
      </div>
    </section>
  );
}