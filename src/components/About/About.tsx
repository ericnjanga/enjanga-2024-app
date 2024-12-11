import "./About.scss";
import { usePageSection } from "../../hooks/useAPI";
import Heading from "../Heading/Heading";

const About = () => {
  const sectionData = usePageSection("4");

  return (
    <section className="About">
      <div className="container">
        <Heading h="2" className="name mb-0">
          {!sectionData ? "..." : sectionData.title}
        </Heading>
        <div
          dangerouslySetInnerHTML={{
            __html: sectionData ? sectionData.description : "",
          }}
        ></div>
 
      </div>
    </section>
  );
};

export default About;
