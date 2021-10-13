import { Repository } from 'typeorm';

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export const userRepositoryMockFactory: () => MockType<Repository<any>> =
  jest.fn(() => ({
    findOne: jest.fn((entity) => entity),
  }));
