import { Injectable } from '@nestjs/common';

import users from './data/users';

@Injectable()
export class UserService {
  private readonly users = users;

  // create(user: User) {
  //   this.users.push(user);
  // }

  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id == id);
  }
}
