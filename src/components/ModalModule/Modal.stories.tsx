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



/**
 * 1) We need to force to window's heigh, otherwise the modal won't be visible
 */
const customStyles = `
  #story--medium-components-modal--api-fetched-data--primary,
  #story--medium-components-modal--api-fetched-data {
    min-height: 400px;
  }
  #story--medium-components-modal--with-contact-form {
    min-height: 550px;
  }
`;

const Template: StoryFn = (args) => (
  <>
    <style>{customStyles}</style> {/* Injecting custom styles */}
    <ModalContext.Provider value={args.mockOpenModalContext}>
      <Modal {...args} />
    </ModalContext.Provider>
  </>
);

export const APIFetchedData = Template.bind({});
APIFetchedData.args = {
  // Modifying mock data to:
  mockOpenModalContext: {
    ...mockModalContext,
    childComponent: '',
    isOpen: true, // opening the modal
  }
};

export const WithContactForm = Template.bind({});
WithContactForm.args = {
  // Modifying mock data to:
  mockOpenModalContext: {
    ...mockModalContext,
    childComponent: 'contact',
    isOpen: true, // opening the modal
  }
};

