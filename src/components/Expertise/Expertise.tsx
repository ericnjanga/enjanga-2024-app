import "./Expertise.scss";
import { sliderExpertiseConfig } from "./sliderConfig";
import withCarrousel from "../../HOC/withCarrousel/withCarrousel";
import { PanelGridList } from "../../utils/functions";


// The slider will contain an array of strings ...
interface PanelCollectionProps {
  slidesList: string[];
}

// Wraps the list of items ...
const PanelCollection: React.FC<PanelCollectionProps> = ({ slidesList }) => (
  <PanelGridList idsList={slidesList} />
);

//...
const CarrouselExpertise = () => {
  const listOfIds = ["2", "8", "9"];

  // Turns the list of items into a carrousel according to @sliderExpertiseConfig object ...
  const ExpertiseSliderWithSingleView = withCarrousel(
    PanelCollection,
    listOfIds,
    sliderExpertiseConfig
  );

  return <ExpertiseSliderWithSingleView slidesList={listOfIds} />;
};

export default CarrouselExpertise;
