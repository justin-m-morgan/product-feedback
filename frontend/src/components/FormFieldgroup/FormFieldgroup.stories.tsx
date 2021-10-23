import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormFieldgroup from './FormFieldgroup';
import TextInput from '../TextInput/TextInput';
export default {
  parameters: {
    backgrounds: { default: 'off-white' },
  },
  title: 'Forms/Form Field Group',
  component: FormFieldgroup,
} as ComponentMeta<typeof FormFieldgroup>;

const Template: ComponentStory<typeof FormFieldgroup> = (args) => (
  <FormFieldgroup {...args}>
    <TextInput />
  </FormFieldgroup>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Input Label',
  instructions: 'These are instructions (Optional)',
  inputName: 'default',
};
