// ExpertisePanel.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ExpertisePanel from "./ExpertisePanel";

export default {
  title: "Large Components/ExpertisePanel",  // The category and name of the component
  component: ExpertisePanel,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the ExpertisePanel is pretty straightforward.
  },
} as Meta;

const Template: StoryFn<{ pageSectionId: string }> = (args) => <ExpertisePanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Component props ...
  pageSectionId: '1',
};
