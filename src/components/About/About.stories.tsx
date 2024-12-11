// About.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import About from "./About";

export default {
  title: "A) Page Section/About",  // The category and name of the component
  component: About,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the About is pretty straightforward.
  },
} as Meta;

const Template: StoryFn = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Here you can set props if About had any dynamic inputs. 
  // Since the About is a static component, no arguments are needed for this example.
};
