import { AvailabilityPeriod } from 'src/availability-period/entities/availability-period.entity';
import { Owner } from 'src/owner/entities/owner.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StorageSpace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  size: number;

  @Column()
  price: number;

  @Column()
  description: string;

  // @Column()
  // photos: File[];

  @ManyToOne(() => Owner, (owner) => owner.storageSpace, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'owner_id' }) // si tu veux nommer la colonne
  owner: Owner;
  @OneToMany(() => Reservation, (reservations) => reservations.storageSpace)
  reservations: Reservation[];

  @OneToMany(() => AvailabilityPeriod, (availability) => availability.id)
  availabilities: AvailabilityPeriod[];
}
