import { ProjectProps, ExpertiseSpecificationProps } from "../../models";
import "./InformationCard1.scss";
import Icon from "../Icons/icons";
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";
import Preloader from "../Preloader/Preloader";
import clsx from "clsx";


const InformationCard1 = ({ title, blurb, description, className }: ProjectProps | ExpertiseSpecificationProps) => {  

  // For getting modal-based fucnctionality
  const modalContext = useContext(ModalContext);

  // Display a placeholder is there is no modal context or the data fetching is not yet completed
  if (!modalContext) {
    return <Preloader />;
  }

  // Otherwise, destructure the context
  const { openModal } = modalContext;

  return (
    <div 
      className={clsx("InformationCard1 card", className, {
        "has-hover" : description,
      })}
      // Only bind onCLick handler if there is a description to display ...
      onClick={description ? () => {
        openModal({
          dataType: 'expertiseSpecs',
          content: { title, description }
        });
      } : undefined}
    >
      <div className="card-body">
        <Icon name='cube' className="icon" />
        {description && <Icon name='arrow-outward' className="icon-hover" />}
        <h3 className="InformationCard1-title">{title}</h3>
        <p className="InformationCard1-blurb mb-0">{blurb}</p>
      </div>
    </div>
  );
};

export default InformationCard1;
