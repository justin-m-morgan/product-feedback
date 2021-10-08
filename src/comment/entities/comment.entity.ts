import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Reply } from '../../reply/entities/reply.entity';
import { Request } from '../../request/entities/request.entity';
import { User } from '../../user/entities/user.entity';

@ObjectType()
@Entity()
export class Comment {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  content: string;

  @Field((type) => Int)
  @Column()
  requestId: number;

  @Field((type) => Request)
  @ManyToOne((type) => Request, (request) => request.comments)
  request: Request;

  @Field((type) => Int)
  @Column()
  userId: number;

  @Field((type) => User)
  @ManyToOne((type) => User, (user) => user.comments)
  user: number;

  @Field((type) => [Reply])
  @OneToMany((type) => Reply, (reply) => reply.comment)
  replies: Reply[];
}
