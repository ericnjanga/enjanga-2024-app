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
      LangSelect: 'Language selection',

      Yourname: 'Your name',
      Youremail: 'Your email',
      HowcanIhelp: 'How can I help?',
      Caregivedetails: 'Care to give more details?', 

      Selectoption: "Select an option",
      Techconsulting: "Technical consulting",
      Appdesign: "Software Design/Engineering",
      Teachmentor: "Teaching/mentoring",
      Other: "Other ...",

      Namerequired: "Name is required",
      Invalidemail: "Invalid email format",
      Emailquired: "Email is required",
      PleaseSelectoption: "Please select an option",
      Detailsrequired: "More details about your request are required",
      Details100Minchars: "A minimum of 100 characters is required",
      Details280Maxchars: "The 280 characters limit has been reached",

      ErrorLoadingPosts: 'Error loading blog posts.',
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
      LangSelect: 'Choix de la langue',

      Yourname: 'Votre nom',
      Youremail: 'Votre email',
      HowcanIhelp: 'Que puis-je faire pour vous?',
      Caregivedetails: 'Voulez-vous donner plus de détails?', 

      Selectoption: "Choisissez une option",
      Techconsulting: "Conseil technique",
      Appdesign: `Design/ingénierie de logiciel`,
      Teachmentor: "Enseignement/mentorat",
      Other: "Autre choses ...",

      Namerequired: "Le nom est requis",
      Invalidemail: "Format d'e-mail invalide",
      Emailquired: "L'e-mail est requis",
      PleaseSelectoption: "Veuillez sélectionner une option",
      Detailsrequired: "Des détails sur votre requête sont requis",
      Details100Minchars: "Un minimum de 100 caractères est requis",
      Details280Maxchars: "La limite de 280 caractères a été atteinte",

      ErrorLoadingPosts: 'Erreur lors du chargement des articles de blog.',
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
