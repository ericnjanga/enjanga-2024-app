
import Heading from "../Heading/Heading";
import { usePageSection } from "../../hooks/useAPI";

const PanelHero = ({ id }: { id: string }) => {
  const sectionData = usePageSection(id);

  return (
    <header className="pageSection-hero">
      <Heading h="2" iconName="hand" className="pageSection-title">
        {!sectionData ? "..." : sectionData.title}
      </Heading>
      <div
        className="pageSection-intro-text"
        dangerouslySetInnerHTML={{
          __html: sectionData ? sectionData.description : "",
        }}
      ></div>
    </header>
  );
};

export default PanelHero;
