import { IsEmail, IsNumber, IsOptional, IsString, Matches } from "class-validator"

export class CreateUserDto {

    @IsString()
    id: string

    @IsEmail()
    email: string

    @IsString()
    name: string

    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        {
            message: 'The password must have a Uppercase, lowercase letter and a number'
        }
    )
    password: string

    @IsString()
    address: string

    @IsString()
    phone: number

    @IsString()
    @IsOptional()
    country?: string

    @IsString()
    @IsOptional()
    city?: string
}