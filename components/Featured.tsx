"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Featured.module.css";

export function Featured() {
  const reduce = useReducedMotion();
  const piece = site.featured;

  return (
    <section className={styles.section} id="featured" aria-labelledby="featured-title">
      <div className={styles.layout}>
        <div className={styles.visual}>
          <motion.div
            className={styles.frame}
            initial={reduce ? false : { scale: 1.08, opacity: 0.7 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              className={styles.image}
              src={piece.image}
              alt={piece.name}
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
              priority={false}
            />
          </motion.div>
          <div className={styles.tint} aria-hidden="true" />
        </div>

        <div className={styles.copy}>
          <Reveal>
            <p className={styles.eyebrow}>Signature</p>
            <h2 id="featured-title" className={styles.title}>
              {piece.name}
            </h2>
            <p className={styles.note}>{piece.note}</p>
            <p className={styles.body}>{piece.body}</p>
            <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Link className={styles.cta} href={piece.href}>
                View in shop
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
