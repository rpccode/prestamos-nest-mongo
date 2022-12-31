import { IsInt, IsMongoId, IsPositive, IsString, Min, MinLength } from "class-validator"

export class CreatePresupuestoDto {

    @IsInt()
    @IsPositive()
    @Min(1)
    Cantidad: number

    @IsInt()
    Disponible: number

    @IsInt()
    Gastado: number

    @IsMongoId()
    @IsString()
    Usuario: string


}
