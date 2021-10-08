import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private commentsRepository: Repository<Comment>,
  ) {}

  create(createCommentInput: CreateCommentInput) {
    let comment = this.commentsRepository.create(createCommentInput);
    return this.commentsRepository.save(comment);
  }

  findAll(opts = {}) {
    return this.commentsRepository.find({
      ...opts,
      relations: ['request', 'request.user', 'user'],
    });
  }

  findOne(id: number) {
    return this.commentsRepository.findOne(id, {
      relations: ['request', 'user'],
    });
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
