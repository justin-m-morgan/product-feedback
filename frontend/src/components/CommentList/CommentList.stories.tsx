import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentList from './CommentList';
import CommentChain from '../CommentChain/CommentChain';
import { commentFactory, replyFactory } from '../../../test/factories';
export default {
  title: 'Composites/Comments List',
  component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args}>
    <CommentChain comment={comment1} replies={replies1} />
    <CommentChain comment={comment3} replies={[]} />
    <CommentChain comment={comment2} replies={replies2} />
  </CommentList>
);

const comment1 = { ...commentFactory.build(), handleReply: () => null };
const replies1 = [
  {
    ...replyFactory.build({ commentId: comment1.id }),
    handleReply: () => null,
  },
  {
    ...replyFactory.build({ commentId: comment1.id }),
    handleReply: () => null,
  },
];
const comment2 = { ...commentFactory.build(), handleReply: () => null };
const replies2 = [
  {
    ...replyFactory.build({ commentId: comment2.id }),
    handleReply: () => null,
  },
];
const comment3 = { ...commentFactory.build(), handleReply: () => null };

export const Primary = Template.bind({});
Primary.args = {
  commentCount: 4,
};
