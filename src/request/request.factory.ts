import * as faker from 'faker';
import { UpdateRequestInput } from './dto/update-request.input';
import { Category, Status } from './entities/request.entity';

interface RequestInsert {
  id?: number;
  title?: string;
  description?: string;
  category?: Category;
  status?: Status;
}
export function requestFactory(
  overrides: RequestInsert = {},
): UpdateRequestInput {
  return {
    id: overrides.id || faker.datatype.number({ min: 1, max: 100 }),
    title: overrides.title || faker.lorem.words(5),
    category:
      overrides.category || (faker.random.objectElement(Category) as Category),
    status: overrides.status || (faker.random.objectElement(Status) as Status),
    description: overrides.description || faker.lorem.word(10),
  };
}
