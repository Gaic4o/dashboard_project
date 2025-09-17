import type {
  TransactionStatus,
  TransactionType,
} from "../model/types-transaction";

/**
 * 거래 상태에 따른 Chip 색상
 */
export const TRANSACTION_STATUS_COLOR_MAP: Record<
  TransactionStatus,
  "success" | "warning" | "danger"
> = {
  completed: "success",
  pending: "warning",
  failed: "danger",
} as const;

/**
 * 거래 유형에 따른 Chip 색상
 */
export const TRANSACTION_TYPE_COLOR_MAP: Record<
  TransactionType,
  "success" | "danger" | "primary"
> = {
  income: "success",
  expense: "danger",
  transfer: "primary",
} as const;
