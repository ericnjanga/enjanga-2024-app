import "./Hero.scss";
import { useContext } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../utils/contexts";
import Preloader from "../Preloader/Preloader";

import { useContentful } from "../../hooks/useContentful";
import { queryKeyData, sectionId } from "./Hero.shared";
import { queryData } from "../../libs/queries";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Hero = () => {
  // For extracting localised content from "i18n.ts" file based on the currently active locale
  const { t } = useTranslation();

  // Getting the currently active locale...
  const activeLang = useContext(LanguageContext);

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
  if (isLoading) {
    return <Preloader />;
  }
  // Display an error messaye if there was problem fetching data
  if (error) return <p>{t("ErrorLoadingPosts")}</p>;
  /**
   * Fetching ContentFul data in all languages, and handling errors and loading time
   * ----------------------
   */

  return (
    <header className="Hero">
      <div className="container Hero-content-wrapper">
        <div className="row">
          <div className="col">
            <div className="Hero-jumbotron jumbotron__textwrapper">
              {data && activeLang && (
                <>
                  <Heading h="1" className="Hero-title">
                    {data[activeLang]?.title}
                  </Heading>
                  <div className="Hero-subtitle">
                    {documentToReactComponents(
                      data[activeLang]?.description?.json
                    )}
                  </div>
                  {/* <div
                className="Hero-subtitle"
                dangerouslySetInnerHTML={{
                  __html: String(
                    data[activeLang]?.description?.json?.content[0]?.content[0]
                      ?.value ?? ""
                  ),
                }}
              /> */}
                </>
              )}
            </div>
          </div>
        </div>

        <img
          className="Hero-persona img-fluid"
          src="/images/eric-njanga-1.png"
          alt=""
        />
        <img
          className="Hero-decoration img-fluid"
          src="/images/gradient-decoration.png"
          alt=""
        />
      </div>
    </header>
  );
};

export default Hero;
