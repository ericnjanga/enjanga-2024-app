import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      contactCTA: 'Get in touch with me',
      HeroCTA: 'Scope of expertise',
      Next: 'Next', 
      Prev: 'Prev', 
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      contactCTA: 'Me contacter',
      HeroCTA: 'Mon expertise',
      LinkedInCTA: 'Je suis sur LinkedIn', 
      Next: 'Suivant', 
      Prev: 'Précedant', 
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
