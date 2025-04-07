import { Module } from '@nestjs/common';
import { AvailabilityPeriodService } from './availability-period.service';
import { AvailabilityPeriodController } from './availability-period.controller';

@Module({
  controllers: [AvailabilityPeriodController],
  providers: [AvailabilityPeriodService],
})
export class AvailabilityPeriodModule {}
