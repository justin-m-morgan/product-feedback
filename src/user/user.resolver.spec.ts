import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { RequestService } from '../request/request.service';
import { completeUserFactory, createUserFactory } from './testing/user.factory';
import { User } from './entities/user.entity';
import { createMock } from '@golevelup/nestjs-testing';

const mockAllUsers = [
  completeUserFactory(),
  completeUserFactory(),
  completeUserFactory(),
];

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        {
          provide: UserService,
          useValue: createMock<UserService>({
            findAll: jest.fn(() => Promise.resolve(mockAllUsers)),
            findOne: jest.fn((id) =>
              Promise.resolve(completeUserFactory({ id: id })),
            ),
            create: jest.fn((inputs) =>
              Promise.resolve(completeUserFactory(inputs)),
            ),
            update: jest.fn((id, inputs) =>
              Promise.resolve(completeUserFactory(inputs)),
            ),
          }),
        },

        { provide: RequestService, useValue: createMock<RequestService>() },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const allUsers = await resolver.findAll();

      expect(allUsers).toHaveLength(mockAllUsers.length);
    });
  });
  describe('findOne', () => {
    it('should return a single of user', async () => {
      const testId = 1;
      const foundUser = await resolver.findOne(testId);

      expect(foundUser).toHaveProperty('name');
      expect(foundUser).toHaveProperty('username');
      expect(foundUser).toHaveProperty('id', testId);
    });
  });
  describe('createUser', () => {
    it('should create a user', async () => {
      const createUserInputs = createUserFactory();
      const createdUser = await resolver.createUser(createUserInputs);
      const modelUser = {
        ...createUserInputs,
        replies: [],
        comments: [],
        requests: [],
        id: createdUser.id,
      };

      expect(createdUser).toMatchObject<User>(modelUser);
    });
  });
  describe('updateUser', () => {
    it('should update a user', async () => {
      const mockUser = completeUserFactory();
      const newUserProps = createUserFactory();
      const userToUpdate = {
        id: mockUser.id,
        name: newUserProps.name,
        username: newUserProps.username,
        image: newUserProps.image,
      };
      const updatedUser = await resolver.updateUser(userToUpdate);

      expect(updatedUser).toHaveProperty('name', newUserProps.name);
      expect(updatedUser).toHaveProperty('username', newUserProps.username);
      expect(updatedUser).toHaveProperty('image', newUserProps.image);
    });
  });
});
