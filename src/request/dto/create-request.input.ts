import { InputType, Int, Field } from '@nestjs/graphql';
import { Category, Status } from '../entities/request.entity';

@InputType()
export class CreateRequestInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Category)
  category: Category;

  @Field(() => Status)
  status: Status;

  @Field(() => Int)
  userId: number;
}
