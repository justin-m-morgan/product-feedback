import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { RequestModule } from './request/request.module';
import { Request } from './request/entities/request.entity';
import { CommentModule } from './comment/comment.module';
import { ReplyModule } from './reply/reply.module';
import { Comment } from './comment/entities/comment.entity';
import { Reply } from './reply/entities/reply.entity';

const schemaDirectory = join(process.cwd(), 'src/schema.gql');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'productfeedback',
      host: 'localhost',
      port: 5432,
      username: 'justinmorgan',
      password: '',
      entities: [User, Request, Comment, Reply],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: schemaDirectory,
      playground: true,
      introspection: true,
    }),
    UserModule,
    RequestModule,
    CommentModule,
    ReplyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
