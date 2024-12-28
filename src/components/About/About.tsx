import "./About.scss";
import { usePageSection } from "../../hooks/useAPI";
import Heading from "../Heading/Heading";

const About = () => {
  const sectionData = usePageSection("4");

  return (
    <section className="About">
      <div className="container"> 
        <img className="About-img img-fluid img-poster" src="images/eric-njanga-2.png" alt="" /> 

        <article className="About-article">
          <Heading h="2" className="name About-title pageSection-title">
            {!sectionData ? "..." : sectionData.title}
          </Heading>
          <div
            className="About-description"
            dangerouslySetInnerHTML={{
              __html: sectionData ? sectionData.description : "",
            }}
          ></div>
        </article>
      </div>
    </section>
  );
};

export default About;
