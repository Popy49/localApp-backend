import { Owner } from 'src/owner/entities/owner.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { StorageSpacesImage } from 'src/storage_spaces_image/entities/storage_spaces_image.entity';
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

  @OneToMany(() => StorageSpacesImage, photos => photos.storageSpace, { cascade: true })
  photos: StorageSpacesImage[];

  @ManyToOne(() => Owner, (owner) => owner.storageSpace, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'owner_id' }) // nommage colone
  owner: Owner;

  @OneToMany(() => Reservation, (reservations) => reservations.storageSpace)
  reservations: Reservation[];

  // @OneToMany(() => AvailabilityPeriod, (availability) => availability.id)
  // availabilities: AvailabilityPeriod[];
}
