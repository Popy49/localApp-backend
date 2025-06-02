import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StorageSpacesService } from 'src/storage_spaces/storage_spaces.service';
import { Repository } from 'typeorm';
import { StorageSpacesImage } from './entities/storage_spaces_image.entity';

@Injectable()
export class StorageSpacesImageService {
  constructor(
    private readonly storageSpacesService: StorageSpacesService,
    @InjectRepository(StorageSpacesImage) 
    private storageSpacesImageRepository: Repository<StorageSpacesImage>,
  ) {}


  async uploadPhoto(ownerId:number, storageSpacesId:number, file: Express.Multer.File) {

    //TODO: Vérifier que l'utilisateur est le propriétaire de l'espace de stockage

    console.log("file", file);
    
    const image = this.storageSpacesImageRepository.create({
      filename: file.filename,
      url: `${file.destination}/storage/${file.filename}`,
      storageSpaceId: storageSpacesId,
    });

    await this.storageSpacesImageRepository.save(image);

    return {
      message: 'Image uploaded successfully',
      image: {
        id: image.id,
        filename: image.filename,
        url: image.url,
      },
    };
  }

  findAllByStorageSpaces(storageSpacesId: number): Promise<StorageSpacesImage[]> {
    return this.storageSpacesImageRepository.find({
      where: {
        storageSpaceId: storageSpacesId,
      },
      relations: ['storageSpace', 'storageSpace.owner'],
      order: { created_at: 'DESC' },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} storageSpacesImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} storageSpacesImage`;
  }
}
