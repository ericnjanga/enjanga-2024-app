import { useEffect } from "react";

// Slick carousel imports (in order of importance)
import $ from "jquery"; // Import jQuery dependency
import "slick-carousel/slick/slick.css"; // Slick styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme
import "slick-carousel"; // Slick JS (must be available after jQuery)

import { ProjectProps, SliderConfig } from "../models"; 


// TypeScript type for slick methods 
declare global {
  interface JQuery {
    slickPrev(): void;
    slickNext(): void;
  }
}

/**
 * Initialize a target component with a slick-slider plugin, and enable button controls
 * @param sliderRef 
 * @param prevBtnRef 
 * @param nextBtnRef 
 * @param listOfItems 
 * @param setReadyState 
 * @param config 
 * @param setActiveIndex
 */
export const useSliderInit = (
  sliderRef: React.RefObject<HTMLDivElement>,
  prevBtnRef: React.RefObject<HTMLButtonElement>, 
  nextBtnRef: React.RefObject<HTMLButtonElement>, 
  listOfItems: ProjectProps[] | string[] | null,
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>,
  config: SliderConfig,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
) => {

  useEffect(() => {
    // Ensure the sliderRef, prevBtnRef, and nextBtnRef are available
    if (sliderRef.current && prevBtnRef.current && nextBtnRef.current) {
      const sliderElement = sliderRef.current;

      // Initialize the slider only if it's not already initialized (when component mounts)
      if (!$(sliderElement).hasClass("slick-initialized")) {
        // Initialize Slick carousel 
        const slick = $(sliderElement).slick(config);

        // Bind custom prev/next buttons to slick actions
        $(prevBtnRef.current).on('click', () => { slick.slick('slickPrev'); }); 
        $(nextBtnRef.current).on('click', () => { slick.slick('slickNext'); });

        // Track the active slide index
        $(sliderElement).on("afterChange", (_, __, currentIndex: number) => {
          console.log('.....currentIndex = ', currentIndex);
          setActiveIndex(currentIndex);
        });

        // Wait for slick to finish initializing before showing the slider
        setReadyState(true); 

        // Cleanup Slick when the component unmounts or re-runs
        return () => {
          if (prevBtnRef.current && nextBtnRef.current && sliderElement) {
            $(prevBtnRef.current).off('click');
            $(nextBtnRef.current).off('click'); 
            $(sliderElement).off('afterChange'); 
            $(sliderElement).slick("unslick"); // Destroy the Slick slider instance 
          }
        };
      } 
    }
  }, [config, listOfItems, setActiveIndex]); // No need for setReadyState or sliderRef here, as they are stable references
};


