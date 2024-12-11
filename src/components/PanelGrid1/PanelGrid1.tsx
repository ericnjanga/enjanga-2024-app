import { usePageSection, useExpertises } from "../../hooks/useAPI";
import InformationCard1 from "../InformationCard1/InformationCard1";
import "./PanelGrid1.scss";
import Heading from "../Heading/Heading";

const PanelGrid1 = ({ pageSectionId }: { pageSectionId: string }) => {
  const sectionData = usePageSection(pageSectionId);
  const expertiseList = useExpertises(pageSectionId);

  console.log("======>>pageSectionId>", pageSectionId, expertiseList);

  return (
    <section className="PanelGrid1">
      <header className="pageSection-hero">
        <Heading h='2' className="pageSection-title">
          {!sectionData ? "..." : sectionData.title}
        </Heading>
        <div
          dangerouslySetInnerHTML={{
            __html: sectionData ? sectionData.description : "",
          }}
        ></div>
      </header>

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
