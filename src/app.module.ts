import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvailabilityPeriodModule } from './availability-period/availability-period.module';
import { AvailabilityPeriod } from './availability-period/entities/availability-period.entity';
import { OwnerModule } from './owner/owner.module';
import { PaymentsModule } from './payments/payments.module';
import { Reservation } from './reservations/entities/reservation.entity';
import { ReservationsModule } from './reservations/reservations.module';
import { StorageSpace } from './storage_spaces/entities/storage_space.entity';
import { StorageSpacesModule } from './storage_spaces/storage_spaces.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AppDataSource } from './config/db.config';
import { Owner } from './owner/entities/owner.entity';

@Module({
  imports: [
    UsersModule,
    StorageSpacesModule,
    ReservationsModule,
    PaymentsModule,
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
      entities: [User, Owner, AvailabilityPeriod, StorageSpace, Reservation],
    }),
    OwnerModule,
    AvailabilityPeriodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
