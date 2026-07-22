import Image from "next/image";
import { site } from "@/content/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-label="Hero">
      <div className={styles.media} aria-hidden="true">
        <Image
          className={styles.image}
          src={site.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.wash} />
        <div className={styles.light} />
      </div>

      <div className={styles.content}>
        <p className={styles.brand}>{site.brand}</p>
        <h1 className={styles.headline}>{site.tagline}</h1>
        <p className={styles.support}>{site.support}</p>
        <div className={styles.ctas}>
          <a className={styles.primary} href="#collection">
            Explore collection
          </a>
          <a
            className={styles.secondary}
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.instagram.handle}
          </a>
        </div>
      </div>
    </section>
  );
}
