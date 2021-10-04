import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UpvoteService } from './upvote.service';
import { Upvote } from './entities/upvote.model';
import { CreateUpvoteInput } from './dto/create-upvote.input';
import { UpdateUpvoteInput } from './dto/update-upvote.input';
import { RequestService } from 'src/request/request.service';
import { User } from 'src/user/entitites/user.model';
import { UserService } from 'src/user/user.service';
import { Request } from 'src/request/entities/request.model';

@Resolver((of) => Upvote)
export class UpvoteResolver {
  constructor(
    private readonly upvoteService: UpvoteService,
    private readonly requestService: RequestService,
    private readonly userService: UserService,
  ) {}

  // @Mutation(() => Upvote)
  // createUpvote(@Args('createUpvoteInput') createUpvoteInput: CreateUpvoteInput) {
  //   return this.upvoteService.create(createUpvoteInput);
  // }

  @Query(() => [Upvote], { name: 'AllUpvotes' })
  findAll() {
    return this.upvoteService.findAll();
  }

  @Query(() => [Upvote], { name: 'AllUpvotesRequest' })
  findAllByReqeust(@Args('requestId', { type: () => Int }) requestId: number) {
    return this.upvoteService.findAllByRequest(requestId);
  }

  @Query(() => [Upvote], { name: 'AllUpvotesUser' })
  findAllByUser(@Args('userId', { type: () => Int }) userId: number) {
    return this.upvoteService.findAllByRequest(userId);
  }

  @Query(() => Upvote, { name: 'upvote' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.upvoteService.findOne(id);
  }

  @ResolveField('user', (returns) => User)
  async findUser(@Parent() upvote: Upvote) {
    return this.userService.findById(upvote.userId);
  }
  @ResolveField('request', (returns) => Request)
  async findRequest(@Parent() upvote: Upvote) {
    return this.requestService.findById(upvote.requestId);
  }

  // @Mutation(() => Upvote)
  // updateUpvote(@Args('updateUpvoteInput') updateUpvoteInput: UpdateUpvoteInput) {
  //   return this.upvoteService.update(updateUpvoteInput.id, updateUpvoteInput);
  // }

  // @Mutation(() => Upvote)
  // removeUpvote(@Args('id', { type: () => Int }) id: number) {
  //   return this.upvoteService.remove(id);
  // }
}
