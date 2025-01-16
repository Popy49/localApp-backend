import { Module } from '@nestjs/common';
import { StorageSpacesService } from './storage_spaces.service';
import { StorageSpacesController } from './storage_spaces.controller';

@Module({
  controllers: [StorageSpacesController],
  providers: [StorageSpacesService],
})
export class StorageSpacesModule {}
