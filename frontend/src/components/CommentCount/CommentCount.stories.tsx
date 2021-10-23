import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentCount from './CommentCount';
export default {
  parameters: {
    backgrounds: { default: 'off-white' },
  },
  title: 'UI/Comment Count',
  component: CommentCount,
} as ComponentMeta<typeof CommentCount>;

const Template: ComponentStory<typeof CommentCount> = (args) => (
  <CommentCount {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  commentCount: 10,
};
