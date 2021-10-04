import { randomInt } from 'crypto';
import { Category, Status } from '../entities/request.model';

const requests = [
  {
    title: 'Add tags for solutions',
    category: Category.Enhancement,
    status: Status.Suggestion,
    description: 'Easier to search for solutions based on a specific stack.',
  },
  {
    title: 'Add a dark theme option',
    category: Category.Feature,
    status: Status.Suggestion,
    description:
      'It would help people with light sensitivities and who prefer dark mode.',
  },
  {
    title: 'Q&A within the challenge hubs',
    category: Category.Feature,
    status: Status.Suggestion,
    description: 'Challenge-specific Q&A would make for easy reference.',
  },
  {
    title: 'Add image',
    category: Category.Enhancement,
    status: Status.Suggestion,
    description: 'Images and screencasts can enhance comments on solutions.',
  },
  {
    title: 'Ability to follow others',
    category: Category.Feature,
    status: Status.Suggestion,
    description: 'Stay updated on comments and solutions other people post.',
  },
  {
    title: 'Preview images not loading',
    category: Category.Bug,
    status: Status.Suggestion,
    description:
      'Challenge preview images are missing when you apply a filter.',
  },
  {
    title: 'More comprehensive reports',
    category: Category.Feature,
    status: Status.Planned,
    description:
      'It would be great to see a more detailed breakdown of solutions.',
  },
  {
    title: 'Learning paths',
    category: Category.Feature,
    status: Status.Planned,
    description:
      'Sequenced projects for different goals to help people improve.',
  },
  {
    title: 'One-click portfolio generation',
    category: Category.Feature,
    status: Status.InProgress,
    description:
      'Add ability to create professional looking portfolio from profile.',
  },
  {
    title: 'Bookmark challenges',
    category: Category.Feature,
    status: Status.InProgress,
    description: 'Be able to bookmark challenges to take later on.',
  },
  {
    title: 'Animated solution screenshots',
    category: Category.Bug,
    status: Status.InProgress,
    description:
      'Screenshots of solutions with animations don’t display correctly.',
  },
  {
    title: 'Add micro-interactions',
    category: Category.Enhancement,
    status: Status.Live,
    description: 'Small animations at specific points can add delight.',
  },
].map((request, i) => ({ ...request, id: i + 1, userId: randomInt(1, 12) }));

export default requests;
