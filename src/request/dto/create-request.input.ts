import { InputType, Int, Field } from '@nestjs/graphql';
import { Category, Status } from '../entities/request.entity';

@InputType()
export class CreateRequestInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field((type) => Category)
  category: Category;

  @Field((type) => Status)
  status: Status;

  @Field((type) => Int)
  userId: number;
}
