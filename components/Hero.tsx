"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import styles from "./Hero.module.css";

export function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const letters = site.brand.split("");

  useEffect(() => {
    const media = mediaRef.current;
    if (!media || reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      media.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.05)`;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce]);

  return (
    <section className={styles.hero} id="top" aria-label="Hero">
      <div className={styles.mediaWrap} aria-hidden="true">
        <div className={styles.media} ref={mediaRef}>
          <Image
            className={styles.image}
            src={site.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.wash} />
        <div className={styles.veil} />
        <div className={styles.light} />
        <div className={styles.lightTwo} />
      </div>

      <div className={styles.content}>
        <motion.p
          className={styles.brand}
          aria-label={site.brand}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: 0.12 },
            },
          }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              className={styles.letter}
              variants={{
                hidden: reduce
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: "0.45em" },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.p>

        <motion.h1
          className={styles.headline}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {site.tagline}
        </motion.h1>

        <motion.p
          className={styles.support}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {site.support}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            className={styles.primary}
            href="#collection"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
          >
            Explore collection
          </motion.a>
          <motion.a
            className={styles.secondary}
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? undefined : { letterSpacing: "0.2em" }}
          >
            {site.instagram.handle}
          </motion.a>
        </motion.div>
      </div>

      <a className={styles.scroll} href="#story" aria-label="Scroll to story">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </a>
    </section>
  );
}
