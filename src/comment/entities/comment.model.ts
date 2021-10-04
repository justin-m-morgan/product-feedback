import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Request } from 'src/request/entities/request.model';
import { User } from 'src/user/entitites/user.model';

@ObjectType()
export class Comment {
  @Field((type) => Int)
  id: number;

  @Field()
  content: string;

  @Field((type) => Int)
  requestId: number;

  @Field(() => Int)
  userId: number;
}
