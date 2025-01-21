import "./Hero.scss";
import { usePageSection } from "../../hooks/useAPI";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { useTranslation } from 'react-i18next';
import { getCurrentLanguage } from "../../utils/functions";

const Hero = () => {
  const hero = usePageSection("1");
  const { t } = useTranslation();
  const currentLang = getCurrentLanguage();

  return (
    <header className="Hero">
      <div className="container Hero-content-wrapper">
        <div className="Hero-jumbotron jumbotron__textwrapper">
          {hero && (
            <>
              <Heading h="1" className="Hero-title">
                {hero.title[currentLang]}
              </Heading>
              <p className="Hero-subtitle">{hero.description[currentLang]}</p>
            </>
          )}
        </div>

        <footer className="Hero-footer"> 
          <Button 
            icon='arrow down'
            size="lg" 
            variant="secondary" 
            neonVersion={true}
            href="#scope-of-expertise"
          >
            { t('HeroCTA') }
          </Button>
        </footer>

        <img
          className="Hero-persona img-fluid"
          src="/images/eric-njanga-1.png"
          alt=""
        />
        <img
          className="Hero-decoration img-fluid"
          src="/images/gradient-decoration.png"
          alt=""
        />
      </div>
    </header>
  );
};

export default Hero;
