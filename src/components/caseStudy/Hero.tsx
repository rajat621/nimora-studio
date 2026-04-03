import styles from "./CaseStudy.module.css";

type Props = {
  data: {
    title: string;
    subtitle: string;
    highlight?: string[];
  };
};

export default function Hero({ data }: Props) {
  const highlightWords = data.highlight || [];

  const renderTitle = () => {
    return data.title.split(" ").map((word, i) => {
      const cleanWord = word.replace(/[.,–-]/g, "");

      if (highlightWords.includes(cleanWord)) {
        return (
          <span key={i} className={styles.highlight}>
            {word}{" "}
          </span>
        );
      }

      return word + " ";
    });
  };

  return (
    <section className={styles.hero}>

      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          {renderTitle()}
        </h1>

        <p className={styles.heroSubtitle}>
          {data.subtitle}
        </p>
      </div>
    </section>
  );
}