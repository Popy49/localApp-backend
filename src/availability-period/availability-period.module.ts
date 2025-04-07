import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvailabilityPeriodController } from './availability-period.controller';
import { AvailabilityPeriodService } from './availability-period.service';
import { AvailabilityPeriod } from './entities/availability-period.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AvailabilityPeriod])],
  controllers: [AvailabilityPeriodController],
  providers: [AvailabilityPeriodService],
})
export class AvailabilityPeriodModule {}
