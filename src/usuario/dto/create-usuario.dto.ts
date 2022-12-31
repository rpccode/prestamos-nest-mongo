import { IsBoolean, IsString, Min } from 'class-validator';
export class CreateUsuarioDto {

   @IsString()
   @Min(1)
    Nombre: string

    @IsString()
    @Min(6)
    Password: string
 
    @IsString()
    @Min(1)
    Email: string

    @IsString()
    @Min(1)
    Telefono: string

    @IsString()
    @Min(1)
    Web: string

    @IsString()
   @Min(1)
    Token: string

    @IsBoolean()
    Confirmado: boolean


}
