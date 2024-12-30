import React, { useState, useRef, useMemo } from "react";

import "./Portfolio.scss";
import { useProjects } from "../../hooks/useAPI";
import ProjectThumb from "../ProjectThumb/ProjectThumb";
import PanelHero from "../PanelHero/PanelHero";
import Preloader from "../Preloader/Preloader";
import { sliderPortfolioConfig } from "./sliderConfig";
import { useSliderOps } from "../../hooks/helpers";

const Portfolio = () => {
  const [sliderReady, setSliderReady] = useState(true);
  const slidesList = useProjects();
  const carouselRef = useRef<HTMLDivElement | null>(null); // Use referrencing the carousel element

  // Memoize slidesList to prevent unnecessary recomputations
  const memoizedslidesList = useMemo(() => slidesList, [slidesList]);

  useSliderOps( // Setup slider ...
    carouselRef, 
    sliderPortfolioConfig, 
    setSliderReady, 
    memoizedslidesList
  );

  return (
    <section className="Portfolio sc-block">
      <div className="container">
        <div className="PanelGrid1">
          <PanelHero id="3" />

          {!slidesList || slidesList.length === 0 || !sliderReady ? (
            <Preloader />
          ) : (
            <div className="slider" ref={carouselRef}> 
              {slidesList.map((project, index) => {
                return (
                  <ProjectThumb
                    key={index}
                    {...project}
                    className="site-carousel-item"
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
