/**
 * Footer 연락처 정보 목록
 *
 * @description 이메일, 전화번호 등 연락처 정보입니다.
 */
export const CONTACT_INFO: ContactInfo[] = [
  { type: "이메일", value: "alstnekdh1@gmail.com" },
  { type: "전화", value: "010-8876-9447" },
] as const;

export interface ContactInfo {
  type: string;
  value: string;
}
