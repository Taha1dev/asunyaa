import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'de', // Default language
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    resources: {
      de: {
        translation: require('../locales/de/translition.json'),
      },
      ar: {
        translation: require('../locales/ar/translition.json'),
      },
    },
  });

export default i18n;