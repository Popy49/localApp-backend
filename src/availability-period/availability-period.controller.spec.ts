import { Test, TestingModule } from '@nestjs/testing';
import { AvailabilityPeriodController } from './availability-period.controller';
import { AvailabilityPeriodService } from './availability-period.service';

describe('AvailabilityPeriodController', () => {
  let controller: AvailabilityPeriodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailabilityPeriodController],
      providers: [AvailabilityPeriodService],
    }).compile();

    controller = module.get<AvailabilityPeriodController>(AvailabilityPeriodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
