import { InformationCard1Props } from "../../models";
import "./InformationCard1.scss"; 
import IconCube from "../Icons/icons";

const InformationCard1 = ({ blurb }: InformationCard1Props) => {  

  return (
    <div className="InformationCard1 card">
      <div className="card-body">
        <IconCube className="icon" size="tiny" />
        <p className="mb-0">{blurb}</p>
        <span className="btn btn-link">Learn more ...</span>
      </div>
    </div>
  );
};

export default InformationCard1;
