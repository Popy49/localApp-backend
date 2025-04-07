export class CreateReservationDto {
  storageSpaceId: number;
  userId: number;
  startDate: Date;
  endDate: Date;
  price: number;
  status: string;
  paymentMethod: string;
  transactionId?: string;
}
