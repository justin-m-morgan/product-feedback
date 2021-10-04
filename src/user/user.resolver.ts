import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Request } from 'src/request/entities/request.model';
import { RequestService } from 'src/request/request.service';
import { Upvote } from 'src/upvote/entities/upvote.model';
import { UpvoteService } from 'src/upvote/upvote.service';
import { GetUserById } from './dto/get-user.args';
import { User } from './entitites/user.model';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly requestService: RequestService,
    private readonly upvoteService: UpvoteService,
  ) {}

  @Query((returns) => User, { name: 'user' })
  async getUser(@Args() { id }: GetUserById) {
    return this.userService.findById(id);
  }

  @Query((returns) => [User], { name: 'AllUsers' })
  async getAllUsers() {
    return this.userService.findAll();
  }

  @ResolveField()
  async requests(@Parent() user: User) {
    return this.requestService.findAllById(user.id);
  }

  @ResolveField('upvotes', (returns) => [Upvote])
  async findReqeustUpvotes(@Parent() user: User) {
    return this.upvoteService.findAllByUser(user.id);
  }

  // @ResolveField()
  // async comments(@Parent() user: User) {
  //   return this.commentService.findAll({ userId: user.id });
  // }
}
