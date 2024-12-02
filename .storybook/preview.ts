import type { Preview } from "@storybook/react";
import './../src/styles/App.scss';

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
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;
