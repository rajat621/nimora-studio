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


"use client";

import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import styles from "./Services.module.css";

interface Props {
  title: string;
  description: string;
  image: string;
  tags: string[];
  className?: string;
  /** slug of the service detail page, e.g. "ux-strategy" */
  slug: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  tags,
  className,
  slug,
}: Props) {
  return (

    <Link
  href={`/services/${slug}`}
  className={`${styles.card} ${className ?? ""}`}
  style={{ backgroundImage: `url(${image})` }}
  aria-label={`Learn more about ${title}`}
>
  <div className={styles.overlay} />

  <div className={styles.content}>
    <div className={styles.header}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.arrowBtn}>
        <ArrowOutwardIcon className={styles.arrowIcon} />
      </div>
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
</Link>
    // <div
    //   className={`${styles.card} ${className ?? ""}`}
    //   style={{ backgroundImage: `url(${image})` }}
    // >
    //   <div className={styles.overlay} />

    //   <div className={styles.content}>
    //     <div className={styles.header}>
    //       <h3 className={styles.title}>{title}</h3>

    //       {/* Arrow button links to the service detail page */}
    //       <Link
    //         href={`/services/${slug}`}
    //         className={styles.arrowBtn}
    //         aria-label={`Learn more about ${title}`}
    //       >
    //         <ArrowOutwardIcon className={styles.arrowIcon} />
    //       </Link>
    //     </div>

    //     <p className={styles.description}>{description}</p>

    //     <div className={styles.tags}>
    //       {tags.map((tag, i) => (
    //         <span key={i} className={styles.tag}>
    //           {tag}
    //         </span>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}


// import styles from "./Services.module.css";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// interface Props {
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   className?: string;
// }

// export default function ServiceCard({
//   title,
//   description,
//   image,
//   tags,
//   className,
// }: Props) {
//   return (
//     <div
//       className={`${styles.card} ${className}`}
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       <div className={styles.overlay} />

//       <div className={styles.content}>
//         <div className={styles.header}>
//           <h3 className={styles.title}>{title}</h3>

//           <button className={styles.arrowBtn}>
//             <ArrowOutwardIcon className={styles.arrowIcon} />
//           </button>
//         </div>

//         <p className={styles.description}>{description}</p>

//         <div className={styles.tags}>
//           {tags.map((tag, i) => (
//             <span key={i} className={styles.tag}>
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }