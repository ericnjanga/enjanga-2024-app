
import Heading from "../Heading/Heading";
import { usePageSection } from "../../hooks/useAPI";
import { getCurrentLanguage } from "../../utils/functions";

const PanelHero = ({ id }: { id: string }) => {
  const sectionData = usePageSection(id);
  const currentLang = getCurrentLanguage();

  console.log('????????>>>>>???????', currentLang);

  return (
    <header className="pageSection-hero">
      <p>?????</p>
      <Heading h="2" iconName="hand" className="pageSection-title">
        {!sectionData ? "..." : sectionData.title[currentLang]}
      </Heading>
      <div
        className="pageSection-intro-text"
        dangerouslySetInnerHTML={{
          __html: sectionData ? sectionData.description[currentLang] : "",
        }}
      ></div>
    </header>
  );
};

export default PanelHero;
