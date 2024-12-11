import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from 'msw-storybook-addon';
import { createServer } from "miragejs"; 
import './../src/styles/App.scss';
import { mockPageSectionProps, mockInformationCard1DataArray } from "./../src/models/mockupData"; 



// Initialize MirageJS server
if (typeof window !== 'undefined') {
  createServer({

    routes() {
      this.namespace = 'api';

      this.get("/pageSection/1", () => {
        return {
          pageSection: { ...mockPageSectionProps }
        };  
      });
      this.get("/expertiseSpecsByParent/1", () => {
        return { 
          expertiseSpecs: [ ...mockInformationCard1DataArray ]
        };
      });
    }

  });
}

 
/*
 * Initializes MSW (For mocking network requests)
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 * Reference: https://storybook.js.org/docs/writing-stories/mocking-data-and-modules/mocking-network-requests
 */
initialize();

// Dynamically inject the font stylesheet
const addFont = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap";
  document.head.appendChild(link);
};

// Remove padding from the Storybook preview's body tag
const bodyStyles = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      padding: 0 !important;
      margin: 0 !important;
    }
  `;
  document.head.appendChild(style);
};

bodyStyles(); 
addFont();

const preview: Preview = {
  parameters: {
    // Responsiveness: Configuring the default viewport globally
    viewport: {
      // List of all viewports
      viewports: {
        smallerScreen: {
          name: 'Smaller Screen',
          styles: {
            width: '320px',
            height: '668px',
          },
        },
        smallScreen: {
          name: 'Small Screen',
          styles: {
            width: '576px',
            height: '668px',
          },
        },
        MinMediumScreen: {
          name: 'Min Medium Screen',
          styles: {
            width: '768px',
            height: '768px',
          },
        },
        LarMediumScreen: {
          name: 'Large Medium Screen',
          styles: {
            width: '992px',
            height: '768px',
          },
        },
        largeScreen: {
          name: 'Large Screen',
          styles: {
            width: '1200px',
            height: '1080px',
          },
        },
        extraLargeScreen: {
          name: 'Extra Large Screen',
          styles: {
            width: '1400px',
            height: '1080px',
          },
        },
      }, 
      defaultViewport: 'Large Medium Screen', 
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Adding the MSW loader to all stories
    loaders: [mswLoader], 
  },

  tags: ["autodocs"]
};

export default preview;
