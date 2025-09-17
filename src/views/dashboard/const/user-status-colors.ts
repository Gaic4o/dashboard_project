import type { UserStatus } from "../model/types-user";

/**
 * 사용자 상태에 따른 Chip 색상
 */
export const USER_STATUS_COLOR_MAP: Record<
  UserStatus,
  "success" | "warning" | "secondary"
> = {
  Active: "success",
  Paused: "warning",
  Vacation: "secondary",
} as const;
