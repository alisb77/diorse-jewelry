"use client";

import { formatMoney } from "@/lib/currency";
import { useShop } from "./ShopProvider";
import styles from "./Price.module.css";

type Props = {
  amountUsd: number;
  className?: string;
};

export function Price({ amountUsd, className = "" }: Props) {
  const { locale, ready } = useShop();
  const text = ready ? formatMoney(amountUsd, locale) : formatMoney(amountUsd, "en");

  return <span className={`${styles.price} ${className}`}>{text}</span>;
}
