// PanelGrid1.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";  
import PanelGrid1 from "./PanelGrid1";
// import { mockPageSectionProps, mockInformationCard1DataArray } from "../../models/mockupData"; 

export default {
  title: "Large Components/PanelGrid1",  // The category and name of the component
  component: PanelGrid1,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the PanelGrid1 is pretty straightforward.
  },
} as Meta;

 


const Template: StoryFn<{ pageSectionId: string }> = (args) => { 

  return <PanelGrid1 {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // Component props ...
  pageSectionId: '1',
};
