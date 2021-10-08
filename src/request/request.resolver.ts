import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { RequestService } from './request.service';
import { Request } from './entities/request.entity';
import { CreateRequestInput } from './dto/create-request.input';
import { UpdateRequestInput } from './dto/update-request.input';
import { CommentService } from '../comment/comment.service';
import { User } from '../user/entities/user.entity';
import { Comment } from '../comment/entities/comment.entity';

@Resolver(() => Request)
export class RequestResolver {
  constructor(
    private readonly requestService: RequestService,
    private readonly commentService: CommentService,
  ) {}

  @Mutation(() => Request)
  createRequest(
    @Args('createRequestInput') createRequestInput: CreateRequestInput,
  ) {
    return this.requestService.create(createRequestInput);
  }

  @Query(() => [Request], { name: 'AllRequests' })
  findAll() {
    return this.requestService.findAll();
  }

  @Query(() => Request, { name: 'Request' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.requestService.findOne(id);
  }

  @Mutation(() => Request)
  updateRequest(
    @Args('updateRequestInput') updateRequestInput: UpdateRequestInput,
  ) {
    return this.requestService.update(
      updateRequestInput.id,
      updateRequestInput,
    );
  }

  @Mutation(() => Request)
  removeRequest(@Args('id', { type: () => Int }) id: number) {
    return this.requestService.remove(id);
  }

  @ResolveField(() => [Comment])
  async comments(@Parent() request: Request) {
    return this.commentService.findAll({ where: { requestId: request.id } });
  }
}
