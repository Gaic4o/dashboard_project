import { Button } from "@heroui/button";

export const CtaSection = () => {
  return (
    <section className="px-6 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          지금 시작해보세요
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          몇 분 안에 설정을 완료하고 강력한 대시보드 기능을 경험해보세요.
        </p>

        <Button size="lg" color="primary" className="font-semibold px-8">
          무료로 시작하기
        </Button>
      </div>
    </section>
  );
};
