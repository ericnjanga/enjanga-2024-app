import "./Preloader.scss";
import Icon from "../Icons/icons";

const Preloader = () => {
  return (
    <div className="Preloader">
      <Icon name="spinner" className="icon spinner" />
      <p>Loading content ...</p>
    </div>
  );
};

export default Preloader;
