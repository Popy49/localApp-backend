import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {
    constructor(
      @InjectRepository(Owner)
      private ownersRepository: Repository<Owner>,
 
    ) {}
  
  create(createOwnerDto: CreateOwnerDto) {
    return this.ownersRepository.save(createOwnerDto);
  }

  findAll() {
    return this.ownersRepository.find();
  }

  findOne(id: number) : Promise<Owner | null> {
      return this.ownersRepository.findOneBy({ id });
    }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }



}
