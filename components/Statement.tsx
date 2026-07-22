"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import styles from "./Statement.module.css";

export function Statement() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} aria-label="Brand statement">
      <div className={styles.glow} aria-hidden="true" />
      <motion.p
        className={styles.line}
        initial={reduce ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {site.statement}
      </motion.p>
    </section>
  );
}
