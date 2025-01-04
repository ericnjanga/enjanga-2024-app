import "./Expertise.scss";
import { sliderPortfolioConfig } from "./sliderConfig";
import withCarrousel, {
  withCarrouselProps,
} from "../../HOC/withCarrousel/withCarrousel";
import { PanelGridList } from "../../utils/functions";

interface SliderExpertiseProps {
  slidesList: string[];
}

const SliderSingleView: React.FC<SliderExpertiseProps & withCarrouselProps> = ({
  slidesList,
}) => {

  return (
    <PanelGridList panelList={slidesList} />
  );
};
 


const CarrouselExpertise = () => {
  const itemsList = ["2", "8", "9"]; 
  const ExpertiseSliderWithSingleView = withCarrousel(
    SliderSingleView,
    itemsList,
    sliderPortfolioConfig
  );

  return (
    <ExpertiseSliderWithSingleView slidesList={itemsList} />
  );
};

export default CarrouselExpertise;

