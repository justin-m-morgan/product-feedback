import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUpvoteInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
