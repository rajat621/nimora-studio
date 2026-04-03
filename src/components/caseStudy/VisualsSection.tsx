import styles from "./CaseStudy.module.css";

type RoleColumn = {
  title: string;
  items: string[];
};

type Props = {
  data: {
    visualsSection: {
      eyebrow: string;
      description: string;
      image: string;
    };
    roleSection: {
      title: string;
      description: string;
      columns: RoleColumn[];
    };
    conclusionSection: {
      eyebrow: string;
      description: string;
    };
  };
};

export default function VisualsSection({ data }: Props) {
  return (
    <section className={styles.visualsWrapper}>
      {/* VISUALS */}
      <div className={styles.brandingText}>
        <p className={styles.brandingEyebrow}>
          {data.visualsSection.eyebrow}
        </p>
        <p className={styles.brandingDescription}>
          {data.visualsSection.description}
        </p>
      </div>
    <div className={styles.brandingWrapper}>
      <div className={styles.brandingContainer}>
      <div className={styles.visualsImage}>
        <img src={data.visualsSection.image} alt="" />
      </div>
</div></div>


      {/* OUR ROLE */}
      <div className={styles.contentWrap}>

      <div className={styles.visualGrid}>
        <div className={styles.visualRow}>
          <div className={styles.typographyLeft}>
          <h3>{data.roleSection.title}</h3>
        </div>
            <div className={styles.typographyRight}>
            {data.roleSection.description}
</div>
        </div>

        <div className={styles.vRow}>
          {data.roleSection.columns.map((col, i) => (
            <div key={i}>
              <h4>{col.title}</h4>
              {col.items.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
</div>
      {/* CONCLUSION */}
      <div className={styles.contentWrap}>
      <div className={styles.conclusion}>
        <p className={styles.brandingEyebrow}>
          {data.conclusionSection.eyebrow}
        </p>
        <p className={styles.conclusionDescription}>
          {data.conclusionSection.description}
        </p>
      </div>
      </div>
    </section>
  );
}