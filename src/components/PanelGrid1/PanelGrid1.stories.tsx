// PanelGrid1.stories.tsx
import { Meta, StoryFn } from "@storybook/react";  
import { http, HttpResponse, delay } from 'msw';
import PanelGrid1 from "./PanelGrid1";
import { mockPageSectionProps, mockInformationCard1DataArray } from "../../models/mockupData"; 

export default {
  title: "Large Components/PanelGrid1",  // The category and name of the component
  component: PanelGrid1,
  argTypes: {
    // You can define any args here if you want to make the story dynamic.
    // For this case, we will leave it static since the PanelGrid1 is pretty straightforward.
  },
} as Meta;
 

const id = '1';

// MockedSuccess story for mocking network requests
export const MockedSuccess: StoryFn<{ pageSectionId: string }> = (args) => <PanelGrid1 {...args} />;
MockedSuccess.parameters = {
  msw: {
    handlers: [
      // Mocking the first API request
      http.get(`/api/pageSection/${id}`, () => {
        return HttpResponse.json(mockPageSectionProps);  // Return mock data
      }),
      // Mocking the second API request
      http.get(`/api/expertiseSpecsByParent/${id}`, () => {
        return HttpResponse.json(mockInformationCard1DataArray);  // Return mock data
      }),
    ],
  },
};
MockedSuccess.args = {
  pageSectionId: id,
};


const Template: StoryFn<{ pageSectionId: string }> = (args) => { 

  return <PanelGrid1 {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // Component props ...
  pageSectionId: id,
};
