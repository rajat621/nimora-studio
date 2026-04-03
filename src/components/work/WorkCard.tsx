import styles from "./WorkSection.module.css";

type Props = {
  image: string;
  title: string;
  description: string;
};

export default function WorkCard({ image, title, description }: Props) {
  return (
    <article className={styles.workCard}>
      <img
        src={image}
        alt={title}
        className={styles.workCardImage}
      />

      <div className={styles.workCardContent}>
        <h3 className={styles.workCardTitle}>{title}</h3>

        <p className={styles.workCardDescription}>
          {description}
        </p>

        <button className={styles.workCardButton}>
          View Case Study
        </button>
      </div>
    </article>
  );
}
