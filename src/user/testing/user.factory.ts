import * as faker from 'faker';
import { CreateUserInput } from '../dto/create-user.input';
import { User } from '../entities/user.entity';

export function createUserFactory(params: Partial<CreateUserInput> = {}) {
  return {
    name: params.name || faker.internet.userName(),
    username: params.username || faker.internet.userName(),
    image: params.image || faker.internet.url(),
  };
}

type CompleteUserFactoryProps = Partial<CreateUserInput & { id: number }>;
export function completeUserFactory(
  params: CompleteUserFactoryProps = {},
): User {
  return {
    id: params.id || faker.datatype.number({ min: 1, max: 100 }),
    name: params.name || faker.internet.userName(),
    username: params.username || faker.internet.userName(),
    image: params.image || faker.internet.url(),
    requests: [],
    comments: [],
    replies: [],
    upvotes: [],
  };
}
