// components/LanguageSwitcher.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { DropdownMenu, Trigger, Content, Item } from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react'; // Optional: For a dropdown icon
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${lng}`);
    router.push(newPathname);

    if (lng === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  };

  useEffect(() => {
    if (i18n.language === 'ar') {
    
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <DropdownMenu >
      <Trigger asChild >
        <button className="flex items-center justify-center p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
          <span className="text-sm font-medium text-gray-700">
            {i18n.language.toUpperCase()}
          </span>
          <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
        </button>
      </Trigger>

      <Content className="min-w-[100px] bg-white rounded-md shadow-lg border border-gray-200">
        <Item
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer outline-none"
          onClick={() => changeLanguage('de')}
        >
          DE
        </Item>
        <Item
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer outline-none"
          onClick={() => changeLanguage('ar')}
        >
          AR
        </Item>
      </Content>
    </DropdownMenu>
  );
}