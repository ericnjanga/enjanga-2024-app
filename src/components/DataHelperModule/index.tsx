import React, { ReactNode } from "react";
import { LanguageContext } from "../../utils/contexts";
import { DataHelperContext } from "../../utils/contexts";
import { useContext } from "react";
import Preloader from "../Preloader/Preloader";
import { useTranslation } from "react-i18next";

import { useContentful } from "../../hooks/useContentful";
import { queryKeyData, contactDataId } from "./DataHelperModule.shared";
import { queryData } from "../../libs/queries";


/**
 * Initializes global data shared across the application:
 * - Contact data for modal usage
 * @returns 
 */
export const DataHelperProvider = ({ children }: { children: ReactNode }) => {
  
  // For extracting localised content from "i18n.ts" file based on the currently active locale
  const { t } = useTranslation();

  // Getting the currently active locale...
  const activeLang = useContext(LanguageContext);
  
  /**
   * Fetching ContentFul data in all languages, and handling errors and loading time
   * ----------------------
   */
  const { data, isLoading, error } = useContentful({
    query: queryData.infoBlockById,
    variables: { blockId: contactDataId, locale1: "en-CA", locale2: "fr" },
    queryKey: queryKeyData,
  });

  // Contact data for modal usage ...
  const contactModalDataContent = {
    title: data?.[activeLang]?.title,
    description: data?.[activeLang]?.description
  };

  // Display a placeholder is there is no modal context or the data fetching is not yet completed
  if (isLoading) {
    return <Preloader />;
  }
  // Display an error messaye if there was problem fetching data
  if (error) return <p>{t("ErrorLoadingDataHelper")}</p>;
  /**
   * Fetching ContentFul data in all languages, and handling errors and loading time
   * ----------------------
   */

  return (
    <DataHelperContext.Provider value={{ contactModalDataContent }}>
      {children}
    </DataHelperContext.Provider>
  );
};
