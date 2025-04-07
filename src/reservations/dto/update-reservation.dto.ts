import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {
  storageSpaceId: number;
  userId: number;
  startDate: Date;
  endDate: Date;
  price: number;
  status: string;
  paymentMethod: string;
  transactionId?: string;
}
