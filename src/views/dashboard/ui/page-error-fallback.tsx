import { Button } from "@heroui/button";

export const DashboardErrorFallback = () => (
  <div className="flex flex-col items-center justify-center py-20 space-y-6">
    <div className="text-center space-y-2">
      <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">
        데이터 로딩 중 오류가 발생했습니다
      </h3>
      <p className="text-gray-600 dark:text-gray-400 max-w-md">안녕하세요</p>
    </div>

    <Button color="primary" variant="solid" onPress={() => {}} className="px-6">
      다시 시도
    </Button>

    <details className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
      <summary className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
        기술적 세부사항 보기
      </summary>
      <pre className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-auto">
        테스트
      </pre>
    </details>
  </div>
);
