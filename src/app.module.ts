import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AvailabilityPeriodModule } from './availability-period/availability-period.module';
import { AvailabilityPeriod } from './availability-period/entities/availability-period.entity';
import { AvatarModule } from './avatar/avatar.module';
import { AppDataSource } from './config/db.config';
import { multerConfig } from './config/multer.config';
import { Owner } from './owner/entities/owner.entity';
import { OwnerModule } from './owner/owner.module';
import { PaymentsModule } from './payments/payments.module';
import { Reservation } from './reservations/entities/reservation.entity';
import { ReservationsModule } from './reservations/reservations.module';
import { StorageSpace } from './storage_spaces/entities/storage_space.entity';
import { StorageSpacesModule } from './storage_spaces/storage_spaces.module';
import { StorageSpacesImage } from './storage_spaces_image/entities/storage_spaces_image.entity';
import { StorageSpacesImageModule } from './storage_spaces_image/storage_spaces_image.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MulterModule.register(multerConfig),
    UsersModule,
    StorageSpacesModule,
    ReservationsModule,
    PaymentsModule,
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
      entities: [User, Owner, AvailabilityPeriod, StorageSpace, StorageSpacesImage, Reservation],
    }),
    OwnerModule,
    AvailabilityPeriodModule,
    AuthModule,
    AvatarModule,
    StorageSpacesImageModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
