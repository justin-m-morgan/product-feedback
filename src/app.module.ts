import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { RequestModule } from './request/request.module';
import { CommentModule } from './comment/comment.module';
import { ReplyModule } from './reply/reply.module';

const schemaDirectory = join(process.cwd(), 'src/schema.gql');

@Module({
  imports: [
    TypeOrmModule.forRoot(),
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
