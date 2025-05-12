import "./About.scss";
import { useContext } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../utils/contexts";
import Preloader from "../Preloader/Preloader";

import { useContentful } from "../../hooks/useContentful";
import { queryKeyData, sectionId } from "./About.shared";
import { queryData } from "../../libs/queries";

const About = () => {
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
    <section className="About">
      <div className="container">
        <img
          className="About-img img-fluid img-poster"
          src="images/eric-njanga-2.png"
          alt=""
        />

        <article className="About-article">
          {data && activeLang && (
            <>
              <Heading h="1" className="Hero-title">
                {data[activeLang]?.title}
              </Heading>
              <div
                className="About-description"
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

          <footer>
            <Button
              icon="chat"
              variant="secondary"
              neonVersion={true}
              target="_blank"
              href="https://www.linkedin.com/in/ericnjanga/"
            >
              {t("LinkedInCTA")}
            </Button>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default About;
