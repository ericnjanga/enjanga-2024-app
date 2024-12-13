import { InformationCard1Props } from "../../models";
import "./InformationCard1.scss"; 
import Icon from "../Icons/icons";
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";
import Preloader from "../Preloader/Preloader";

const InformationCard1 = ({ blurb, className, id }: InformationCard1Props) => {  
  const context = useContext(ModalContext);

  if (!context) {
    // return if the context is empty
    return <Preloader />;
  }

  // Otherwise, destructure the context
  const { openModal } = context; 

  return (
    <div 
      className={`InformationCard1 card ${className}`}
      onClick={() => {
        openModal({
          renderingType: 'data',
          dataType: 'InformationCard1 item',
          dataId: id,
        });
      }}
    >
      <div className="card-body">
        <Icon name='cube' className="icon" size="tiny" />
        <p className="mb-0">{blurb}</p>
        <span className="btn btn-link">Learn more ...</span>
      </div>
    </div>
  );
};

export default InformationCard1;
