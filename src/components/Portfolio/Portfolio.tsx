import "./Portfolio.scss";
import { usePageSection, useProjects } from "../../hooks/useAPI";
import ProjectThumb from "../ProjectThumb/ProjectThumb";

const Portfolio = () => {
  const sectionData = usePageSection("3");
  const projectList = useProjects();

  return (
    <section className="Portfolio">
      <div className="container">
        <h2 className="name mb-0">
          {!sectionData ? "..." : sectionData.title}
        </h2>
        <div
          dangerouslySetInnerHTML={{
            __html: sectionData ? sectionData.description : "",
          }}
        ></div>

        <div>
          {projectList && projectList.map((project, index) => {
            return <ProjectThumb key={index} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
