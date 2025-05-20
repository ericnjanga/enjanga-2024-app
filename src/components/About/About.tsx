import "./About.scss";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { sectionId, infoBlockIds } from "./About.shared";
import InformationBlock from "../InformationBlock/InformationBlock";
import PanelHero from "../PanelHero/PanelHero";

const About = () => {
  // For extracting localised content from "i18n.ts" file based on the currently active locale
  const { t } = useTranslation();

  return (
    <section className="About sc-block PanelFrame theme-3">
      <div className="container">
        <div className="row">
            <PanelHero id={sectionId} className="col" />
        </div>

        <div className="row">
          {infoBlockIds.map((id, key) => (
            <div className="col-4 col-xs-12" key={key}>
              <InformationBlock id={id} />
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col">
            <footer className="text-center">
              <Button
                icon="chat"
                variant="secondary"
                neonVersion={true}
                target="_blank"
                href="https://www.linkedin.com/in/ericnjanga/"
              >
                {t("LinkedInCTA")}
              </Button>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
