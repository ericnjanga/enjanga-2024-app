import { useEffect } from "react";

// Slick carousel imports (in order of importance)
import $ from "jquery"; // Import jQuery dependency
import "slick-carousel/slick/slick.css"; // Slick styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme
import "slick-carousel"; // Slick JS (must be available after jQuery)

import { ProjectProps, SliderConfig } from "../models"; 

export const useSliderOps = (
  sliderRef: React.RefObject<HTMLDivElement>,
  config: SliderConfig,
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>,
  listOfItems: ProjectProps[] | null 
) => {

  useEffect(() => {
    const $slider = sliderRef.current;
    
    if ($slider) { // Only initialize Slick if the DOM element is loaded.
      if (!$slider.classList.contains("slick-initialized")) { // Initialize slick only once
        $($slider).slick(config); // Initialize Slick carousel when component mounts
        setReadyState(true); // Wait for slick to finish initializing before showing the slider
      }
    }

    // Cleanup Slick when the component unmounts
    return () => {
      if ($slider && $slider.classList.contains("slick-initialized")) {
        $($slider).slick("unslick");
      }
    };
  }, [config, listOfItems]); // No need for setReadyState or sliderRef here, as they are stable references
};
