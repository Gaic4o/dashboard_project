import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              대시보드
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              현대적이고 직관적인 대시보드로 데이터를 한눈에 확인하세요.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div className="space-y-4">
            <h4 className="text-md font-medium text-gray-900 dark:text-white">
              빠른 링크
            </h4>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                홈
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                대시보드
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                설정
              </Link>
            </div>
          </div>

          {/* 연락처 */}
          <div className="space-y-4">
            <h4 className="text-md font-medium text-gray-900 dark:text-white">
              연락처
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <span>이메일: alstnekdh1@gmail.com</span>
              <span>전화: 010-8876-9447</span>
            </div>
          </div>
        </div>

        <Divider className="my-6" />

        {/* 저작권 */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 대시보드. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              개인정보처리방침
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
