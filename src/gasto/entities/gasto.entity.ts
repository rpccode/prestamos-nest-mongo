import { Date, Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose/dist';

@Schema()
export class Gasto extends Document {

    @Prop({
        index:true
    })
    Nombre: string
    @Prop({
        index:true
    })
    Cantidad: number
    @Prop({
        index:true
    })
    Categoria: string

    @Prop({
        unique:true,
        index:true
    })
    PresupuestoID: string

    @Prop({
        required: true
    })
    fechaCreacion: number
}   

export const GastoSchema = SchemaFactory.createForClass( Gasto )
