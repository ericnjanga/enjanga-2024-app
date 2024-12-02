import Navigation from "../Navigation/Navigation";
import './Hero.scss'; 
import { useHero } from "../../hooks/useAPI";

const Hero = () => {

  const hero = useHero();

  return (
    <header className="Hero">
      <Navigation />
      <div className="container Hero-content-wrapper"> 
        <div className="Hero-jumbotron jumbotron__textwrapper">
          {hero && 
            <>
              <h1>{hero.title}</h1>
              <p className="Hero-subtitle">{hero.description}</p>
            </>
          }
        </div>

        <footer>
          <a href="" className="btn btn-secondary">How can I hellp?</a>
        </footer>

        <img className="Hero-persona img-fluid" src="./images/hero-persona.png" alt="" />
        <img className="Hero-decoration img-fluid" src="./images/gradient-decoration.png" alt="" />
      </div>
    </header>
  );
};

export default Hero;