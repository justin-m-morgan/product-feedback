import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Comment from './Comment';
export default {
  title: 'Elements/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => (
  <Comment {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
