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
      let allUsers = await resolver.findAll();

      expect(allUsers).toHaveLength(mockAllUsers.length);
    });
  });
  describe('findOne', () => {
    it('should return a single of user', async () => {
      let testId = 1;
      let foundUser = await resolver.findOne(testId);

      expect(foundUser).toHaveProperty('name');
      expect(foundUser).toHaveProperty('username');
      expect(foundUser).toHaveProperty('id', testId);
    });
  });
  describe('createUser', () => {
    it('should create a user', async () => {
      let createUserInputs = createUserFactory();
      let createdUser = await resolver.createUser(createUserInputs);
      let modelUser = {
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
      let mockUser = completeUserFactory();
      let newUserProps = createUserFactory();
      let userToUpdate = {
        id: mockUser.id,
        name: newUserProps.name,
        username: newUserProps.username,
        image: newUserProps.image,
      };
      let updatedUser = await resolver.updateUser(userToUpdate);

      expect(updatedUser).toHaveProperty('name', newUserProps.name);
      expect(updatedUser).toHaveProperty('username', newUserProps.username);
      expect(updatedUser).toHaveProperty('image', newUserProps.image);
    });
  });
});

