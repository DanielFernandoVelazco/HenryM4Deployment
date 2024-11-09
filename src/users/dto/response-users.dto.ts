import { ApiProperty } from "@nestjs/swagger";

export class UserResponseDto {
    @ApiProperty({
        type: String,
        description: 'The id of the user, asigned by the database',
        required: true
    })
    id: string;

    @ApiProperty({
        type: String,
        description: 'The email of the user.',
        required: true
    })
    email: string;

    @ApiProperty({
        type: String,
        description: 'The name of the user.',
        required: true
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'The password of the user.',
        required: true
    })
    password: string;

    @ApiProperty({
        type: String,
        description: 'The address of the user.',
        required: true
    })
    address: string;

    @ApiProperty({
        type: Number,
        description: 'The phone of the user.',
        required: true
    })
    phone: number;

    @ApiProperty({
        type: String,
        description: 'The country of the user.',
        required: false
    })
    country?: string;

    @ApiProperty({
        type: String,
        description: 'The city of the user.',
        required: false
    })
    city?: string;

    constructor(partial: Partial<UserResponseDto>) {
        const { id, email, name, password, address, phone, country, city } = partial

        this.id = id
        this.email = email
        this.name = name
        this.password = password
        this.address = address
        this.phone = phone
        this.country = country
        this.city = city
    }
}