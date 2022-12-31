import { IsInt, IsMongoId, IsPositive, IsString, Min, MinLength } from "class-validator"


export class CreateGastoDto {

    @IsString()
    @MinLength(1)
    Nombre: string
    
    @IsInt()
    @IsPositive()
    @Min(1)
    Cantidad: number
    
    @IsString()
    @Min(1)
    Categoria: string

    @IsMongoId()
    @IsString()
    PresupuestoID: string


}
