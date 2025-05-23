import "./Portfolio.scss";
// import { useProjects } from "../../hooks/useAPI"; 
import Preloader from "../Preloader/Preloader";

import { useContentful } from "../../hooks/useContentful";
import { useTranslation } from "react-i18next";
import { sliderPortfolioConfig } from "./sliderConfig"; 
import withCarrousel from "../../HOC/withCarrousel/withCarrousel";
import { PortfolioList } from "../../utils/functions";
import PanelHero from "../PanelHero/PanelHero";
import { heroSectionId } from "./Portfolio.shared";
import { queryData } from "../../libs/queries";
import { dataReshaper } from "../../utils/functions";
import { ProjectData } from "../../models";



// Wraps the list of items ...
const PortfolioCollection = ({ slidesList }: { slidesList: ProjectData[]}) => (
  <PortfolioList list={slidesList} />
);

const CarrouselPortfolio = () => {
  // For extracting localised content from "i18n.ts" file based on the currently active locale
  const { t } = useTranslation();

  /**
   * Fetching ContentFul data in all languages, and handling errors and loading time
   * ----------------------
   */
  const { data, isLoading, error } = useContentful({
    query: queryData.projectsCollection,
    variables: { locale1: "en-CA", locale2: "fr" },
    queryKey: '',
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

  // Data reshaped to group all translations into 1 object
  const reshapedData = dataReshaper(data); 


  // Turns the list of items into a carrousel according to @sliderPortfolioConfig object ...
  const PortfolioSliderWithMultiViews = withCarrousel(
    PortfolioCollection,
    reshapedData,
    sliderPortfolioConfig
  );

  return (
    <section className="Portfolio sc-block">
      <div className="container">
        <div className="PanelFrame">
          <div className="row">
            <PanelHero id={heroSectionId} className="col" />
          </div>
          <div className="row">
            <PortfolioSliderWithMultiViews slidesList={reshapedData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarrouselPortfolio;
