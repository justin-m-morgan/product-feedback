import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuggestionFilterBar from './SuggestionFilterBar';
export default {
  title: 'Elements/Suggestion Filter Bar',
  component: SuggestionFilterBar,
} as ComponentMeta<typeof SuggestionFilterBar>;

const Template: ComponentStory<typeof SuggestionFilterBar> = (args) => (
  <SuggestionFilterBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
