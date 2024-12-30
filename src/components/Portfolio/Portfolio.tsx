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
  const projectList = useProjects();
  const carouselRef = useRef<HTMLDivElement | null>(null); // Use referrencing the carousel element

  // Memoize projectList to prevent unnecessary recomputations
  const memoizedProjectList = useMemo(() => projectList, [projectList]);

  useSliderOps( // Setup slider ...
    carouselRef, 
    sliderPortfolioConfig, 
    setSliderReady, 
    memoizedProjectList
  );

  return (
    <section className="Portfolio sc-block">
      <div className="container">
        <div className="PanelGrid1">
          <PanelHero id="3" />

          {!projectList || projectList.length === 0 || !sliderReady ? (
            <Preloader />
          ) : (
            <div className="site-carousel__items-list" ref={carouselRef}> 
              {projectList.map((project, index) => {
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
