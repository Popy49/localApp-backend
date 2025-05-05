import { Exclude } from 'class-transformer';
import { Owner } from 'src/owner/entities/owner.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ unique: true })
  @Exclude()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: false })
  isVerified: boolean;

  @Column()
  role: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Owner, owner => owner.user, { onDelete: 'CASCADE' })
  owner: Owner;

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservations: Reservation[];

}
