// Caroussel.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Caroussel from "./Caroussel";

export default {
  title: "Large Components/Caroussel",  // The category and name of the component
  component: Caroussel,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the Caroussel is pretty straightforward.
  },
} as Meta;

const Template: StoryFn = (args) => <Caroussel {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Here you can set props if Caroussel had any dynamic inputs. 
  // Since the Caroussel is a static component, no arguments are needed for this example.
};
