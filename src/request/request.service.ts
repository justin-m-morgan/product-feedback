import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRequestInput } from './dto/create-request.input';
// import { UpdateRequestInput } from './dto/update-request.input';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private requestsRepository: Repository<Request>,
  ) {}

  create(createRequestInput: CreateRequestInput) {
    const request = this.requestsRepository.create(createRequestInput);
    return this.requestsRepository.save(request);
  }

  findAll(opts = {}) {
    return this.requestsRepository.find({
      ...opts,
      relations: ['user', 'upvotes'],
    });
  }

  findOne(id: number) {
    return this.requestsRepository.findOne(id, {
      relations: ['user', 'upvotes'],
    });
  }

  // async remove(id: number) {
  //   return `This action removes a #${id} request`;
  // }

  // update(id: number, updateRequestInput: UpdateRequestInput) {
  //   return `This action updates a #${id} request`;
  // }
}
