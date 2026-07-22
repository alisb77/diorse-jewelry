"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { LocaleSwitcher } from "@/components/shop/LocaleSwitcher";
import { useShop } from "@/components/shop/ShopProvider";
import styles from "./Nav.module.css";

export function Nav() {
  const pathname = usePathname();
  const { itemCount } = useShop();
  const reduce = useReducedMotion();
  const isHome = pathname === "/";
  const tone = isHome ? "overlay" : "solid";

  return (
    <header
      className={`${styles.header} ${tone === "solid" ? styles.solid : styles.overlay}`}
    >
      <nav className={styles.nav} aria-label="Primary">
        <Link className={styles.brand} href="/">
          {site.brand}
        </Link>

        <ul className={styles.links}>
          {isHome &&
            site.nav.map((item) => (
              <li key={item.href} className={styles.hideOnMobile}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          <li>
            <Link href="/shop" className={styles.navLink}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/cart" className={styles.cartLink}>
              Cart
              <AnimatePresence>
                {itemCount > 0 ? (
                  <motion.span
                    key={itemCount}
                    className={styles.badge}
                    initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 420, damping: 22 }}
                  >
                    {itemCount}
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </Link>
          </li>
          <li className={styles.hideOnMobile}>
            <a
              className={styles.instagram}
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <LocaleSwitcher tone={tone === "solid" ? "light" : "dark"} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
