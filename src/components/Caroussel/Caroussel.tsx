import React, { useState, useRef } from "react";

import "./Caroussel.scss"; 
import PanelGrid1 from "../PanelGrid1/PanelGrid1";
import { sliderPortfolioConfig } from "./sliderConfig";
import { useSliderOps } from "../../hooks/helpers";
import Preloader from "../Preloader/Preloader";

const Caroussel = () => {
  const [sliderReady, setSliderReady] = useState(true);
  const slidesList = ['2','2', '2'];
  const carouselRef = useRef<HTMLDivElement | null>(null); // Use referrencing the carousel element

  useSliderOps( // Setup slider ...
    carouselRef, 
    sliderPortfolioConfig, 
    setSliderReady, 
    slidesList
  );

  return (
    <section className="Caroussel sc-block">
      <div className="container">

        {!slidesList || slidesList.length === 0 || !sliderReady ? (
          <Preloader />
        ) : (
          <div className="slider" ref={carouselRef}> 
            {slidesList.map((id, index) => {
              return (
                <PanelGrid1
                  key={index}
                  pageSectionId={id}
                  className="site-carousel-item"
                />
              );
            })}
          </div>
        )}  
      </div>
    </section>
  );
};

export default Caroussel;
