import "./Portfolio.scss";
import { useProjects } from "../../hooks/useAPI"; 
import { ProjectProps } from "../../models";
import { sliderPortfolioConfig } from "./sliderConfig"; 
import withCarrousel from "../../HOC/withCarrousel/withCarrousel";
import { PortfolioList } from "../../utils/functions";
import PanelHero from "../PanelHero/PanelHero";

interface SliderXViewsProps {
  slidesList: ProjectProps[] | null;
}

//...
const SliderXViews: React.FC<SliderXViewsProps> = ({ slidesList }) => (
  <PortfolioList itemsList={slidesList} />
);

//...
const CarrouselPortfolio = () => {
  const itemsList = useProjects();
  const PortfolioSliderXViews = withCarrousel(
    SliderXViews,
    itemsList,
    sliderPortfolioConfig
  );

  return (
    <section className="Portfolio sc-block">
      <div className="container">
        <div className="PanelGrid1">
          <PanelHero id="3" />
          <PortfolioSliderXViews slidesList={itemsList} />
        </div>
      </div>
    </section>
  );
};

export default CarrouselPortfolio;
