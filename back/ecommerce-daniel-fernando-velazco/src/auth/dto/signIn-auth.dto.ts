import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignInAuthDto {

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    constructor(partial: Partial<SignInAuthDto>) {
        Object.assign(this, partial);
    }
}