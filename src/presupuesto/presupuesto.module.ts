import { Module } from '@nestjs/common';
import { PresupuestoService } from './presupuesto.service';
import { PresupuestoController } from './presupuesto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Presupuesto, PresupuestoSchema } from './entities/presupuesto.entity';

@Module({
  controllers: [PresupuestoController],
  providers: [PresupuestoService],
  imports:[
    MongooseModule.forFeature([{
      name: Presupuesto.name,
      schema: PresupuestoSchema
    }])
  ]
})
export class PresupuestoModule {}
