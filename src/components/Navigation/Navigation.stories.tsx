// Navigation.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Navigation from "./Navigation";

export default {
  title: "Components/Navigation",  // The category and name of the component
  component: Navigation,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the Navigation is pretty straightforward.
  },
} as Meta;

const Template: StoryFn = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Here you can set props if Navigation had any dynamic inputs. 
  // Since the Navigation is a static component, no arguments are needed for this example.
};
