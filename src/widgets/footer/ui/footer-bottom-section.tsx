import { Link } from "@heroui/link";
import { LEGAL_LINKS, type NavLink } from "../model/legal-links";

export const FooterBottomSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © 2025 대시보드. All rights reserved.
      </p>

      <div className="flex space-x-4 mt-4 md:mt-0">
        {LEGAL_LINKS.map((link: NavLink, index: number) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
