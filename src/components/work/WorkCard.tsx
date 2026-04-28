import Link from "next/link";
import Image from "next/image";
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
      <div className={styles.workCardImage}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className={styles.workCardImageTag}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
          quality={75}
        />
      </div>

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
