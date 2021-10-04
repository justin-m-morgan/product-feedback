import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { RequestService } from 'src/request/request.service';
import { UpvoteService } from 'src/upvote/upvote.service';

@Module({
  imports: [RequestService, UpvoteService],
  providers: [UserResolver, UserService, RequestService, UpvoteService],
})
export class UserModule {}
