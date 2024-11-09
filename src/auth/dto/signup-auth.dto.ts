import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Matches, MaxLength, MinLength } from "class-validator"

export class SignUpAuthDto {

    @ApiProperty({
        type: String,
        description: 'The id of the user, asigned by the database',
        required: true
    })
    @IsString()
    @IsUUID('4', { message: 'The userId must be a valid UUID.' })
    @IsNotEmpty({ message: 'The userId is required.' })
    id: string;

    @ApiProperty({
        type: String,
        description: 'The email of the user, the email must be in a valid format',
        required: true
    })
    @IsEmail({}, { message: 'The email must be in a valid format.' })
    @IsNotEmpty({ message: 'Email is required.' })
    @IsEmail()
    email: string

    @ApiProperty({
        type: String,
        description: 'The name of the user, min 3 characters, max 80 characters',
        required: true
    })
    @IsString()
    @IsNotEmpty({ message: 'Name is required.' })
    @MinLength(3, { message: 'The name must be at least 3 characters.' })
    @MaxLength(80, { message: 'The name must not exceed 80 characters.' })
    name: string

    @ApiProperty({
        type: String,
        description: 'The password of the user, min 8 characters, max 15 characters, must contain at least one lowercase letter, one uppercase letter, one number and one special character (!@#$%^&*)',
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
        description: 'The password confirmation of the user.',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    passwordConfirm: string

    @ApiProperty({
        type: String,
        description: 'The address of the user, min 3 characters, max 80 characters',
        required: true
    })
    @IsString()
    @IsNotEmpty({ message: 'Address is required.' })
    @MinLength(3, { message: 'The address must be at least 3 characters.' })
    @MaxLength(80, { message: 'The address must not exceed 80 characters.' })
    address: string

    @ApiProperty({
        type: Number,
        description: 'The phone number of the user, must be a valid number',
        required: true
    })
    @IsNumber({}, { message: 'The phone number must be a valid number.' })
    @IsNotEmpty({ message: 'Phone number is required.' })
    phone: number

    @ApiProperty({
        type: String,
        description: 'The country of the user, min 5 characters, max 20 characters',
        required: false
    })
    @IsString()
    @IsOptional()
    @MinLength(5, { message: 'The country must be at least 5 characters.' })
    @MaxLength(20, { message: 'The country must not exceed 20 characters.' })
    country?: string

    @ApiProperty({
        type: String,
        description: 'The city of the user, min 5 characters, max 20 characters',
        required: false
    })
    @IsString()
    @IsOptional()
    @MinLength(5, { message: 'The city must be at least 5 characters.' })
    @MaxLength(20, { message: 'The city must not exceed 20 characters.' })
    city?: string

    constructor(partial: Partial<SignUpAuthDto>) {
        Object.assign(this, partial)
    }
}