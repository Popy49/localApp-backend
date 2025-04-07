import { Owner } from 'src/owner/entities/owner.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  availability: Date[];

  @Column()
  reservations: string[];

  @Column()
  description: string;

  @Column()
  photos: File[];

  // Relation ManyToOne avec Owner
  @ManyToOne(() => Owner, (owner) => owner.storageSpace)
  owner: Owner;
  @JoinColumn({ name: 'host_id' }) // Indiquer que `host_id` est la clé étrangère
  host: User;
}
