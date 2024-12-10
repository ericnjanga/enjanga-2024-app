// InformationCard1.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import InformationCard1 from "./InformationCard1";
import { InformationCard1Props } from "../../models";
import { ModalContext } from "../../utils/contexts";
import { mockInformationCard1DataArray, mockModalContext } from "../../models/mockupData";



export default {
  title: "Medium Components/InformationCard1",  // The category and name of the component
  component: InformationCard1,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the InformationCard1 is pretty straightforward.
  },
} as Meta;

const Template: StoryFn<InformationCard1Props> = (args) => (
  <ModalContext.Provider value={mockModalContext}>
    <InformationCard1 {...args} />
  </ModalContext.Provider>
);

export const Default = Template.bind({});
Default.args = {
  ...mockInformationCard1DataArray[0]
};
