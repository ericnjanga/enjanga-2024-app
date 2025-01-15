import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      contactBtn: 'Get in touch with me',
      key3: '[en] text',
      key4: '[en] text',
      key5: '[en] text',
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      contactBtn: 'Me contacter',
      key3: '[fr] text',
      key4: '[fr] text',
      key5: '[fr] text',
    },
  },
};

i18n
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Bind i18n to React
  .init({
    resources,
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes content
    },
  });

export default i18n;
