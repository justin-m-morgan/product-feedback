import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReplyInput } from './dto/create-reply.input';
// import { UpdateReplyInput } from './dto/update-reply.input';
import { Reply } from './entities/reply.entity';

@Injectable()
export class ReplyService {
  constructor(
    @InjectRepository(Reply) readonly repliesRepository: Repository<Reply>,
  ) {}

  create(createReplyInput: CreateReplyInput) {
    const reply = this.repliesRepository.create(createReplyInput);
    return this.repliesRepository.save(reply);
  }

  findAll(opts = {}) {
    return this.repliesRepository.find({
      ...opts,
      relations: [
        'comment',
        'comment.user',
        'comment.request',
        'comment.request.user',
        'user',
      ],
    });
  }

  findOne(id: number) {
    return this.repliesRepository.findOne(id, {
      relations: ['comment', 'user'],
    });
  }

  // update(id: number, updateReplyInput: UpdateReplyInput) {
  //   return `This action updates a #${id} reply`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} reply`;
  // }
}
