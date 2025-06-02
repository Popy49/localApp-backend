import { Test, TestingModule } from '@nestjs/testing';
import { StorageSpacesImageService } from './storage_spaces_image.service';

describe('StorageSpacesImageService', () => {
  let service: StorageSpacesImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageSpacesImageService],
    }).compile();

    service = module.get<StorageSpacesImageService>(StorageSpacesImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
