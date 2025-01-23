import i18n from 'i18next'; 

 

/**
 * Finds out what the App's active language is:
 * - Check the browser's language and assign a defaut language if necessary
 * - In any case, make sure only the language code string is returned
 * @returns 
 */
export const getCurrentLanguage = (): 'en' | 'fr' => { 
  // Get the browser's language (might be in language-region format, e.g., 'en-US')
  let language = i18n.language || 'en'; // Default to 'en' if no language is set
  let currLang: 'en' | 'fr';  // Enforce the return value's nature

  // Extract just the language code (e.g., 'en', 'fr', etc.)
  currLang = language.split('-')[0] !== 'en' ? 'fr' : 'en';  

  return currLang;
};


/**
 * - Use a state setter function to set language code string
 * - Update the <html> lang attribute
 * @param lng 
 * @param setLanguageState 
 */
export const setLanguageGlobally = (lng: string, setLanguageState: React.Dispatch<React.SetStateAction<"en" | "fr">>) => {
  setLanguageState(lng as "en" | "fr"); // Ensuring we only have 'en' or 'fr'
  document.documentElement.setAttribute('lang', lng); // Update <html> lang attribute
};



