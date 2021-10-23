import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormTemplate from './FormTemplate';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import Plus from '../../svg/Plus';
import FormFieldgroup from '../FormFieldgroup/FormFieldgroup';
export default {
  title: 'Forms/Form Template',
  component: FormTemplate,
} as ComponentMeta<typeof FormTemplate>;

const Template: ComponentStory<typeof FormTemplate> = (args) => (
  <FormTemplate {...args}>
    <FormFieldgroup
      label="Label 1"
      instructions="These are instructions"
      inputName="default1"
    >
      <TextInput />
    </FormFieldgroup>
    <FormFieldgroup
      label="Label 2"
      instructions="These are instructions"
      inputName="default2"
    >
      <TextInput />
    </FormFieldgroup>
    <FormFieldgroup label="Label 3" inputName="default3">
      <TextInput />
    </FormFieldgroup>
    <FormFieldgroup
      label="Label 4"
      instructions="These are instructions"
      inputName="default4"
    >
      <TextInput />
    </FormFieldgroup>
  </FormTemplate>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Test Title',
  Icon: () => <Plus />,
  Buttons: () => (
    <>
      <Button kind="purple">Button 1</Button>
      <Button kind="red">Button 2</Button>
    </>
  ),
};
