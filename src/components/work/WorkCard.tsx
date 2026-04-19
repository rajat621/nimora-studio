import Link from "next/link";
import styles from "./WorkSection.module.css";

type Props = {
  image: string;
  title: string;
  description: string;
  slug?: string;
};

export default function WorkCard({ image, title, description, slug }: Props) {
  const action = slug ? (
    <Link href={`/casestudies/${slug}`} className={styles.workCardButton}>
      View Case Study
    </Link>
  ) : (
    <button className={styles.workCardButton}>
      View Case Study
    </button>
  );

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

        {action}
      </div>
    </article>
  );
}
