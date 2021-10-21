import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TemplateName from './TemplateName';
export default {
  title: '/TemplateName',
  component: TemplateName,
} as ComponentMeta<typeof TemplateName>;

const Template: ComponentStory<typeof TemplateName> = (args) => (
  <TemplateName {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
