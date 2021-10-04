import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Request } from 'src/request/entities/request.model';
import { RequestService } from 'src/request/request.service';
import { Comment } from './entities/comment.model';
import { CommentService } from './comment.service';
import { User } from 'src/user/entitites/user.model';
import { UserService } from 'src/user/user.service';

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(
    private readonly commentService: CommentService,
    private readonly requestService: RequestService,
    private readonly userService: UserService,
  ) {}

  @Query(() => [Comment], { name: 'AllComments' })
  async findAll() {
    return this.commentService.findAll();
  }

  @Query(() => Comment, { name: 'comment' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.commentService.findById(id);
  }

  @ResolveField('request', (returns) => Request)
  async requests(@Parent() comment: Comment) {
    return this.requestService.findById(comment.requestId);
  }

  @ResolveField('user', (returns) => User)
  async findUser(@Parent() comment: Comment) {
    return this.userService.findById(comment.userId);
  }
}
