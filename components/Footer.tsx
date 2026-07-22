import { site } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a className={styles.brand} href="/">
          {site.brand}
        </a>
        <div className={styles.meta}>
          <a href="/shop">Shop</a>
          <a href="/cart">Cart</a>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.instagram.handle}
          </a>
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          <p className={styles.copy}>© {year} Diorse Jewelry</p>
        </div>
      </div>
    </footer>
  );
}
