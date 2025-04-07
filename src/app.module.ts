import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { ReservationsModule } from './reservations/reservations.module';
import { StorageSpacesModule } from './storage_spaces/storage_spaces.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { OwnerModule } from './owner/owner.module';
import { AvailabilityPeriodModule } from './availability-period/availability-period.module';

@Module({
  imports: [
    UsersModule,
    StorageSpacesModule,
    ReservationsModule,
    PaymentsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),
    OwnerModule,
    AvailabilityPeriodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
