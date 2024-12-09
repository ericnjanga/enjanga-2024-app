// Modal.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal from ".";
import { ModalContext } from "../../utils/contexts";
import { mockModalContext } from "../../models/mockupData";

export default {
  title: "Medium Components/Modal", // The category and name of the component
  component: Modal,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the Modal is pretty straightforward.
  },
} as Meta;

// Modifying mock data to:
const mockOpenModalContext = {
  ...mockModalContext,
  isOpen: true, // opening the modal
};

/**
 * 1) We need to force to window's heigh, otherwise the modal won't be visible
 */
const customStyles = `
  #story--medium-components-modal--default--primary {
    min-height: 400px;
  }
`;

const Template: StoryFn = (args) => (
  <>
    <style>{customStyles}</style> {/* Injecting custom styles */}
    <ModalContext.Provider value={mockOpenModalContext}>
      <Modal {...args} />
    </ModalContext.Provider>
  </>
);

export const Default = Template.bind({});
Default.args = {
  // Here you can set props if Modal had any dynamic inputs.
  // Since the Modal is a static component, no arguments are needed for this example.
};
