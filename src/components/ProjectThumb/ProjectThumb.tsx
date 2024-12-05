import { ProjectProps } from "../../models"; 
import './ProjectThumb.scss';
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";

const ProjectThumb = ({ id, title, blurb }: ProjectProps) => {
  const context = useContext(ModalContext);

  if (!context) { // return if the context is empty
    return (
      <div className="placeholder">... placeholder ...</div>
    );
  }

  // Otherwise, destructure the context
  const { openModal } = context; 

  return (
    <div
      className="ProjectThumb card"
      onClick={() => {
        openModal({ renderingType: 'data', dataType: 'ProjectThumb item', dataId: id });
      }}
    >
      <div className="card-body">
        <h3>{title}</h3>
        <p className="mb-0">{blurb}</p> 
      </div>
    </div>
  );
};

export default ProjectThumb;