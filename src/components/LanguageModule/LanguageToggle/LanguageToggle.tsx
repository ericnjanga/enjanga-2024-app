import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageToggle.scss";
import { LanguageContext } from "../../../utils/contexts"; 



/**
 * - On first load: Save current language to local storage 
 * - Save the selected language to local storage
 * @param param0 
 * @returns 
 */
const LanguageToggle = ({ className }: { className: string }) => {
  const activeLang = useContext(LanguageContext);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  // Save language preference to local storage
  const saveLanguagePref = (lng: "en" | "fr") => {
    i18n.changeLanguage(lng);
  };

  // Save current language to local storage on first load
  useEffect(() => {
    saveLanguagePref(activeLang);
  }, []);

  return (
    <section
      className={`LanguageToggle ${className}`}
      aria-labelledby="language-toggle-heading"
    >
      {/* Screen reader only heading */}
      <h2 id="language-toggle-heading" className="visually-hidden">
        {t('LangSelect')}
      </h2>

      <button
        aria-label={t("SwitchEN")}
        aria-pressed={activeLang === "en" ? true : false}
        className={`btn ${activeLang === "en" ? "active" : ""}`}
        onClick={() => saveLanguagePref("en")}
      >
        EN
      </button>
      <button
        aria-label={t("SwitchFR")}
        aria-pressed={activeLang === "fr" ? true : false}
        className={`btn ${activeLang === "fr" ? "active" : ""}`}
        onClick={() => saveLanguagePref("fr")}
      >
        FR
      </button>
    </section>
  );
};

export default LanguageToggle;
