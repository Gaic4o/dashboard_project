import { Spinner } from "@heroui/spinner";

export const DashboardLoadingFallback = () => (
  <div className="flex flex-col items-center justify-center py-20 space-y-4">
    <Spinner size="lg" color="primary" />
    <p className="text-lg text-gray-600 dark:text-gray-400">
      사용자 데이터를 불러오는 중...
    </p>
  </div>
);
