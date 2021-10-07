import { CreateRequestInput } from './create-request.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Category, Status } from '../entities/request.entity';

@InputType()
export class UpdateRequestInput extends PartialType(CreateRequestInput) {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field((type) => Category)
  category: Category;

  @Field((type) => Status)
  status: Status;
}
