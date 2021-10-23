import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dot from './Dot';
export default {
  title: 'UI/Dot',
  component: Dot,
} as ComponentMeta<typeof Dot>;

const Template: ComponentStory<typeof Dot> = (args) => <Dot {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
