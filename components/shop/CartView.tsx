"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { getProductBySlug } from "@/content/products";
import { formatMoney } from "@/lib/currency";
import { useShop } from "./ShopProvider";
import { Price } from "./Price";
import styles from "./CartView.module.css";

export function CartView() {
  const { cart, locale, setQuantity, removeFromCart, clearCart, ready } =
    useShop();
  const router = useRouter();

  const lines = useMemo(() => {
    return Object.entries(cart)
      .map(([slug, qty]) => {
        const product = getProductBySlug(slug);
        if (!product) return null;
        return { product, qty };
      })
      .filter(Boolean) as { product: NonNullable<ReturnType<typeof getProductBySlug>>; qty: number }[];
  }, [cart]);

  const totalUsd = lines.reduce(
    (sum, line) => sum + line.product.priceUsd * line.qty,
    0,
  );

  if (!ready) {
    return <p className={styles.empty}>Loading cart…</p>;
  }

  if (lines.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.empty}>Your cart is empty.</p>
        <Link className={styles.shopLink} href="/shop">
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {lines.map(({ product, qty }) => (
          <li key={product.slug} className={styles.line}>
            <Link className={styles.thumbLink} href={`/shop/${product.slug}`}>
              <div className={styles.thumb}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="96px"
                />
              </div>
            </Link>
            <div className={styles.info}>
              <Link href={`/shop/${product.slug}`} className={styles.name}>
                {product.name}
              </Link>
              <Price amountUsd={product.priceUsd} className={styles.unit} />
              <div className={styles.qtyRow}>
                <label className={styles.qtyLabel}>
                  <span className="sr-only">Quantity</span>
                  <button
                    type="button"
                    className={styles.qtyBtn}
                    onClick={() => setQuantity(product.slug, qty - 1)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className={styles.qty}>{qty}</span>
                  <button
                    type="button"
                    className={styles.qtyBtn}
                    onClick={() => setQuantity(product.slug, qty + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </label>
                <button
                  type="button"
                  className={styles.remove}
                  onClick={() => removeFromCart(product.slug)}
                >
                  Remove
                </button>
              </div>
            </div>
            <p className={styles.lineTotal}>
              {formatMoney(product.priceUsd * qty, locale)}
            </p>
          </li>
        ))}
      </ul>

      <aside className={styles.summary}>
        <div className={styles.totalRow}>
          <span>Total</span>
          <strong>{formatMoney(totalUsd, locale)}</strong>
        </div>
        <p className={styles.note}>Mock checkout — no payment is processed.</p>
        <button
          type="button"
          className={styles.checkout}
          onClick={() => {
            const id = `DIORSE-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
            clearCart();
            router.push(`/checkout/success?order=${id}`);
          }}
        >
          Checkout
        </button>
        <Link className={styles.continue} href="/shop">
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
