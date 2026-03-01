import styles from "./CaseStudy.module.css";

type Step = {
  title: string;
  content: string;
};

type Props = {
  data: {
    intro: {
      eyebrow: string;
      title: string;
      description: string;
    };
    image: string;
    steps: Step[];
  };
};

export default function ProcessSection({ data }: Props) {
  return (
    <section className={styles.processWrapper}>
      <div className={styles.processContainer}>
        {/* Top Intro Row */}
        <div className={styles.processIntro}>
          <div className={styles.processLeft}>
            <p className={styles.eyebrow}>
              {data.intro.eyebrow}
            </p>
            <h2 className={styles.processTitle}>
              {data.intro.title}
            </h2>
          </div>

          <div className={styles.processRight}>
            {data.intro.description
              .split("\n\n")
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </div>
        </div>

        {/* Full Width Image */}
        <div className={styles.processImage}>
          <img src={data.image} alt="Process" />
        </div>

        {/* Steps */}
        <div className={styles.stepsGrid}>
          {data.steps.map((step, index) => (
            <div key={index} className={styles.stepRow}>
              <div className={styles.stepTitle}>
                {step.title}
              </div>

              <div className={styles.stepContent}>
                {step.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}