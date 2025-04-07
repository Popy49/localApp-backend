import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilityPeriodService } from './availability-period.service';

describe('AvailabilityPeriodService', () => {
  let service: AvailabilityPeriodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvailabilityPeriodService],
    }).compile();

    service = module.get<AvailabilityPeriodService>(AvailabilityPeriodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
