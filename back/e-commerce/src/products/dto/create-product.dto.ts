/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @ApiProperty({
        type: String,
        description: 'Name of the product',
        required: true
    })
    @IsString()
    name: string;

    @ApiProperty({
        type: String,
        description: 'Description of the product',
        required: true
    })
    @IsString()
    description: string;

    @ApiProperty({
        type: String,
        description: 'Price of the product',
        required: true
    })
    @IsNumber()
    price: number;


    @ApiProperty({
        type: String,
        description: 'Stock of the product',
        required: true
    })
    @IsNumber()
    stock: number;

    @ApiProperty({
        type: String,
        description: 'Type product of the products',
        required: true
    })
    @IsString()
    product: string;

    @ApiProperty({
        type: String,
        description: 'ImgUrl of the product',
        required: true
    })
    @IsString()
    imgUrl: string;
}
