import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SortSelector from './SortSelector';

export default {
  title: 'UI/Sort Selector',
  component: SortSelector,
} as ComponentMeta<typeof SortSelector>;

const Template: ComponentStory<typeof SortSelector> = (args) => (
  <SortSelector {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
