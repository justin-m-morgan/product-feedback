import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentChain from './CommentChain';

import {
  commentFactory,
  replyFactory,
  userFactory,
} from '../../../test/factories';

export default {
  title: 'Composites/Comment Chain',
  component: CommentChain,
} as ComponentMeta<typeof CommentChain>;

const Template: ComponentStory<typeof CommentChain> = (args) => (
  <div className="card">
    <CommentChain {...args} />
  </div>
);

const user1 = userFactory.build();
const user2 = userFactory.build();
const user3 = userFactory.build();

export const Primary = Template.bind({});
Primary.args = {
  comment: {
    ...commentFactory.build({}, { associations: { user: user1 } }),
    handleReply: () => null,
  },
  replies: [
    {
      ...replyFactory.build({}, { associations: { user: user2 } }),
      replyTo: user1.username,
      handleReply: () => null,
    },
    {
      ...replyFactory.build({}, { associations: { user: user3 } }),
      replyTo: user2.username,
      handleReply: () => null,
    },
  ],
};
