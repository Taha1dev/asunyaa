'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import { useParams } from 'next/navigation';

export default function HomePage() {
  const { t } = useTranslation();
  const [isReady, setIsReady] = useState(i18n.isInitialized);
  const { lang } = useParams(); // Get the current language from the URL

  useEffect(() => {
    console.log('lang is', lang)
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
      <h1>{t('Statistiken')}</h1>
      <p>{t('Möchten Sie {{name}} wirklich löschen?', { name: 'Test' })}</p>
    </div>
  );
}