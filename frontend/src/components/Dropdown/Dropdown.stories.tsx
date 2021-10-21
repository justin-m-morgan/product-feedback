import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from './Dropdown';

export default {
  title: 'Forms/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <div className="card">
    <Dropdown {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  fieldName: 'default',
  currentSelection: 'Option 1',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ],
};
