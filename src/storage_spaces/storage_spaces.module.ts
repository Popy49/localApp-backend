import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageSpace } from './entities/storage_space.entity';
import { StorageSpacesController } from './storage_spaces.controller';
import { StorageSpacesService } from './storage_spaces.service';

@Module({
  imports: [TypeOrmModule.forFeature([StorageSpace])],
  controllers: [StorageSpacesController],
  providers: [StorageSpacesService],
})
export class StorageSpacesModule {}
