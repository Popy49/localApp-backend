import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageSpacesModule } from 'src/storage_spaces/storage_spaces.module';
import { StorageSpacesImage } from './entities/storage_spaces_image.entity';
import { StorageSpacesImageController } from './storage_spaces_image.controller';
import { StorageSpacesImageService } from './storage_spaces_image.service';

@Module({
  imports: [TypeOrmModule.forFeature([StorageSpacesImage]), StorageSpacesModule], 
  controllers: [StorageSpacesImageController],
  providers: [StorageSpacesImageService],

})
export class StorageSpacesImageModule {}
