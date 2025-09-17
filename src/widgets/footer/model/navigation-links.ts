/**
 * Footer 빠른 링크 목록
 *
 * @description 주요 페이지로의 네비게이션 링크들입니다.
 */
export const QUICK_LINKS: NavLink[] = [
  { href: "#", label: "홈" },
  { href: "#", label: "대시보드" },
  { href: "#", label: "설정" },
] as const;

export interface NavLink {
  href: string;
  label: string;
}
