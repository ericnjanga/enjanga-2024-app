import React from 'react';
import { useTranslation } from 'react-i18next';
import { getCurrentLanguage } from '../../utils/functions';
import './LanguageToggle.scss';

const LanguageToggle = ({ className }:{ className:string }) => {
  const { i18n } = useTranslation();
  const lang = getCurrentLanguage();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section className={`LanguageToggle ${className}`}>
      <button className={`btn ${lang === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
      <button className={`btn ${lang === 'fr' ? 'active' : ''}`} onClick={() => changeLanguage('fr')}>FR</button>
    </section>
  );
};

export default LanguageToggle;
