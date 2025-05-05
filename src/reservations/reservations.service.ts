import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StorageSpace } from 'src/storage_spaces/entities/storage_space.entity';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationsService {
    constructor(
      @InjectRepository(Reservation)
      private reservationRepo: Repository<Reservation>,

      @InjectRepository(StorageSpace) 
      private storageSpaceRepo: Repository<StorageSpace>,
    ) {}
  
    async create(storageSpaceId: string, createReservationDto: CreateReservationDto, userId: string) {
      // Vérifier si l'espace de stockage existe
      const storageSpace = await this.storageSpaceRepo.findOne({
        where: { id: Number(storageSpaceId) }
      });
      if (!storageSpace) {
        throw new NotFoundException('Storage space not found');
      }
    
      // Vérifier la disponibilité de l'espace de stockage (si besoin)
      const { startDate, endDate } = createReservationDto;
      
      const existingReservations = await this.reservationRepo
        .createQueryBuilder('reservation')
        .where('reservation.storageSpaceId = :storageSpaceId', { storageSpaceId })
        .andWhere('(reservation.startDate <= :endDate AND reservation.endDate >= :startDate)', { startDate, endDate })
        .getMany();
    
      if (existingReservations.length > 0) {
        throw new BadRequestException('This space is already reserved for the selected dates');
      }
      //TODO: Ajouter la verif sur les periode de disponibilité
    
      // Créer la réservation
      const reservation = this.reservationRepo.create({
        ...createReservationDto,
        storageSpace: { id: Number(storageSpaceId) },
        user: { id: Number(userId) },
      });
    
      return this.reservationRepo.save(reservation);
    }

  findAll() {
    return this.reservationRepo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }

  async findByUser(userId: string) {
       // Recherche des réservations par utilisateur
       const reservations = await this.reservationRepo.find({
        where: { user: { id: Number(userId) } }
      });
  
      // Si aucune réservation trouvée, lever une exception NotFound
      if (!reservations || reservations.length === 0) {
        throw new NotFoundException(`No reservations found for user with id ${userId}`);
      }
  
      // Si des réservations existent, les retourner
      return reservations;
  }
} 
