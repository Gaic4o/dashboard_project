import { Divider } from "@heroui/divider";
import { CompanyInfoSection } from "./company-info-section";
import { QuickLinksSection } from "./quick-links-section";
import { ContactSection } from "./contact-section";
import { FooterBottomSection } from "./footer-bottom-section";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CompanyInfoSection />
          <QuickLinksSection />
          <ContactSection />
        </div>
        <Divider className="my-6" />
        <FooterBottomSection />
      </div>
    </footer>
  );
};
