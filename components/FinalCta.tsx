import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section className={`${styles.section} marble-grain`} aria-labelledby="final-cta-title">
      <div className={styles.inner}>
        <Reveal>
          <h2 id="final-cta-title" className={styles.title}>
            {site.finalCta.title}
          </h2>
          <p className={styles.body}>{site.finalCta.body}</p>
          <a
            className={styles.button}
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow {site.instagram.handle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
