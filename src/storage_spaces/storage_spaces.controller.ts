import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateStorageSpaceDto } from './dto/create-storage_space.dto';
import { UpdateStorageSpaceDto } from './dto/update-storage_space.dto';
import { StorageSpacesService } from './storage_spaces.service';

@Controller('storage-spaces')
export class StorageSpacesController {
  constructor(private readonly storageSpacesService: StorageSpacesService) {}

  @Post(':ownerId')
  create(
    @Param('ownerId') ownerId: number,
    @Body() createStorageSpaceDto: CreateStorageSpaceDto,
  ) {
    return this.storageSpacesService.create({
      ownerId: ownerId,
      ...createStorageSpaceDto,
    });
  }

  @Get()
  findAll() {
    return this.storageSpacesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storageSpacesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStorageSpaceDto: UpdateStorageSpaceDto,
  ) {
    return this.storageSpacesService.update(+id, updateStorageSpaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storageSpacesService.remove(+id);
  }
}
