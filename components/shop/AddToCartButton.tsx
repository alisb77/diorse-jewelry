"use client";

import { useState } from "react";
import { useShop } from "./ShopProvider";
import styles from "./AddToCartButton.module.css";

type Props = {
  slug: string;
};

export function AddToCartButton({ slug }: Props) {
  const { addToCart } = useShop();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => {
        addToCart(slug, 1);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
    >
      {added ? "Added to cart" : "Add to cart"}
    </button>
  );
}
