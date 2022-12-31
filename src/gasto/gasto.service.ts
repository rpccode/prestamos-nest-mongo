import { Injectable } from '@nestjs/common';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { Model } from 'mongoose';
import { Gasto } from './entities/gasto.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GastoService {

  constructor(
    @InjectModel( Gasto.name )
    private readonly GastoModel: Model<Gasto>,
  ){}



  create(createGastoDto: CreateGastoDto) {
    createGastoDto.Nombre = createGastoDto.Nombre.toLocaleLowerCase();
    return createGastoDto;
  }

  findAll() {
    return `This action returns all gasto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gasto`;
  }

  update(id: number, updateGastoDto: UpdateGastoDto) {
    return `This action updates a #${id} gasto`;
  }

  remove(id: number) {
    return `This action removes a #${id} gasto`;
  }
}
