import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Upvote {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  requestId: number;
}
