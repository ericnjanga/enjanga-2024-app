import React, { useState, useRef } from "react";

import "./Caroussel.scss";
import PanelGrid1 from "../PanelGrid1/PanelGrid1";
import { sliderPortfolioConfig } from "./sliderConfig";
import { useSliderInit } from "../../hooks/helpers";
import Preloader from "../Preloader/Preloader";
import Icon from "../Icons/icons";

const Caroussel = () => {
  const [sliderReady, setSliderReady] = useState(true);
  const slidesList = ["2", "8", "9"];
  const carouselRef = useRef<HTMLDivElement | null>(null); // Use referrencing the carousel element
  const prevBtnRef = useRef<HTMLButtonElement | null>(null); // Ref for prev button
  const nextBtnRef = useRef<HTMLButtonElement | null>(null); // Ref for next button

  // Setup slider ...
  useSliderInit(
    carouselRef,
    prevBtnRef,
    nextBtnRef,
    slidesList,
    setSliderReady,
    sliderPortfolioConfig
  );

  return (
    <>
      {!slidesList || slidesList.length === 0 || !sliderReady ? (
        <Preloader />
      ) : (
        <section className="slider-container">
          <nav className="slider-controls">
            {/* Custom prev and next buttons */}
            <button ref={prevBtnRef} className="btn btn-secondary slick-prev"> 
              <Icon name='slider-arrow-left' size='medium' className='icon' />
              <span>Prev</span>
            </button>
            <button ref={nextBtnRef} className="btn btn-secondary slick-next">
              <span>Next</span> 
              <Icon name='slider-arrow-right' size='medium' className='icon' />
            </button>
          </nav>
          <section className="slider" ref={carouselRef}>
            {slidesList.map((id, index) => {
              return (
                <PanelGrid1
                  key={index}
                  pageSectionId={id}
                  className={`sc-block site-carousel-item theme-${index + 1}`}
                />
              );
            })}
          </section>
        </section>
      )}
    </>
  );
};

export default Caroussel;
