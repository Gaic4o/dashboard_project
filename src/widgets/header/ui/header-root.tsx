import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";

export const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-sm border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-primary"
          >
            대시보드
          </Link>
          <nav className="flex space-x-6">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              홈
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              사용자 관리
            </Link>
          </nav>
        </div>
        <Avatar size="md" radius="full" name="Kim" />
      </div>
    </header>
  );
};
