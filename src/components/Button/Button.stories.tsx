// Button.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "../../models";

export default {
  title: "Components/Button",  // The category and name of the component
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio', // Ensures radio buttons for selection
      },
      options: ['primary', 'secondary'], // The available options
      description: 'Defines the variant of the button (e.g., primary or secondary)', 
      table: {
        type: { summary: 'string' }, // Add type summary for documentation
        defaultValue: { summary: 'primary' }, // Optional: Show default value
      },
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg'],
      description: 'How large should the button be?', 
      table: {
        type: { summary: 'string' }, // Add type summary for documentation
        defaultValue: { summary: 'md' }, // Optional: Show default value
      },
    },
    neonVersion: {
      control: 'boolean',
      defaultValue: false,
      description: 'Should be button have a shuny neon color? (only for secondaty buttons)', 
      table: {
        type: { summary: 'boolean' }, // Add type summary for documentation
        defaultValue: { summary: 'false' }, // Optional: Show default value
      },
    },
    label: {
      control: 'text',
      defaultValue: 'Button',
      description: 'Button content', 
      table: {
        type: { summary: 'string' }, // Add type summary for documentation
        defaultValue: { summary: 'Button' }, // Optional: Show default value
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",  // Default label
  variant: 'primary',
  size: 'md',
  neonVersion: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",  // Default label
  variant: 'secondary',
  size: 'md',
  neonVersion: false,
};
 