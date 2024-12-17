// PanelHero.stories.tsx
import { Meta, StoryFn } from "@storybook/react";  
import PanelHero from "./PanelHero";

export default {
  title: "B) Panels/PanelHero",  // The category and name of the component
  component: PanelHero,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the PanelHero is pretty straightforward.
  },
} as Meta;
 


const Template: StoryFn<{ id: string }> = (args) => {

  return (
    <PanelHero {...args} />
  );
};

export const Default = Template.bind({});
const id = '1';
Default.args = { 
  id: id,
};
