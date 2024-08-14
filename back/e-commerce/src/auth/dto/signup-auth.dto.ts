/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class SignUpAuthDto {
    @MaxLength(80)
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/, {
        message: 'La contraseña debe contener al menos una letra mayúscula, un número, un caracter especial y debe tener entre 8 y 15 caracteres'
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    passwordConfirm: string;

    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @IsOptional()
    city?: string;

    constructor(partial: Partial<SignUpAuthDto>) {
        Object.assign(this, partial);
    }

    //@IsString()
    //@IsOptional()
    //createdAt: string;
}

