import type { CurrencyCode } from "./types-transaction";

/**
 * 통화와 금액을 형식에 맞게 포맷팅합니다
 * @param amount - 포맷팅할 금액
 * @param currency - 통화 코드
 * @returns 포맷팅된 통화 문자열
 *
 * @example
 * ```typescript
 * formatCurrency(1000000, "KRW") // "₩1,000,000"
 * formatCurrency(1234.56, "USD") // "$1,234.56"
 * formatCurrency(999.99, "EUR") // "€999.99"
 * ```
 */
export const formatCurrency = (
  amount: number,
  currency: CurrencyCode
): string => {
  switch (currency) {
    case "KRW":
      return `₩${amount.toLocaleString("ko-KR")}`;
    case "USD":
      return `$${amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
    case "EUR":
      return `€${amount.toLocaleString("de-DE", { minimumFractionDigits: 2 })}`;
    default:
      return `${amount} ${currency}`;
  }
};
