// Portfolio.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Portfolio from "./Portfolio";

export default {
  title: "Components/Portfolio",  // The category and name of the component
  component: Portfolio,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the Portfolio is pretty straightforward.
  },
} as Meta;

const Template: StoryFn = (args) => <Portfolio {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Here you can set props if Portfolio had any dynamic inputs. 
  // Since the Portfolio is a static component, no arguments are needed for this example.
};
