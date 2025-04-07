import { PartialType } from '@nestjs/mapped-types';
import { CreateAvailabilityPeriodDto } from './create-availability-period.dto';

export class UpdateAvailabilityPeriodDto extends PartialType(
  CreateAvailabilityPeriodDto,
) {
  startDate: Date;
  endDate: Date;
}
