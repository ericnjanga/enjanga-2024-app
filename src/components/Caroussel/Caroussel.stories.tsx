// Caroussel.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Caroussel from "./Caroussel";
import PanelGrid1 from "../PanelGrid1/PanelGrid1";
import { ModalContext } from "../../utils/contexts";
import { mockModalContext } from "../../models/mockupData";

export default {
  title: "A) Page Section/Caroussel", // The category and name of the component
  component: Caroussel,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the Caroussel is pretty straightforward.
  },
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <ModalContext.Provider value={mockModalContext}>
      <section className="Caroussel sc-block">
        <div className="container">
          <PanelGrid1 pageSectionId={args.slide1Id} />
        </div>
      </section>
    </ModalContext.Provider>
  );
};

export const Default = Template.bind({});
Default.args = {
  slide1Id: "1",
};
