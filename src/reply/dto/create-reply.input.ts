import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReplyInput {
  @Field()
  content: string;

  @Field((type) => Int)
  commentId: number;

  @Field((type) => Int)
  userId: number;
}
