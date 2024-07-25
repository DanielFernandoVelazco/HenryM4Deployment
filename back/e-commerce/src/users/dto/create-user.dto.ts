/* eslint-disable prettier/prettier */
import { IsEmail, IsOptional, IsString, Matches } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;
    @IsEmail()
    email: string;

    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/, {
        message: 'La contraseña debe contener al menos una letra mayúscula, un número, un caracter especial y debe tener entre 8 y 15 caracteres'
    })
    password: string;

    @IsString()
    address: string;

    @IsString()
    phone: string;

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @IsOptional()
    city?: string;
}
