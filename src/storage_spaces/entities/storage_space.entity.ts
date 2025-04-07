import { AvailabilityPeriod } from 'src/availability-period/entities/availability-period.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StorageSpace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  size: string;

  @Column()
  price: number;

  @Column()
  description: string;

  // @Column()
  // photos: File[];

  @Column()
  ownerId: number;

  @OneToMany(() => Reservation, (reservations) => reservations.storageSpace)
  reservations: Reservation[];

  @OneToMany(() => AvailabilityPeriod, (availability) => availability.id)
  availabilities: AvailabilityPeriod[];
}
