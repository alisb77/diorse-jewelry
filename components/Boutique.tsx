"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Boutique.module.css";

export function Boutique() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = visualRef.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const y = Math.max(-18, Math.min(18, (progress - 0.5) * 36));
      node.style.setProperty("--parallax", `${y}px`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.section} id="boutique">
      <div className={styles.layout}>
        <div className={styles.visual} ref={visualRef}>
          <Image
            className={styles.image}
            src={site.boutiqueImage}
            alt="Warm marble and wood boutique interior"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <div className={styles.tint} aria-hidden="true" />
          <div className={styles.frameGlow} aria-hidden="true" />
        </div>

        <div className={styles.copy}>
          <Reveal>
            <p className={styles.eyebrow}>Boutique</p>
            <h2 className={styles.title}>
              An atelier in {site.boutique.city}
            </h2>
            <p className={styles.body}>{site.boutique.note}</p>
            <a className={styles.link} href={`mailto:${site.contactEmail}`}>
              Plan a visit
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
