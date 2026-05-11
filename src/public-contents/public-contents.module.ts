import { Module } from '@nestjs/common';
import { PublicContentsService } from './public-contents.service';
import { PublicContentsController } from './public-contents.controller';

@Module({
  controllers: [PublicContentsController],
  providers: [PublicContentsService],
})
export class PublicContentsModule {}
