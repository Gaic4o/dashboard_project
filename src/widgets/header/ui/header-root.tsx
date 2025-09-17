import { Avatar } from "@heroui/avatar";

export const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white shadow-sm border-b border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          대시보드
        </h1>
        <Avatar size="md" radius="full" name="Kim" />
      </div>
    </header>
  );
};
