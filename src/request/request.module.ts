import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestResolver } from './request.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './entities/request.entity';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [TypeOrmModule.forFeature([Request]), CommentModule],
  providers: [RequestResolver, RequestService],
  exports: [RequestService],
})
export class RequestModule {}
