import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Model, isValidObjectId } from 'mongoose';
import { Usuario } from './entities/usuario.entity';
import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class UsuarioService {


  constructor(
    @InjectModel(Usuario.name)
    private readonly UsuarioModel: Model<Usuario>
  ) { }


  async create(createUsuarioDto: CreateUsuarioDto) {

    try {

      const usuario = await this.UsuarioModel.create(createUsuarioDto);
      return usuario



    } catch (error) {
      this.handleExceptions(error)
    }

  }

  findAll() {
    return `This action returns all usuario`;
  }

  async findOne(id: string) {

    let usuario: Usuario;

    if (!usuario && isValidObjectId(id)) {
      usuario = await this.UsuarioModel.findById(id)
    }

    if (!usuario) {
      usuario = await this.UsuarioModel.findOne({ Email: id.trim() })
    }

    if (!usuario) throw new NotFoundException(`Usuario no encontrado con este ${id}`)

    return usuario
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {

    try {


      const usuario = await this.UsuarioModel.findByIdAndUpdate(id, updateUsuarioDto, { new: true })

      return usuario

    } catch (error) {
      this.handleExceptions(error)
    }



    return
  }

  async remove(_id: string) {


    const { deletedCount } = await this.UsuarioModel.deleteOne({ _id })
    if (deletedCount === 0) {
      throw new BadRequestException(`EL Usuario no Existe en la base de datos `)
      return;

    }
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`EL Usuario ya Existe en la base de datos ${JSON.stringify(error.keyValue)}`)
    }
    throw new InternalServerErrorException('No se Pudo Modificar el usuario - Verifique los log del servidor para mayor informacio ')

  }
}
