import { PartialType } from '@nestjs/mapped-types';
import { CreateStorageSpaceDto } from './create-storage_space.dto';

export class UpdateStorageSpaceDto extends PartialType(CreateStorageSpaceDto) {
  name: string;
  description: string;
  location: string;
  price: number;
  size: number;
  availableFrom: Date;
  availableTo: Date;
  ownerId: number; // Assuming this is the ID of the user who owns the storage space
}
