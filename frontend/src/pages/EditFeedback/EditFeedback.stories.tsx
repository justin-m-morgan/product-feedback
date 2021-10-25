import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditFeedback from './EditFeedback';
import { categoryOptions } from '../../types/Request.interface';
import { requestFactory } from '../../../test/factories';
export default {
  title: 'Pages/Edit Feedback',
  component: EditFeedback,
} as ComponentMeta<typeof EditFeedback>;

const Template: ComponentStory<typeof EditFeedback> = (args) => (
  <EditFeedback {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  categoryOptions: categoryOptions,
  request: requestFactory.build(),
};
