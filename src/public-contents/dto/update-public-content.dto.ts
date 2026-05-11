import { PartialType } from '@nestjs/swagger';
import { CreatePublicContentDto } from './create-public-content.dto';

export class UpdatePublicContentDto extends PartialType(CreatePublicContentDto) {}
