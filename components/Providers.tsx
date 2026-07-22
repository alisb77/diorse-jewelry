"use client";

import { ShopProvider } from "./shop/ShopProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ShopProvider>{children}</ShopProvider>;
}
