import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import deTranslation from '@/app/locales/de/translition.json';
import arTranslation from '@/app/locales/ar/translition.json';

// Configure i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'de', // Default language
    debug: process.env.NODE_ENV === 'development', // Enable debug logs in development
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    resources: {
      de: {
        translation: deTranslation, // German translations
      },
      ar: {
        translation: arTranslation, // Arabic translations
      },
    },
  });

export default i18n;