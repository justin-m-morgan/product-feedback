import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { User } from '../entities/user.entity';

@Injectable()
export class UserServiceMock {
  constructor(
    @InjectRepository(User)
    private readonly dbRepository: Repository<User>,
  ) {}
  //   create(createUserInput: CreateUserInput) {
  //     let user = createUserInput;
  //     this.users.push(user);
  //     return { ...user, id: this.users.length };
  //   }
  //   findAll(): Promise<User[]> {
  //     return this.users;
  //   }
  //   findOne(id: number): Promise<User> {
  //     return this.users.find((user) => user.id == id);
  //   }
  //   async remove(id: number): Promise<void> {
  //     this.users = this.users.filter((user) => user.id != id);
  //   }
  //   update(id: number, updateUserInput: UpdateUserInput) {
  //     return `This action updates a #${id} user`;
  //   }
}
