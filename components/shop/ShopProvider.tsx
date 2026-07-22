"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { isLocale, type Locale } from "@/lib/currency";

const LOCALE_KEY = "diorse-locale";
const CART_KEY = "diorse-cart";

export type CartMap = Record<string, number>;

type ShopContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  cart: CartMap;
  itemCount: number;
  addToCart: (slug: string, qty?: number) => void;
  removeFromCart: (slug: string) => void;
  setQuantity: (slug: string, qty: number) => void;
  clearCart: () => void;
  ready: boolean;
};

const ShopContext = createContext<ShopContextValue | null>(null);

function readLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(LOCALE_KEY);
  return stored && isLocale(stored) ? stored : "en";
}

function readCart(): CartMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as CartMap;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [cart, setCart] = useState<CartMap>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLocaleState(readLocale());
    setCart(readCart());
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_KEY, next);
  }, []);

  const persistCart = useCallback((next: CartMap) => {
    setCart(next);
    window.localStorage.setItem(CART_KEY, JSON.stringify(next));
  }, []);

  const addToCart = useCallback(
    (slug: string, qty = 1) => {
      setCart((prev) => {
        const next = { ...prev, [slug]: (prev[slug] ?? 0) + qty };
        window.localStorage.setItem(CART_KEY, JSON.stringify(next));
        return next;
      });
    },
    [],
  );

  const removeFromCart = useCallback((slug: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[slug];
      window.localStorage.setItem(CART_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const setQuantity = useCallback((slug: string, qty: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[slug];
      else next[slug] = qty;
      window.localStorage.setItem(CART_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    persistCart({});
  }, [persistCart]);

  const itemCount = useMemo(
    () => Object.values(cart).reduce((sum, n) => sum + n, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      cart,
      itemCount,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      ready,
    }),
    [
      locale,
      setLocale,
      cart,
      itemCount,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      ready,
    ],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
