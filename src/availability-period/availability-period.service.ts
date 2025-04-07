import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAvailabilityPeriodDto } from './dto/create-availability-period.dto';
import { UpdateAvailabilityPeriodDto } from './dto/update-availability-period.dto';
import { AvailabilityPeriod } from './entities/availability-period.entity';

@Injectable()
export class AvailabilityPeriodService {
  constructor(
    @InjectRepository(AvailabilityPeriod)
    private availabilityPeriodRepository: Repository<AvailabilityPeriod>,
  ) {}
  create(createAvailabilityPeriodDto: CreateAvailabilityPeriodDto) {
    return this.availabilityPeriodRepository.save(createAvailabilityPeriodDto);
  }

  findAll() {
    return this.availabilityPeriodRepository.find();
  }

  findOne(id: number) {
    return this.availabilityPeriodRepository.findOneBy({ id });
  }

  update(id: number, updateAvailabilityPeriodDto: UpdateAvailabilityPeriodDto) {
    return this.availabilityPeriodRepository.update(
      id,
      updateAvailabilityPeriodDto,
    );
  }

  async remove(id: number): Promise<void> {
    await this.availabilityPeriodRepository.delete(id);
  }
}
