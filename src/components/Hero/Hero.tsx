import "./Hero.scss"; 
import React, { useContext } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../utils/contexts";
import Preloader from "../Preloader/Preloader";
  
import { useContentful } from "../../hooks/useContentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { queryData, queryKeyData, sectionId } from "./Hero.shared";


// export function PagesssSections({ sectionId = '2IESwjrb2JUTQG0S8PZ65S', locale = 'fr'}) {
 
//   const { data, isLoading, error } = useContentful({
//     query: queryData,
//     variables: { sectionId, locale },
//     queryKey: queryKeyData
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading blog posts.</p>;

//   console.log('********** title = ', data.pageSection.title);
//   console.log('********** description = ', documentToReactComponents(data.pageSection.description.json));
 
//   return (
//     <div>
//       <h3>{data.pageSection.title}</h3>
//       <div>{documentToReactComponents(data.pageSection.description.json)}</div>
//     </div>
//   );

// }



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
    query: queryData,
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
        <div className="Hero-jumbotron jumbotron__textwrapper">
          {data && activeLang && (
            <>
              <Heading h="1" className="Hero-title">
                {data[activeLang]?.title}
              </Heading>
              <div
  className="Hero-subtitle"
  dangerouslySetInnerHTML={{
    __html: String(data[activeLang]?.description?.json ?? ''),
  }}
/>
              {/* <div className="Hero-subtitle">
                {data[activeLang]?.description?.json && documentToReactComponents(data[activeLang]?.description?.json)}
              </div> */}
            </>
          )}
        </div>

        <footer className="Hero-footer">
          <Button
            icon="arrow down"
            size="lg"
            variant="secondary"
            neonVersion={true}
            href="#scope-of-expertise"
          >
            {t("HeroCTA")}
          </Button>
        </footer>

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
