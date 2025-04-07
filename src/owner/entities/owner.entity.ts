import { StorageSpace } from 'src/storage_spaces/entities/storage_space.entity';
import { User } from 'src/users/entities/user.entity';
import {
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  // Relation OneToOne avec User
  @OneToOne(() => User, { eager: true })
  @JoinColumn() // Indique que la clé étrangère est ici
  user: User;

  // Relation OneToMany avec LocalSpace
  @OneToMany(() => StorageSpace, (localSpace) => localSpace.owner)
  storageSpace: StorageSpace[];
}
