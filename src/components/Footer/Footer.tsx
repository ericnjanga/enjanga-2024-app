import "./Footer.scss";
import { ModalContext, LanguageContext } from "../../utils/contexts";
import { useContext } from "react";
import Heading from "../Heading/Heading";
import Preloader from "../Preloader/Preloader";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

import { useContentful } from "../../hooks/useContentful";
import { queryKeyData, sectionId } from "./Footer.shared";
import { queryData } from "../../libs/queries";

const Footer = () => {
  // For extracting localised content from "i18n.ts" file based on the currently active locale
  const { t } = useTranslation();

  // Getting the currently active locale...
  const activeLang = useContext(LanguageContext);

  // For getting modal-based fucnctionality
  const modalContext = useContext(ModalContext);
  
  /**
   * Fetching ContentFul data in all languages, and handling errors and loading time
   * ----------------------
   */
  const { data, isLoading, error } = useContentful({
    query: queryData.pageSection,
    variables: { sectionId, locale1: "en-CA", locale2: "fr" },
    queryKey: queryKeyData,
  });

  // Display a placeholder is there is no modal context or the data fetching is not yet completed
  if (!modalContext || isLoading) {
    return <Preloader />;
  }
  // Display an error messaye if there was problem fetching data
  if (error) return <p>{t("ErrorLoadingPosts")}</p>;
  /**
   * Fetching ContentFul data in all languages, and handling errors and loading time
   * ----------------------
   */

  // Otherwise, destructure the context
  const { openModal } = modalContext;

  // Otherwise, destructure the context
  return (
    <footer className="Footer sc-block">
      <div className="container text-center">
        {data && activeLang && (
            <>
              <Heading h="1" className="Hero-title">
                {data[activeLang]?.title}
              </Heading>
              <div
                className="title"
                dangerouslySetInnerHTML={{
                  __html: String(
                    data[activeLang]?.description?.json?.content[0]?.content[0]
                      ?.value ?? ""
                  ),
                }}
              />
            </>
          )}


        <Button
          variant="transparent"
          icon="chat"
          ariaLabel={t("contactCTAalt")}
          onClickHandler={() => {
            openModal({
              dataType: "pageSections",
              dataId: "7",
            });
          }}
        >
          {t("contactCTA")}
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
