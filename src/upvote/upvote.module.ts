import { Module } from '@nestjs/common';
import { UpvoteService } from './upvote.service';
import { UpvoteResolver } from './upvote.resolver';
import { RequestService } from 'src/request/request.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [RequestService, UserService],
  providers: [UpvoteResolver, UpvoteService, RequestService, UserService],
})
export class UpvoteModule {}
