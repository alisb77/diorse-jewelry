import { products } from "@/content/products";
import { ShopGrid } from "@/components/shop/ShopGrid";
import styles from "./shop.module.css";

export const metadata = {
  title: "Shop — DIORSE",
  description: "Browse the Diorse jewelry collection.",
};

export default function ShopPage() {
  return (
    <div className={styles.page}>
      <ShopGrid products={products} />
    </div>
  );
}
