import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comment/entities/comment.model';
import { User } from 'src/user/entitites/user.model';

@ObjectType()
export class Reply {
  @Field((type) => Int)
  id: number;

  @Field()
  content: string;

  @Field((type) => Int)
  commentId: number;

  @Field((type) => Int)
  userId: number;
}
