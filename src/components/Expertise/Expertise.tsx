import "./Expertise.scss";
import { sliderExpertiseConfig } from "./sliderConfig";
import withCarrousel from "../../HOC/withCarrousel/withCarrousel";
import { PanelGridList } from "../../utils/functions";


// The slider will contain an array of strings ...
interface SliderSingleViewProps {
  slidesList: string[];
}

//...
const SliderSingleView: React.FC<SliderSingleViewProps> = ({ slidesList }) => (
  <PanelGridList itemsList={slidesList} />
);

//...
const CarrouselExpertise = () => {
  const itemsList = ["2", "8", "9"];
  const ExpertiseSliderWithSingleView = withCarrousel(
    SliderSingleView,
    itemsList,
    sliderExpertiseConfig
  );

  return <ExpertiseSliderWithSingleView slidesList={itemsList} />;
};

export default CarrouselExpertise;
