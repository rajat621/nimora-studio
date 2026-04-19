import styles from "./CaseStudy.module.css";

type Props = {
  data: {
    ideation: {
      eyebrow: string;
      description: string;
      image: string;
    };
    designSystem: {
      eyebrow: string;
      description: string;
    };
    typography: {
      title: string;
      image: string;
    };
    colorPaletteImage: string;
  };
};

export default function DesignSystemSection({ data }: Props) {
  return (
    <section className={styles.brandingWrapper}>
      <div className={styles.brandingContainer}>
        {/* IDEATION */}
        <div className={styles.brandingText}>
          <p className={styles.brandingEyebrow}>
            {data.ideation.eyebrow}
          </p>
          <p className={styles.brandingDescription}>
            {data.ideation.description}
          </p>
        </div>

        <div className={styles.dsImage}>
          <img src={data.ideation.image} alt="" />
        </div>

        {/* DESIGN SYSTEM */}
        <div className={styles.brandingText}>
          <p className={styles.brandingEyebrow}>
            {data.designSystem.eyebrow}
          </p>
          <p className={styles.brandingDescription}>
            {data.designSystem.description}
          </p>
        </div>

        {/* TYPOGRAPHY */}
        <div className={styles.contentWrap}>
          <div className={styles.typographyBlock}>
            <h3 style={{ paddingBottom: '24px' }}>{data.typography.title}</h3>
            <div className={styles.typographyImage}>
              <img src={data.typography.image} alt="" />
            </div>
          </div>
        </div>

        {/* COLOR */}
        <div className={styles.contentWrap}>

        <div className={styles.colorBlock}>
          <h3>Color</h3>
          <div className={styles.colorImage}>
            <img src={data.colorPaletteImage} alt="" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}