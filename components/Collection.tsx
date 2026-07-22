import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Collection.module.css";

export function Collection() {
  return (
    <section className={styles.section} id="collection">
      <div className={styles.header}>
        <Reveal>
          <p className={styles.eyebrow}>Collection</p>
          <h2 className={styles.title}>Pieces in soft light</h2>
        </Reveal>
      </div>

      <ul className={styles.gallery}>
        {site.collection.map((piece, index) => (
          <li key={piece.name} className={styles.item}>
            <Reveal delay={index * 90}>
              <a
                className={styles.link}
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.frame}>
                  <Image
                    className={styles.image}
                    src={piece.image}
                    alt={piece.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className={styles.meta}>
                  <h3 className={styles.name}>{piece.name}</h3>
                  <p className={styles.note}>{piece.note}</p>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
