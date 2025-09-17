import type { TransactionType, TransactionStatus } from "./types-transaction";

/**
 * 거래 유형을 한국어 라벨로 변환
 * @param type - 거래 유형
 *
 * @example
 * ```typescript
 * getTransactionTypeLabel("income") // "수입"
 * getTransactionTypeLabel("expense") // "지출"
 * getTransactionTypeLabel("transfer") // "이체"
 * ```
 */
export const getTransactionTypeLabel = (type: TransactionType): string => {
  switch (type) {
    case "income":
      return "수입";
    case "expense":
      return "지출";
    case "transfer":
      return "이체";
    default:
      return type;
  }
};

/**
 * 거래 상태를 한국어 라벨로 변환
 * @param status - 거래 상태
 *
 * @example
 * ```typescript
 * getTransactionStatusLabel("completed") // "완료"
 * getTransactionStatusLabel("pending") // "대기"
 * getTransactionStatusLabel("failed") // "실패"
 * ```
 */
export const getTransactionStatusLabel = (
  status: TransactionStatus
): string => {
  switch (status) {
    case "completed":
      return "완료";
    case "pending":
      return "대기";
    case "failed":
      return "실패";
    default:
      return status;
  }
};
