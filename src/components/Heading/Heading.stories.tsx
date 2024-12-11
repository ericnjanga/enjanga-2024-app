// Heading.stories.tsx 
import { Meta, StoryFn } from "@storybook/react";
import Heading from "./Heading";
import { HeadingProps } from "../../models"; 



export default {
  title: "Medium Components/Heading",  // The category and name of the component
  component: Heading,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the Heading is pretty straightforward.
  },
} as Meta;

const Template: StoryFn<HeadingProps> = (args) => (
  <Heading {...args}>Heading text</Heading>
);

export const Default = Template.bind({});
Default.args = { 
};
