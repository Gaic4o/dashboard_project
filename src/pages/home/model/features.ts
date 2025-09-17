/**
 * 대시보드에서 제공하는 주요 기능 목록
 *
 * @description 홈페이지의 Features 섹션에 표시되는 기능 데이터입니다.
 * 각 기능은 아이콘, 제목, 설명으로 구성됩니다.
 */
export const FEATURES: Feature[] = [
  {
    icon: "📊",
    title: "실시간 분석",
    description:
      "실시간으로 업데이트되는 데이터와 직관적인 차트로 현황을 파악하세요.",
  },
  {
    icon: "📊",
    title: "실시간 분석",
    description:
      "실시간으로 업데이트되는 데이터와 직관적인 차트로 현황을 파악하세요.",
  },
  {
    icon: "📊",
    title: "실시간 분석",
    description:
      "실시간으로 업데이트되는 데이터와 직관적인 차트로 현황을 파악하세요.",
  },
] as const;

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
