import { ApiProperty } from "@nestjs/swagger"

export class ProductResponseDto {
    @ApiProperty({
        type: String,
        description: 'The id of the product, asigned by the database',
        required: true
    })
    id: string

    @ApiProperty({
        type: String,
        description: 'The name of the product',
        required: true
    })
    name: string

    @ApiProperty({
        type: String,
        description: 'The description of the product',
        required: true
    })
    description: string

    @ApiProperty({
        type: Number,
        description: 'The price of the product',
        required: true
    })
    price: number

    @ApiProperty({
        type: Number,
        description: 'The stock of the product',
        required: true
    })
    stock: number

    @ApiProperty({
        type: String,
        description: 'The image url of the product',
        required: true
    })
    imgUrl: string

    constructor(partial: Partial<ProductResponseDto>) {
        const { id, name, description, price, stock, imgUrl } = partial
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.stock = stock
        this.imgUrl = imgUrl
    }
}