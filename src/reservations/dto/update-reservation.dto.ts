import { PartialType } from '@nestjs/mapped-types';
import { EReservationStatus } from 'src/enums/EReservation';
import { CreateReservationDto } from './create-reservation.dto';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {
  storageSpaceId: number;
  userId: number;
  startDate: Date;
  endDate: Date;
  price: number;
  status: EReservationStatus;
}
