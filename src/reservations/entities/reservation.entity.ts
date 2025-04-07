import { StorageSpace } from 'src/storage_spaces/entities/storage_space.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
  storageSpace: StorageSpace;

  @ManyToOne(() => User)
  user: User;
}
