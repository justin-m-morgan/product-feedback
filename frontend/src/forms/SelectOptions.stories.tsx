import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectOptions from './SelectOptions';

export default {
  title: 'Forms/Select Options',
  component: SelectOptions,
} as ComponentMeta<typeof SelectOptions>;

const Template: ComponentStory<typeof SelectOptions> = (args) => (
  <SelectOptions {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ],
};
