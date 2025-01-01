import React, { useState, useRef, useMemo } from "react";

import "./Portfolio.scss";
import { useProjects } from "../../hooks/useAPI";
import ProjectThumb from "../ProjectThumb/ProjectThumb";
import PanelHero from "../PanelHero/PanelHero";
import Preloader from "../Preloader/Preloader";
import { sliderPortfolioConfig } from "./sliderConfig";
import { useSliderInit } from "../../hooks/helpers";

const Portfolio = () => {
  const [sliderReady, setSliderReady] = useState(true);
  const slidesList = useProjects();
  const carouselRef = useRef<HTMLDivElement | null>(null); // Use referrencing the carousel element
  const prevBtnRef = useRef<HTMLButtonElement | null>(null); // Ref for prev button
  const nextBtnRef = useRef<HTMLButtonElement | null>(null); // Ref for next button

  // Memoize slidesList to prevent unnecessary recomputations
  const memoizedslidesList = useMemo(() => slidesList, [slidesList]);

  useSliderInit(
    // Setup slider ...
    carouselRef,
    prevBtnRef,
    nextBtnRef,
    memoizedslidesList,
    setSliderReady,
    sliderPortfolioConfig
  );

  return (
    <section className="Portfolio sc-block">
      <div className="container">
        <div className="PanelGrid1">
          <PanelHero id="3" />

          {slidesList && slidesList.length && sliderReady && (
            <nav className="slider-controls">
            {/* Custom prev and next buttons */}
            <button
              ref={prevBtnRef}
              className="btn btn-secondary slick-prev"
            >
              Prev
            </button>
            <button
              ref={nextBtnRef}
              className="btn btn-secondary slick-next"
            >
              Next
            </button>
          </nav>
          )}


          {!slidesList || slidesList.length === 0 || !sliderReady ? (
            <Preloader />
          ) : (
            <section className="slider-container">
              <section className="slider" ref={carouselRef}>
                {slidesList.map((project, index) => {
                  return (
                    <ProjectThumb
                      key={index}
                      {...project}
                      className="slider-item"
                    />
                  );
                })}
              </section>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
