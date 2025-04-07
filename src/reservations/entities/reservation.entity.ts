import { StorageSpace } from 'src/storage_spaces/entities/storage_space.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @ManyToOne(() => StorageSpace, (storage) => storage.reservations, {
    onDelete: 'CASCADE',
  })
  storage: StorageSpace;

  @ManyToOne(() => User)
  user: User;
}
