import { Injectable } from '@nestjs/common';
import comments from './comments';

@Injectable()
export class CommentService {
  private readonly comments = comments;

  findAll() {
    return this.comments;
  }

  findById(id) {
    return this.comments.find((comment) => comment.id == id);
  }
}
