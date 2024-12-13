import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Preloader from './Preloader';

// Default export for Storybook
export default {
  title: 'Components/Preloader',
  component: Preloader,
  argTypes: {
    // Optionally, you can add more props here if needed
  },
} as Meta;

// Template for the Preloader story
const Template: StoryFn = () => <Preloader />;

// Default Preloader story
export const Default = Template.bind({});
Default.args = {
  // You can set default args here if there are configurable properties.
};
