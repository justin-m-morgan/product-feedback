import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { ReplyModule } from '../reply/reply.module';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), ReplyModule],
  providers: [CommentResolver, CommentService],
  exports: [CommentService],
})
export class CommentModule {}
