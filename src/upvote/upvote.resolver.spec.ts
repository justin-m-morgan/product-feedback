import { Test, TestingModule } from '@nestjs/testing';
import { UpvoteResolver } from './upvote.resolver';
import { UpvoteService } from './upvote.service';

describe('UpvoteResolver', () => {
  let resolver: UpvoteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpvoteResolver, UpvoteService],
    }).compile();

    resolver = module.get<UpvoteResolver>(UpvoteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
