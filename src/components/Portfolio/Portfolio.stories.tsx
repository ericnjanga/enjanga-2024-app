// Portfolio.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Portfolio from "./Portfolio";
import { ModalContext } from "../../utils/contexts";
import { mockModalContext } from "../../models/mockupData";

export default {
  title: "A) Page Section/Portfolio",  // The category and name of the component
  component: Portfolio,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the Portfolio is pretty straightforward.
  },
} as Meta;

const Template: StoryFn = (args) => (
  <ModalContext.Provider value={mockModalContext}>
    <Portfolio {...args} />
  </ModalContext.Provider>
);

export const Default = Template.bind({});
Default.args = {
  // Here you can set props if Portfolio had any dynamic inputs. 
  // Since the Portfolio is a static component, no arguments are needed for this example.
};
