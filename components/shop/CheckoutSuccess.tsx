"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import styles from "./CheckoutSuccess.module.css";

function SuccessInner() {
  const params = useSearchParams();
  const orderId = params.get("order") ?? "DIORSE-DEMO";

  return (
    <div className={styles.wrap}>
      <p className={styles.eyebrow}>Thank you</p>
      <h1 className={styles.title}>Order placed (mock)</h1>
      <p className={styles.body}>
        This is a demo checkout. No payment was taken. Your mock order reference
        is <strong>{orderId}</strong>.
      </p>
      <div className={styles.actions}>
        <Link className={styles.primary} href="/shop">
          Back to shop
        </Link>
        <Link className={styles.secondary} href="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export function CheckoutSuccess() {
  return (
    <Suspense fallback={<div className={styles.wrap}>Confirming…</div>}>
      <SuccessInner />
    </Suspense>
  );
}
