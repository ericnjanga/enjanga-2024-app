// PanelGrid1.stories.tsx
import { Meta, StoryFn } from "@storybook/react";  
import PanelGrid1 from "./PanelGrid1";

export default {
  title: "B) Panels/PanelGrid1",  // The category and name of the component
  component: PanelGrid1,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the PanelGrid1 is pretty straightforward.
  },
} as Meta;
 


const Template: StoryFn<{ pageSectionId: string }> = (args) => <PanelGrid1 {...args} />;

export const Default = Template.bind({});
const id = '1';
Default.args = { 
  pageSectionId: id,
};
