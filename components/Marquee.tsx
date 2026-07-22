import styles from "./Marquee.module.css";

const ITEMS = [
  "DIORSE",
  "Nature worn close",
  "Blossom light",
  "Soft gold",
  "Tehran atelier",
  "Citrus warmth",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
