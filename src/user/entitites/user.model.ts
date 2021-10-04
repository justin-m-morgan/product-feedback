import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Request } from 'src/request/entities/request.model';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  image?: string;

  @Field((type) => [Request])
  requests: Request[];

  // @Field((type) => [Comment])
  // comments: Comment[];

  // @Field(type => [Reply])
  // replies: Reply[]
}
