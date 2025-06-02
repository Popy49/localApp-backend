import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStorageSpaceDto } from './dto/create-storage_space.dto';
import { UpdateStorageSpaceDto } from './dto/update-storage_space.dto';
import { StorageSpace } from './entities/storage_space.entity';

@Injectable()
export class StorageSpacesService {
  constructor(
    @InjectRepository(StorageSpace)
    private storageSpaceRepository: Repository<StorageSpace>,
  ) {}

  create(createStorageSpaceDto: CreateStorageSpaceDto) {
    return this.storageSpaceRepository.save(createStorageSpaceDto);
  }

  findAll() {
    return this.storageSpaceRepository.find();
  }

  findOne(id: number) {
    return this.storageSpaceRepository.findOne({
      where: { id: id },
      relations: ['photos'],
    }).then(storage => {
      return {
        ...storage,
        photos: storage.photos.map(photo => ({
          url: photo.url,
          filename: photo.filename,
          created_at: photo.created_at,
        })),
      }});
  }

  update(id: number, updateStorageSpaceDto: UpdateStorageSpaceDto) {
    return this.storageSpaceRepository.update(id, updateStorageSpaceDto);
  }

  async remove(id: number): Promise<void> {
    await this.storageSpaceRepository.delete(id);
  }
}
