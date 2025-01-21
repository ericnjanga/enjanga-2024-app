import React, { ReactNode, useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { getCurrentLanguage } from '../../utils/functions';
import './LanguageToggle.scss';
import { LanguageContext } from '../../utils/contexts';
import i18n from 'i18next';


export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLang, setCurrentLang] = useState<'en' | 'fr'>(getCurrentLanguage());

  // Update state whenever i18n's language changes
  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLang(lng as 'en' | 'fr'); // Ensuring we only have 'en' or 'fr'
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange); // Cleanup listener
    };
  }, []);

  return (
    <LanguageContext.Provider value={currentLang}>
      {children}
    </LanguageContext.Provider>
  );
};


const LanguageToggle = ({ className }:{ className:string }) => {
  const activeLang = useContext(LanguageContext);
  const { i18n } = useTranslation(); 

  const changeLanguage = (lng: 'en' | 'fr') => {
    i18n.changeLanguage(lng);
  };

  return (
    <section className={`LanguageToggle ${className}`}>
      <button 
        className={`btn ${activeLang === 'en' ? 'active' : ''}`} 
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button 
        className={`btn ${activeLang === 'fr' ? 'active' : ''}`} 
        onClick={() => changeLanguage('fr')}
      >
        FR
      </button>
    </section>
  );
};

export default LanguageToggle;
