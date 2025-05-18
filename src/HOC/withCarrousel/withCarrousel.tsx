import React, { useState, /*ChangeEvent, */useRef } from "react";
import "./withCarrousel.scss";
import { useSliderInit } from "../../hooks/helpers";
import Preloader from "../../components/Preloader/Preloader";
import { SliderConfig } from "../../models";
import CarrouselControls from "./CarrouselControls/CarrouselControls";
import { ProjectData, ExpertiseSpecData } from "../../models";



 

// Define the type for the HOC itself
function withCarrousel<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  slidesList: string[] | ProjectData[] | ExpertiseSpecData[],
  configObj: SliderConfig
): React.FC<P> {
  return (props: P) => {
    const [sliderReady, setSliderReady] = useState(true); 
    const [activeIndex, setActiveIndex] = useState(0);      // Tracking active slide index
    const totalSlides = slidesList ? slidesList.length : 0; // Tracking the number of slides used
    
    const refs = { // ...
      carousel: useRef<HTMLDivElement | null>(null), // Use referrencing the carousel element
      prevBtn: useRef<HTMLButtonElement | null>(null), // Ref for prev button
      nextBtn: useRef<HTMLButtonElement | null>(null), // Ref for next button
    };

    // Keeping track of which control will be disabled ...
    const isPrevDisabled = activeIndex === 0;
    const isNextDisabled = activeIndex === totalSlides - 1;

    // Initializing the carrousel ...
    useSliderInit(
      refs.carousel,
      refs.prevBtn,
      refs.nextBtn,
      slidesList,
      setSliderReady,
      configObj,
      setActiveIndex
    );

    return (
      <div className="slider">
        {!slidesList || slidesList.length === 0 || !sliderReady ? (
          <Preloader />
        ) : (
          <>
            <CarrouselControls 
              {...refs} 
              activeIndex={activeIndex}
              totalSlides={totalSlides}
              isPrevDisabled={isPrevDisabled}
              isNextDisabled={isNextDisabled}
            />
            <section className="slider" ref={refs.carousel}>
              <WrappedComponent {...props} />
            </section>
          </>
        )}
      </div>
    );
  };
}


export default withCarrousel;