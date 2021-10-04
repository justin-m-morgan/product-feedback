import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { ReplyModule } from './reply/reply.module';
import { RequestModule } from './request/request.module';
import { UpvoteModule } from './upvote/upvote.module';

const schemaDirectory = join(process.cwd(), 'src/schema.gql');

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: schemaDirectory,
      playground: true,
      introspection: true,
    }),
    UserModule,
    CommentModule,
    ReplyModule,
    RequestModule,
    UpvoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
