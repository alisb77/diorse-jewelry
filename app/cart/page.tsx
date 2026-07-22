import { CartView } from "@/components/shop/CartView";
import styles from "./cart.module.css";

export const metadata = {
  title: "Cart — DIORSE",
  description: "Your Diorse shopping cart.",
};

export default function CartPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Cart</p>
        <h1 className={styles.title}>Your selection</h1>
      </header>
      <CartView />
    </div>
  );
}
