import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvailabilityPeriodService } from './availability-period.service';
import { CreateAvailabilityPeriodDto } from './dto/create-availability-period.dto';
import { UpdateAvailabilityPeriodDto } from './dto/update-availability-period.dto';

@Controller('availability-period')
export class AvailabilityPeriodController {
  constructor(private readonly availabilityPeriodService: AvailabilityPeriodService) {}

  @Post()
  create(@Body() createAvailabilityPeriodDto: CreateAvailabilityPeriodDto) {
    return this.availabilityPeriodService.create(createAvailabilityPeriodDto);
  }

  @Get()
  findAll() {
    return this.availabilityPeriodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.availabilityPeriodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvailabilityPeriodDto: UpdateAvailabilityPeriodDto) {
    return this.availabilityPeriodService.update(+id, updateAvailabilityPeriodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.availabilityPeriodService.remove(+id);
  }
}
