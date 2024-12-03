// import { ExpertisePanelProps } from "../../models";
import { usePageSection, useExpertises } from "../../hooks/useAPI";
import ExpertiseSpec from "../ExpertiseSpec/ExpertiseSpec";



const ExpertisePanel = ({ pageSectionId }: { pageSectionId: string }) => {
  const sectionData = usePageSection(pageSectionId);
  const expertiseList = useExpertises(pageSectionId);

  console.log("======>>>", expertiseList);

  return (
    <section className="ExpertisePanel">
      <h2 className="name mb-0">{!sectionData ? "..." : sectionData.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: sectionData ? sectionData.description : "",
        }}
      ></div>

      <div>
        {expertiseList &&
          expertiseList.map((expertise, index) => {
            return <ExpertiseSpec key={index} {...expertise} />;
          })}
      </div>
    </section>
  );
};

export default ExpertisePanel;
