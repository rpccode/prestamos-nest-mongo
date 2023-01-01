import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GastoModule } from './gasto/gasto.module';
import { PresupuestoModule } from './presupuesto/presupuesto.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './usuario/usuario.module';
import { CommonModule } from './common/common.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,"..","public"),
      }),

    MongooseModule.forRoot('mongodb://localhost:27017/nest-prestamo'),

    GastoModule,
    PresupuestoModule,
    UsuarioModule,
    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
