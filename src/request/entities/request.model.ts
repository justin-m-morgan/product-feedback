import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entitites/user.model';

export enum Category {
  Feature = 'feature',
  Bug = 'bug',
  Enhancement = 'enhancement',
}

export enum Status {
  Live = 'live',
  InProgress = 'in-progress',
  Planned = 'planned',
  Suggestion = 'suggestion',
}

@ObjectType()
export class Request {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  status: Status;

  @Field()
  category: Category;

  @Field(() => Int)
  userId: number;

  @Field(() => User)
  user: User;
}
