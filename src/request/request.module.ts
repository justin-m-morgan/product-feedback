import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestResolver } from './request.resolver';
import { UserService } from 'src/user/user.service';
import { UpvoteService } from 'src/upvote/upvote.service';

@Module({
  imports: [UserService, UpvoteService],
  providers: [RequestResolver, RequestService, UserService, UpvoteService],
})
export class RequestModule {}
