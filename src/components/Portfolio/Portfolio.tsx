import "./Portfolio.scss";
import { useProjects } from "../../hooks/useAPI"; 
import { ProjectProps } from "../../models";
import { sliderPortfolioConfig } from "./sliderConfig"; 
import withCarrousel from "../../HOC/withCarrousel/withCarrousel";
import { PortfolioList } from "../../utils/functions";
import PanelHero from "../PanelHero/PanelHero";


// The slider will contain an array of Projects ...
interface PortfolioCollectionProps {
  slidesList: ProjectProps[] | null;
}

// Wraps the list of items ...
const PortfolioCollection: React.FC<PortfolioCollectionProps> = ({ slidesList }) => (
  <PortfolioList itemsList={slidesList} />
);

const CarrouselPortfolio = () => {
  const itemsList = useProjects();

  // Turns the list of items into a carrousel according to @sliderPortfolioConfig object ...
  const PortfolioPortfolioCollection = withCarrousel(
    PortfolioCollection,
    itemsList,
    sliderPortfolioConfig
  );

  return (
    <section className="Portfolio sc-block">
      <div className="container">
        <div className="PanelGrid1">
          <PanelHero id="3" />
          <PortfolioPortfolioCollection slidesList={itemsList} />
        </div>
      </div>
    </section>
  );
};

export default CarrouselPortfolio;
