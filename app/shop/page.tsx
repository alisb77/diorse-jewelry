import { products } from "@/content/products";
import { ProductCard } from "@/components/shop/ProductCard";
import styles from "./shop.module.css";

export const metadata = {
  title: "Shop — DIORSE",
  description: "Browse the Diorse jewelry collection.",
};

export default function ShopPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Shop</p>
        <h1 className={styles.title}>The collection</h1>
        <p className={styles.lead}>
          Pieces shaped by blossom light and soft gold—prices follow your
          selected currency.
        </p>
      </header>
      <ul className={styles.grid}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
