import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { ReplyResolver } from './reply.resolver';
import { Reply } from './entities/reply.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reply])],
  providers: [ReplyResolver, ReplyService],
  exports: [ReplyService],
})
export class ReplyModule {}
