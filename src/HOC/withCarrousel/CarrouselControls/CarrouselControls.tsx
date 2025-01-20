import Icon from "../../../components/Icons/icons";
import "./CarrouselControls.scss";
import { useTranslation } from "react-i18next";

type CarrouselControlsProps = {
  prevBtn: React.RefObject<HTMLButtonElement>;
  nextBtn: React.RefObject<HTMLButtonElement>;
  activeIndex: number;
  totalSlides: number;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
};

const CarrouselControls = ({
  prevBtn,
  nextBtn,
  activeIndex,
  totalSlides,
  isPrevDisabled,
  isNextDisabled,
}: CarrouselControlsProps) => {
  const { t } = useTranslation();

  return (
    <nav className={`carrousel-controls slide-index-${activeIndex}`}>
      {prevBtn && (
        <button 
        ref={prevBtn} 
        className={`btn btn-secondary slick-prev ${isPrevDisabled ? "disabled" : ""}`}
        disabled={isPrevDisabled}
        >
          <Icon name="slider-arrow-left" size="medium" className="icon" />
          <span>{ t('Prev') }</span> 
        </button>
      )}
      {nextBtn && (
        <button 
        ref={nextBtn} 
        className={`btn btn-secondary slick-next ${isNextDisabled ? "disabled" : ""}`}
        disabled={isNextDisabled}
        > 
          <span>{ t('Next') }</span>
          <Icon name="slider-arrow-right" size="medium" className="icon" />
        </button>
      )}
    </nav>
  );
};

export default CarrouselControls;
