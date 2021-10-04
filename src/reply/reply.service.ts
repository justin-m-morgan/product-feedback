import { Injectable } from '@nestjs/common';
import replies from './replies';

@Injectable()
export class ReplyService {
  private readonly replies = replies;

  findAll() {
    return this.replies;
  }

  findById(id) {
    return this.replies.find((comment) => comment.id == id);
  }
}
