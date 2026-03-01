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
      <div className={styles.visualsText}>
        <p className={styles.visualsEyebrow}>
          {data.visualsSection.eyebrow}
        </p>
        <p className={styles.visualsDescription}>
          {data.visualsSection.description}
        </p>
      </div>

      <div className={styles.visualsImage}>
        <img src={data.visualsSection.image} alt="" />
      </div>

      {/* OUR ROLE */}
      <div className={styles.roleWrapper}>
        <div className={styles.roleHeader}>
          <h3>{data.roleSection.title}</h3>
          <p>{data.roleSection.description}</p>
        </div>

        <div className={styles.roleGrid}>
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

      {/* CONCLUSION */}
      <div className={styles.conclusion}>
        <p className={styles.visualsEyebrow}>
          {data.conclusionSection.eyebrow}
        </p>
        <p className={styles.visualsDescription}>
          {data.conclusionSection.description}
        </p>
      </div>
    </section>
  );
}