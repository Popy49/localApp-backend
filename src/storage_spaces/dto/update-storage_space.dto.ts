import { PartialType } from '@nestjs/mapped-types';
import { CreateStorageSpaceDto } from './create-storage_space.dto';

export class UpdateStorageSpaceDto extends PartialType(CreateStorageSpaceDto) {}
