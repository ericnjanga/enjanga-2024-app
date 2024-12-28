// About.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import About from "./About";

export default {
  title: "A) Page Section/About",  
  component: About,
  argTypes: {
    // ...
  },
} as Meta;

const Template: StoryFn = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {
  // ...
};
