export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceUsd: number;
  category: string;
  materials: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "blossom-ring",
    name: "Blossom Ring",
    description:
      "A petal-soft gold band with a quiet center stone—made for daylight and soft evenings.",
    priceUsd: 780,
    category: "Rings",
    materials: "18k gold, white diamond",
    image: "/images/blossom.jpg",
  },
  {
    id: "2",
    slug: "citrus-drop",
    name: "Citrus Drop",
    description:
      "Warm light captured in a teardrop pendant—citrus glow against cream silk.",
    priceUsd: 920,
    category: "Necklaces",
    materials: "18k gold, citrine",
    image: "/images/citrus.jpg",
  },
  {
    id: "3",
    slug: "marble-chain",
    name: "Marble Chain",
    description:
      "Stone-born grace in a fine chain—cool marble calm with a soft gold finish.",
    priceUsd: 640,
    category: "Necklaces",
    materials: "18k gold",
    image: "/images/marble.jpg",
  },
  {
    id: "4",
    slug: "orchard-hoops",
    name: "Orchard Hoops",
    description:
      "Joy, refined—lightweight hoops with a warm curve that catches blossom light.",
    priceUsd: 540,
    category: "Earrings",
    materials: "18k gold",
    image: "/images/orchard.jpg",
  },
  {
    id: "5",
    slug: "dawn-bangle",
    name: "Dawn Bangle",
    description:
      "A single open bangle with a soft coral-gold warmth—easy to stack or wear alone.",
    priceUsd: 860,
    category: "Bracelets",
    materials: "18k rose gold",
    image: "/images/dawn.jpg",
  },
  {
    id: "6",
    slug: "atelier-studs",
    name: "Atelier Studs",
    description:
      "Quiet brilliance for every day—small studs that feel intimate, never loud.",
    priceUsd: 420,
    category: "Earrings",
    materials: "18k gold, diamond",
    image: "/images/atelier.jpg",
  },
  {
    id: "7",
    slug: "orange-blossom-band",
    name: "Orange Blossom Band",
    description:
      "Inspired by spring orchards—engraved blossom motif circling a slim gold band.",
    priceUsd: 690,
    category: "Rings",
    materials: "18k gold",
    image: "/images/orange.jpg",
  },
  {
    id: "8",
    slug: "soft-gold-choker",
    name: "Soft Gold Choker",
    description:
      "Close to the collarbone—an atelier choker with a delicate clasp and warm sheen.",
    priceUsd: 1100,
    category: "Necklaces",
    materials: "18k gold",
    image: "/images/choker.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
