import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RoadmapCard from './RoadmapCard';
import { Category, Status } from '../../types/Request.interface';
export default {
  title: 'Elements/Roadmap Card',
  component: RoadmapCard,
} as ComponentMeta<typeof RoadmapCard>;

const Template: ComponentStory<typeof RoadmapCard> = (args) => (
  <RoadmapCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  status: Status.Planned,
  category: Category.Enhancement,
  title: 'Test Title',
  description:
    'Culpa exercitation amet nostrud ut. Nisi consequat anim exercitation in aliqua eiusmod ut nisi deserunt. Pariatur adipisicing fugiat aute dolore dolor non nisi. Excepteur fugiat aliqua consectetur esse veniam sint eiusmod nostrud exercitation qui adipisicing mollit. Irure esse sint duis officia enim ut culpa proident. Amet amet proident minim labore sint mollit.',
  upvoteCount: 10,
  commentCount: 4,
};
