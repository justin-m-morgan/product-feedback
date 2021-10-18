import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LogoBlock from './LogoBlock';

export default {
  title: 'Elements/Logo Block',
  component: LogoBlock,
} as ComponentMeta<typeof LogoBlock>;

const Template: ComponentStory<typeof LogoBlock> = (args) => (
  <LogoBlock {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
