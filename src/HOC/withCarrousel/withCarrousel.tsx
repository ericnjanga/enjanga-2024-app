import React, { useState, ChangeEvent, useRef } from "react";
import "./withCarrousel.scss";
import { useSliderInit } from "../../hooks/helpers";
import Preloader from "../../components/Preloader/Preloader";
import { SliderConfig } from "../../models";
import CarrouselControls from "./CarrouselControls/CarrouselControls";
import { ProjectProps } from "../../models";



 

// Define the type for the HOC itself
function withCarrousel<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  slidesList: string[] | ProjectProps[] | null,
  configObj: SliderConfig
): React.FC<P> {
  return (props: P) => {
    const [sliderReady, setSliderReady] = useState(true);
    //...
    const refs = {
      carousel: useRef<HTMLDivElement | null>(null), // Use referrencing the carousel element
      prevBtn: useRef<HTMLButtonElement | null>(null), // Ref for prev button
      nextBtn: useRef<HTMLButtonElement | null>(null), // Ref for next button
    };

    // Basic state for the slider
    const [value, setValue] = useState<number>(0);

    // Handle slider value change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value));
    };

    // Setup slider ...
    useSliderInit(
      refs.carousel,
      refs.prevBtn,
      refs.nextBtn,
      slidesList,
      setSliderReady,
      configObj
    );

    return (
      <div className="slider">
        {!slidesList || slidesList.length === 0 || !sliderReady ? (
          <Preloader />
        ) : (
          <>
            <CarrouselControls {...refs} />
            <section className="slider" ref={refs.carousel}>
              <WrappedComponent
                {...props}
                sliderValue={value}
                onSliderChange={handleChange}
              />
            </section>
          </>
        )}
      </div>
    );
  };
}


export default withCarrousel;