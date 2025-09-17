import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export { cva, type VariantProps } from "class-variance-authority";

/**
 * Tailwind CSS 클래스를 병합하고 충돌을 해결하는 유틸리티 함수
 * clsx와 tailwind-merge를 조합하여 조건부 클래스와 클래스 충돌 문제를 해결합니다.
 *
 * @param inputs - 병합할 클래스 값들
 * @returns 병합된 클래스 문자열
 *
 * @example
 * cn('px-2 py-1', 'px-4')
 * => 'py-1 px-4' (px-2는 px-4로 덮어씀)
 *
 * cn('text-red-500', condition && 'text-blue-500')
 *  => 조건부 클래스 적용
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
