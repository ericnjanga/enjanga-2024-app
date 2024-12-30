import React, { useEffect, useState, useRef } from "react";

// Slick carousel imports (in order of importance)
import $ from "jquery"; // Import jQuery dependency
import "slick-carousel/slick/slick.css"; // Slick styles
import "slick-carousel/slick/slick-theme.css"; // Slick theme
import "slick-carousel"; // Slick JS (must be available after jQuery)

import "./Portfolio.scss";
import { useProjects } from "../../hooks/useAPI";
import ProjectThumb from "../ProjectThumb/ProjectThumb";
import PanelHero from "../PanelHero/PanelHero";
import Preloader from "../Preloader/Preloader";

declare global {
  interface JQuery {
    slick(options?: any): JQuery;
  }
}

const Portfolio = () => {
  const [displaySlider, setDisplaySlider] = useState(true);
  const projectList = useProjects();
  // const timeOut = 1000;
  const carouselRef = useRef<HTMLDivElement | null>(null);  // Use referrencing the carousel element

  useEffect(() => {
    // const carouselClass = "site-carousel__items-list";
    // const $carousel = $(carouselRef.current);
    const $carousel = carouselRef.current;
    // Make sure jQuery and Slick are ready before initializing

    if ($carousel && $.fn.slick) {

      console.log("......>>>>>>", $carousel);
      console.log("......>>>>>>", !$carousel.classList.contains('slick-initialized'));
      console.log("......>>>>>>", $.fn.slick);
      // Initialize slick only once
      if (!$carousel.classList.contains('slick-initialized')) {
        // setTimeout(() => {

          // Only unslick if the carousel was previously initialized
          // if ($carousel.hasClass("slick-initialized")) {
          //   $carousel.slick("unslick");
          // }

          // Initialize Slick carousel when component mounts
          $($carousel).slick({
            // dots: true,
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
          });

          // Wait for slick to finish initializing before showing the slider
          setDisplaySlider(true);
        // }, timeOut);
      }
    }

    // Cleanup Slick when the component unmounts
    return () => {
      if ($carousel && $carousel.classList.contains('slick-initialized')) {
        $($carousel).slick('unslick');
      }
    };
  }, [projectList]); // Only re-initialize if the project list changes

  return (
    <section className="Portfolio sc-block">
      <div className="container">
        <div className="PanelGrid1">
          <PanelHero id="3" />

          {!projectList || projectList.length === 0 || !displaySlider ? (
            <Preloader />
          ) : (
            <div className="site-carousel__items-list" ref={carouselRef}>
              {" "}
              {/* d-none */}
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
