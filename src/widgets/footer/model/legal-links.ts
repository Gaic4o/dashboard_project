/**
 * Footer 법적 링크 목록
 *
 * @description 개인정보처리방침, 이용약관 등 법적 문서 링크들입니다.
 */
export const LEGAL_LINKS: NavLink[] = [
  { href: "#", label: "개인정보처리방침" },
  { href: "#", label: "이용약관" },
] as const;

export interface NavLink {
  href: string;
  label: string;
}
