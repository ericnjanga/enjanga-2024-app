// Parallax.tsx
import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import styles from './ParallaxFrame.module.scss';

interface ParallaxProps {
  img: string;
  speed?: number;
  focus?: string; // e.g., 'center center', 'top center', 'bottom center'
}

const ParallaxFrame: React.FC<ParallaxProps> = ({ 
  img, 
  speed = -20,
  focus = 'top center' 
}) => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image: img,
            speed,
            // translateY: [0, 20],
            // shouldAlwaysCompleteAnimation: true,
            style: {
              objectPosition: focus,
            },
          },
        ]}
        // style={{
        //   width: '100%',
        // }}
        className={styles.parallaxWrapper}
      />
    </ParallaxProvider>
  );
};

export default ParallaxFrame;
