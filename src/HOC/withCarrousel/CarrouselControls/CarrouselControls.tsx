
import Icon from "../../../components/Icons/icons";
import './CarrouselControls.scss';

const CarrouselControls = ({
  prevBtn,
  nextBtn,
}: {
  prevBtn: React.RefObject<HTMLButtonElement>;
  nextBtn: React.RefObject<HTMLButtonElement>;
}) => {
  return (
    <nav className="carrousel-controls">
      {prevBtn && (
        <button ref={prevBtn} className="btn btn-secondary slick-prev">
          <Icon name="slider-arrow-left" size="medium" className="icon" />
          <span>Prev</span>
        </button>
      )}
      {nextBtn && (
        <button ref={nextBtn} className="btn btn-secondary slick-next">
          <span>Next</span>
          <Icon name="slider-arrow-right" size="medium" className="icon" />
        </button>
      )}
    </nav>
  );
};

export default CarrouselControls;