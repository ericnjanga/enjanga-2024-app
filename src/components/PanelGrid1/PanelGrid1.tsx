import { usePageSection, useExpertises } from "../../hooks/useAPI"; 
import InformationCard1 from "../InformationCard1/InformationCard1";
import './PanelGrid1.scss';


const PanelGrid1 = ({ pageSectionId }: { pageSectionId: string }) => {
  const sectionData = usePageSection(pageSectionId);
  const expertiseList = useExpertises(pageSectionId);

  console.log("======>>pageSectionId>", pageSectionId,  expertiseList);

  return (
    <section className="PanelGrid1">
      <h2 className="name mb-0">{!sectionData ? "..." : sectionData.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: sectionData ? sectionData.description : "",
        }}
      ></div>

      <div className="content-grid">
        {expertiseList &&
          expertiseList.map((expertise, index) => {
            return <InformationCard1 key={index} {...expertise} />;
          })}
      </div>
    </section>
  );
};

export default PanelGrid1;
