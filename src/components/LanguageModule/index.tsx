import React, { ReactNode, useState, useEffect } from "react";
import i18n from "i18next";
import { LanguageContext } from "../../utils/contexts";
import { getCurrentLanguage, setLanguageGlobally } from "./utils";


/**
 * - Initializes the state with the active language code string 
 * - On first load: Calls setLanguageGlobally()
 * - Listens for "languageChanged" event emitted by i18n instance in <LanguageToggle /> 
 * @param param0 
 * @returns 
 */
export const LanguageProvider = ({ children }: { children: ReactNode }) => {

  // Initialize the state with the current language
  const [currentLang, setCurrentLang] = useState<"en" | "fr">(
    getCurrentLanguage()
  );


  /**
   * Listens for "languageChanged" event emitted by i18n instance in <LanguageToggle /> and:
   * - Calls setLanguageGlobally() and pass it on the lang state update function
   * - Stop listening when the component is destroyed
   */
  useEffect(() => {
    setLanguageGlobally(currentLang, setCurrentLang); 
 
    i18n.on("languageChanged", (lang) => { 
      setLanguageGlobally(lang, setCurrentLang)
    });

    return () => {
      i18n.off("languageChanged", setLanguageGlobally); // Cleanup listener
    };
  }, []);

  return (
    <LanguageContext.Provider value={currentLang}>
      {children}
    </LanguageContext.Provider>
  );
};
