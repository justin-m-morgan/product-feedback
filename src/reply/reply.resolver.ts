import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CommentService } from 'src/comment/comment.service';
import { Comment } from 'src/comment/entities/comment.model';
import { User } from 'src/user/entitites/user.model';
import { UserService } from 'src/user/user.service';
import { Reply } from './reply.model';
import { ReplyService } from './reply.service';

@Resolver((of) => Reply)
export class ReplyResolver {
  constructor(
    private readonly replyService: ReplyService,
    private readonly commentService: CommentService,
    private readonly userService: UserService,
  ) {}

  @Query(() => [Reply], { name: 'AllReplies' })
  findAll() {
    return this.replyService.findAll();
  }

  @Query(() => Reply, { name: 'reply' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.replyService.findById(id);
  }

  @ResolveField('comment', (returns) => Comment)
  async requests(@Parent() reply: Reply) {
    return this.commentService.findById(reply.commentId);
  }

  @ResolveField('user', (returns) => User)
  async findUser(@Parent() reply: Reply) {
    return this.userService.findById(reply.userId);
  }
}
