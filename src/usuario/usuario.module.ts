import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuario, UsuarioShema } from './entities/usuario.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports:[
    MongooseModule.forFeature([{
      name: Usuario.name,
      schema: UsuarioShema
    }])
  ]
})
export class UsuarioModule {}
