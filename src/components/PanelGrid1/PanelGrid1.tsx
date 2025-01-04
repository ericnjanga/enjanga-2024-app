import { useExpertises } from "../../hooks/useAPI";
import InformationCard1 from "../InformationCard1/InformationCard1";
import "./PanelGrid1.scss";
import PanelHero from "../PanelHero/PanelHero";

interface PanelGrid1Props {
  pageSectionId: string;
  className?: string;
}


const PanelGrid1: React.FC<PanelGrid1Props> = ({
  pageSectionId,
  className,
}) => {
  const expertiseList = useExpertises(pageSectionId);

  return (
    <section className={`PanelGrid1 ${className}`}>
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

export default PanelGrid1;
