import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class Usuario extends Document {

    @Prop({
        required: true,
        trim: true,
    })
    Nombre: string

    @Prop({
        required: true,
        trim: true,
    })
    Password: string
    @Prop({
        required: true,
        trim: true,
        unique: true,
    })
    Email: string

    @Prop({
        trim: true,
        default: null,
    })
    Telefono: string

    @Prop({
        trim: true,
        default: null,
    })
    Web: string

    @Prop({
        trim: true,
        default: null,
    })
    Token: string

    @Prop({
        trim: true,
        default: false,
    })
    Confirmado: boolean
}


export const UsuarioShema = SchemaFactory.createForClass( Usuario )
