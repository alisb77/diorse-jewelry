"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  const reduce = useReducedMotion();

  return (
    <section
      className={`${styles.section} marble-grain`}
      aria-labelledby="final-cta-title"
    >
      <div className={styles.orbOne} aria-hidden="true" />
      <div className={styles.orbTwo} aria-hidden="true" />
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.eyebrow}>Join the light</p>
          <h2 id="final-cta-title" className={styles.title}>
            {site.finalCta.title}
          </h2>
          <p className={styles.body}>{site.finalCta.body}</p>
          <motion.a
            className={styles.button}
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? undefined : { y: -3, scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
          >
            Follow {site.instagram.handle}
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
