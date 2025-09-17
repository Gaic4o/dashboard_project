import { Link } from "@heroui/link";
import { QUICK_LINKS, type NavLink } from "../model/navigation-links";

export const QuickLinksSection = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-md font-medium text-gray-900 dark:text-white">
        빠른 링크
      </h4>
      <div className="flex flex-col space-y-2">
        {QUICK_LINKS.map((link: NavLink, index: number) => (
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
