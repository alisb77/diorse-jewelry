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
  collection: [
    {
      name: "Blossom Ring",
      note: "Petal-soft gold",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Citrus Drop",
      note: "Warm light, captured",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Marble Chain",
      note: "Stone-born grace",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Orchard Hoops",
      note: "Joy, refined",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  heroImage:
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=2400&q=80",
  boutiqueImage:
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2000&q=80",
  finalCta: {
    title: "See what we’re wearing now",
    body: "New pieces, atelier moments, and the colors that define Diorse—on Instagram.",
  },
} as const;
