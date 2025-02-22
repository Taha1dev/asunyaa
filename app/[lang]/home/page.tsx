'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import { useParams } from 'next/navigation';
import CharitySlider from '@/app/components/charity-slider';
import Footer from '@/app/components/Footer';
import Sponsers from '@/app/components/Sponsers';
import { MainNav } from '@/app/components/Nav';

export default function HomePage() {
  const { t } = useTranslation();
  const [isReady, setIsReady] = useState(i18n.isInitialized);
  const { lang } = useParams(); // Get the current language from the URL

  useEffect(() => {

    // Update i18next language when the URL changes
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang as any);
    }
  }, [lang]);

  useEffect(() => {
    // Initialize i18next if not already initialized
    if (!i18n.isInitialized) {
      i18n.init().then(() => setIsReady(true));
    }
  }, []);

  if (!isReady) {
    return <div>Loading...</div>; // Show a loading state
  }

  return (
    <div>
      <MainNav/>
      <CharitySlider />
      <Sponsers />
      <Footer />
    </div>
  );
}