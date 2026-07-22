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
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80",
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
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80",
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
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=80",
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
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=80",
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
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1400&q=80",
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
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1400&q=80",
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
    image:
      "https://images.unsplash.com/photo-1603561596112-0a132b757efe?auto=format&fit=crop&w=1400&q=80",
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
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=1400&q=80",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
