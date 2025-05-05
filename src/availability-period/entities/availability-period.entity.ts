import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AvailabilityPeriod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date; // Date de début de la période de disponibilité

  @Column()
  endDate: Date; // Date de fin de la période de disponibilité

  // @ManyToOne(() => StorageSpace, (storage) => storage.availabilities, {
  //   onDelete: 'CASCADE',
  // })
  // storageSpace: StorageSpace;
}
