// ProjectThumb.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProjectThumb from "./ProjectThumb";
import { ProjectProps } from "../../models";

export default {
  title: "Medium Components/ProjectThumb",  // The category and name of the component
  component: ProjectThumb,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the ProjectThumb is pretty straightforward.
  },
} as Meta;

const Template: StoryFn<ProjectProps> = (args) => <ProjectThumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Here you can set props if ProjectThumb had any dynamic inputs. 
  // Since the ProjectThumb is a static component, no arguments are needed for this example.
};
