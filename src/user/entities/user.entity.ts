import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from '../../comment/entities/comment.entity';
import { Reply } from '../../reply/entities/reply.entity';
import { Request } from '../../request/entities/request.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  image: string;

  @Field(() => [Request])
  @OneToMany(() => Request, (request) => request.user)
  requests: Request[];

  @Field(() => [Comment])
  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @Field(() => [Reply])
  @OneToMany(() => Reply, (reply) => reply.user)
  replies: Reply[];

  @Field(() => [Request], { nullable: true })
  @ManyToMany(() => Request, (request) => request.upvotes)
  @JoinTable({ name: 'upvotes' })
  upvotes: Request[];
}
