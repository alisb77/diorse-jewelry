"use client";

import { LOCALES, LOCALE_META } from "@/lib/currency";
import { useShop } from "./ShopProvider";
import styles from "./LocaleSwitcher.module.css";

type Props = {
  tone?: "light" | "dark";
};

export function LocaleSwitcher({ tone = "dark" }: Props) {
  const { locale, setLocale } = useShop();

  return (
    <div
      className={`${styles.switcher} ${tone === "light" ? styles.light : styles.dark}`}
      role="group"
      aria-label="Currency locale"
    >
      {LOCALES.map((code) => {
        const meta = LOCALE_META[code];
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            className={`${styles.option} ${active ? styles.active : ""}`}
            onClick={() => setLocale(code)}
            aria-pressed={active}
            title={`${meta.label} · ${meta.currency}`}
          >
            <span>{meta.label}</span>
            <span className={styles.currency}>{meta.currency}</span>
          </button>
        );
      })}
    </div>
  );
}
