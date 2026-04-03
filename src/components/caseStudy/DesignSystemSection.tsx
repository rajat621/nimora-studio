import styles from "./CaseStudy.module.css";

type Variant = {
  label: string;
  weight: number;
  style?: React.CSSProperties["fontStyle"];
};

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
      fontFamily: string;
      description: string;
      variants: Variant[];
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
    <div className={styles.typographyLeft}>
      <h3>{data.typography.title}</h3>
    </div>

    <div className={styles.typographyRight}>
      <p className={styles.fontName}>
        Font Name – {data.typography.fontFamily}
      </p>

      <p className={styles.fontDescription}>
        {data.typography.description}
      </p>

      <div className={styles.fontVariants}>
        {data.typography.variants.map((v, i) => (
          <span
            key={i}
            style={{
              fontFamily: data.typography.fontFamily,
              fontWeight: v.weight,
              fontStyle: v.style || "normal",
            }}
          >
            {v.label}
          </span>
        ))}
      </div>
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