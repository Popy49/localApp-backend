import { EReservationStatus } from "src/enums/EReservation";

export class CreateReservationDto {
  userId: number;
  startDate: Date;
  endDate: Date;
  price: number;
  status: EReservationStatus;

}
