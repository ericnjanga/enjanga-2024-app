// ExpertiseSpec.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ExpertiseSpec from "./ExpertiseSpec";
import { ExpertiseSpecProps } from "../../models";
import { ModalContext } from "../../utils/contexts";

// We define a mock context value to inject into the story
const mockExpertiseSpecData = {
  id: '2', 
  parentId: '2',
  blurb: `Translating visual designs into responsive and interactive User Interfaces.`,
  description: `<h3> (Expertise 1)</h3>
    <p><b>Description 2 ...</b></p>
    <p>Macaroon croissant sesame snaps liquorice jelly-o toffee. Brownie marshmallow shortbread cake pudding liquorice dragée cupcake cake. Dragée jelly beans cake carrot cake dragée dessert apple pie. Dragée macaroon pie sugar plum wafer.</p>
  `, 
};
const mockModalContext = {
  isOpen: false,              
  renderingType: 'data', 
  modalData : {
    ...mockExpertiseSpecData
  },
  openModal: ({ 
    renderingType, 
    dataType, 
    dataId }: { 
      renderingType: string, 
      dataType: string, 
      dataId: string 
  }) => {
    console.log(`Modal opened with renderingType ${renderingType} | dataType ${dataType} | dataId ${dataId} | .`);
  },
  closeModal: () => {
    console.log(`Modal closed`);
  }
};



export default {
  title: "Medium Components/ExpertiseSpec",  // The category and name of the component
  component: ExpertiseSpec,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the ExpertiseSpec is pretty straightforward.
  },
} as Meta;

const Template: StoryFn<ExpertiseSpecProps> = (args) => (
  <ModalContext.Provider value={mockModalContext}>
    <ExpertiseSpec {...args} />
  </ModalContext.Provider>
);

export const Default = Template.bind({});
Default.args = {
  ...mockExpertiseSpecData
};
