import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { ReplyResolver } from './reply.resolver';
import { CommentService } from 'src/comment/comment.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [CommentService, UserService],
  providers: [ReplyResolver, ReplyService, CommentService, UserService],
})
export class ReplyModule {}
