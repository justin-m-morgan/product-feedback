import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Comment from './Comment';
import { commentFactory } from '../../../test/factories';
export default {
  title: 'Elements/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => (
  <div className="card">
    <Comment {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  ...commentFactory.build(),
};
