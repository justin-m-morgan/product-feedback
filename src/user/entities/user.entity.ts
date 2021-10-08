import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @Field((type) => [Request])
  @OneToMany(() => Request, (request) => request.user)
  requests: Request[];

  @Field((type) => [Comment])
  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];

  @Field((type) => [Reply])
  @OneToMany((type) => Reply, (reply) => reply.user)
  replies: Reply[];
}
