import { ProjectProps } from "../../models"; 
import './ProjectThumb.scss';

const ProjectThumb = ({ title, description }: ProjectProps) => {
  return (
    <a className="ExpertiseSpec card" href="#vfsvd">
      <div className="card-body">
        <h3>{title}</h3>
        <p className="mb-0">{description}</p> 
      </div>
    </a>
  );
};

export default ProjectThumb;