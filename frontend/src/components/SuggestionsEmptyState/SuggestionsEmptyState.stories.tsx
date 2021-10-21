import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuggestionsEmptyState from './SuggestionsEmptyState';
export default {
  title: 'Elements/Suggestions (Empty State)',
  component: SuggestionsEmptyState,
} as ComponentMeta<typeof SuggestionsEmptyState>;

const Template: ComponentStory<typeof SuggestionsEmptyState> = (args) => (
  <SuggestionsEmptyState {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
