/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class SignInAuthDto {
    @ApiProperty({
        type: String,
        description: 'Name of the Email',
        required: true
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        type: String,
        description: 'Name of the password',
        required: true
    })
    @IsNotEmpty()
    password: string;

    constructor(partial: Partial<SignInAuthDto>) {
        Object.assign(this, partial);
    }
}