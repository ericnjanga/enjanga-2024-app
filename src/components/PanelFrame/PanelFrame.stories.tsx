// PanelFrame.stories.tsx
import { Meta, StoryFn } from "@storybook/react";  
import PanelFrame from "./PanelFrame";
import PanelHero from "../PanelHero/PanelHero";
import { ModalContext } from "../../utils/contexts";
import { mockInformationCard1DataArray, mockModalContext } from "../../models/mockupData";
import InformationCard1 from "../InformationCard1/InformationCard1";

export default {
  title: "B) Panels/PanelFrame",  // The category and name of the component
  component: PanelFrame,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the PanelFrame is pretty straightforward.
  },
} as Meta;
 


const Template: StoryFn<{ pageSectionId: string }> = (args) => {
  const mockDataList = [...mockInformationCard1DataArray];

  return (
    <section className="PanelFrame">
      <PanelHero id={ args.pageSectionId } />
      
      <div className="content-grid">
        {mockDataList &&
          mockDataList.map((data, index) => {
            return (
              <ModalContext.Provider value={mockModalContext}>
                <InformationCard1 
                  key={index} 
                  {...data} 
                  className="PanelFrame-item" 
                />
              </ ModalContext.Provider>
            );
          })}
      </div>
    </section>
    // <PanelFrame {...args} />
  );
};

export const Default = Template.bind({});
const id = '1';
Default.args = { 
  pageSectionId: id,
};
