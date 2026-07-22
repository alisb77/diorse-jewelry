"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Product } from "@/content/products";
import { ProductCard } from "./ProductCard";
import { Reveal } from "@/components/Reveal";
import styles from "@/app/shop/shop.module.css";

type Props = {
  products: Product[];
};

export function ShopGrid({ products }: Props) {
  const reduce = useReducedMotion();

  return (
    <>
      <header className={styles.header}>
        <Reveal>
          <p className={styles.eyebrow}>Shop</p>
          <h1 className={styles.title}>The collection</h1>
          <p className={styles.lead}>
            Pieces shaped by blossom light and soft gold—prices follow your
            selected currency.
          </p>
        </Reveal>
      </header>
      <motion.ul
        className={styles.grid}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: reduce ? 0 : 0.08 },
          },
        }}
      >
        {products.map((product) => (
          <motion.li
            key={product.id}
            variants={{
              hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <ProductCard product={product} />
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
}
