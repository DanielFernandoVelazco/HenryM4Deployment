import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsNotEmpty, IsString, IsUUID } from "class-validator";

export interface ProductId {
    id: string
}

export class CreateOrderDto {

    @ApiProperty({
        type: String,
        description: 'The order id, asigned by the database',
        required: true
    })
    @IsString()
    @IsUUID('4', { message: 'The userId must be a valid UUID.' })
    @IsNotEmpty({ message: 'The userId is required.' })
    userId: string;

    @ApiProperty({
        type: Array,
        description: 'The products of the order, asigned by the database',
        required: true
    })
    @IsArray({ message: 'Products must be an array.' })
    @ArrayMinSize(1, { message: 'There must be at least one product in the order.' })
    products: ProductId[];
}