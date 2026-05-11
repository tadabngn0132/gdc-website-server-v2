import { Injectable } from '@nestjs/common';
import { CreatePublicContentDto } from './dto/create-public-content.dto';
import { UpdatePublicContentDto } from './dto/update-public-content.dto';

@Injectable()
export class PublicContentsService {
  create(createPublicContentDto: CreatePublicContentDto) {
    return 'This action adds a new publicContent';
  }

  findAll() {
    return `This action returns all publicContents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publicContent`;
  }

  update(id: number, updatePublicContentDto: UpdatePublicContentDto) {
    return `This action updates a #${id} publicContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} publicContent`;
  }
}
