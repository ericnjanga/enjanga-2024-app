// Footer.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "A) Page Section/Footer",  // The category and name of the component
  component: Footer,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the Footer is pretty straightforward.
  },
} as Meta;

const Template: StoryFn = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Here you can set props if Footer had any dynamic inputs. 
  // Since the Footer is a static component, no arguments are needed for this example.
};
