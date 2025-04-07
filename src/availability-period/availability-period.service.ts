import { Injectable } from '@nestjs/common';
import { CreateAvailabilityPeriodDto } from './dto/create-availability-period.dto';
import { UpdateAvailabilityPeriodDto } from './dto/update-availability-period.dto';

@Injectable()
export class AvailabilityPeriodService {
  create(createAvailabilityPeriodDto: CreateAvailabilityPeriodDto) {
    return 'This action adds a new availabilityPeriod';
  }

  findAll() {
    return `This action returns all availabilityPeriod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} availabilityPeriod`;
  }

  update(id: number, updateAvailabilityPeriodDto: UpdateAvailabilityPeriodDto) {
    return `This action updates a #${id} availabilityPeriod`;
  }

  remove(id: number) {
    return `This action removes a #${id} availabilityPeriod`;
  }
}
