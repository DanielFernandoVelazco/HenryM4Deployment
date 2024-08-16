/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class ProductResponseDto {
    @ApiProperty({
        type: String,
        description: 'Name of the product',
        required: true
    })
    name: string;

    @ApiProperty({
        type: String,
        description: 'Description of the product',
        required: true
    })
    description: string;

    @ApiProperty({
        type: String,
        description: 'Price of the product',
        required: true
    })
    price: number;

    @ApiProperty({
        type: String,
        description: 'Stock of the product',
        required: true
    })
    stock: number;

    @ApiProperty({
        type: String,
        description: 'Type product of the products',
        required: true
    })
    product: string;

    @ApiProperty({
        type: String,
        description: 'ImgUrl of the product',
        required: true
    })
    imgUrl: string;

    constructor(partial: Partial<ProductResponseDto>) {
        const { name, description, price, stock, product, imgUrl } = partial;

        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.product = product;
        this.imgUrl = imgUrl;
    }
}