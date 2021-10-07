import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReplyInput } from './dto/create-reply.input';
import { UpdateReplyInput } from './dto/update-reply.input';
import { Reply } from './entities/reply.entity';

@Injectable()
export class ReplyService {
  constructor(
    @InjectRepository(Reply) readonly repliesRepository: Repository<Reply>,
  ) {}

  create(createReplyInput: CreateReplyInput) {
    let reply = this.repliesRepository.create(createReplyInput);
    return this.repliesRepository.save(reply);
  }

  findAll() {
    return this.repliesRepository.find();
  }

  findOne(id: number) {
    return this.repliesRepository.findOne(id);
  }

  update(id: number, updateReplyInput: UpdateReplyInput) {
    return `This action updates a #${id} reply`;
  }

  remove(id: number) {
    return `This action removes a #${id} reply`;
  }
}
