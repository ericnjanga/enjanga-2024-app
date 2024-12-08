// Hero.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Hero from "./Hero";

export default {
  title: "Large Components/Hero",  // The category and name of the component
  component: Hero,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the Hero is pretty straightforward.
  },
} as Meta;

const Template: StoryFn = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Here you can set props if Hero had any dynamic inputs. 
  // Since the Hero is a static component, no arguments are needed for this example.
};
