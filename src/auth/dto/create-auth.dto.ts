import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateAuthDto {
    @ApiProperty({
        type: String,
        description: 'The email of the user.',
        required: true
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        type: String,
        description: 'The password of the user.',
        required: true
    })
    @IsString()
    password: string;
}
