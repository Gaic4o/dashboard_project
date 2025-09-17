import type {
  TransactionApiResponse,
  Transaction,
} from "../model/types-transaction";

export const fetchDashboardTransactions = async (
  page: number = 1,
  limit: number = 10
): Promise<TransactionApiResponse> => {
  // 실제 API 호출을 시뮬레이션하기 위한 지연
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 1000)
  );

  // 가끔 에러를 발생시켜 ErrorBoundary 테스트
  if (Math.random() < 0.1) {
    throw new Error("거래 데이터를 가져오는 중 오류가 발생했습니다.");
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const transactions = MOCK_TRANSACTIONS.slice(startIndex, endIndex);

  return {
    transactions,
    total: MOCK_TRANSACTIONS.length,
    page,
    limit,
  };
};

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "tx001",
    type: "income",
    amount: 2500000,
    currency: "KRW",
    description: "월급",
    category: "급여",
    status: "completed",
    date: "2024-01-15",
    accountTo: "KB국민은행 ***-01-123456",
  },
  {
    id: "tx002",
    type: "expense",
    amount: 150000,
    currency: "KRW",
    description: "마트 장보기",
    category: "생활비",
    status: "completed",
    date: "2024-01-14",
    accountFrom: "KB국민은행 ***-01-123456",
  },
  {
    id: "tx003",
    type: "transfer",
    amount: 500000,
    currency: "KRW",
    description: "적금 이체",
    category: "저축",
    status: "completed",
    date: "2024-01-13",
    accountFrom: "KB국민은행 ***-01-123456",
    accountTo: "우리은행 ***-02-789012",
  },
  {
    id: "tx004",
    type: "expense",
    amount: 85000,
    currency: "KRW",
    description: "주유비",
    category: "교통비",
    status: "pending",
    date: "2024-01-12",
    accountFrom: "KB국민은행 ***-01-123456",
  },
  {
    id: "tx005",
    type: "income",
    amount: 1200,
    currency: "USD",
    description: "프리랜싱 수입",
    category: "부업",
    status: "completed",
    date: "2024-01-11",
    accountTo: "KB국민은행 ***-01-123456",
  },
  {
    id: "tx006",
    type: "expense",
    amount: 45000,
    currency: "KRW",
    description: "점심식사",
    category: "식비",
    status: "failed",
    date: "2024-01-10",
    accountFrom: "KB국민은행 ***-01-123456",
  },
  {
    id: "tx007",
    type: "income",
    amount: 300000,
    currency: "KRW",
    description: "용돈",
    category: "기타수입",
    status: "completed",
    date: "2024-01-09",
    accountTo: "KB국민은행 ***-01-123456",
  },
  {
    id: "tx008",
    type: "expense",
    amount: 120000,
    currency: "KRW",
    description: "병원비",
    category: "의료비",
    status: "completed",
    date: "2024-01-08",
    accountFrom: "KB국민은행 ***-01-123456",
  },
  {
    id: "tx009",
    type: "transfer",
    amount: 1000000,
    currency: "KRW",
    description: "투자계좌 이체",
    category: "투자",
    status: "pending",
    date: "2024-01-07",
    accountFrom: "KB국민은행 ***-01-123456",
    accountTo: "증권계좌 ***-03-456789",
  },
  {
    id: "tx010",
    type: "expense",
    amount: 65000,
    currency: "KRW",
    description: "온라인 쇼핑",
    category: "쇼핑",
    status: "completed",
    date: "2024-01-06",
    accountFrom: "KB국민은행 ***-01-123456",
  },
];
