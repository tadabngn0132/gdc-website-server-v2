import { Test, TestingModule } from '@nestjs/testing';
import { PublicContentsService } from './public-contents.service';

describe('PublicContentsService', () => {
  let service: PublicContentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicContentsService],
    }).compile();

    service = module.get<PublicContentsService>(PublicContentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
