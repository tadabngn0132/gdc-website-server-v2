import { Test, TestingModule } from '@nestjs/testing';
import { PublicContentsController } from './public-contents.controller';
import { PublicContentsService } from './public-contents.service';

describe('PublicContentsController', () => {
  let controller: PublicContentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicContentsController],
      providers: [PublicContentsService],
    }).compile();

    controller = module.get<PublicContentsController>(PublicContentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
