import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reservationId: number;

  @Column()
  userId: number;

  @Column()
  paymentMethod: string;

  @Column()
  transactionId: string;

  @Column()
  amount: number;

  @Column()
  status: string;
}
