import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field()
  content: string;

  @Field(() => Int)
  requestId: number;

  @Field(() => Int)
  userId: number;
}
