export type UserStatus = "Active" | "Paused" | "Vacation";

export interface DashboardUser {
  id: string;
  name: string;
  role: string;
  status: UserStatus;
  email: string;
  joinDate: string;
}

export interface DashboardApiResponse {
  users: DashboardUser[];
  total: number;
  page: number;
  limit: number;
}
