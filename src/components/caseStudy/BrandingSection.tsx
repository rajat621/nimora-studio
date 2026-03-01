import styles from "./CaseStudy.module.css";

type Props = {
  data: {
    eyebrow: string;
    description: string;
    visuals: {
      row1: string[];
      row2: string;
      row3: string[];
    };
  };
};

export default function BrandingSection({ data }: Props) {
  return (
    <section className={styles.brandingWrapper}>
      <div className={styles.brandingContainer}>
        {/* Top Text */}
        <div className={styles.brandingText}>
          <p className={styles.brandingEyebrow}>
            {data.eyebrow}
          </p>

          <p className={styles.brandingDescription}>
            {data.description}
          </p>
        </div>

        {/* Row 1 */}
        <div className={styles.brandRowTwo}>
          {data.visuals.row1.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>

        {/* Row 2 */}
        <div className={styles.brandRowFull}>
          <img src={data.visuals.row2} alt="" />
        </div>

        {/* Row 3 */}
        <div className={styles.brandRowTwo}>
          {data.visuals.row3.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}