import { EReservationStatus } from 'src/enums/EReservation';
import { StorageSpace } from 'src/storage_spaces/entities/storage_space.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @ManyToOne(() => StorageSpace, (storage) => storage.reservations)
  storageSpace: StorageSpace;

  @ManyToOne(() => User, (user) => user.reservations)
  @JoinColumn({ name: 'userId' }) // optionnel, mais rend les choses claires
  user: User;

  @Column()
  status: EReservationStatus;
}
