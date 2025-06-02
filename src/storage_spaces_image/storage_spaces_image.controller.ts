import { Controller, Delete, Get, Param, ParseIntPipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { StorageSpacesImageService } from './storage_spaces_image.service';

@Controller('owners/:ownerId/storage-spaces/:storageSpacesId/storage-spaces-image')
export class StorageSpacesImageController {
  constructor(private readonly storageSpacesImageService: StorageSpacesImageService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    })}))
  create(
  @UploadedFile() file: Express.Multer.File,
  @Param('ownerId', ParseIntPipe) ownerId: number,
  @Param('storageSpacesId', ParseIntPipe) storageSpacesId: number) {
    console.log("ownerId", ownerId);
    console.log("storageSpacesId", storageSpacesId);
    console.log("file", file);
    return this.storageSpacesImageService.uploadPhoto(ownerId, storageSpacesId, file);
  }

  @Get()
  findAll(@Param('storageSpacesId', ParseIntPipe) storageSpacesId: number) {
    return this.storageSpacesImageService.findAllByStorageSpaces(storageSpacesId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storageSpacesImageService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storageSpacesImageService.remove(+id);
  }
}
