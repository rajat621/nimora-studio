import Image from "next/image";
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
          <Image src={data.ideation.image} alt="" width={1000} height={600} />
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
              <Image src={data.typography.image} alt="" width={900} height={500} />
            </div>
          </div>
        </div>

        {/* COLOR */}
        <div className={styles.contentWrap}>

        <div className={styles.colorBlock}>
          <h3>Color</h3>
          <div className={styles.colorImage}>
            <Image src={data.colorPaletteImage} alt="" width={800} height={400} />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}