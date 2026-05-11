import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublicContentsService } from './public-contents.service';
import { CreatePublicContentDto } from './dto/create-public-content.dto';
import { UpdatePublicContentDto } from './dto/update-public-content.dto';

@Controller('public-contents')
export class PublicContentsController {
  constructor(private readonly publicContentsService: PublicContentsService) {}

  @Post()
  create(@Body() createPublicContentDto: CreatePublicContentDto) {
    return this.publicContentsService.create(createPublicContentDto);
  }

  @Get()
  findAll() {
    return this.publicContentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publicContentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublicContentDto: UpdatePublicContentDto) {
    return this.publicContentsService.update(+id, updatePublicContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicContentsService.remove(+id);
  }
}
