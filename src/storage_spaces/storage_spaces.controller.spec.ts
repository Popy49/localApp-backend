import { Test, TestingModule } from '@nestjs/testing';
import { StorageSpacesController } from './storage_spaces.controller';
import { StorageSpacesService } from './storage_spaces.service';

describe('StorageSpacesController', () => {
  let controller: StorageSpacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageSpacesController],
      providers: [StorageSpacesService],
    }).compile();

    controller = module.get<StorageSpacesController>(StorageSpacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
