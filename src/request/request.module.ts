import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestResolver } from './request.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './entities/request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Request])],
  providers: [RequestResolver, RequestService],
})
export class RequestModule {}
