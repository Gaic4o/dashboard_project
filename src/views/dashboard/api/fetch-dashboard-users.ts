import type { DashboardApiResponse, DashboardUser } from "../model/types-user";

export const fetchDashboardUsers = async (
  page: number = 1,
  limit: number = 10
): Promise<DashboardApiResponse> => {
  // 실제 API 호출을 시뮬레이션하기 위한 지연
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 1000)
  );

  // 가끔 에러를 발생시켜 ErrorBoundary 테스트
  if (Math.random() < 0.1) {
    throw new Error("서버에서 데이터를 가져오는 중 오류가 발생했습니다.");
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const users = MOCK_USERS.slice(startIndex, endIndex);

  return {
    users,
    total: MOCK_USERS.length,
    page,
    limit,
  };
};

const MOCK_USERS: DashboardUser[] = [
  {
    id: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
    email: "tony@company.com",
    joinDate: "2023-01-15",
  },
  {
    id: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
    email: "zoey@company.com",
    joinDate: "2023-02-20",
  },
  {
    id: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
    email: "jane@company.com",
    joinDate: "2023-03-10",
  },
  {
    id: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
    email: "william@company.com",
    joinDate: "2023-04-05",
  },
  {
    id: "5",
    name: "Emily Davis",
    role: "UX Designer",
    status: "Active",
    email: "emily@company.com",
    joinDate: "2023-05-12",
  },
  {
    id: "6",
    name: "Michael Chen",
    role: "Backend Developer",
    status: "Active",
    email: "michael@company.com",
    joinDate: "2023-06-18",
  },
  {
    id: "7",
    name: "Sarah Wilson",
    role: "Product Manager",
    status: "Paused",
    email: "sarah@company.com",
    joinDate: "2023-07-22",
  },
  {
    id: "8",
    name: "David Kim",
    role: "DevOps Engineer",
    status: "Active",
    email: "david@company.com",
    joinDate: "2023-08-30",
  },
];
