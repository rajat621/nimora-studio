import styles from "./CaseStudy.module.css";

type Props = {
  data: {
    visualImage: string;
    description: string;
    meta: {
      client: string;
      industry: string;
      services: string[];
      timeline: string;
      location: string;
    };
  };
};

export default function IntroSection({ data }: Props) {
  return (
    <section className={styles.introWrapper}>
      <div className={styles.introContainer}>
        {/* Top Image */}
        <div className={styles.visualBlock}>
          <img
            src={data.visualImage}
            alt="Project Intro"
          />
        </div>

        {/* Description */}
        <div className={styles.introDescription}>
          {data.description}
        </div>

        {/* Meta Grid */}
        <div className={styles.metaRow}>
          <div>
            <span>Client</span>
            <p>{data.meta.client}</p>
          </div>

          <div>
            <span>Industry</span>
            <p>{data.meta.industry}</p>
          </div>

          <div>
            <span>Services</span>
            {data.meta.services.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>

          <div>
            <span>Timeline</span>
            <p>{data.meta.timeline}</p>
          </div>

          <div>
            <span>Location</span>
            <p>{data.meta.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}