/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export interface ProductId {
    id: string
}

export class CreateOrderDto {
    @ApiProperty({
        type: String,
        description: 'UserId of the order',
        required: true
    })
    @IsString()
    userId: string;

    @ApiProperty({
        type: String,
        description: 'Products of the order',
        required: true
    })
    @IsArray()
    products: Array<ProductId>;
}
