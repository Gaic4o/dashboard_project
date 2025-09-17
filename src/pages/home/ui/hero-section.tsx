import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <Chip color="primary" variant="flat" className="mb-6">
          ✨ 새로운 대시보드 경험
        </Chip>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          현대적이고 직관적인
          <br />
          <span className="text-primary">대시보드</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          데이터를 한눈에 확인하고 효율적으로 관리할 수 있는 차세대 대시보드
          플랫폼입니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" color="primary" className="font-semibold">
            바로가기
          </Button>
          <Button size="lg" variant="bordered" className="font-semibold">
            더 알아보기(준비중)
          </Button>
        </div>
      </div>
    </section>
  );
};
