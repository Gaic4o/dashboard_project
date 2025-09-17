export const dashboardQueryKeys = {
  all: ["dashboard"] as const,
  users: () => [...dashboardQueryKeys.all, "users"] as const,
  usersList: (page: number, limit: number) =>
    [...dashboardQueryKeys.users(), { page, limit }] as const,
  userDetail: (userId: string) =>
    [...dashboardQueryKeys.users(), "detail", userId] as const,
  userStats: () => [...dashboardQueryKeys.users(), "stats"] as const,

  transactions: () => [...dashboardQueryKeys.all, "transactions"] as const,
  transactionsList: (page: number, limit: number) =>
    [...dashboardQueryKeys.transactions(), { page, limit }] as const,
  transactionDetail: (transactionId: string) =>
    [...dashboardQueryKeys.transactions(), "detail", transactionId] as const,
  transactionStats: () =>
    [...dashboardQueryKeys.transactions(), "stats"] as const,
} as const;
