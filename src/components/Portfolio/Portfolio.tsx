import "./Portfolio.scss";
import { usePageSection, useProjects } from "../../hooks/useAPI";
import ProjectThumb from "../ProjectThumb/ProjectThumb";
import PanelHero from "../PanelHero/PanelHero";
import Heading from "../Heading/Heading";

const Portfolio = () => {
  const sectionData = usePageSection("3");
  const projectList = useProjects();

  return (
    <section className="Portfolio sc-block">
      <div className="container">
        <div className="PanelGrid1">
          <PanelHero id="3" />

          {/* <Heading h='2' className="name Portfolio-title pageSection-title">
          {!sectionData ? "..." : sectionData.title}
        </Heading>
        <div
          dangerouslySetInnerHTML={{
            __html: sectionData ? sectionData.description : "",
          }}
        ></div> */}

          <div className="site-carousel__items-list">
            {" "}
            {/* d-none */}
            {projectList &&
              projectList.map((project, index) => {
                return (
                  <ProjectThumb
                    key={index}
                    {...project}
                    className="site-carousel-item"
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
