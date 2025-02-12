import { InformationCard1Props } from "../../models";
import "./InformationCard1.scss"; 
import Icon from "../Icons/icons";
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";
import Preloader from "../Preloader/Preloader";
import { LanguageContext } from "../../utils/contexts";

const InformationCard1 = ({ blurb, className, id }: InformationCard1Props) => {  
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
      className={`InformationCard1 card ${className}`}
      onClick={() => {
        openModal({
          dataType: 'expertiseSpecs',
          dataId: id,
        });
      }}
    >
      <div className="card-body">
        <Icon name='cube' className="icon" />
        <p className="mb-0">{blurb[activeLang]}</p>
        <span className="btn btn-link">Learn more ...</span>
      </div>
    </div>
  );
};

export default InformationCard1;
