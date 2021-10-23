import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RoadmapColumnHeader from './RoadmapColumnHeader';
export default {
  title: 'Elements/Roadmap Column Header',
  component: RoadmapColumnHeader,
} as ComponentMeta<typeof RoadmapColumnHeader>;

const Template: ComponentStory<typeof RoadmapColumnHeader> = (args) => (
  <RoadmapColumnHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'In Progress',
  count: 4,
  subtitle: 'Currently being developed',
};
