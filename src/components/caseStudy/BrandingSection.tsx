import styles from "./CaseStudy.module.css";

type Props = {
  data: {
    eyebrow: string;
    description: string;
    visuals: {
      singleImage: string;
    };
  };
};

export default function BrandingSection({ data }: Props) {
  return (
    <section className={styles.logoWrapper}>
      <div className={styles.logoContainer}>
        {/* Top Text */}
        <div className={styles.brandingText}>
          <p className={styles.brandingEyebrow}>
            {data.eyebrow}
          </p>

          <p className={styles.brandingDescription}>
            {data.description}
          </p>
        </div>

        {/* Visuals */}
        <div className={styles.brandRowFull}>
          <img src={data.visuals.singleImage} alt="" />
        </div>
      </div>
    </section>
  );
}