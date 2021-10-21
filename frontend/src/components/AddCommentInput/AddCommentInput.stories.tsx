import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddCommentInput from './AddCommentInput';
export default {
  title: 'Elements/Add Comment Input',
  component: AddCommentInput,
} as ComponentMeta<typeof AddCommentInput>;

const Template: ComponentStory<typeof AddCommentInput> = (args) => (
  <AddCommentInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
