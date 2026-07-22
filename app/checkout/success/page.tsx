import { CheckoutSuccess } from "@/components/shop/CheckoutSuccess";
import styles from "./success.module.css";

export const metadata = {
  title: "Order confirmed — DIORSE",
  description: "Mock checkout confirmation.",
};

export default function CheckoutSuccessPage() {
  return (
    <div className={styles.page}>
      <CheckoutSuccess />
    </div>
  );
}
