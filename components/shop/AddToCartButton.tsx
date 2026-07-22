"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useShop } from "./ShopProvider";
import styles from "./AddToCartButton.module.css";

type Props = {
  slug: string;
};

export function AddToCartButton({ slug }: Props) {
  const { addToCart } = useShop();
  const [added, setAdded] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      className={styles.button}
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      onClick={() => {
        addToCart(slug, 1);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={added ? "added" : "add"}
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
        >
          {added ? "Added to cart" : "Add to cart"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
