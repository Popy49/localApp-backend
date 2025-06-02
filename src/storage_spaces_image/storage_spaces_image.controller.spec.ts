import { Test, TestingModule } from '@nestjs/testing';
import { StorageSpacesImageController } from './storage_spaces_image.controller';
import { StorageSpacesImageService } from './storage_spaces_image.service';

describe('StorageSpacesImageController', () => {
  let controller: StorageSpacesImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageSpacesImageController],
      providers: [StorageSpacesImageService],
    }).compile();

    controller = module.get<StorageSpacesImageController>(StorageSpacesImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
