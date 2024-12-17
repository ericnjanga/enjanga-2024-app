import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from 'msw-storybook-addon';
import { createServer } from "miragejs"; 
import './../src/styles/App.scss';
import { mockPageSectionProps, mockInformationCard1DataArray, mockNavOptions } from "./../src/models/mockupData"; 



/**
 * MirageJS server for Storybook environment
 * -------------------
 * 1) Initializing the server, which exposes the fake API to all stories
 * 2) Declaring custom routes, so that API calls will hit expected endpoints 
 * 3) Returning mocked data for each endpoints to simplify test cases
 */
if (typeof window !== 'undefined') {
  createServer({

    // Declaring the routes we know will be used by tested components
    routes() {
      this.namespace = 'api';

      this.get("/pageSection/1", () => {
        return {
          pageSection: {...mockPageSectionProps}
        };  
      });
      this.get("/expertiseSpecsByParent/1", () => {
        return { 
          expertiseSpecs: [...mockInformationCard1DataArray]
        };
      }); 
      // navOptions ...
      this.get("/navOptions", () => { 
        return {
          navOptions: [...mockNavOptions]
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
      margin: 0 !important;
    }
  `;
  document.head.appendChild(style);
};

bodyStyles(); 
addFont();

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'A) Page Section/Navigation',
          'A) Page Section/Hero',
          'A) Page Section/Caroussel', 
          'A) Page Section/Portfolio',
          'A) Page Section/About', 
          'A) Page Section/Footer',
          'B) Panels/PanelGrid1',
        ], // Custom order of story groups
        method: 'alphabetical', // Sort alphabetically
        locales: 'en-US', // Optional locale for sorting
        default: 'story' // Default sorting behavior for unknown cases
      },
    },

    // Responsiveness: Configuring the default viewport globally
    viewport: {
      // List of all viewports
      viewports: {
        smallerScreen: {
          name: 'XS Screen (max w: 320px)',
          styles: {
            width: '320px',
            height: '668px',
          },
        },
        smallScreen: {
          name: 'SM Screen (max w: 576px)',
          styles: {
            width: '576px',
            height: '668px',
          },
        },
        MinMediumScreen: {
          name: 'MD Screen (max w: 768px)',
          styles: {
            width: '768px',
            height: '768px',
          },
        },
        LarMediumScreen: {
          name: 'LMD Screen (max w: 992px)',
          styles: {
            width: '992px',
            height: '768px',
          },
        },
        largeScreen: {
          name: 'LG Screen (m.w: 1200px)',
          styles: {
            width: '1200px',
            height: '1080px',
          },
        },
        extraLargeScreen: {
          name: 'XL Screen (1400px up)',
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
