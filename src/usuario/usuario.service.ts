import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Model } from 'mongoose';
import { Usuario } from './entities/usuario.entity';
import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common/exceptions';

@Injectable()
export class UsuarioService {

   
    constructor(
      @InjectModel( Usuario.name )
      private readonly UsuarioModel: Model<Usuario>
    ){}


 async create(createUsuarioDto: CreateUsuarioDto) {
       
      try {

        const usuario = await this.UsuarioModel.create( createUsuarioDto );
        return usuario
        console.log(createUsuarioDto)


      } catch (error) {
        console.log(error)
        if( error.code === 11000 ){
          throw new BadRequestException(`EL Usuario ya Existe en la base de datos ${ JSON.stringify( error.keyValue )}`)
        }
        throw new InternalServerErrorException('No se Pudo crear el usuario - Verifique los log del servidor para mayor informacio ')
      }

  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
