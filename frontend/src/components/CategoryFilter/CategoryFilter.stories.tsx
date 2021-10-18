import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CategoryFilter, { Category } from './CategoryFilter';

export default {
  title: 'Elements/Category Filter',
  component: CategoryFilter,
} as ComponentMeta<typeof CategoryFilter>;

const Template: ComponentStory<typeof CategoryFilter> = (args) => (
  <CategoryFilter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  active: Category.Enhancement,
};
