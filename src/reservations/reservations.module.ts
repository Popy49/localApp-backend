import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageSpace } from 'src/storage_spaces/entities/storage_space.entity';
import { Reservation } from './entities/reservation.entity';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation, StorageSpace])],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
