// Navigation.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Navigation from "./Navigation";
import { mockModalContext } from "../../models/mockupData";
import { ModalContext } from "../../utils/contexts";

export default {
  title: "A) Page Section/Navigation",  // The category and name of the component
  component: Navigation,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the Navigation is pretty straightforward.
  },
} as Meta;

/**
 * 1) We need to force to window's heigh, otherwise the Nav won't be properly on display
 */
const customStyles = `
  #anchor--a-page-section-navigation--default .css-xzp052 {
    min-height: 200px;
  }
`;

const Template: StoryFn = (args) => { 
  return (
    <>
      <style>{customStyles}</style> {/* Injecting custom styles */}
    <ModalContext.Provider value={mockModalContext}>
      <Navigation {...args} />
    </ ModalContext.Provider>
    </>
  )
};

export const Default = Template.bind({});
Default.args = {
  // Here you can set props if Navigation had any dynamic inputs. 
  // Since the Navigation is a static component, no arguments are needed for this example.
};
