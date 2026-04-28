import Image from "next/image";
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
          <Image
            src={data.visuals.singleImage}
            alt=""
            width={1120}
            height={1332}
            sizes="(max-width: 768px) 100vw, 1120px"
            quality={75}
          />
        </div>
      </div>
    </section>
  );
}