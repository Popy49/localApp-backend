import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post('storageSpace/:storageSpaceId')
  create(
    @Param('storageSpaceId') storageSpaceId: string, 
    @Body() createReservationDto: CreateReservationDto,
    @Req() req: any  // Récupérer l'utilisateur connecté depuis le JWT
  ) {
    console.log("req", req);
    const userId = req?.userId;  // Assumer que le middleware JWT ajoute l'utilisateur connecté

    if (!userId) {
      throw new BadRequestException('User not authenticated');
    }

    return this.reservationsService.create(storageSpaceId, createReservationDto, userId);
  }
  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(+id);
  }

  @Get('user/:userId')
  findByOwner(@Param('userId') userId: string) {
  return this.reservationsService.findByUser(userId);
}
}
