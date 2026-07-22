import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllProductSlugs,
  getProductBySlug,
} from "@/content/products";
import { AddToCartButton } from "@/components/shop/AddToCartButton";
import { Price } from "@/components/shop/Price";
import styles from "./product.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product — DIORSE" };
  return {
    title: `${product.name} — DIORSE`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className={styles.page}>
      <Link className={styles.back} href="/shop">
        Back to shop
      </Link>
      <div className={styles.layout}>
        <div className={styles.visual}>
          <Image
            className={styles.image}
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
        <div className={styles.copy}>
          <p className={styles.category}>{product.category}</p>
          <h1 className={styles.title}>{product.name}</h1>
          <Price amountUsd={product.priceUsd} className={styles.price} />
          <p className={styles.description}>{product.description}</p>
          <p className={styles.materials}>
            <span>Materials</span>
            {product.materials}
          </p>
          <AddToCartButton slug={product.slug} />
        </div>
      </div>
    </div>
  );
}
