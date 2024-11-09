import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Matches, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {

    @ApiProperty({
        type: String,
        description: 'The id of the user',
        required: true
    })
    @IsString()
    id: string;

    @ApiProperty({
        type: String,
        description: 'The email of the user',
        required: true
    })
    @IsEmail({}, { message: 'The email must be in a valid format.' })
    @IsNotEmpty({ message: 'Email is required.' })
    @IsEmail()
    email: string

    @ApiProperty({
        type: String,
        description: 'The name of the user',
        required: true
    })
    @IsString()
    @IsNotEmpty({ message: 'Name is required.' })
    @MinLength(3, { message: 'The name must be at least 3 characters.' })
    @MaxLength(80, { message: 'The name must not exceed 80 characters.' })
    name: string

    @ApiProperty({
        type: String,
        description: 'The password of the user',
        required: true
    })
    @IsString()
    @MinLength(8, { message: 'The password must be at least 8 characters.' })
    @MaxLength(15, { message: 'The password must not exceed 15 characters.' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, {
        message: 'The password must contain at least one lowercase letter, one uppercase letter, one number and one special character (!@#$%^&*)'
    })
    password: string;

    @ApiProperty({
        type: String,
        description: 'The address of the user',
        required: true
    })
    @IsString()
    @IsNotEmpty({ message: 'Address is required.' })
    @MinLength(3, { message: 'The address must be at least 3 characters.' })
    @MaxLength(80, { message: 'The address must not exceed 80 characters.' })
    address: string

    @ApiProperty({
        type: Number,
        description: 'The phone number of the user',
        required: true
    })
    @IsNumber({}, { message: 'The phone number must be a valid number.' })
    @IsNotEmpty({ message: 'Phone number is required.' })
    phone: number

    @ApiProperty({
        type: String,
        description: 'The country of the user',
        required: false
    })
    @IsString()
    @IsOptional()
    @MinLength(5, { message: 'The country must be at least 5 characters.' })
    @MaxLength(20, { message: 'The country must not exceed 20 characters.' })
    country?: string

    @ApiProperty({
        type: String,
        description: 'The city of the user',
        required: false
    })
    @IsString()
    @IsOptional()
    @MinLength(5, { message: 'The city must be at least 5 characters.' })
    @MaxLength(20, { message: 'The city must not exceed 20 characters.' })
    city?: string
}