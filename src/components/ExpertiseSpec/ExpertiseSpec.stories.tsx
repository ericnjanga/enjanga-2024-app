// ExpertiseSpec.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ExpertiseSpec from "./ExpertiseSpec";
import { ExpertiseSpecProps } from "../../models";

export default {
  title: "Components/ExpertiseSpec",  // The category and name of the component
  component: ExpertiseSpec,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the ExpertiseSpec is pretty straightforward.
  },
} as Meta;

const Template: StoryFn<ExpertiseSpecProps> = (args) => <ExpertiseSpec {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Here you can set props if ExpertiseSpec had any dynamic inputs. 
  // Since the ExpertiseSpec is a static component, no arguments are needed for this example.
};
