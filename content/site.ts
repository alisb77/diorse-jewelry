export const site = {
  brand: "DIORSE",
  tagline: "Nature, worn close.",
  support:
    "Jewelry shaped by blossom light, citrus warmth, and the quiet luxury of stone.",
  instagram: {
    handle: "@diorsejewelry",
    url: "https://www.instagram.com/diorsejewelry",
  },
  contactEmail: "hello@diorsejewelry.com",
  boutique: {
    city: "Tehran",
    note: "An intimate atelier of cream marble, warm wood, and soft pink–orange light.",
  },
  nav: [
    { label: "Story", href: "#story" },
    { label: "Collection", href: "#collection" },
    { label: "Boutique", href: "#boutique" },
  ],
  story: {
    title: "Luxury that feels alive",
    body: "Diorse was imagined as a sanctuary—where elegance meets the sincerity of nature. Spring blossoms, the scent of oranges, and the texture of stone guide every piece we craft.",
  },
  statement:
    "Diamonds from stone. Color from citrus. Form from blossom.",
  featured: {
    name: "Citrus Drop",
    note: "Warm light, captured in gold",
    body: "A signature silhouette for the house—soft, luminous, and made to catch daylight the way an orchard does.",
    href: "/shop/citrus-drop",
    image: "/images/citrus.jpg",
  },
  collection: [
    {
      name: "Blossom Ring",
      note: "Petal-soft gold",
      image: "/images/blossom.jpg",
    },
    {
      name: "Citrus Drop",
      note: "Warm light, captured",
      image: "/images/citrus.jpg",
    },
    {
      name: "Marble Chain",
      note: "Stone-born grace",
      image: "/images/marble.jpg",
    },
    {
      name: "Orchard Hoops",
      note: "Joy, refined",
      image: "/images/orchard.jpg",
    },
  ],
  heroImage: "/images/hero.jpg",
  boutiqueImage: "/images/boutique.jpg",
  finalCta: {
    title: "Begin with a piece that feels like light",
    body: "Browse the collection, or follow the atelier as new forms arrive.",
  },
} as const;
