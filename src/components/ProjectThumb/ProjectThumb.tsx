import { ProjectProps } from "../../models";
import "./ProjectThumb.scss";
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";
import Preloader from "../Preloader/Preloader"; 
import { LanguageContext } from "../../utils/contexts"; 

const ProjectThumb = ({ id, title, blurb, className, image }: ProjectProps) => {
  const context = useContext(ModalContext); 
  const activeLang = useContext(LanguageContext);

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
          dataId: id,
        });
      }}
    >
      <img className="img-fluid" src={image} alt={title[activeLang]} />
      <div className="card-body">
        {/* <h3 className="ProjectThumb-title">{title}</h3> */}
        <p className="ProjectThumb-description mb-0">{title[activeLang]}</p>
      </div>
    </div>
  );
};

export default ProjectThumb;
