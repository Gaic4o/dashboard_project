/**
 * 거래 유형
 */
export type TransactionType = "income" | "expense" | "transfer";

/**
 * 거래 상태
 */
export type TransactionStatus = "completed" | "pending" | "failed";

/**
 * 지원되는 통화 코드
 */
export type CurrencyCode = "KRW" | "USD" | "EUR";

/**
 * 거래 정보
 */
export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  currency: CurrencyCode;
  description: string;
  category: string;
  status: TransactionStatus;
  date: string;
  accountFrom?: string;
  accountTo?: string;
}

/**
 * 거래 목록 API 응답
 */
export interface TransactionApiResponse {
  transactions: Transaction[];
  total: number;
  page: number;
  limit: number;
}
