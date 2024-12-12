import { InformationCard1Props } from "../../models";
import "./InformationCard1.scss"; 
import Icon from "../Icons/icons";

const InformationCard1 = ({ blurb, className }: InformationCard1Props) => {  

  return (
    <div className={`InformationCard1 card ${className}`}>
      <div className="card-body">
        <Icon name='cube' className="icon" size="tiny" />
        <p className="mb-0">{blurb}</p>
        <span className="btn btn-link">Learn more ...</span>
      </div>
    </div>
  );
};

export default InformationCard1;
