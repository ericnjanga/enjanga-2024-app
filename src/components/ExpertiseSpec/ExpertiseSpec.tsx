import { ExpertiseSpecProps } from "../../models"; 
import './ExpertiseSpec.scss';

const ExpertiseSpec = ({ blurb }: ExpertiseSpecProps) => {
  return (
    <a className="ExpertiseSpec card" href="#vfsvd">
      <div className="card-body">
      <p className="mb-0">{blurb}</p>
      <button className="btn btn-link">Learn more ...</button>
      </div>
    </a>
  );
};

export default ExpertiseSpec;