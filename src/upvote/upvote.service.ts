import { Injectable } from '@nestjs/common';
import { CreateUpvoteInput } from './dto/create-upvote.input';
import { UpdateUpvoteInput } from './dto/update-upvote.input';
import upvotes from './data/upvotes';

@Injectable()
export class UpvoteService {
  private readonly upvotes = upvotes;

  create(createUpvoteInput: CreateUpvoteInput) {
    return 'This action adds a new upvote';
  }

  findAll() {
    return upvotes;
  }
  findAllByRequest(requestId: number) {
    return upvotes.filter((upvote) => upvote.requestId == requestId);
  }
  findAllByUser(userId: number) {
    return upvotes.filter((upvote) => upvote.userId == userId);
  }

  findOne(id: number) {
    return upvotes.find((upvote) => upvote.id == id);
  }

  update(id: number, updateUpvoteInput: UpdateUpvoteInput) {
    return `This action updates a #${id} upvote`;
  }

  remove(id: number) {
    return `This action removes a #${id} upvote`;
  }
}
