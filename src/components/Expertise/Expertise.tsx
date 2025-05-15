import "./Expertise.scss";
import { sliderExpertiseConfig } from "./sliderConfig";
import withCarrousel from "../../HOC/withCarrousel/withCarrousel";
import { PanelGridList } from "../../utils/functions";
import { sectionIds } from "./Expertise.shared";


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
  // const listOfIds = sectionIds;

  // Turns the list of items into a carrousel according to @sliderExpertiseConfig object ...
  const ExpertiseSliderWithSingleView = withCarrousel(
    PanelCollection,
    sectionIds,
    sliderExpertiseConfig
  );

  return <ExpertiseSliderWithSingleView slidesList={sectionIds} />;
};

export default CarrouselExpertise;
