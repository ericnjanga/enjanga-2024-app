/**
 * Fetches
 */

import { useExpertises } from "../../hooks/useAPI";
import InformationCard1 from "../InformationCard1/InformationCard1";
import "./PanelFrame.scss";
import PanelHero from "../PanelHero/PanelHero";
import { useEffect, useContext } from "react";
import Preloader from "../Preloader/Preloader";
import { ModalContext } from "../../utils/contexts";
import { LanguageContext } from "../../utils/contexts";
import { useTranslation } from "react-i18next";

import { useContentful } from "../../hooks/useContentful";
import { queryData } from "../../libs/queries";
import { ExpertiseSpecificationProps } from "../../models";
import { dataReshaper } from "../../utils/functions";

interface PanelFrameProps {
  pageSectionId: string;
  className?: string;
}

const PanelFrame: React.FC<PanelFrameProps> = ({
  pageSectionId,
  className,
}) => {
  const { t } = useTranslation();

  // Getting the currently active locale...
  const activeLang = useContext(LanguageContext);

  // // For getting modal-based fucnctionality
  // const modalContext = useContext(ModalContext);

  /**
   * Fetching ContentFul data in all languages, and handling errors and loading time
   * ----------------------
   */
  const { data, isLoading, error } = useContentful({
    query: queryData.expertiseSpecificationCollection,
    variables: { parentId: pageSectionId, locale1: "en-CA", locale2: "fr" },
    queryKey: `expertiseCollection-${pageSectionId}`,
  });

  // Note: Using the <Preloader /> here crashes the code 
  // Display an error messaye if there was problem fetching data
  if (error) return <p>{t("ErrorLoadingPosts")}</p>;
  /**
   * Fetching ContentFul data in all languages, and handling errors and loading time
   * ----------------------
   */

  // Data reshaped to group all translations into 1 object
  const reshapedData = dataReshaper(data);


  return (
    <section className={`PanelFrame ${className}`}>
      <div className="container">
        <PanelHero id={pageSectionId} />

        <div className="content-grid">
          {reshapedData &&
            reshapedData.map((expertise, index: number) => {
              return (
                <InformationCard1
                  key={index}
                  {...expertise[activeLang]}
                  className="PanelFrame-item"
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PanelFrame;
