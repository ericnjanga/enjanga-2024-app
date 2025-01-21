import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      contactCTA: 'Get in touch with me',
      contactCTAalt: 'Open contact form to get in touch with Eric Njanga',
      HeroCTA: 'Scope of expertise',
      LinkedInCTA: `I'm on LinkedIn`, 
      Next: 'Next', 
      Prev: 'Prev', 
      SwitchEN: 'Switch to English',
      SwitchFR: 'Switch to French',
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      contactCTA: 'Me contacter',
      contactCTAalt: 'Ouvrir le formulaire de contact pour entrer en contact avec Eric Njanga',
      HeroCTA: 'Mon expertise',
      LinkedInCTA: 'Je suis sur LinkedIn', 
      Next: 'Suivant', 
      Prev: 'Précedant', 
      SwitchEN: `Passer à l'Anglais`,
      SwitchFR: 'Passer au Français',
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
