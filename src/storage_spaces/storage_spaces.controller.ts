import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StorageSpacesService } from './storage_spaces.service';
import { CreateStorageSpaceDto } from './dto/create-storage_space.dto';
import { UpdateStorageSpaceDto } from './dto/update-storage_space.dto';

@Controller('storage-spaces')
export class StorageSpacesController {
  constructor(private readonly storageSpacesService: StorageSpacesService) {}

  @Post()
  create(@Body() createStorageSpaceDto: CreateStorageSpaceDto) {
    return this.storageSpacesService.create(createStorageSpaceDto);
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
  update(@Param('id') id: string, @Body() updateStorageSpaceDto: UpdateStorageSpaceDto) {
    return this.storageSpacesService.update(+id, updateStorageSpaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storageSpacesService.remove(+id);
  }
}
