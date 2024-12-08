import { ExpertiseSpecProps } from "../../models";
import "./ExpertiseSpec.scss";
import { ModalContext } from "../../utils/contexts";
import { useContext } from "react";
import IconCube from "../Icons/icons";

const ExpertiseSpec = ({ id, blurb }: ExpertiseSpecProps) => {
  const context = useContext(ModalContext);

  if (!context) {
    // return if the context is empty
    return <div className="placeholder">... placeholder ...</div>;
  }

  // Otherwise, destructure the context
  const { openModal } = context;

  return (
    <div
      className="ExpertiseSpec card"
      onClick={() => {
        openModal({ renderingType: 'data', dataType: 'ExpertiseSpec item', dataId: id });
      }}
    >
      <div className="card-body">
        <IconCube className="icon" size="tiny" />
        <p className="mb-0">{blurb}</p>
        <span className="btn btn-link">Learn more ...</span>
      </div>
    </div>
  );
};

export default ExpertiseSpec;
