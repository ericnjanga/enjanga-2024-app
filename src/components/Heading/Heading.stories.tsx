// Heading.stories.tsx 
import { Meta, StoryFn } from "@storybook/react";
import Heading from "./Heading";
import { HeadingProps } from "../../models"; 


// Generate different lorem ipsum text based on the selected length
const loremText = {
  small: "Lorem ipsum",
  medium: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras vitae turpis et nisl ullamcorper convallis.",
  veryLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras vitae turpis et nisl ullamcorper convallis. Nulla facilisi. Aenean tempus, lorem et fermentum tincidunt, nunc eros ullamcorper velit, non scelerisque ante arcu ac risus."
};

// Defining the type for the 'textLength' argument
type TextLength = keyof typeof loremText;


export default {
  title: "Medium Components/Heading",  // The category and name of the component
  component: Heading,
  argTypes: {
    // Adding the 'Text Length' control to select the size of the text
    textLength: {
      control: 'radio', 
      options: ['small', 'medium', 'long', 'veryLong'],
      defaultValue: 'medium'
    },
    // Adding the 'icon' control to toggle the icon visibility
    // Adding the 'iconName' control to select the icon
    iconName: {
      control: 'select',  // Use a select control to pick an icon
      options: [undefined, 'cube', 'hand'],  // The possible icon values
      defaultValue: 'cube'  // Default icon
    }
  },
} as Meta;

const Template: StoryFn<HeadingProps & { textLength: TextLength }> = (args) => {
  // Ensure that args.textLength is a valid key of loremText
  const text = loremText[args.textLength];

  console.log('***** args = ', args);

  return (
    <Heading {...args}>
      {text}
    </Heading>
  );
};

export const Default = Template.bind({});
Default.args = { 
  textLength: 'long',
  iconName: undefined
};

