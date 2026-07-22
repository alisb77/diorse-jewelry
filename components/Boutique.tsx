import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Boutique.module.css";

export function Boutique() {
  return (
    <section className={styles.section} id="boutique">
      <div className={styles.layout}>
        <div className={styles.visual}>
          <Image
            className={styles.image}
            src={site.boutiqueImage}
            alt="Warm marble and wood boutique interior"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <div className={styles.tint} aria-hidden="true" />
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
