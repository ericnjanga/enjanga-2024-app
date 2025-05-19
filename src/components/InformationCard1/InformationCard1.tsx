import { ProjectProps, ExpertiseSpecificationProps } from "../../models";
import "./InformationCard1.scss";
import Icon from "../Icons/icons";
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";
import Preloader from "../Preloader/Preloader";
import { LanguageContext } from "../../utils/contexts";
import { useTranslation } from "react-i18next";

import { useContentful } from "../../hooks/useContentful";
// import { queryKeyData, sectionId } from "./Footer.shared";
import { queryData } from "../../libs/queries";

const InformationCard1 = ({ title, blurb, description, className, id }: ProjectProps | ExpertiseSpecificationProps) => {  
  const { t } = useTranslation();

  // // Getting the currently active locale...
  // const activeLang = useContext(LanguageContext);

  // // For getting modal-based fucnctionality
  const modalContext = useContext(ModalContext);

  // /**
  //  * Fetching ContentFul data in all languages, and handling errors and loading time
  //  * ----------------------
  //  */
  // const { data, isLoading, error } = useContentful({
  //   query: queryData.expertiseSpecificationCollection,
  //   variables: { locale1: "en-CA", locale2: "fr" },
  //   queryKey: `expertiseCollection-${id}`,
  // });

  // Display a placeholder is there is no modal context or the data fetching is not yet completed
  if (!modalContext) {
    return <Preloader />;
  }
  // // Display an error messaye if there was problem fetching data
  // if (error) return <p>{t("ErrorLoadingPosts")}</p>;
  // /**
  //  * Fetching ContentFul data in all languages, and handling errors and loading time
  //  * ----------------------
  //  */

  // Otherwise, destructure the context
  const { openModal } = modalContext;

  return (
    <div 
      className={`InformationCard1 card ${className}`}
      onClick={() => {
        openModal({
          dataType: 'expertiseSpecs',
          content: { title, description },
          dataId: id,
        });
      }}
    >
      <div className="card-body">
        <Icon name='cube' className="icon" />
        <p className="mb-0">{blurb}</p>
        <span className="btn btn-link">{t("learnMore")} ...</span>
      </div>
    </div>
  );
};

export default InformationCard1;
