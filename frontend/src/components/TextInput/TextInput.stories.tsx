import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from './TextInput';

export default {
  title: 'Forms/Text Input',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <div className="card">
    <TextInput {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
