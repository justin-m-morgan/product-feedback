import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountBadge from './CountBadge';

export default {
  title: 'UI/Count Badge',
  component: CountBadge,
} as ComponentMeta<typeof CountBadge>;

const Template: ComponentStory<typeof CountBadge> = (args) => (
  <CountBadge {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  count: 12,
};
