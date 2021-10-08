import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from '../../comment/entities/comment.entity';
import { User } from '../../user/entities/user.entity';

@ObjectType()
@Entity()
export class Reply {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  content: string;

  @Field((type) => Int)
  @Column()
  commentId: number;

  @Field((type) => Comment)
  @ManyToOne((type) => Comment, (comment) => comment.replies)
  comment: Comment;

  @Field((type) => Int)
  @Column()
  userId: number;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.replies)
  user: User;
}
