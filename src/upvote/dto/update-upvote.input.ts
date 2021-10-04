import { CreateUpvoteInput } from './create-upvote.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUpvoteInput extends PartialType(CreateUpvoteInput) {
  @Field(() => Int)
  id: number;
}
