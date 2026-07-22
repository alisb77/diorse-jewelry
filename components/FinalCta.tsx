"use client";

import Link from "next/link";
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
          <p className={styles.eyebrow}>Ready when you are</p>
          <h2 id="final-cta-title" className={styles.title}>
            {site.finalCta.title}
          </h2>
          <p className={styles.body}>{site.finalCta.body}</p>
          <div className={styles.actions}>
            <motion.div
              whileHover={reduce ? undefined : { y: -3, scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
            >
              <Link className={styles.button} href="/shop">
                Enter the shop
              </Link>
            </motion.div>
            <a
              className={styles.secondary}
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.instagram.handle}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
