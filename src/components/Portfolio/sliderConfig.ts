import { SliderConfig } from "../../models";

/**
 * - Large screens: 3 slides
 * - Medium screens: 2 slides
 * - Small screens: 1 slide
 */
export const sliderPortfolioConfig: SliderConfig = {
  dots: false,
  speed: 300,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};