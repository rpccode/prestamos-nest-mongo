import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoController } from './gasto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gasto, GastoSchema } from './entities/gasto.entity';

@Module({
  controllers: [GastoController],
  providers: [GastoService],
  imports:[
    MongooseModule.forFeature([{
      name: Gasto.name,
      schema: GastoSchema
    }])
  ]
})
export class GastoModule {}
