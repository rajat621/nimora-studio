// import styles from "./Services.module.css";

// type Props = {
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
// };

// export default function ServiceCard({
//   title,
//   description,
//   image,
//   tags,
// }: Props) {
//   return (
//     <article
//       className={styles.card}
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       <div className={styles.overlay} />

//       <div className={styles.content}>
//         <div className={styles.header}>
//           <h3 className={styles.title}>{title}</h3>
//           <button className={styles.arrowBtn} aria-label="View service">
//             ↗
//           </button>
//         </div>

//         <p className={styles.description}>{description}</p>

//         <div className={styles.tags}>
//           {tags.map((tag) => (
//             <span key={tag} className={styles.tag}>
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </article>
//   );
// }
// import styles from "./Services.module.css";

// type Props = {
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
// };

// export default function ServiceCard({
//   title,
//   description,
//   image,
//   tags,
// }: Props) {
//   return (
//     <article
//       className={styles.card}
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       <div className={styles.overlay} />

//       <div className={styles.content}>
//         <div className={styles.header}>
//           <h3 className={styles.title}>{title}</h3>
//           <button className={styles.arrowBtn} aria-label="View service">
//             ↗
//           </button>
//         </div>

//         <p className={styles.description}>{description}</p>

//         <div className={styles.tags}>
//           {tags.map((tag) => (
//             <span key={tag} className={styles.tag}>
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </article>
//   );
// }

import styles from "./Services.module.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface Props {
  title: string;
  description: string;
  image: string;
  tags: string[];
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  tags,
  className,
}: Props) {
  return (
    <div
      className={`${styles.card} ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>

          <button className={styles.arrowBtn}>
            <ArrowOutwardIcon className={styles.arrowIcon} />
          </button>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.tags}>
          {tags.map((tag, i) => (
            <span key={i} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}