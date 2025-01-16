import { Injectable } from '@nestjs/common';
import { CreateStorageSpaceDto } from './dto/create-storage_space.dto';
import { UpdateStorageSpaceDto } from './dto/update-storage_space.dto';

@Injectable()
export class StorageSpacesService {
  create(createStorageSpaceDto: CreateStorageSpaceDto) {
    return 'This action adds a new storageSpace';
  }

  findAll() {
    return `This action returns all storageSpaces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storageSpace`;
  }

  update(id: number, updateStorageSpaceDto: UpdateStorageSpaceDto) {
    return `This action updates a #${id} storageSpace`;
  }

  remove(id: number) {
    return `This action removes a #${id} storageSpace`;
  }
}
