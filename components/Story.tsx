import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import styles from "./Story.module.css";

export function Story() {
  return (
    <section className={`${styles.section} marble-grain`} id="story">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.eyebrow}>Our story</p>
          <h2 className={styles.title}>{site.story.title}</h2>
          <div className={styles.rule} aria-hidden="true" />
          <p className={styles.body}>{site.story.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
