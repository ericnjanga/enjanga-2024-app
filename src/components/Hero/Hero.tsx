import Navigation from "../Navigation/Navigation";
import './Hero.scss'; 
import { usePageSection } from "../../hooks/useAPI";
import Heading from "../Heading/Heading";

const Hero = () => {

  const hero = usePageSection('1');

  return (
    <header className="Hero">
      <Navigation />
      <div className="container Hero-content-wrapper"> 
        <div className="Hero-jumbotron jumbotron__textwrapper">
          {hero && 
            <>
              <Heading h="1">{hero.title}</Heading>
              <p className="Hero-subtitle">{hero.description}</p>
            </>
          }
        </div>

        <footer>
          <a href="#scope-of-expertise" className="btn btn-secondary">How can I help?</a>
        </footer>

        <img className="Hero-persona img-fluid" src="./images/hero-persona.png" alt="" />
        <img className="Hero-decoration img-fluid" src="./images/gradient-decoration.png" alt="" />
      </div>
    </header>
  );
};

export default Hero;