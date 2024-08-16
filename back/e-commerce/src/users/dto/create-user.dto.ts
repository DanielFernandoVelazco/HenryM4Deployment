/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        type: String,
        description: 'Name of the user',
        required: true
    })
    @MaxLength(80)
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        type: String,
        description: 'Name of the Email',
        required: true
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        type: String,
        description: 'Name of the password',
        required: true
    })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/, {
        message: 'La contraseña debe contener al menos una letra mayúscula, un número, un caracter especial y debe tener entre 8 y 15 caracteres'
    })
    password: string;

    @ApiProperty({
        type: String,
        description: 'Name of the adress',
        required: true
    })
    @IsString()
    address: string;

    @ApiProperty({
        type: String,
        description: 'Number of the phone',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    phone: string;

    @ApiProperty({
        type: String,
        description: 'Name of the country',
        required: false
    })
    @IsString()
    @IsOptional()
    country?: string;

    @ApiProperty({
        type: String,
        description: 'Name of the city',
        required: false
    })
    @IsString()
    @IsOptional()
    city?: string;

    //@IsString()
    //@IsOptional()
    //createdAt: string;
}

