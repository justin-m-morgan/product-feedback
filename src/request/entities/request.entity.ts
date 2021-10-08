import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from '../../comment/entities/comment.entity';
import { User } from '../../user/entities/user.entity';

export enum Category {
  Enhancement = 'Enhancement',
  Feature = 'Feature',
  Bug = 'Bug',
}

export enum Status {
  Suggestion = 'Suggestion',
  Planned = 'Planned',
  InProgress = 'In Progress',
  Live = 'Live',
}

registerEnumType(Status, {
  name: 'Status',
});
registerEnumType(Category, {
  name: 'Category',
});

@ObjectType()
@Entity()
export class Request {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field((type) => Category)
  @Column()
  category: Category;

  @Field((type) => Status)
  @Column()
  status: Status;

  @Field(() => Int)
  @Column()
  userId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.requests)
  user: User;

  @Field(() => [Comment])
  @OneToMany((type) => Comment, (comment) => comment.request)
  comments: Comment[];
}
