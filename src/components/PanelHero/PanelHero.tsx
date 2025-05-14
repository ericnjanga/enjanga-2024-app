import { useContext } from "react";
import Heading from "../Heading/Heading";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../utils/contexts";
import Preloader from "../Preloader/Preloader";

import { useContentful } from "../../hooks/useContentful";
import { queryData } from "../../libs/queries";
import clsx from 'clsx';

type PanelHeroProps = {
  id: string;
  className?:string;
};

const PanelHero = ({ id, className }: PanelHeroProps) => {
  const { t } = useTranslation();

  // Getting the currently active locale...
  const activeLang = useContext(LanguageContext);

  /**
   * Fetching ContentFul data in all languages, and handling errors and loading time
   * ----------------------
   */
  const { data, isLoading, error } = useContentful({
    query: queryData.pageSection,
    variables: { sectionId: id, locale1: "en-CA", locale2: "fr" },
    queryKey: `pageSection-${id}`,
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
    <header className={clsx('pageSection-hero', className)}>
      {data && activeLang && (
        <>
          <Heading h="2" className="pageSection-title">
            {data[activeLang]?.title}
          </Heading>
          <div
            className="pageSection-intro-text"
            dangerouslySetInnerHTML={{
              __html: String(
                data[activeLang]?.description?.json?.content[0]?.content[0]
                  ?.value ?? ""
              ),
            }}
          />
          {/* <div>{documentToReactComponents(data.pageSection.description.json)}</div> */}
        </>
      )}
    </header>
  );
};

export default PanelHero;
