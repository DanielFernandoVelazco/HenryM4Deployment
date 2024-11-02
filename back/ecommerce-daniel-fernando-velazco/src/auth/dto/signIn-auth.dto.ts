import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignInAuthDto {

    @ApiProperty({
        type: String,
        description: 'The email of the user.',
        required: true
    })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        type: String,
        description: 'The password of the user.',
        required: true
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    constructor(partial: Partial<SignInAuthDto>) {
        Object.assign(this, partial);
    }
}