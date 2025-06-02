import { PartialType } from '@nestjs/mapped-types';
import { CreateStorageSpacesImageDto } from './create-storage_spaces_image.dto';

export class UpdateStorageSpacesImageDto extends PartialType(CreateStorageSpacesImageDto) {}
