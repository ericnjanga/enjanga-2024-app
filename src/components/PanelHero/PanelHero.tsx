import { useContext } from 'react';
import Heading from "../Heading/Heading";
import { usePageSection } from "../../hooks/useAPI";
import { LanguageContext } from "../../utils/contexts";


const PanelHero = ({ id }: { id: string }) => {
  const sectionData = usePageSection(id);
  const activeLang = useContext(LanguageContext);

  return (
    <header className="pageSection-hero">
      <p>?????</p>
      <Heading h="2" iconName="hand" className="pageSection-title">
        {!sectionData ? "..." : sectionData.title[activeLang]}
      </Heading>
      <div
        className="pageSection-intro-text"
        dangerouslySetInnerHTML={{
          __html: sectionData ? sectionData.description[activeLang] : "",
        }}
      ></div>
    </header>
  );
};

export default PanelHero;
