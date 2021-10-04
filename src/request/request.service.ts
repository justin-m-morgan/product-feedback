import { Injectable } from '@nestjs/common';
import { CreateRequestInput } from './dto/create-request.input';
import { UpdateRequestInput } from './dto/update-request.input';
import requests from './data/requests';

@Injectable()
export class RequestService {
  private readonly requests = requests;

  // create(createRequestInput: CreateRequestInput) {
  //   return 'This action adds a new request';
  // }

  findAll() {
    return this.requests;
  }
  findAllById(id) {
    return this.requests.filter((req) => req.id == id);
  }

  findById(id) {
    return this.requests.find((request) => request.id == id);
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} request`;
  // }

  // update(id: number, updateRequestInput: UpdateRequestInput) {
  //   return `This action updates a #${id} request`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} request`;
  // }
}
