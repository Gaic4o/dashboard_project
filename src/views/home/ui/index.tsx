import { Divider } from "@heroui/divider";
import { HeroSection } from "./hero-section";
import { FeaturesSection } from "./features-section";
import { CtaSection } from "./cta-section";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <HeroSection />
      <Divider className="max-w-6xl mx-auto" />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
};
