import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { RequestService } from 'src/request/request.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [UserService, RequestService],
  providers: [CommentResolver, CommentService, RequestService, UserService],
})
export class CommentModule {}
