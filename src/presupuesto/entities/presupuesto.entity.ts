import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";
import mongoose, { Document } from "mongoose";
import { Usuario } from '../../usuario/entities/usuario.entity';


@Schema()
export class Presupuesto extends Document {

    @Prop({

        index: true,
        require:true
    })
    Cantidad: number
    @Prop({

        index: true
    })
    Disponible: number
    @Prop({

        index: true
    })
    Gastado: number

    @Prop({
        type: mongoose.Schema.Types.ObjectId, ref:'usuario',
        index: true
    })
    Usuario: Usuario

    status: Boolean


}




export const PresupuestoSchema = SchemaFactory.createForClass(Presupuesto);