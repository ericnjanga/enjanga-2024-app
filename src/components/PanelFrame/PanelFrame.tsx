/**
 * Fetches
 */
import { useExpertises } from "../../hooks/useAPI";
import InformationCard1 from "../InformationCard1/InformationCard1";
import "./PanelFrame.scss";
import PanelHero from "../PanelHero/PanelHero";

interface PanelFrameProps {
  pageSectionId: string;
  className?: string;
}


const PanelFrame: React.FC<PanelFrameProps> = ({
  pageSectionId,
  className,
}) => {
  const expertiseList = useExpertises(pageSectionId);

  return (
    <section className={`PanelFrame ${className}`}>
      <div className="container">
        <PanelHero id={pageSectionId} />

        <div className="content-grid">
          {expertiseList &&
            expertiseList.map((expertise, index) => {
              return (
                <InformationCard1
                  key={index}
                  {...expertise}
                  className="content-grid-item"
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PanelFrame;
