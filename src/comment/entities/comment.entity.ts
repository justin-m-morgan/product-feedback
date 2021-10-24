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

  @Field(() => Int)
  @Column()
  requestId: number;

  @Field(() => Request)
  @ManyToOne(() => Request, (request) => request.comments)
  request: Request;

  @Field(() => Int)
  @Column()
  userId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.comments)
  user: number;

  @Field(() => [Reply])
  @OneToMany(() => Reply, (reply) => reply.comment)
  replies: Reply[];
}
