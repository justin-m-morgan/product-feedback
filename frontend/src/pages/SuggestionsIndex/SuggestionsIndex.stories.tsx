import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuggestionsIndex from './SuggestionsIndex';
import { requestFactory, userFactory } from '../../../test/factories';
import { request } from 'http';
export default {
  title: 'Pages/Suggestions Index',
  component: SuggestionsIndex,
} as ComponentMeta<typeof SuggestionsIndex>;

const Template: ComponentStory<typeof SuggestionsIndex> = (args) => (
  <SuggestionsIndex {...args} />
);

const request1 = requestFactory.build();
const request2 = requestFactory.build();
const request3 = requestFactory.build();

export const Primary = Template.bind({});
Primary.args = {
  suggestions: [
    { ...request1, upvoteCount: 1, commentCount: 0 },
    { ...request2, upvoteCount: 4, commentCount: 2 },
    { ...request3, upvoteCount: 0, commentCount: 2 },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  suggestions: [],
};
