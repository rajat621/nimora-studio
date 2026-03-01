import Image from "next/image";
import styles from "./Industries.module.css";

export interface IndustryCardProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export default function IndustryCard({
  eyebrow,
  title,
  description,
  image,
}: IndustryCardProps) {
  return (
    <article className={styles.card}>
      {/* Detail Section */}
      <div className={styles.content}>
        <span className={styles.label}>{eyebrow}</span>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>
      </div>

      {/* Image Section */}
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          priority={false}
        />
      </div>
    </article>
  );
}
