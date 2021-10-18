import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Roadmap from './Roadmap';
export default {
  title: 'Elements/Roadmap',
  component: Roadmap,
} as ComponentMeta<typeof Roadmap>;

const Template: ComponentStory<typeof Roadmap> = (args) => (
  <Roadmap {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
