import { Factory } from 'fishery';
import * as Faker from 'faker';

import User from '../src/types/User.interface';
import Request, { Category, Status } from '../src/types/Request.interface';
import Comment from '../src/types/Comment.interface';
import Reply from '../src/types/Reply.interface';

const dbIdGenerator = (min = 1, max = 1000) =>
  Faker.datatype.number({ min, max });

export const userFactory = Factory.define<User>(({ sequence }) => ({
  id: sequence,
  name: Faker.fake('{{name.firstName}} {{name.lastName}}'),
  username: Faker.internet.userName(),
  image: Faker.image.imageUrl(100, 100, 'avatar', true),
}));

export const requestFactory = Factory.define<Request>(
  ({ associations, sequence }) => ({
    id: sequence,
    title: Faker.company.catchPhraseDescriptor(),
    description: '',
    category: Faker.random.arrayElement([
      Category.Bug,
      Category.Enhancement,
      Category.Feature,
    ]),
    status: Faker.random.arrayElement([
      Status.InProgress,
      Status.Live,
      Status.Planned,
      Status.Suggestion,
    ]),
    upvotes: [],
    user: associations.user || userFactory.build(),
  }),
);

export const commentFactory = Factory.define<Comment>(
  ({ associations, sequence }) => ({
    id: sequence,
    content: Faker.lorem.paragraph(),
    user: associations.user || userFactory.build(),
    requestId: dbIdGenerator(),
  }),
);

export const replyFactory = Factory.define<Reply>(
  ({ associations, sequence }) => ({
    id: sequence,
    content: Faker.lorem.paragraph(),
    user: associations.user || userFactory.build(),
    commentId: dbIdGenerator(),
  }),
);
