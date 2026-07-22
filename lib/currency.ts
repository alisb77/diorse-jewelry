export type Locale = "en" | "fa" | "ar";

export type CurrencyCode = "USD" | "IRT" | "AED";

export const LOCALES: Locale[] = ["en", "fa", "ar"];

export const LOCALE_META: Record<
  Locale,
  { label: string; currency: CurrencyCode; numberLocale: string }
> = {
  en: { label: "EN", currency: "USD", numberLocale: "en-US" },
  fa: { label: "FA", currency: "IRT", numberLocale: "fa-IR" },
  ar: { label: "AR", currency: "AED", numberLocale: "ar-AE" },
};

/** Mock rates: units of target currency per 1 USD */
export const RATES: Record<CurrencyCode, number> = {
  USD: 1,
  AED: 3.67,
  IRT: 42_000,
};

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function convertFromUsd(amountUsd: number, currency: CurrencyCode): number {
  return amountUsd * RATES[currency];
}

export function formatMoney(amountUsd: number, locale: Locale): string {
  const { currency, numberLocale } = LOCALE_META[locale];
  const converted = convertFromUsd(amountUsd, currency);

  if (currency === "IRT") {
    const formatted = new Intl.NumberFormat(numberLocale, {
      maximumFractionDigits: 0,
    }).format(Math.round(converted));
    return `${formatted} IRT`;
  }

  return new Intl.NumberFormat(numberLocale, {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "AED" ? 0 : 0,
  }).format(converted);
}
