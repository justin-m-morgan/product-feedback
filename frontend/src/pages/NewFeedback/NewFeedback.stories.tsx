import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NewFeedback from './NewFeedback';
import { categoryOptions } from '../../types/Request.interface';
export default {
  title: 'Pages/New Feedback',
  component: NewFeedback,
} as ComponentMeta<typeof NewFeedback>;

const Template: ComponentStory<typeof NewFeedback> = (args) => (
  <NewFeedback {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  categoryOptions: categoryOptions,
};
