import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from './Link';
import Arrow from '../../svg/Arrow';
export default {
  title: 'UI/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>
    <Arrow direction="left" />
    <span>Go Back</span>
  </Link>
);

export const Primary = Template.bind({});
Primary.args = {};
