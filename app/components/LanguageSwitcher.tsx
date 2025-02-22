// components/LanguageSwitcher.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Update i18next language
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${lng}`); // Update URL
    router.push(newPathname);
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
      <button
        onClick={() => changeLanguage('de')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          i18n.language === 'de'
            ? 'bg-blue-500 text-white'
            : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          i18n.language === 'ar'
            ? 'bg-blue-500 text-white'
            : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        AR
      </button>
    </div>
  );
}