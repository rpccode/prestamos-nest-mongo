import { Injectable } from '@nestjs/common';
import { CreatePresupuestoDto } from './dto/create-presupuesto.dto';
import { UpdatePresupuestoDto } from './dto/update-presupuesto.dto';
import { Model } from 'mongoose';
import { Presupuesto } from './entities/presupuesto.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PresupuestoService {

  constructor(
    @InjectModel( Presupuesto.name )
    private readonly PresupuestoModel: Model<Presupuesto>
  ){}

  async create(createPresupuestoDto: CreatePresupuestoDto) {
      
    const presupuesto = await this.PresupuestoModel.create( createPresupuestoDto );
  

    return presupuesto;
  }

  findAll() {
    return `This action returns all presupuesto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} presupuesto`;
  }

  update(id: number, updatePresupuestoDto: UpdatePresupuestoDto) {
    return `This action updates a #${id} presupuesto`;
  }

  remove(id: number) {
    return `This action removes a #${id} presupuesto`;
  }
}
