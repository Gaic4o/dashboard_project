import { CONTACT_INFO, type ContactInfo } from "../model/contact-info";

export const ContactSection = () => {
  return (
    <div className="space-y-4">
      <h4 className="text-md font-medium text-gray-900 dark:text-white">
        연락처
      </h4>
      <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
        {CONTACT_INFO.map((contact: ContactInfo, index: number) => (
          <span key={index}>
            {contact.type}: {contact.value}
          </span>
        ))}
      </div>
    </div>
  );
};
