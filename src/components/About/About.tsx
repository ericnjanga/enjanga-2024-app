import "./About.scss";
import { usePageSection } from "../../hooks/useAPI";

const About = () => {
  const sectionData = usePageSection("4");

  return (
    <section className="About">
      <div className="container">
        <h2 className="name mb-0">
          {!sectionData ? "..." : sectionData.title}
        </h2>
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
