"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import styles from "./Hero.module.css";

type Props = {
  scrollYProgress: MotionValue<number>;
};

export default function GreyBlock({ scrollYProgress }: Props) {
  const scale = useTransform(scrollYProgress, [0.15, 0.5], [1, 16]);
  const borderRadius = useTransform(scrollYProgress, [0.15, 0.5], [8, 0]);

  return (
    <motion.span
      className={styles.block}
      style={{
        scale,
        borderRadius,
      }}
    />
  );
}
