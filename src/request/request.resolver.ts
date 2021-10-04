import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { RequestService } from './request.service';
import { Request } from './entities/request.model';
import { CreateRequestInput } from './dto/create-request.input';
import { UpdateRequestInput } from './dto/update-request.input';
import { User } from 'src/user/entitites/user.model';
import { UserService } from 'src/user/user.service';
import { Upvote } from 'src/upvote/entities/upvote.model';
import { UpvoteService } from 'src/upvote/upvote.service';

@Resolver((of) => Request)
export class RequestResolver {
  constructor(
    private readonly requestService: RequestService,
    private readonly userService: UserService,
    private readonly upvoteService: UpvoteService,
  ) {}

  // @Mutation(() => Request)
  // createRequest(@Args('createRequestInput') createRequestInput: CreateRequestInput) {
  //   return this.requestService.create(createRequestInput);
  // }

  @Query(() => [Request], { name: 'AllRequests' })
  async findAll() {
    return this.requestService.findAll();
  }

  @Query(() => Request, { name: 'request' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.requestService.findById(id);
  }

  @ResolveField('user', (returns) => User)
  async findUser(@Parent() request: Request) {
    return this.userService.findById(request.userId);
  }

  @ResolveField('upvotes', (returns) => [Upvote])
  async findReqeustUpvotes(@Parent() request: Request) {
    return this.upvoteService.findAllByRequest(request.id);
  }

  // @Mutation(() => Request)
  // updateRequest(
  //   @Args('updateRequestInput') updateRequestInput: UpdateRequestInput,
  // ) {
  //   return this.requestService.update(
  //     updateRequestInput.id,
  //     updateRequestInput,
  //   );
  // }

  // @Mutation(() => Request)
  // removeRequest(@Args('id', { type: () => Int }) id: number) {
  //   return this.requestService.remove(id);
  // }
}
