import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuggestionCard from './SuggestionCard';
import { Category } from './CategoryFilter';
export default {
  title: 'Elements/Suggestion Card',
  component: SuggestionCard,
} as ComponentMeta<typeof SuggestionCard>;

const Template: ComponentStory<typeof SuggestionCard> = (args) => (
  <SuggestionCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Test Title',
  description:
    'Ipsum excepteur ex excepteur occaecat et eiusmod mollit qui mollit.',
  category: Category.Enhancement,
  upvoteCount: 4,
  commentCount: 10,
};
