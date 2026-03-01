// "use client";

// import { motion, MotionValue, useTransform } from "framer-motion";
// import styles from "./Hero.module.css";

// type Props = {
//   scrollYProgress: MotionValue<number>;
// };

// export default function VideoBlock({ scrollYProgress }: Props) {
//   const scale = useTransform(scrollYProgress, [0.15, 0.5], [1, 16]);
//   const borderRadius = useTransform(scrollYProgress, [0.15, 0.5], [0, 0]);

//   return (
//     <motion.div
//       className={styles.videoBlock}
//       style={{
//         scale,
//         borderRadius,
//       }}
//     >
//       <video
//         className={styles.video}
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src="/videos/hero.mp4" type="video/mp4" />
//       </video>
//     </motion.div>
//   );
// }


"use client";

import styles from "./Hero.module.css";

export default function VideoBlock() {
  return (
    <div className={styles.videoBlock}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
