"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Collection.module.css";

export function Collection() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} id="collection">
      <div className={styles.header}>
        <Reveal>
          <p className={styles.eyebrow}>Collection</p>
          <h2 className={styles.title}>Pieces in soft light</h2>
          <p className={styles.lead}>
            A quiet gallery of adornment—each piece opens into the shop.
          </p>
          <a className={styles.shopLink} href="/shop">
            View all in shop
          </a>
        </Reveal>
      </div>

      <motion.ul
        className={styles.gallery}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: reduce ? 0 : 0.1 },
          },
        }}
      >
        {site.collection.map((piece, index) => (
          <motion.li
            key={piece.name}
            className={`${styles.item} ${index % 2 === 1 ? styles.offset : ""}`}
            variants={{
              hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 36 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <Link className={styles.link} href="/shop">
              <div className={styles.frame}>
                <Image
                  className={styles.image}
                  src={piece.image}
                  alt={piece.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className={styles.shine} aria-hidden="true" />
              </div>
              <div className={styles.meta}>
                <h3 className={styles.name}>{piece.name}</h3>
                <p className={styles.note}>{piece.note}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
