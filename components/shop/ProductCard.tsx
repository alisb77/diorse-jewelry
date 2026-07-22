import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";
import { Price } from "./Price";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <article className={styles.card}>
      <Link className={styles.link} href={`/shop/${product.slug}`}>
        <div className={styles.frame}>
          <Image
            className={styles.image}
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        <div className={styles.meta}>
          <p className={styles.category}>{product.category}</p>
          <h2 className={styles.name}>{product.name}</h2>
          <Price amountUsd={product.priceUsd} className={styles.price} />
        </div>
      </Link>
    </article>
  );
}
