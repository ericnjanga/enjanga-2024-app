import { ProjectProps } from "../../models";
import "./ProjectThumb.scss";
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";
import Preloader from "../Preloader/Preloader"; 

const ProjectThumb = ({ title, description, className, image }: ProjectProps) => {
  const context = useContext(ModalContext); 

  if (!context) {
    // return if the context is empty
    return <Preloader />;
  }

  // Otherwise, destructure the context
  const { openModal } = context;

  return (
    <div
      className={`${className} ProjectThumb card`}
      onClick={() => {
        openModal({
          dataType: "projects",
          content: { title, description },
          size: 'large'
        });
      }}
    >
      <img className="img-fluid" src={image?.url} alt={image?.description} />
      <div className="card-body">
        <h3 className="ProjectThumb-title">{title}</h3>
        {/* <p className="ProjectThumb-description mb-0">{blurb}</p> */}
      </div>
    </div>
  );
};

export default ProjectThumb;
